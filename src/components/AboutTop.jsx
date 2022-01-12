import React from 'react'
import Background from './Background'
import Banner from './Banner'
import Navbar from './Navbar'

export default function AboutTop() {
  return (
    <Background
      bgImage='https://ahamove.com/wp-content/uploads/2021/01/p1.png'
      height='80vh'
    >
      <Navbar />
      <Banner>
        <h3 className='text-white text-5xl  md:text-8xl uppercase font-semibold'>
          about
        </h3>
      </Banner>
    </Background>
  )
}
