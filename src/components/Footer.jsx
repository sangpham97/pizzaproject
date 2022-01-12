import React from 'react'
import { FooterDetails } from '../utils'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <div className='mx-auto max-w-screen-xl flex items-center justify-center py-12 px-3 md:px-0'>
      <div className='grid grid-cols-4 gap-2'>
        <div className='col-span-2 md:col-span-1'>
          <h4 className='text-xl text-red-700 italic font-semibold capitalize mb-4'>
            the pizzeria
          </h4>
          <p className=' text-gray-700 leading-loose mb-3'>
            Vivamus convallis fermen sollicitudin et, vitae elit in vel ultrices
            sed in urna ipsum ullamcorper auctor.
          </p>
          <SocialLinks color='text-gray-800' />
        </div>
        {FooterDetails.map((item, i) => {
          return (
            <div key={i} className='col-span-2 md:col-span-1'>
              <h4 className='text-xl uppercase mb-4 font-bold'>{item.title}</h4>
              <ul>
                {item.navigate.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className='capitalize text-gray-600 leading-loose'
                    >
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
