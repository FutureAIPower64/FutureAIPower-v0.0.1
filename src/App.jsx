import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import AI_Tools from './components/AI_Tools';
import AI_News from './components/AI_News';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Favourites from './components/Favourites';
import About from './components/About';
import Home from "./components/Home";
import { useSelector, useDispatch } from "react-redux";
import { CheckBtn, changeMode } from './store/counter/counterSlice';
import Header from './components/Header';
import Box from './components/Box';

function App() {
  const mode = useSelector(state => state.counter.mode);
  const dispatch = useDispatch();
  const [systemDark, setSystemDark] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemDark(mediaQuery.matches);
    const handleChange = (event) => {
      setSystemDark(event.matches);
      if (mode === 'system') {
        const systemMode = event.matches ? 'dark' : 'light';
        dispatch(CheckBtn(systemMode))
        localStorage.setItem('mode', 'system');
        dispatch(changeMode('system'));
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [mode, dispatch]);

  return (
    <div data-mode={mode === "system" ? (systemDark ? "dark" : "light") : mode} className='dark:bg-black h-[500vh]'>
      <Header/>
      <Box />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AI-Tools" element={<AI_Tools />} />
        <Route path="/AI-News" element={<AI_News />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;