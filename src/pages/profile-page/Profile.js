import { useVideo } from 'context/videoContext'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
     const navigate = useNavigate();
    const {setUser, user} = useVideo();
     const logoutHandler = () => {
        localStorage.removeItem("user")
        setUser(null);
        navigate("/login")

     }

  return (
      <>
    <div>Name: {user.firstName} {user.lastName}</div>
    <p>Email: {user.email}</p>
    <button onClick={logoutHandler}>Logout</button>
      </>

  )
}
