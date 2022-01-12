import React from 'react'

export default function BackgroundAttach({ bg, children }) {
  return (
    <div
      className='bg-fixed bg-center bg-no-repeat bg-cover py-32'
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  )
}
