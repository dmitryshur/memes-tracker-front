import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { resetSections } from '../../actions/visuals/visuals';
import "./HomeHalf.scss";
import HalfTitles from "../HalfTitles/HalfTitles.jsx";
import HalfContent from "../HalfContent/HalfContent.jsx";

export const HomeHalf = props => {
  const chosenState = props.chosen ? "opened" : "closed";

  const handleArrowClick = () => {
    props.resetSections();
  };

  return (
    <div className={`home-half home-half-${props.section} ${chosenState}`}>
      <div className={`home-overlay home-overlay-${props.section}`} />
      {props.section === "newest" && <HalfTitles />}
      <div
        className={`back-arrow back-arrow-${props.section}`}
        onClick={handleArrowClick}
        role="button"
        onKeyPress={handleArrowClick}
        tabIndex="0"
      />
      <HalfContent section={props.section} />
    </div>
  );
};

HomeHalf.propTypes = {
  section: PropTypes.string.isRequired,
  chosen: PropTypes.bool,
  resetSections: PropTypes.func.isRequired
};

HomeHalf.defaultProps = {
  chosen: false,
};

const mapDispatchToProps = dispatch => ({
  resetSections: () => dispatch(resetSections()),
});

export default connect(undefined, mapDispatchToProps)(HomeHalf);
