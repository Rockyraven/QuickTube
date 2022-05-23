import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
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
      setLikedVideo(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };
 

  const removeLike = async (videoID) => {
    try {
      console.log(videoID)
      const response = await axios.delete(`/api/user/likes/${videoID} `  ,{
        headers: {
          'authorization': user.encodedToken
        }
      });
      console.log(response)
      // setLikedVideo(prev=>prev.filter(item=> item._id !==response.data.likes[0]._id ))
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