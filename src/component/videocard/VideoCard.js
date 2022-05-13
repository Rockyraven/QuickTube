import React from "react";
import "./videocard.css";

export const VideoCard = ({thumbnail, chanel_pic, title, creator, views}) => {
  return (
    <>
      <div className="video-card">
        <div className="video-image">
          <img src={thumbnail} alt="video thumbnail" />
        </div>
        <div className="video-title-wrapper">
          <div className="video-image">
            <img src={chanel_pic} alt="" />
          </div>
          <div className="video-title">
            <p className="description">
             {title}
            </p>
            <p className="creater">{creator}</p>
            <p className="view">{views} view</p>
          </div>
        </div>
      </div>
    </>
  );
};
