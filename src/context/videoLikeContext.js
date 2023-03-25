import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useVideo } from "./videoContext";


const videoLikeContext = createContext();

const LikeProvider = ({children}) => {

  const { user } = useVideo();
  
  const [likedVideo, setLikedVideo] = useState([]);


  const getLikes = async () => {
    try {
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: user.encodedToken,
        },
      });
      console.log(response.data.likes)
      setLikedVideo(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };
 
  const removeLike = async (videoID) => {
    try {
      const response = await axios.delete(`/api/user/likes/${videoID}`, {
        headers: {
          'authorization': user.encodedToken
        }
      });
      setLikedVideo(response.data.likes)
      toast.error("Video Removed");
    }
    catch(error){
      console.log(error)
    }
  }
 
    return(
        <videoLikeContext.Provider value={{ removeLike, likedVideo, getLikes }}>
            {children}
        </videoLikeContext.Provider>
    )
}

const useLike = () => useContext(videoLikeContext);

export { LikeProvider, useLike }