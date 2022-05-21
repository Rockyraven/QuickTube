import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useVideo } from "./videoContext";


const videoLikeContext = createContext();

const LikeProvider = ({children}) => {

  const { user } = useVideo();
  useEffect(()=>{
    removeLike()
  },[])

  const removeLike = async (videoID) => {
    try {
      console.log(videoID)
      const response = await axios.delete(`/api/user/likes/${videoID} `  ,{
        headers: {
          'authorization': user.encodedToken
        }
      });
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
  }
 
    return(
        <videoLikeContext.Provider value={{ removeLike }}>
            {children}
        </videoLikeContext.Provider>
    )
}

const useLike = () => useContext(videoLikeContext);

export { LikeProvider, useLike }