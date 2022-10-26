import React from "react";
import { Navbar }  from './layout'
import { Routes, Route } from 'react-router-dom';
import { MyLinks } from "./pages";
import LandingPage from "./pages/LandingPage";


const App = () => {
  return (
    <div className="bg-gray-300 h-screen md:h-auto">
      <Routes>
        <Route path="/" element={<MyLinks/>}/>
        <Route path="/landingPage" element={<LandingPage/>}/>
      </Routes>
    </div>
  )

};

export default App;
