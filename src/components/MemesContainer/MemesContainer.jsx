import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getChosenSection } from "../../selectors/visuals/visuals";
import "./MemesContainer.scss";

export const MemesContainer = props => {
  const matchingSectionOpened = props.chosenSection === props.section;
  const classList = `memes-container memes-container-${props.section} ${
    matchingSectionOpened ? "opened" : "closed"
  }`;
  return <div className={classList} />;
};

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
