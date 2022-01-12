import React from 'react'
import { DetailsPizza } from '../utils'

export default function Details() {
  return (
    <div className='mx-auto max-w-screen-xl mb-10'>
      <ul className='md:flex md:justify-between mt-6 md:items-center '>
        {DetailsPizza.map((detail, i) => (
          <Detail detail={detail} key={i} />
        ))}
      </ul>
    </div>
  )
}

export const Detail = ({ detail }) => {
  return (
    <li className='text-center'>
      <img
        src={detail.img}
        alt={detail.title}
        className='rounded-full mt-5 mx-auto'
      />
      <h3 className='text-pink-600 uppercase text-3xl my-4 font-semibold'>
        {detail.title}
      </h3>
      <p className='text-md text-gray-800 max-w-5xl'>{detail.subtitle}</p>
    </li>
  )
}
