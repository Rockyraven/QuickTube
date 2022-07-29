import {createContext, useContext, useState} from 'react'
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
          const response = await axios.get("/api/user/history", {
            headers: {
              authorization: user.encodedToken,
            },
          });
          setHistoryVideo(response.data.history.reverse());
          console.log(response.data.history)
        } catch (error) {
          console.log(error);
        }
      };
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
          console.log(response);
          toast.error("Video Removed");
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
            console.log(response);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <historyContext.Provider value={{getHistory, historyVideo, removeHistory, removeHistoryAll, HistoryVideo}}>
            {children}
        </historyContext.Provider>
    )
}

const useHistory = () => useContext(historyContext);
export { useHistory, HistoryProvider }

