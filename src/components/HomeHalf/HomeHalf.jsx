import React from 'react';
import PropTypes from 'prop-types';
import './HomeHalf.scss';
import HalfTitles from '../HalfTitles/HalfTitles.jsx';

const HomeHalf = props => {
  return (
    <div className={`home-half home-half-${props.side}`}>
      <div className={`home-overlay home-overlay-${props.side}`} />
      {props.side === 'left' && <HalfTitles />}
    </div>
  );
};

HomeHalf.propTypes = {
  side: PropTypes.string,
};

HomeHalf.defaultProps = {
  side: 'left',
};

export default HomeHalf;
