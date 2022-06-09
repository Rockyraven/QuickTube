import { useVideo } from "context/videoContext";
import React from "react";
import { Model, Sidebar, VideoCard } from "../../component";
import "./homepage.css";
import Chip from "@mui/material/Chip";

export const HomePage = () => {

  const { carFilterVideo, techFilterVideo, filterVideo, songFilterVideo, javaScriptFilterVideo } = useVideo();

  return (
    <>
 
      <div className="video-listing-container">
        <Sidebar />
        <div className="wrapping">
          <Chip label="JavaScript" variant="outlined" className="video-filter" style={{color: "white"}} onClick={javaScriptFilterVideo} />
          <Chip label="Song" variant="outlined" className="video-filter" style={{color: "white"}} onClick={songFilterVideo}/>
          <Chip label="Car" variant="outlined" className="video-filter" style={{color: "white"}} onClick={carFilterVideo}/>
          <Chip label="Tech" variant="outlined" className="video-filter" style={{color: "white"}} onClick={techFilterVideo}/>

          <div className="videocard-list">
            {filterVideo.map((videos) => (
              <VideoCard
                video={videos}
                key={videos._id}
                _id={videos._id}
                title={videos.title}
                views={videos.views}
                creator={videos.creator}
                chanel_pic={videos.chanel_pic}
                thumbnail={videos.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
