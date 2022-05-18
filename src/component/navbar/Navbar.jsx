import { useVideo } from "context/videoContext";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LoginIcon from '@mui/icons-material/Login';

export const Navbar = () => {
  const {user} = useVideo();
  return (
    <>
      <div className="navbar-container">
        <div className="home-heading">
          <i className="sidebar-icon fa fa-bars"></i>
          <Link to="/" className="head-link">QuickTube</Link>
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
          {user? <Link to="/profile" className="login">
            <i className="fa fa-user"></i>
            
          </Link> : <Link to="/login" className="login">
            <LoginIcon/>
          </Link>}
         
         
        </div>
      </div>
    </>
  );
};
