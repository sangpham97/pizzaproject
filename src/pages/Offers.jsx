import React from 'react'
import Deals from '../components/Deals'
import Delivery from '../components/Delivery'
import Location from '../components/Location'
import OffersTop from '../components/OffersTop'

export default function Offers() {
  return (
    <div>
      <OffersTop />
      <Deals />
      <Location />
      <Delivery />
    </div>
  )
}
