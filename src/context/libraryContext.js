import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useVideo } from "./videoContext";


const libraryContext = createContext();

const LibraryProvider = ({children}) => {

  const { user } = useVideo();
  
  const [ libraryVideo, setLibraryVideo] = useState([]);
  const [ display, setDisplay ] = useState("none");
  const [ playlistName, setPlayListName ] = useState("");
  const [ library, setLibrary ] = useState([]);
  const [ getLibraryVideo, setGetLibraryVideo ] = useState([]);

  const createLibraryVideo = async (title) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: { title: title } },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
        );
        setLibrary(response.data.playlists)

    } catch (error) {
      console.log(error);
    }
  };

  const getLibrary = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: user.encodedToken,
        },
      });
      setLibraryVideo(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };
  const getLibraryVideos = async (id) => {
    
    try {
      console.log(id)
      const response = await axios.get(`/api/user/playlists/${id}`, {
        headers: {
          authorization: user.encodedToken,
        },
      });

      setGetLibraryVideo(response.data.playlist);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideoToLibraray = async (id,video) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${id}`,
        { video },
        {
          headers: {
            authorization: user.encodedToken,
          },
        }
        );
        // setLibrary(response.data.playlists)
        console.log(response.data.playlist)

    } catch (error) {
      console.log(error);
    }
  };


  const removeLibrary = async (videoID) => {
    try {
      console.log(videoID)
      const response = await axios.delete(`/api/user/playlists/${videoID} `  ,{
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
        <libraryContext.Provider value={{ removeLibrary, libraryVideo, getLibrary, display, setDisplay, playlistName, setPlayListName, createLibraryVideo, library, addVideoToLibraray, getLibraryVideos, getLibraryVideo }}>
            {children}
        </libraryContext.Provider>
    )
}

const useLibrary = () => useContext(libraryContext);

export { LibraryProvider, useLibrary }