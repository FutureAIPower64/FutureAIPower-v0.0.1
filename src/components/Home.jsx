
import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import DummyData from './DummyData'
import Header from './Header'
import Box from './Box'
import Cards from './Cards'

import Sliderbar from "./Sliderbar";
import { useSelector } from "react-redux";

function Home() {
  // const mode = useSelector(state => state.counter.mode);

  return (

    <div >
      <Header />
      <Sliderbar></Sliderbar>
      <Box></Box>
      <Cards></Cards>

    </div>
  );
}

export default Home;
