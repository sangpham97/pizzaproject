import React from 'react'
import { Menues } from '../utils'

export default function MenuSection() {
  return (
    <div className='mt-6 text-center p-6'>
      <p className='text-2xl font-semibold text-red-600'>Choose your Flavor</p>
      <h1 className='text-7xl font-semibold'>
        Food that brings people together!
      </h1>
      <p className='text-gray-600 my-6'>
        Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper
        dictumst sit interdum ut venenatis pellentesque nunc.
      </p>
      <button className='rounded-md py-2 px-6 font-semibold text-red-600 bg-white hover:bg-red-600 hover:text-white uppercase'>
        view all menu
      </button>
      <MenuList />
    </div>
  )
}

export const MenuList = () => {
  return (
    <div className='grid md:grid-cols-3 mt-3 max-w-screen-lg mx-auto gap-2 text-center'>
      {Menues.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </div>
  )
}

export const Item = ({ item }) => {
  return (
    <div className='pt-7'>
      <img src={item.img} alt={item.name} className='text-xl hover:mb-2' />
      <h4 className='text-4xl uppercase font-semibold text-red-700 mt-4'>
        {item.name}
      </h4>
    </div>
  )
}
