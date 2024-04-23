import React, { useState } from 'react'
import DummyData from './components/DummyData';
import ToggleSwitch from './components/ToggleSwitch';
import Header from './components/Header';

function App() {
  let [mode,setMode] = useState(false);
  return (
    <div data-mode={mode ? "dark" : "light"}>
      <ToggleSwitch mode={mode} setMode={setMode}/>
      <DummyData />
      <Header></Header>
    </div>
  )
}

export default App