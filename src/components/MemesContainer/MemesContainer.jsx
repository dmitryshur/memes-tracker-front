import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getChosenSection } from "../../selectors/visuals/visuals";
import "./MemesContainer.scss";

export const MemesContainer = props => (
  <div
    className={
      props.chosenSection === ""
        ? "memes-container"
        : `memes-container memes-container-${props.chosenSection}`
    }
  />
);

const mapStateToProps = state => ({
  chosenSection: getChosenSection(state)
});

MemesContainer.propTypes = {
  chosenSection: PropTypes.string
};

MemesContainer.defaultProps = {
  chosenSection: ""
};

export default connect(mapStateToProps)(MemesContainer);
