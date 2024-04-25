// import React, { useState } from 'react'
// import DummyData from './components/DummyData';
// import ToggleSwitch from './components/ToggleSwitch';
// import Header from './components/Header';

import React from "react";
import { Routes, Route } from "react-router-dom"
// import Home from './components/Home';
import AI_Tools from './components/AI_Tools';
import AI_News from './components/AI_News';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Favourites from './components/Favourites';
import About from './components/About';
import Homemain from "./components/Homemain";
function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={ <Homemain/> } />
        <Route path="/AI-Tools" element={ <AI_Tools/> } />
        <Route path="/AI-News" element={ <AI_News/> } />
        <Route path="/Blog" element={ <Blog/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/Favourites" element={ <Favourites/> } />
        <Route path="/About" element={ <About/> } />
      </Routes>
      

    </div>
  )
}

export default App 