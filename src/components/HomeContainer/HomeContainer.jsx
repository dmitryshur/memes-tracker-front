import React from 'react';
import './HomeContainer.scss';
import HomeHalf from '../HomeHalf/HomeHalf.jsx';

const HomeContainer = (() => {
  return (
    <div className="home-container">
      <div className="sliding-bg" />
      <HomeHalf side="left"/>
      <HomeHalf side="right"/>
    </div>
  );
});

export default HomeContainer;


