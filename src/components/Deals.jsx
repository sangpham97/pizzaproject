import React from 'react'

export default function Deals() {
  return (
    <div className='mx-auto mt-10 max-w-screen-xl'>
      <div className='flex justify-between items-center '>
        <h2 className='text-4xl md:text-6xl uppercase font-bold'>
          best deal !
        </h2>
        <p className='text-md md:text-lg text-red-600 uppercase font-bold'>
          view all
        </p>
      </div>
      <div className='grid-cols-1 grid md:grid-cols-2 gap-4 my-4 '>
        <div className='md:col-span-2 rounded-lg'>
          <div className='md:flex rounded-xl'>
            <img
              src='https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-deals-img-1.jpg'
              alt=''
              style={{ width: '100%', maxHeight: 350, maxWidth: 500 }}
            />
            <ul className='bg-red-600 uppercase flex-1 font-bold flex items-center justify-center flex-col leading-7 '>
              <li>
                <p className='text-md text-yellow-500'>daily deal !</p>
              </li>
              <li>
                <h4 className='text-3xl md:text-4xl text-white'>
                  big meat monsta
                </h4>
              </li>
              <li>
                <p className='text-sm text-white'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, iste.
                </p>
              </li>
              <li>
                <p className='text-6xl text-white'>$18</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='md:col-span-1 relative my-4 md:my-0'>
          <img
            src='https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-deals-img-2.jpg'
            alt=''
            style={{ width: '100%' }}
            className='rounded-lg'
          />
          <ul className='font-bold absolute uppercase top-1 right-1 bg-red-700 p-4 rounded-md'>
            <li>
              <h3 className='text-xl md:text-4xl text-yellow-400'>
                combo double combo
              </h3>
            </li>
            <li>
              <h3 className='text-2xl md:text-6xl text-white'>$24</h3>
            </li>
          </ul>
        </div>
        <div className='md:col-span-1 relative '>
          <img
            src='https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-deals-img-3.jpg'
            alt=''
            style={{ width: '100%' }}
            className='rounded-lg'
          />

          <ul className='absolute top-0 right-0 bottom-0 flex flex-col items-center justify-end bg-red-700 uppercase  md:max-w-xs p-4 font-bold rounded-l-full '>
            <li>
              <h4 className='text-2xl md:text-5xl text-yellow-400'>
                italian stallation
              </h4>
            </li>
            <li>
              <p className='text-md text-white'>starting at</p>
            </li>
            <li>
              <h3 className='text-3xl md:text-6xl text-white'>$16</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
