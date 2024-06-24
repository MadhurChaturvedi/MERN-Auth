import React from "react";
import Header from "./Components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
