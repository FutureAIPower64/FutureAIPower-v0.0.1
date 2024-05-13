import React from "react";
import Header from "./Header";
import Box from "./Box";
import Sliderbar from "./Sliderbar";
import News from "./News";
import TopCardmenu from "./TopCardmenu";
import TopAiTools from "./TopAiTools";
import MostSavedTools from "./MostSavedTools";
import TopFreeTools from "./TopFreeTools";
import BusinessTools from "./BusinessTools";
import ProductivityTools from "./ProductivityTools";
import AutomationTools from "./AutomationTools";

function Home() {
  return (
    <div className="dark:bg-dark-black">
      <Header />
      <Box />
      <div className='mt-10'>
        <div className='flex'>
          <div className='hidden lg:block lg:w-2/12'>
            <Sliderbar></Sliderbar>
          </div>
          <div className='w-full lg:w-10/12 reletive'>
            <TopCardmenu></TopCardmenu>
            <TopAiTools></TopAiTools>
            <MostSavedTools></MostSavedTools>
            <News></News>
            <TopFreeTools></TopFreeTools>
            <BusinessTools></BusinessTools>
            <ProductivityTools></ProductivityTools>
            <AutomationTools></AutomationTools>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
