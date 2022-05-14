import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const videoContext = createContext();

const VideoProvider = ({children}) => {
    const [ video, setVideo ] = useState([]);

    //  useEffect(()=> {
    //     fetch("/api/videos")
    //     .then(res => res.json())
    //     .then(data => setVideo(data))
    //  },[])
     useEffect(async () => {
        try {
          const response = await axios.get("/api/videos");
          setVideo(response.data.videos);
        } catch (error) {
          console.log(error);
        }
      }, []);


    return(
        <videoContext.Provider value={{ video }} >
        {children}
    </videoContext.Provider>
    )
    
}

const useVideo = () => useContext(videoContext);

export {VideoProvider, useVideo}