import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="home-heading">
          <i className="sidebar-icon fa fa-bars"></i>
          <Link to="/">QuickTube</Link>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input-box"
            placeholder=" Seach for latest video.."
          />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="login-section">
          <Link to="/login" className="login">
            <i className="fa fa-user"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
