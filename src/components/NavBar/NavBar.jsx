import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleNavbar } from "../../actions/visuals/visuals";
import "./NavBar.scss";

export const NavBar = props => {
  const handleButtonClick = event => {
    event.stopPropagation();
    props.toggleNavbar();
  };

  // close the navbar
  const handleOverlayClick = event => {
    event.stopPropagation();
    props.toggleNavbar();
  };

  return (
    <React.Fragment>
      <div
        className="cn-button"
        id="cn-button"
        onClick={handleButtonClick}
        onKeyPress={handleButtonClick}
        role="button"
        tabIndex="0"
      >
        {props.navbarStatus === "closed" ? "+" : "-"}
      </div>
      <div
        id="cn-wrapper"
        className={props.navbarStatus === "closed" ? "cn-wrapper" : "cn-wrapper opened-nav"}
      >
        <ul>
          <li>
            <a href="#">
              <span className="fas fa-user-plus" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fas fa-home" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fas fa-star" />
            </a>
          </li>
        </ul>
      </div>
      <div
        id="cn-overlay"
        className={props.navbarStatus === "closed" ? "cn-overlay" : "cn-overlay on-overlay"}
        onClick={handleOverlayClick}
        onKeyPress={handleOverlayClick}
        role="button"
        tabIndex="0"
      />
    </React.Fragment>
  );
};

NavBar.propTypes = {
  navbarStatus: PropTypes.string,
  toggleNavbar: PropTypes.func
};

NavBar.defaultProps = {
  navbarStatus: "closed",
  toggleNavbar: () => {}
};

const mapDispatchToProps = dispatch => ({
  toggleNavbar: section => dispatch(toggleNavbar(section))
});

export default connect(undefined, mapDispatchToProps)(NavBar);
