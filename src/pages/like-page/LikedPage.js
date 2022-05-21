import axios from 'axios'
import { RemoveCard, Sidebar, VideoCard } from 'component'
import { useVideo } from 'context/videoContext'
import React, { useEffect, useState } from 'react'

export const LikedPage = () => {
  const [ likedVideo, setLikedVideo ] = useState([]);
  const { user } = useVideo();
  useEffect(()=>{
    getLikes()
  },[])
  
  const getLikes = async() => {
    try {
      const response = await axios.get("/api/user/likes", {
        headers: {
          'authorization': user.encodedToken
        }
      });
      setLikedVideo(response.data.likes);
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
     <div className="video-listing-container">
        <Sidebar />
        

          <div className="videocard-list">
            
    {likedVideo.map((videos) => (
      
      
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
  )
}
