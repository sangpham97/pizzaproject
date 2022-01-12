import React from 'react'
import Deals from '../components/Deals'
import Delivery from '../components/Delivery'
import Details from '../components/Details'
import FanchiseOportunity from '../components/FanchiseOportunity'
import HomeTop from '../components/HomeTop'
import Location from '../components/Location'
import MenuSection from '../components/MenuSection'
import Services from '../components/Services'

function Home() {
  return (
    <div>
      <HomeTop />
      <Details />
      <Services />
      <MenuSection />
      <Deals />
      <Location />
      <FanchiseOportunity />
      <Delivery />
    </div>
  )
}

export default Home
