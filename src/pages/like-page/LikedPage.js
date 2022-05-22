import axios from "axios";
import { RemoveCard, Sidebar, VideoCard } from "component";
import { useVideo } from "context/videoContext";
import { useLike } from "context/videoLikeContext";
import React, { useEffect, useState } from "react";

export const LikedPage = () => {
  const { likedVideo,getLikes, removeLike } = useLike()
  useEffect(() => {
    getLikes();
  }, []);
  return (
    <>
      <div className="video-listing-container">
        <Sidebar />

        <div className="videocard-list">
          {likedVideo.map((videos) => (
            <RemoveCard
              key={videos._id}
              removeFn={removeLike}
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
    </>
  );
};
