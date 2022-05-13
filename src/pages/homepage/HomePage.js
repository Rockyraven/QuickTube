import { useVideo } from 'context/videoContext'
import React from 'react'
import { Sidebar, VideoCard } from '../../component'
import './homepage.css'


export const HomePage = () => {
  const {video} = useVideo();
  console.log(video);
  return (
    <>
    <div className="video-listing-container">

    <Sidebar/>
    {video.map(videos => <VideoCard key={videos._id} title={videos.title} views={videos.views} creator={videos.creator} chanel_pic={videos.chanel_pic} thumbnail={videos.thumbnail} />)}
    
   
    </div>
    
    </>
  )
}
