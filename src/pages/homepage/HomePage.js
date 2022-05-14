import { useVideo } from 'context/videoContext'
import React from 'react'
import { Sidebar, VideoCard } from '../../component'
import './homepage.css'
import Chip from '@mui/material/Chip';


export const HomePage = () => {
  const {video} = useVideo();
  console.log(video);
  return (
    <>
    <div className="video-listing-container">

    <div>
    <Sidebar/>
    <Chip label="Song" variant="outlined" />
    <Chip label="JavaScript" variant="outlined" />
    <Chip label="Car" variant="outlined" />
    <Chip label="Tech" variant="outlined" />
    <div className='videocard-list'>
    {video.map(videos => <VideoCard key={videos._id} title={videos.title} views={videos.views} creator={videos.creator} chanel_pic={videos.chanel_pic} thumbnail={videos.thumbnail} />)}
  
   
    </div>
    </div>
    </div>
    
    </>
  )
}
