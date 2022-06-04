import React from 'react'
import { Link } from 'react-router-dom';
import '../videocard/videocard.css'

export const RemoveCard = ({thumbnail, chanel_pic, title, creator, views, _id, removeFn}) => {

   
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
            <p className='delete-button' onClick={()=>removeFn(_id) }> <i className="fa fa-trash"></i></p>
        </div>
      </Link>
      </div>
    </>
  );
};

