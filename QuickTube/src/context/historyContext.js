import {createContext, useContext, useEffect, useState} from 'react'
import { useVideo } from './videoContext';
import axios from "axios";
import { toast } from 'react-toastify';

const historyContext = createContext();

const HistoryProvider = ({children}) => {
  const { videoList } = useVideo();
    const [ historyVideo, setHistoryVideo ] = useState([]);
    const { user } = useVideo();

    const getHistory = async () => {
        try {
          const response = await axios.get("http://localhost:5000/history", {
            headers: {
              authorization: user.encodedToken,
            },
          });
          setHistoryVideo(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getHistory();
      },[])
      // getHistory();
    const removeHistoryAll = async () => {
        try {
          const response = await axios.delete("/api/user/history/all", {
            headers: {
              authorization: user.encodedToken,
            },
          });
          setHistoryVideo(response.data.history);
        } catch (error) {
          console.log(error);
        }
      };
      const removeHistory = async (videoID) => {
        try {
          const response = await axios.delete(`/api/user/history/${videoID}`, {
            headers: {
              'authorization': user.encodedToken
            }
          });
          setHistoryVideo(response.data.history)
          toast.error("Video Removed");
        }
        catch(error){
          console.log(error)
        }
      }
      const createHistory = async (videoID) => {
        try {
          const response = await axios.post(`http://localhost:5000/history/${videoID}`,{}, {
            headers: {
              'Authorization': user.encodedToken
            }
          });
          setHistoryVideo(response.data.history)
        }
        catch(error){
          console.log(error)
        }
      }

      const HistoryVideo = async () => {
        try {
          const response = await axios.post(
            "/api/user/history",
            { videoList },
            {
              headers: {
                authorization: user.encodedToken,
              },
            }
            );
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <historyContext.Provider value={{getHistory, historyVideo, removeHistory, createHistory, removeHistoryAll, HistoryVideo}}>
            {children}
        </historyContext.Provider>
    )
}

const useHistory = () => useContext(historyContext);
export { useHistory, HistoryProvider }

