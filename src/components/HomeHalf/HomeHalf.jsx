import React from 'react';
import PropTypes from 'prop-types';
import './HomeHalf.scss';
import HalfTitles from '../HalfTitles/HalfTitles.jsx';
import HalfContent from '../HalfContent/HalfContent.jsx';

const HomeHalf = props => {
  return (
    <div className={`home-half home-half-${props.side}`}>
      <div className={`home-overlay home-overlay-${props.side}`} />
      {props.side === 'left' && <HalfTitles />}
      <HalfContent side={props.side} />
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
