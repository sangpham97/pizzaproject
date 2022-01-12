import React from 'react'
import { AdressPizza } from '../utils'

export default function Location() {
  return (
    <div className='max-w-screen-xl mx-auto py-4 leading-normal text-center my-36'>
      <p className='text-red-700 uppercase mb-2 font-bold '>our location</p>
      <h3 className='text-3xl md:text-6xl font-bold uppercase my-3'>
        Find The Pizzeria near you
      </h3>
      <p className='text-sm text-gray-600 '>
        Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper
        dictumst sit interdum ut venenatis pellentesque.
      </p>
      <Adresses />
    </div>
  )
}

export const Adresses = () => {
  return (
    <div className='max-w-screen-xl  mx-auto mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2'>
        {AdressPizza.map((item, i) => (
          <Adress item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export const Adress = ({ item }) => {
  return (
    <div className='col-span-1 flex flex-col items-center justify-center font-bold mt-3 lg:mt-0'>
      <h3 className='text-red-700 uppercase text-xl md:text-4xl mb-3'>
        {item.name}
      </h3>
      <p className='text-md font-bold' style={{ maxWidth: 193 }}>
        {item.adress}
      </p>
    </div>
  )
}
