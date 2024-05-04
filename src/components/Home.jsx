import React from 'react'
import Header from './Header'
import Box from './Box'
import Cards from './Cards'
import Sliderbar from './Sliderbar'

function Home() {
  return (
    <div >
      <Header />
      <Box />
      <div className='mt-14'>
        <div className='flex'>
          <div className='w-2/12'>
            <Sliderbar></Sliderbar>
          </div>
          <div className='w-10/12'>
            <Cards></Cards>
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
