// import Sliderbar from "./Sliderbar";
import { useSelector } from "react-redux";
import React, { useState } from 'react'
// import ToggleSwitch from './ToggleSwitch'
// import DummyData from './DummyData'
// import Header from "./Header";
// import Box from "./Box";
import Cards from "./Cards";

function Home() {
  const mode = useSelector(state => state.counter.mode);

  return (
    <div data-mode={mode ? "dark" : "light"}>

      {/* <Header></Header> */}
      {/* <Sliderbar></Sliderbar> */}
      {/* <ToggleSwitch mode={mode} setMode={setMode}/>
      <DummyData /> */}
      {/* <Box></Box> */}
      <Cards></Cards>

    </div>
  );
}

export default Home;
