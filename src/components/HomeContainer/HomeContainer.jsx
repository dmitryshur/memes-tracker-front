import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./HomeContainer.scss";
import { getChosenSection } from "../../selectors/visuals/visuals";
import HomeHalf from "../HomeHalf/HomeHalf.jsx";

export const HomeContainer = props => (
  <div
    className={
        props.chosenSection === ""
          ? "home-container"
          : `home-container ${props.chosenSection}-opened`
      }
  >
    <div className="sliding-bg" />
    <HomeHalf section="newest" chosen={props.chosenSection === "newest"} />
    <HomeHalf section="liked" chosen={props.chosenSection === "liked"} />
  </div>
  );

const mapStateToProps = state => ({
  chosenSection: getChosenSection(state)
});

HomeContainer.propTypes = {
  chosenSection: PropTypes.string
};

HomeContainer.defaultProps = {
  chosenSection: ""
};

export default connect(mapStateToProps)(HomeContainer);
