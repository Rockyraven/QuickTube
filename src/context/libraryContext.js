import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useVideo } from "./videoContext";


const libraryContext = createContext();

const LibraryProvider = ({children}) => {

  const { user } = useVideo();
  
  const [ libraryVideo, setLibraryVideo] = useState([]);
  const [ display, setDisplay ] = useState("none");
  const [ playlistName, setPlayListName ] = useState("");
  const [ library, setLibrary ] = useState([]);
  const [ getLibraryVideo, setGetLibraryVideo ] = useState({videos: []});
  const [ removePlaylist, setRemovePlaylist] = useState([]);

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
        toast.success("Added in WatchLater Video")
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  const removePlayList = async (playlistId) => {
    try {
      console.log(playlistId)
      const response = await axios.delete(`/api/user/playlists//${playlistId}`, {
        headers: {
          'authorization': user.encodedToken
        }
      });
      // setRemovePlaylist(response.data.likes)
      console.log(response);
      toast.error("Video Removed");
    }
    catch(error){
      console.log(error)
    }
  }

 
    return(
        <libraryContext.Provider value={{  libraryVideo, getLibrary, display, setDisplay, playlistName, setPlayListName, createLibraryVideo, library, addVideoToLibraray, getLibraryVideos, getLibraryVideo, removePlayList }}>
            {children}
        </libraryContext.Provider>
    )
}

const useLibrary = () => useContext(libraryContext);

export { LibraryProvider, useLibrary }