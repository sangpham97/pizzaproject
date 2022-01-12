import React from 'react'

export default function Banner({ children }) {
  return (
    <div
      className='text-center absolute top-1/2 left-1/2 '
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      {children}
    </div>
  )
}
