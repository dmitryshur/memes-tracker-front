import React from "react";
import PropTypes from "prop-types";
import { toggleNavbar } from "../../actions/visuals/visuals";
import "./NavBar.scss";
import { connect } from "react-redux";

export const NavBar = props => {
  const handleButtonClick = event => {
    event.stopPropagation();
    props.toggleNavbar();
  };

  const handleOverlayClick = () => {};

  return (
    <React.Fragment>
      <div className="cn-button" id="cn-button" onClick={handleButtonClick}>
        {props.navbarStatus === "closed" ? "+" : "-"}
      </div>
      <div
        id="cn-wrapper"
        className={props.navbarStatus === "closed" ? "cn-wrapper" : "cn-wrapper opened-nav"}
      >
        <ul>
          <li>
            <a href="#">
              <span className="icon-picture" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-headphones" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-home" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-facetime-video" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-envelope-alt" />
            </a>
          </li>
        </ul>
      </div>
      <div
        id="cn-overlay"
        className={props.navbarStatus === "closed" ? "cn-overlay" : "cn-overlay on-overlay"}
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleNavbar: section => dispatch(toggleNavbar(section))
});

export default connect(undefined, mapDispatchToProps)(NavBar);
