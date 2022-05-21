import { useVideo } from "context/videoContext";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import axios from "axios";

export const Player = () => {
  const { videoList, user } = useVideo();
  const { videoListID } = useParams();
  const isVideoExist = videoList.find((ele) => ele._id === videoListID);
  const likeVideo = async() => {
    try {
      const response = await axios.post("/api/user/likes",{video: isVideoExist},{
        headers: {
          'authorization': user.encodedToken
        }
      })
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${isVideoExist.video}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p className="video-title"> {isVideoExist.title}</p>
      <div className="view-wrapper">
        <div className="creator-image">
          <img src={isVideoExist.chanel_pic} alt="creater-image" />
        </div>
        <div className="creator-view">
          <p className="title">{isVideoExist.creator}</p>
          <p className="view">{isVideoExist.views}</p>
        </div>
        <div className="watch-link ">
          <Link to="#">
            <div className="like-button link" onClick={likeVideo}>
              {" "}
              <ThumbUpOffAltOutlinedIcon className="sidebar-symbol" />
              <p>LIKE</p>
            </div>
          </Link>
          <Link to="#">
            <div className="playlist-button link">
              {" "}
              <PlaylistAddOutlinedIcon />
              <p>SAVE TO PLAYLIST</p>
            </div>
          </Link>
          <Link to="#">
            <div className="watch-button link">
              {" "}
              <WatchLaterOutlinedIcon className="sidebar-symbol" />
              <p>WATCH LATER</p>
            </div>
          </Link>
        </div>
      </div>
      <p className="video-title">{isVideoExist.description}</p>
        
    </div>
  );
};
