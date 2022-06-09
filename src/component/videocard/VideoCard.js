import { useVideo } from "context/videoContext";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./videocard.css";
import axios from "axios";

export const VideoCard = ({
  thumbnail,
  chanel_pic,
  title,
  creator,
  views,
  _id,
  video,
}) => {
  const { user } = useVideo();

  const HistoryVideo = async () => {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="video-card" onClick={HistoryVideo}>
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
                <span>{views}</span> <span>{creator}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
