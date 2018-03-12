import React from 'react';
import PropTypes from 'prop-types';
import './HalfContent.scss';

const HalfContent = props => {
  return (
    <div className={`half-content half-content-${props.side}`}>
      <div className='half-content-logo' />
      <div className='half-content-title'>
        {props.side === 'left' ? 'newest' : 'liked'}
      </div>
      <hr />
      <div className='half-content-subtitle'>
        {props.side === 'left' ? 'Most recent memes' : 'Most liked memes'}
      </div>
    </div>
  );
};

HalfContent.propTypes = {
  side: PropTypes.string,
};

HalfContent.defaultProps = {
};

export default HalfContent;
