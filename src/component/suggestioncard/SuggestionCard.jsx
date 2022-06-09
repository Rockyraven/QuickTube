import { useVideo } from "context/videoContext";
import React from "react";
import { Link } from "react-router-dom";
import './suggestion.css'
import axios from "axios";

export const SuggestionCard = ({
  thumbnail,
  chanel_pic,
  title,
  creator,
  views,
  _id,
  video
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
      <div className="suggestion-card-wrapper" onClick={HistoryVideo}>
        <Link to={`/watch/${_id}`}>
          <div className="suggest-card">
            <div className="suggestion-card-image">
              <img src={thumbnail} alt="video thumbnail" />
            </div>
            <div className="video-title-wrapper">
              <div className="video-image">
                <img src={chanel_pic} alt="" />
              </div>
              <div className="video-title">
                <p className="description">{title}</p>
                <p className="view-text">{creator}</p>
                <p className="view-text">{views} view</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
