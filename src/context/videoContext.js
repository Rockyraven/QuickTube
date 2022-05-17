import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const videoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoData = async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideoList(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    };
    getVideoData();
  }, []);

  return (
    <videoContext.Provider value={{ videoList }}>
      {children}
    </videoContext.Provider>
  );
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
