import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";

const App = () => {
  return (
    <div className="container-body">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
