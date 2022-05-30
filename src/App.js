import { Model, Navbar, Player } from "component";
import { ProtectedRoute } from "component/ProtectedRoute";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  Library,
  LikedPage,
  LoginPage,
  Profile,
  WatchLater,
  WatchPage,
} from "./pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model" element={<Model/>} />
        <Route path="/watch" element={<WatchPage />}>
          <Route path=":videoListID" element={<Player />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/library" element={<Library />} />
        </Route>
      </Routes>
    </>
  );
};
