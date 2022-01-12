import React from 'react'

export default function FanchiseOportunity() {
  return (
    <div className='max-w-screen-xl mx-auto my-36'>
      <div className='md:flex md:items-center md:justify-between py-4'>
        <div className='uppercase '>
          <h4 className='text-xl text-red-800 font-semibold mb-3'>
            join the table
          </h4>
          <h2 className='text-3xl md:text-5xl font-bold'>
            Franchise Opportunities
          </h2>
        </div>
        <div className='md:max-w-screen-sm sm:max-w-screen-xs'>
          <p className='text-gray-600 text-md leading-normal'>
            Fermentum non quis vitae viverra ipsum eget tincidunt consequat ac
            velit leo, rutrum tellus augue dolor leo massa augue rhoncus
            pellentesque pulvinar pellentesque potenti cras arcu praesent urna
            a, vitae mattis pellentesque rhoncus cursus enim ac eu justo.
          </p>
          <button className='font-bold px-3 rounded-md py-2 mt-3 uppercase text-red-700 text-xl hover:bg-red-700 hover:text-white'>
            get in touch
          </button>
        </div>
      </div>
    </div>
  )
}
