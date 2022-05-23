import axios from 'axios';
import { useVideo } from 'context/videoContext';
import { useLike } from 'context/videoLikeContext';
import React from 'react'
import { Link } from 'react-router-dom';

export const RemoveCard = ({thumbnail, chanel_pic, title, creator, views, _id, removeFn}) => {
    const {removeLike} = useLike();

   
  return (
    <>
      <div className="video-card">
    <Link to={`/watch/${_id}`} >
        <div className="video-image">
          <img src={thumbnail} alt="video thumbnail" />
        </div>
        <div className="video-title-wrapper">
          <div className="video-image">
            <img src={chanel_pic} alt="" />
          </div>
          <div className="video-title">
            <p className="description">
             {title}
            </p>
            <p className="creater">{creator}</p>
            <p className="view">{views} view</p>
          </div>
        </div>
      </Link>
            <p onClick={()=>removeFn(_id)}> <i className="fa fa-trash"></i></p>
      </div>
    </>
  );
};

