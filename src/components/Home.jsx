import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import DummyData from "./DummyData";
import Header from "./Header";
import Box from "./Box";
import Sliderbar from "./Sliderbar";
function Home() {
  let [mode, setMode] = useState(false);

  return (
    <div data-mode={mode ? "dark" : "light"}>
      <Header />
      {/* <ToggleSwitch mode={mode} setMode={setMode} /> */}
      {/* <DummyData /> */}
      <Sliderbar></Sliderbar>
      <Box></Box>
    </div>
  );
}

export default Home;
