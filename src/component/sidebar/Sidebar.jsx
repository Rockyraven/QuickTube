import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <Link to="/home">
          <div>
            <HomeOutlinedIcon className="sidebar-symbol " />
            <p className="sidebar-subtitle">Home</p>
          </div>
        </Link>
        <Link to="/home">
          <div>
            <ExploreOutlinedIcon className="sidebar-symbol " />
            <p className="sidebar-subtitle">Explore</p>
          </div>
        </Link>
        <Link to="/home">
          <div>
            <VideoLibraryOutlinedIcon className="sidebar-symbol " />
            <p className="sidebar-subtitle">Library</p>
          </div>
        </Link>
        <Link to="/home">
          <div>
            <RestoreOutlinedIcon className="sidebar-symbol" />
            <p className="sidebar-subtitle">History</p>
          </div>
        </Link>
        <Link to="/home">
          <div>
            <WatchLaterOutlinedIcon className="sidebar-symbol" />
            <p className="sidebar-subtitle">Watch Later</p>
          </div>
        </Link>
        <Link to="/home">
          <div>
            <ThumbUpOffAltOutlinedIcon className="sidebar-symbol" />
            <p className="sidebar-subtitle">Liked Videos</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
