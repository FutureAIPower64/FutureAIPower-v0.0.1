import React from "react";
import Header from "./Header";
import Box from "./Box";
import Sliderbar from "./Sliderbar";
import { useSelector } from "react-redux";
function Home() {
  const mode = useSelector(state => state.counter.mode);
  
  return (
    <div data-mode={mode ? "dark" : "light"}>
      <Header />
      <Sliderbar></Sliderbar>
      <Box></Box>
    </div>
  );
}

export default Home;
