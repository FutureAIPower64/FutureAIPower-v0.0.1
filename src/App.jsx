import React, { useState } from 'react'
import DummyData from './components/DummyData';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  let [mode,setMode] = useState(false);
  return (
    <div data-mode={mode ? "dark" : "light"}>
      <ToggleSwitch mode={mode} setMode={setMode}/>
      <DummyData />
    </div>
  )
}

export default App