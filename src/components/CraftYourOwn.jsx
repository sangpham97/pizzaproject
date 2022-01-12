import React from 'react'
import { craftYourOwnLeft, craftYourOwnRight } from '../utils'
import Title from './Title'

export default function CraftYourOwn() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='text-center'>
        <Title>Craft Your Own</Title>
        <p className='text-gray-600'>
          Erat pharetra suscipit tincidunt in eget ultricies lectus posuere
          arcu.{' '}
        </p>
      </div>
      <Steps />
    </div>
  )
}

export const Steps = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 '>
      <div className='col-span-1 flex flex-col justify-evenly'>
        {craftYourOwnLeft.map((item, i) => (
          <StepLeft item={item} key={i} place={i} />
        ))}
      </div>
      <div className='col-span-2 flex items-center justify-start md:border-l-2 md:border-gray-500 ml-6 pl-6'>
        {craftYourOwnRight.map((item, i) => (
          <StepRight item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export const StepLeft = ({ item, place }) => {
  return (
    <div
      className={
        place === 0
          ? 'uppercase border-b-2 border-gray-500 mb-10 pb-10'
          : 'uppercase'
      }
    >
      <h6 className='text-md font-semibold text-red-700 my-2'>
        step {item.step}
      </h6>
      <h3 className='text-2xl md:text-4xl font-bold my-2'>{item.title}</h3>
      <h4 className='text-md md:text-2xl font-bold my-2'>{item.desc}</h4>
    </div>
  )
}

export const StepRight = ({ item }) => {
  return (
    <div className='uppercase mt-8 md:mt-0 w-full'>
      <h6 className='text-md font-semibold text-red-700 my-2'>
        step {item.step}
      </h6>
      <h3 className='text-2xl md:text-4xl font-bold my-2'>{item.title}</h3>
      {item.desc.map((detail, i) => {
        const detailLeft = detail.list.slice(0, detail.list.length / 2 - 1)
        const detailRight = detail.list.slice(detail.list.length / 2)

        return (
          <div key={i}>
            <h3 className='text-xl md:text-3xl uppercase font-bold my-3'>
              {detail.title}
            </h3>
            <div className='flex justify-between my-2 max-w-xl'>
              <ul className='my-2'>
                {detailLeft.map((item, i) => {
                  return (
                    <li key={i} className='text-sm  font-bold leading-normal'>
                      <i className='fas fa-chevron-right mr-2'></i>
                      {item}
                    </li>
                  )
                })}
              </ul>

              <ul className='my-2'>
                {detailRight.map((item, i) => {
                  return (
                    <li key={i} className='text-sm  font-bold leading-normal'>
                      <i className='fas fa-chevron-right mr-2'></i>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
