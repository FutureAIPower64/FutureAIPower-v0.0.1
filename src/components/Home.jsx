import React from 'react'
import Header from './Header'
import Box from './Box'
import Cards from './Cards'
import Sliderbar from './Sliderbar'
import TopCardmenu from './TopCardmenu'
import News from './News'

function Home() {
  return (
    <div >
      <Header />
      <Box />
      <div className='mt-14'>
        <div className='flex'>
          <div className='hidden lg:block lg:w-2/12'>
            <Sliderbar></Sliderbar>
          </div>
          <div className='w-full lg:w-10/12'>
            <TopCardmenu></TopCardmenu>
              <Cards></Cards>
              <Cards></Cards>
              <News></News>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
