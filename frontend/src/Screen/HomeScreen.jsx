import React from 'react'
import Hero from '../Components/Hero'

function HomeScreen() {
  return (
    <div style={{ overflowY:'hidden'}}  className=' m-auto flex items-center justify-center w-full h-svh bg-white'>
      <Hero />
    </div>
  )
}

export default HomeScreen
