import React from "react";
import PropTypes from "prop-types";
import "./HomeHalf.scss";
import HalfTitles from "../HalfTitles/HalfTitles.jsx";
import HalfContent from "../HalfContent/HalfContent.jsx";

export const HomeHalf = props => {
  const chosenState = props.chosen ? "opened" : "closed";

  return (
    <div className={`home-half home-half-${props.section} ${chosenState}`}>
      <div className={`home-overlay home-overlay-${props.section}`} />
      {props.section === "newest" && <HalfTitles />}
      <HalfContent section={props.section} />
    </div>
  );
};

HomeHalf.propTypes = {
  section: PropTypes.string.isRequired,
  chosen: PropTypes.bool
};

HomeHalf.defaultProps = {
  chosen: false
};

export default HomeHalf;
