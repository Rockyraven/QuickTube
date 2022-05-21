import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useVideo } from "./videoContext";


const videoLikeContext = createContext();

const LikeProvider = ({children}) => {

    const [ likedVideo, setLikedVideo ] = useState([]);
 
  const { user } = useVideo();
  useEffect(()=>{
    removeLike()
  },[])

  const removeLike = async () => {
    try {
      const response = await axios.delete("/api/user/likes/:videoID",{
        headers: {
          'authorization': user.encodedToken
        }
      });
      console.log(response.data.likes)
    }
    catch(error){
      console.log(error)
    }
  }
 
    return(
        <videoLikeContext.Provider value={{likedVideo, removeLike}}>
            {children}
        </videoLikeContext.Provider>
    )
}

const useLike = () => useContext(videoLikeContext);

export { LikeProvider, useLike }