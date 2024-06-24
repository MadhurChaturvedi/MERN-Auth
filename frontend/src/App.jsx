import React from "react";
import Header from "./Components/Header.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Hello </div>} />
      </Routes>
    </>
  );
}

export default App;
