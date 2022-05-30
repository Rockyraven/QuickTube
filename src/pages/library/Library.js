import React from 'react'
import { RemoveCard, Sidebar } from "component";
import { useEffect } from "react";
import { useLibrary } from 'context/libraryContext';

export const Library = () => {
 
  const { libraryVideo, getLibrary, library, getLibraryVideos } = useLibrary();
  useEffect(() => {
    getLibrary();
  }, []);
  return (
    <>
      <div className="video-listing-container">
        <Sidebar />

        <div className="videocard-list">
          {library.map(item=> <div  onClick={()=>getLibraryVideos(item._id)} key={item._id}>{item.title}</div>)}
        </div>
      </div>
      {/* wdbchwkd */}
    </>
  );
};
