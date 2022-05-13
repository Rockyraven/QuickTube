import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-container">
      <Link to="/home">
        <div>
          <i className="sidebar-symbol fa fa-home"></i>
          <p className="sidebar-subtitle">Home</p>
        </div>
      </Link>
      <Link to="/home">
        <div>
          <i className="sidebar-symbol fa fa-compass"></i>
          <p className="sidebar-subtitle">Explore</p>
        </div>
      </Link>
      <Link to="/home">
        <div>
          <i className="sidebar-symbol fa fa-compass"></i>
          <p className="sidebar-subtitle">Library</p>
        </div>
      </Link>
      <Link to="/home">
        <div>
          <i className="fa fa-history"></i>
          <p className="sidebar-subtitle">History</p>
        </div>
      </Link>
      <Link to="/home">
        <div>
          <i className="sidebar-symbol fa fa-clock"></i>
          <p className="sidebar-subtitle">Watch Later</p>
        </div>
      </Link>
      <Link to="/home">
        <div>
          <i className="sidebar-symbol fa fa-thumbs-up"></i>
          <p className="sidebar-subtitle">Liked Videos</p>
        </div>
      </Link>
    </div>
    </div>
  );
};
