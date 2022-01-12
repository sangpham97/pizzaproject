import React from 'react'

export default function Story() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <p className='text-red-700 uppercase text-lg my-6 font-semibold'>
        our story
      </p>
      <div className='grid grid-cols-1 md:grid-cols-7 gap-2 '>
        <div className='col-span-5'>
          <StoryLeft />
        </div>
        <div className='col-span-2'>
          <StoryRight />
        </div>
      </div>
    </div>
  )
}

export const StoryLeft = () => {
  return (
    <>
      <h1 className='text-4xl md:text-6xl uppercase font-bold mb-4'>
        Authentic Italian Pizzeria
      </h1>
      <p className='text-md md:text-xl font-semibold pleading-normal'>
        Varius eu mauris est vitae ultrices et, justo, at in ut faucibus libero
        pellentesque facilisis molestie suspendisse lacinia gravida sed
        habitasse diam nec nulla.
      </p>
      <div className='flex items-center justify-around flex-col-reverse lg:flex-row mt-7'>
        <div className='p-2'>
          <img
            src='https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-founder-img.jpg'
            alt=''
          />
          <h4 className='text-gray-800 uppercase font-bold my-2'>
            Antonio Baggio
          </h4>
          <p className='text-gray-600 capitalize my-2'>
            Founder of The Pizzeria
          </p>
        </div>
        <div className='p-2 lg:max-w-sm flex flex-col justify-center'>
          <h4 className='text-xl uppercase font-bold mb-2'>
            It's All About The Family
          </h4>
          <p className='text-gray-700 mt-2 my-3'>
            Imperdiet orci, volutpat consequat fermentum, proin tempus et
            tellus, vulputate adipiscing auctor nulla in malesuada et amet,
            aliquam laoreet mauris gravida consectetur malesuada est ultricies
            diam vestibulum velit sit aliquet pellentesque vitae.
          </p>
          <h4 className='text-xl uppercase font-bold mt-2'>
            Generations in The Making
          </h4>
          <p className='text-gray-700 my-3 leading-normal'>
            Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
            semper dictumst sit interdum venenatis pellentesque nunc libero
            vestibulum velit sit aliquet pellentesque vitae mauris gravida
            consectetur malesuada.
          </p>
        </div>
      </div>
    </>
  )
}

export const StoryRight = () => {
  return (
    <div className='flex justify-center items-center'>
      <img
        src='https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-vintage-building-img.jpg'
        alt=''
      />
    </div>
  )
}
