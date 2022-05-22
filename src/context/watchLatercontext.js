import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useVideo } from "./videoContext";


const watchContext  = createContext();

const WatchProvider = ({children}) => {
    const [ watchLater, setWatchLater ] = useState([]);
    const { user } = useVideo();
  
    
    const getWatchLater = async() => {
      try {
        const response = await axios.get("/api/user/watchlater", {
          headers: {
            'authorization': user.encodedToken
          }
        });
        setWatchLater(response.data.watchlater);
      }
      catch(error){
        console.log(error)
      }
    }

    return(
        <watchContext.Provider value={{watchLater, getWatchLater}}>
            {children}
        </watchContext.Provider>
        
    )
}
const useWatchLater = () => useContext(watchContext)

export { WatchProvider, useWatchLater }