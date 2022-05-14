import { Navbar } from "component";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, WatchPage } from "./pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch" element={<WatchPage />} />
      </Routes>
    </>
  );
};
