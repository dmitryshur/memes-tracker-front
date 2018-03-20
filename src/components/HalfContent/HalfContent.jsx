import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setChosenSection } from '../../actions/visuals/visuals';
import './HalfContent.scss';

export const HalfContent = props => {
  // change the state indicating which section is now opened
  const onContentClick = event => {
    props.setChosenSection(event.currentTarget.dataset.id);
  };

  return (
    <div
      className={`half-content half-content-${props.section}`}
      data-id={props.section}
      onClick={onContentClick}
      onKeyPress={onContentClick}
      role="button"
      tabIndex="0"
    >
      <div className="half-content-logo" />
      <div className="half-content-title">
        {props.section === 'newest' ? 'newest' : 'liked'}
      </div>
      <hr />
      <div className="half-content-subtitle">
        {props.section === 'newest' ? 'Most recent memes' : 'Most liked memes'}
      </div>
    </div>
  );
};

HalfContent.propTypes = {
  section: PropTypes.string.isRequired,
  setChosenSection: PropTypes.func,
};

HalfContent.defaultProps = {
  setChosenSection: () => 'newest',
};

const mapDispatchToProps = dispatch => ({
  setChosenSection: section => dispatch(setChosenSection(section)),
});

export default connect(undefined, mapDispatchToProps)(HalfContent);
