import React, { useEffect } from "react";
import { RemoveCard, Sidebar, VideoCard } from "component";
import { useWatchLater } from "context/watchLatercontext";

export const WatchLater = () => {
  const { watchLater, getWatchLater } = useWatchLater();

  useEffect(()=>{
    getWatchLater()
  },[])

  return (
    <div className="video-listing-container">
      <Sidebar />

      <div className="videocard-list">
        {watchLater.map((videos) => (
          <RemoveCard
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
  );
};
