import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import DummyData from './DummyData'
import Header from './Header'
import Box from './Box'
import Cards from './Cards'

function Home() {
  let [mode,setMode] = useState(false);

  return (
    <div data-mode={mode ? "dark" : "light"}>
        <Header></Header>
        {/* <ToggleSwitch mode={mode} setMode={setMode}/>
      <DummyData /> */}
      <Box></Box>
      <Cards></Cards>
      
    </div>
  )
}

export default Home
