import { createContext, useContext, useEffect, useState } from "react";
import { useVideo } from "./videoContext";
import axios from "axios";
import { toast } from "react-toastify";

const historyContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyVideo, setHistoryVideo] = useState([]);
  const { user } = useVideo();

  // Get All History Video Call API function
  const getHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/history", {
        headers: {
          authorization: user.encodedToken,
        },
      });
      console.log(response);
      var historyId = response.data.map((item) => item._id);
      var video = response.data.map((item) => item.video);
      for (let i = 0; i < video.length; i++) {
        video[i].id = historyId[i];
      }
      setHistoryVideo(video);
    } catch (error) {
      console.log(error);
    }
  };

  // delete All History API call function
  const removeHistoryAll = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/history/deleteall",
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
    window.location.reload(false);
    toast.error("All History video deleted");
  };

  // Delete History Video API function
  const removeHistory = async (videoID) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/history/${videoID}`,
        {
          headers: {
            Authorization: user.encodedToken,
          },
        }
      );
      console.log(response);
      toast.error("History Video Removed");
    } catch (error) {
      console.log(error);
    }
    window.location.reload(false);
  };

  // Create History Video API call funtion
  const createHistory = async (videoID) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/history/${videoID}`,
        {},
        {
          headers: {
            Authorization: user.encodedToken,
          },
        }
      );
      setHistoryVideo(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <historyContext.Provider
      value={{
        getHistory,
        historyVideo,
        removeHistory,
        createHistory,
        removeHistoryAll,
      }}
    >
      {children}
    </historyContext.Provider>
  );
};

const useHistory = () => useContext(historyContext);
export { useHistory, HistoryProvider };
