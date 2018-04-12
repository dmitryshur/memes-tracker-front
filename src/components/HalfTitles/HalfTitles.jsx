import React from 'react';
import PropTypes from "prop-types";
import './HalfTitles.scss';

const HalfTitles = (props) => {
  const classList = props.chosen ? 'half-titles hidden' : 'half-titles';

  return (
    <div className={classList}>
      <div className="main-title">
        memes<br />tracker
      </div>
      <div className="subtitle">
        Your constant source of fun
      </div>
    </div>
  );
};

HalfTitles.propTypes = {
  chosen: PropTypes.bool
};

HalfTitles.defaultProps = {
  chosen: false
};

export default HalfTitles;
