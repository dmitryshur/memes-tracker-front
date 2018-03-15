import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChosenSection } from '../../selectors/visuals/visuals';
import './HomeHalf.scss';
import HalfTitles from '../HalfTitles/HalfTitles.jsx';
import HalfContent from '../HalfContent/HalfContent.jsx';

const HomeHalf = props => {
  // when one section is opened, the other is closed except in the starting phase
  const halfState = props.section === props.chosenSection ? 'opened' : 'closed';

  return (
    <div className={`home-half home-half-${props.section} ${halfState}`}>
      <div className={`home-overlay home-overlay-${props.section}`} />
      {props.section === 'newest' && <HalfTitles />}
      <HalfContent section={props.section} />
    </div>
  );
};

HomeHalf.propTypes = {
  section: PropTypes.string.isRequired,
  chosenSection: PropTypes.string,
};

HomeHalf.defaultProps = {
  chosenSection: '',
};

const mapStateToProps = state => ({
  chosenSection: getChosenSection(state),
});

export default connect(mapStateToProps, undefined)(HomeHalf);
