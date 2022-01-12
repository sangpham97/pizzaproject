import React from 'react'
import { AboutBox1, AboutBox2 } from '../utils'
import BackgroundAttach from './BackgroundAttach'

export default function AboutInfoBox() {
  return (
    <div className='my-28'>
      <Box1 />
      <Box2 />
    </div>
  )
}

export const Box1 = () => {
  return (
    <BackgroundAttach bg='https://media-cdn.tripadvisor.com/media/photo-s/11/8d/c5/a9/vegetarian-pizza.jpg'>
      {AboutBox1.map((item, i) => {
        return (
          <div
            className='mx-auto md:max-w-screen-xl flex items-center justify-start'
            key={i}
          >
            <div className='bg-white p-8 max-w-xl mx-2 lg:mx-0'>
              <h6 className='text-xl uppercase text-red-700 my-3 font-semibold'>
                {item.article}
              </h6>
              <h5 className='text-3xl uppercase font-bold'>{item.title}</h5>
              <p className='text-gray-600 leading-normal'>{item.subtitle}</p>
              {item.desc.map((item, i) => {
                return (
                  <div key={i} className='flex my-6 '>
                    <i
                      className={`${item.icon} text-2xl mr-3 text-red-700`}
                    ></i>
                    <div>
                      <h3 className='text-2xl font-bold'>{item.title}</h3>
                      <p className='text-gray-700 leading-normal'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </BackgroundAttach>
  )
}

export const Box2 = () => {
  return (
    <BackgroundAttach bg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKVSb4CHkO5FFvvfwhIwG_UpIl7s2NvAIyg&usqp=CAU'>
      {AboutBox2.map((item, i) => {
        return (
          <div
            className='mx-auto md:max-w-screen-xl flex items-center justify-end'
            key={i}
          >
            <div className='bg-white p-8 max-w-xl mx-2 lg:mx-0'>
              <h6 className='text-xl uppercase text-red-700 my-3 font-semibold'>
                {item.article}
              </h6>
              <h5 className='text-4xl uppercase font-bold'>{item.title}</h5>
              <p className='text-gray-600 leading-normal'>{item.subtitle}</p>
              {item.desc.map((item, i) => {
                return (
                  <div key={i} className='flex my-6 '>
                    <i
                      className={`${item.icon} text-2xl mr-3 text-red-700`}
                    ></i>
                    <div>
                      <h3 className='text-2xl font-bold'>{item.title}</h3>
                      <p className='text-gray-700 leading-normal'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </BackgroundAttach>
  )
}
