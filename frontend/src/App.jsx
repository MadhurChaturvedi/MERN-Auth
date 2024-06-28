import React from "react";
import Header from "./Components/Header.jsx";
import { Routes, Route, Outlet } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen.jsx";
function App() {
  return (
    <>
      <Header />
      <Outlet  />
    </>
  );
}

export default App;
