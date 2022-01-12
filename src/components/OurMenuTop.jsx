import React from 'react'
import Background from './Background'
import Banner from './Banner'
import Navbar from './Navbar'

export default function OurMenuTop() {
  return (
    <Background
      bgImage='https://www.pizzaexpress.vn/wp-content/uploads/2020/11/UFHsFlMmR8e6NSVYKlMw_ClassicCombo.jpg'
      height='70vh'
    >
      <Navbar />
      <Banner>
        <h3 className='text-8xl uppercase font-bold text-white'>our menu</h3>
      </Banner>
    </Background>
  )
}
