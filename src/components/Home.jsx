import React from "react";
import Header from "./Header";
import Box from "./Box";
import Cards from "./Cards";
import Sliderbar from "./Sliderbar";
import News from "./News";
import TopCardmenu from "./TopCardmenu";

function Home() {
  return (
    <div>
      <Header />
      <Box />
      <div className='mt-10'>
        <div className='flex'>
          <div className='hidden lg:block lg:w-2/12'>
            <Sliderbar></Sliderbar>
          </div>
          <div className='w-full lg:w-10/12 reletive'>
            <TopCardmenu></TopCardmenu>
            <Cards></Cards>
            <Cards></Cards>
            <News></News>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
