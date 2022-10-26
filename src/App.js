import React from "react";
import { Routes, Route } from "react-router-dom";
import { MyLinks, LandingPage } from "./pages";

const App = () => {
  return (
    <div className="bg-gray-300 h-screen md:h-auto">
      <Routes>
        <Route path="/" element={<MyLinks />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
