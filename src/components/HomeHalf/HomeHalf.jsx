import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetSections } from "../../actions/visuals/visuals";
import "./HomeHalf.scss";
import HalfTitles from "../HalfTitles/HalfTitles";
import HalfContent from "../HalfContent/HalfContent";

export const HomeHalf = props => {
  const chosenState = props.chosen ? "opened" : "closed";

  const handleArrowClick = () => {
    props.resetSections();
  };

  return (
    <div className={`home-half home-half-${props.section} ${chosenState}`}>
      <div className={`home-overlay home-overlay-${props.section}`} />
      {props.section === "newest" && <HalfTitles chosen={props.chosen} />}
      <div
        className={`back-arrow back-arrow-${props.section}`}
        onClick={handleArrowClick}
        role="button"
        onKeyPress={handleArrowClick}
        tabIndex="0"
      />
      <HalfContent section={props.section} openState={chosenState} />
    </div>
  );
};

HomeHalf.propTypes = {
  section: PropTypes.string.isRequired,
  chosen: PropTypes.bool,
  resetSections: PropTypes.func
};

HomeHalf.defaultProps = {
  chosen: false,
  resetSections: () => {}
};

const mapDispatchToProps = dispatch => ({
  resetSections: () => dispatch(resetSections())
});

export default connect(undefined, mapDispatchToProps)(HomeHalf);
