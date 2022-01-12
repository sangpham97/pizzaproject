import React from 'react'
import Background from './Background'
import Banner from './Banner'
import Navbar from './Navbar'

export default function OffersTop() {
  return (
    <Background
      bgImage='https://www.pizzaexpress.vn/wp-content/uploads/2020/12/pizza_fresca.jpg'
      height='80vh'
    >
      <Navbar />
      <Banner>
        <h3 className='text-white text-5xl  md:text-8xl uppercase font-semibold mb-3'>
          offers
        </h3>
        <p className='leading-normal text-white '>
          Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna
          tristique ornare aliquam orci augue vestibulum dignissim vel aliquam.{' '}
        </p>
      </Banner>
    </Background>
  )
}
