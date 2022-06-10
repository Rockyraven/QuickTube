import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const videoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [filterVideo, setFilterVideo] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    setFilterVideo(videoList.sort(() => Math.random() - 0.5) );
  }, [videoList]);

  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  useEffect(() => {
    const getVideoData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/videos");
        setVideoList(response.data.videos);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    getVideoData();
  }, []);


  const allFilterVideo = () => {
    setFilterVideo(videoList);
  };
  const songFilterVideo = () => {
    setFilterVideo(videoList.filter((item) => item.categoryName === "song"));
  };
  const javaScriptFilterVideo = () => {
    setFilterVideo(
      videoList.filter((item) => item.categoryName === "JavaScript")
    );
  };
  const carFilterVideo = () => {
    setFilterVideo(
      videoList.filter((item) => item.categoryName === "Sports Car")
    );
  };
  const techFilterVideo = () => {
    setFilterVideo(videoList.filter((item) => item.categoryName === "Tech"));
  };

  return (
    <videoContext.Provider
      value={{
        videoList,
        user,
        setUser,
        filterVideo,
        songFilterVideo,
        javaScriptFilterVideo,
        carFilterVideo,
        techFilterVideo,
        allFilterVideo,
        isLoading
      }}
    >
      {children}
    </videoContext.Provider>
  );
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
