import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const videoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

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
    <videoContext.Provider value={{ videoList, user, setUser }}>
      {children}
    </videoContext.Provider>
  );
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
