import React from 'react'
import Button from './Button'

export default function Delivery() {
  return (
    <div className='max-w-screen-xl mx-auto mt-10 border-b-2 border-gray-200'>
      <div className='grid md:grid-cols-3 gap-2'>
        <div className='col-span-2 flex flex-col justify-center '>
          <h4 className='text-2xl md:text-4xl uppercase font-bold mb-3'>
            free delivery !
          </h4>
          <h2 className='text-4xl md:text-6xl uppercase font-bold my-2'>
            Download the App now!
          </h2>
          <p className='text-gray-700 mb-3'>
            Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida
            pulvinar ipsum mauris etiam mattis nisl.
          </p>
          <div className='max-w-screen-sm flex items-center justify-around uppercase font-semibold text-red-600 text-xl'>
            <Button>google play</Button>
            <Button>app store</Button>
          </div>
        </div>
        <div className='md:col-span-1 col-span-2 flex  justify-center'>
          <img
            src='https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-mobile-app-mockup.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
