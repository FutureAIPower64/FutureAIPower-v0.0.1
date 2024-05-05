import React from 'react'
import Header from './Header'
import Box from './Box'
import Cards from './Cards'

function Home() {
  return (
    <div >
      <div className='h-[60px]'>
        <Header />
      </div>
      <Cards></Cards>
      <Box />

    </div>
  )
}

export default Home
