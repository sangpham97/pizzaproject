import React from 'react'
import AboutInfoBox from '../components/AboutInfoBox'
import AboutTop from '../components/AboutTop'
import Story from '../components/Story'
import Delivery from '../components/Delivery'
import FanchiseOportunity from '../components/FanchiseOportunity'

export default function About() {
  return (
    <div>
      <AboutTop />
      <Story />
      <AboutInfoBox />
      <FanchiseOportunity />
      <Delivery />
    </div>
  )
}
