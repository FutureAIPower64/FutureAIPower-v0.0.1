
import './App.css';
import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom"
import AI_Tools from './components/AI_Tools';
import AI_News from './components/AI_News';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Favourites from './components/Favourites';
import About from './components/About';
import Home from "./components/Home";
import { useSelector } from "react-redux";
function App() {
  const mode = useSelector(state=> state.counter.mode);
  return (
    <div data-mode={mode} className='dark:bg-black h-[500vh]'>
      <Routes>
        <Route path="/" element={ <Home/> } />
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