import React from 'react'
import { ServicesInfo } from '../utils'
import Background from './Background'

export default function Services() {
  return (
    <Background bgImage='https://img.dominos.vn/Pizzaminsea.jpg' height='100vh'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:top-1/4 absolute max-w-screen-xl mx-auto'>
        <div className='text-white col-span-1 mt-4 md:mt-0 text-center md:text-left'>
          <h3 className='text-4xl md:text-6xl font-semibold'>
            Bringing Happiness To You
          </h3>
          <p className='text-md mt-2'>
            Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
          </p>
        </div>
        <ul className='md:flex md:items-center md:justify-around mt-6 col-span-2 md:mt-0'>
          {ServicesInfo.map((service, i) => (
            <Service service={service} key={i} />
          ))}
        </ul>
      </div>
    </Background>
  )
}

export const Service = ({ service }) => {
  return (
    <li className='uppercase font-semibold mx-2 md:my-0 my-3'>
      <div className='mx-auto mb-3 flex items-center bg-red-500 rounded-full justify-center text-white text-2xl md:text-4xl md:w-32 md:h-32 w-10 h-10'>
        <i className={service.icon}></i>
      </div>
      <h3 className='text-white text-3xl text-center '>{service.title}</h3>
      <h4 className='text-yellow-300 mt-3 text-lg text-center '>
        {service.navigate}
        <i className='fas fa-arrow-right ml-3'></i>
      </h4>
    </li>
  )
}
