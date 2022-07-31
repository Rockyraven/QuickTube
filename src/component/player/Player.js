import { useVideo } from "context/videoContext";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import axios from "axios";
import { useLibrary } from "context/libraryContext";
import { Model } from "component";
import { toast } from "react-toastify";
import './player.css'

export const Player = () => {
  const { videoList, user } = useVideo();
  const { display, setDisplay } = useLibrary();
  const { videoListID } = useParams();
  const isVideoExist = videoList.find((ele) => ele._id === videoListID);
  const likeVideo = async () => {
    try {
      console.log(isVideoExist)
      const response = await axios.post(
        "/api/user/likes",
        { video: isVideoExist },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
      );
      toast.success("Added in Liked Video")
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };
 

  const watchLater = async () => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video: isVideoExist },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
      );
      toast.success("Added in WatchLater Video")
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  return (
    <div>
      <iframe
      className="video-watch-card"
        src={`https://www.youtube.com/embed/${isVideoExist.video}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Model video={isVideoExist}/>
      <p className="video-title"> {isVideoExist.title}</p>
      <div className="view-wrapper">
        <div className="creator-image">
          <img src={isVideoExist.chanel_pic} alt="creater-image" />
        </div>
        <div className="creator-view">
          <p className="title">{isVideoExist.creator}</p>
          <p className="view">{isVideoExist.views}</p>
        </div>
      </div>
        <div className="watch-link ">
          <div className="like-button link" onClick={likeVideo}>
            {" "}
            <ThumbUpOffAltOutlinedIcon className="sidebar-symbol" />
            <p>LIKE</p>
          </div>

          <div className="playlist-button link" onClick={()=>setDisplay("flex")} >
            {" "}
            <PlaylistAddOutlinedIcon />
            <p>SAVE TO PLAYLIST</p>
          </div>

          <div className="watch-button link" onClick={watchLater}>
            {" "}
            <WatchLaterOutlinedIcon className="sidebar-symbol" />
            <p>WATCH LATER</p>
          </div>
        </div>
      <p className="video-title">{isVideoExist.description}</p>
    </div>
  );
};
