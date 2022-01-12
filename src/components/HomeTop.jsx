import React from 'react'
import Background from './Background'
import Banner from './Banner'
import Navbar from './Navbar'

export default function HomeTop() {
  return (
    <Background
      bgImage='https://images.foody.vn/res/g106/1052001/prof/s640x400/foody-upload-api-foody-mobile-1-201021104923.jpg'
      height='100vh'
    >
      <Navbar />
      <Banner>
        <h1 className='text-white text-4xl font-semibold md:text-8xl'>
          Authentic Italian Pizzeria
        </h1>
        <p className='text-white mt-3 '>
          Et praesent nulla urna consequat dui arcu cursus diam fringilla libero
          risus, aliquam diam, aliquam ullamcorper urna pulvinar velit
          suspendisse aliquam lacus sollicitudin mauris.
        </p>
        <div className='mt-6 md:flex md:justify-evenly md:mt-3'>
          <button className='uppercase bg-yellow-400 py-2 px-12 rounded-md mx-2 text-md font-semibold hover:bg-white hover:text-gray-900'>
            book a table
          </button>
          <button className='hover:underline text-white text-md uppercase font-semibold mx-2 md:mt-0 mt-3'>
            takeaway
          </button>
        </div>
      </Banner>
    </Background>
  )
}
