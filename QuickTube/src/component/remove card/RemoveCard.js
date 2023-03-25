import React from "react";
import { Link } from "react-router-dom";
import "../videocard/videocard.css";
import axios from "axios";
import { useVideo } from "context/videoContext";

export const RemoveCard = ({
  thumbnail,
  chanel_pic,
  title,
  creator,
  views,
  _id,
  removeFn,
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
      <div className="video-card" >
        <Link to={`/watch/${_id}`} >
          
          <div className="video-image" onClick={HistoryVideo}>
            <img src={thumbnail} alt="video thumbnail" />
          </div>
        </Link>
          <div className="video-title-wrapper" >
            <div className="video-image" onClick={HistoryVideo}>
              <img src={chanel_pic} alt="" />
            </div>
            <div className="video-title">
              <p className="description">{title}</p>
              <p className="creater">{creator}</p>
              <p className="view">{views} view</p>
            </div>
            
            <p className="delete-button" onClick={() => removeFn(_id)}>
              {" "}
              <i className="fa fa-trash"></i>
            </p>
          </div>
          
      </div>
    </>
  );
};
