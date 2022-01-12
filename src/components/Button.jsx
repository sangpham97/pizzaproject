import React from 'react'

export default function Button({ children }) {
  return (
    <button className='rounded-md uppercase font-semibold px-3 py-2 hover:bg-red-700 hover:text-white'>
      {children}
    </button>
  )
}
