import { Navbar } from "component";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
