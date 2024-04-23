import React, { useState } from 'react'
import DummyData from './components/DummyData';
import ToggleSwitch from './components/ToggleSwitch';
import Box from './components/Box';

function App() {
  let [mode,setMode] = useState(false);
  return (
    <div data-mode={mode ? "dark" : "light"}>
      <ToggleSwitch mode={mode} setMode={setMode}/>
      <DummyData />
      <Box></Box>
    </div>
  )
}

export default App