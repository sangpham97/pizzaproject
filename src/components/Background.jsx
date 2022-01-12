import React from 'react'

export default function Background({ children, bgImage, height }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        height: `${height}`,
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
      }}
      className='rounded-b-3xl'
    >
      {children}
    </div>
  )
}
