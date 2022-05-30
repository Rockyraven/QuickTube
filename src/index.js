import { LibraryProvider } from "context/libraryContext";
import { LikeProvider } from "context/videoLikeContext";
import { WatchProvider } from "context/watchLatercontext";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { VideoProvider } from "./context/videoContext";
import "./index.css";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <VideoProvider>
      <LibraryProvider>
        <WatchProvider>
          <LikeProvider>
            <App />
          </LikeProvider>
        </WatchProvider>
      </LibraryProvider>
    </VideoProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
