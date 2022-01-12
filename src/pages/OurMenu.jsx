import React from 'react'
import CraftYourOwn from '../components/CraftYourOwn'
import Desert from '../components/Desert'
import { MenuList } from '../components/MenuSection'
import OurMenuTop from '../components/OurMenuTop'
import Pasta from '../components/Pasta'
import Location from '../components/Location'
import Delivery from '../components/Delivery'

export default function OurMenu() {
  return (
    <div>
      <OurMenuTop />
      <MenuList />
      <Pasta />
      <CraftYourOwn />
      <Desert />
      <Location />
      <Delivery />
    </div>
  )
}
