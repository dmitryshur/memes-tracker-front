import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HomeContainer.scss';
import { getChosenSection, getNavbarStatus } from '../../selectors/visuals/visuals';
import HomeHalf from '../HomeHalf/HomeHalf';
import NavBar from '../NavBar/NavBar';

export const HomeContainer = props => (
  <div
    className={
      props.chosenSection === '' ? 'home-container' : `home-container ${props.chosenSection}-opened`
    }
  >
    <div className="sliding-bg" />
    <HomeHalf section="newest" chosen={props.chosenSection === 'newest'} />
    <HomeHalf section="liked" chosen={props.chosenSection === 'liked'} />
    <NavBar navbarStatus={props.navbarStatus} />
  </div>
);

const mapStateToProps = state => ({
  chosenSection: getChosenSection(state),
  navbarStatus: getNavbarStatus(state),
});

HomeContainer.propTypes = {
  chosenSection: PropTypes.string,
  navbarStatus: PropTypes.string,
};

HomeContainer.defaultProps = {
  chosenSection: '',
  navbarStatus: 'closed',
};

export default connect(mapStateToProps)(HomeContainer);
