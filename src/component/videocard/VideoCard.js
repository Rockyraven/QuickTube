import React from "react";
import { Link } from "react-router-dom";
import "./videocard.css";

export const VideoCard = ({
  thumbnail,
  chanel_pic,
  title,
  creator,
  views,
  _id,
}) => {
  return (
    <>
      <div className="video-card">
        <Link to={`/watch/${_id}`}>
          <div className="video-image">
            <img src={thumbnail} alt="video thumbnail" />
          </div>
          <div className="video-title-wrapper">
            <div className="video-image">
              <img src={chanel_pic} alt="video card" />
            </div>
            <div className="video-title">
              <p className="description">{title}</p>
              <div className="view-text">
                <span>{views}</span>{" "}
                <span>{creator}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
