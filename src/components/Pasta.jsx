import React from 'react'
import { pastaMenu } from '../utils'
import Title from './Title'

export default function Pasta() {
  return (
    <div className='max-w-screen-xl mx-auto mt-10'>
      <div className='md:flex md:items-center md:justify-between mb-4 pb-4 border-b-2 border-gray-700'>
        <Title>pizza</Title>
        <p className='text-gray-700 mt-4 md:mt-0 max-w-2xl'>
          Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis
          risus metus in suscipit scelerisque eu duis penatibus eros magna
          cursus elementum orci.
        </p>
      </div>
      <PastaMenu />
    </div>
  )
}

export const PastaMenu = () => {
  return (
    <div className='grid md:grid-cols-2 gap-2 grid-cols-1 border-b-2 border-gray-500 mb-6 pb-6'>
      {pastaMenu.map((item, i) => (
        <Dish item={item} key={i} />
      ))}
    </div>
  )
}

export const Dish = ({ item }) => {
  return (
    <div className='md:flex md:items-center md:justify-between'>
      <img src={item.img} alt={item.name} />
      <div>
        <h3 className='text-3xl my-2 font-semibold'>{item.name}</h3>
        <p className='text-gray-700'>{item.desc}</p>
      </div>
    </div>
  )
}
