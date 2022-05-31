import React from "react";
import { RemoveCard, Sidebar } from "component";
import { useEffect } from "react";
import { useLibrary } from "context/libraryContext";
import './library.css'

export const Library = () => {
  const { getLibrary, library, getLibraryVideos, getLibraryVideo } = useLibrary();
  useEffect(() => {
    getLibrary();
  }, []);
  console.log(getLibraryVideo.videos)
  return (
    <>
      <div className="video-listing-container">
        <Sidebar />

        <div className="playlist-lists">
          {library.map((item) => (
            <div className="playlists" onClick={() => getLibraryVideos(item._id)} key={item._id}>           
              {item.title}
            </div>            
          ))}
        </div>
        <div className="videocard-list">
          {getLibraryVideo.videos.map((videos) => (
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
    </>
  );
};
