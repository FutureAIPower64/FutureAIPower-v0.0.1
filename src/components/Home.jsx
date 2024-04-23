import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import DummyData from './DummyData'
import Header from './Header'
function Home() {
  let [mode,setMode] = useState(false);

  return (
    <div data-mode={mode ? "dark" : "light"}>
        <Header></Header>
      <ToggleSwitch mode={mode} setMode={setMode}/>
      <DummyData />
    </div>
  )
}

export default Home
