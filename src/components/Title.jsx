import React from 'react'

export default function Title({ children }) {
  return (
    <h3 className='text-4xl md:text-6xl text-red-700 font-bold uppercase'>
      {children}
    </h3>
  )
}
