import { RemoveCard, Sidebar } from "component";
import { Link } from "react-router-dom";
import { useLike } from "context/videoLikeContext";
import React, { useEffect } from "react";
import "./likepage.css";

export const LikedPage = () => {
  const { likedVideo, getLikes, removeLike } = useLike();
  useEffect(() => {
    getLikes();
  }, []);
  return (
    <>
      <div className="video-listing-container">
        <Sidebar />
        {likedVideo.length === 0 ? (
            <div className="login-page-container">
          <div className="no-video-present">
              <h1 className="title-text"> There is no liked Video 😢 </h1>
              <Link to="/" className="explore-button">
                Explore Video
              </Link>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
};
