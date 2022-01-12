import React from 'react'

export default function SocialLinks({ color }) {
  return (
    <div className={`flex items-center ${color}`}>
      <i className='fab fa-twitter text-xl'></i>
      <i className='fab fa-facebook mx-4 text-xl'></i>
      <i className='fab fa-instagram text-xl'></i>
    </div>
  )
}
