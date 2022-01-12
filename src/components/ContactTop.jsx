import React from 'react'
import Background from './Background'
import Banner from './Banner'
import Navbar from './Navbar'

export default function ContactTop() {
  return (
    <Background
      bgImage='https://media-cdn.tripadvisor.com/media/photo-s/1a/19/0a/86/our-restaurant.jpg'
      height='80vh'
    >
      <Navbar />
      <Banner>
        <h3 className='text-5xl  md:text-8xl text-white uppercase font-semibold'>
          contact
        </h3>
      </Banner>
    </Background>
  )
}
