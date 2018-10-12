import React from "react";
import "./nav.css";
// import Logo from '../../Assets/logo.png';

const NavTabs = props => (
  <ul className="nav nav-tabs">
      {/* <div className="logo">
      <a><img src={Logo} alt="logo"></img></a>
      </div> */}
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("About")}
        className={
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
      >
        About
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Portfolio")}
        className={
          props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
        }
      >
        Portfolio
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>
  </ul>
);

export default NavTabs;
