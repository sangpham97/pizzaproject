import React from 'react'
import Button from './Button'
import TextField from './TextField'

export default function ContactForm() {
  return (
    <div className='max-w-screen-xl mx-auto my-10 rounded-full'>
      <div className='grid md:grid-cols-5 grid-cols-1 rounded-lg'>
        <div className='md:col-span-2 bg-gray-200'>
          <Left />
        </div>
        <div className='md:col-span-3'>
          <Right />
        </div>
      </div>
    </div>
  )
}

export const Left = () => {
  return (
    <div className='p-3 flex flex-col '>
      <div className='mb-8 '>
        <h4 className='text-4xl uppercase font-semibold'>Corporate Office</h4>
        <ul>
          <li className='text-md my-1'>
            <i className='fas fa-map-marker-alt text-red-700 text-xl mr-3'></i>
            Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.
          </li>
          <li className='text-md my-1'>
            <i className='fas fa-phone text-red-700 text-xl mr-3'></i>
            +39 123 456 7890
          </li>
          <li className='text-md my-1'>
            <i className='fas fa-envelope-open text-red-700 text-xl mr-3'></i>
            mail@example.com
          </li>
        </ul>
      </div>
      <div className='mb-8'>
        <h4 className='text-4xl uppercase font-semibold my-1'>
          Press Inquiries
        </h4>
        <h5 className='text-2xl uppercase font-semibold my-1'>Matteo Damian</h5>
        <ul className=' text-xl my-1'>
          <li className='text-md'>
            <i className='fas fa-phone text-red-700 text-xl mr-3'></i>
            +39 123 456 7890
          </li>
          <li className='text-md'>
            <i className='fas fa-envelope-open text-red-700 text-xl mr-3'></i>
            mail@example.com
          </li>
        </ul>
      </div>
      <div className='my-3 max-w-xs '>
        <h4 className='text-4xl uppercase font-semibold mb-7'>
          stay connected
        </h4>
        <ul className='flex text-xl text-red-700 justify-evenly'>
          <li>
            <i className='fab fa-twitter'></i>
          </li>
          <li>
            <i className='fab fa-facebook'></i>
          </li>
          <li>
            <i className='fab fa-instagram'></i>
          </li>
          <li>
            <i className='fab fa-youtube'></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export const Right = () => {
  return (
    <form className='p-3'>
      <h4 className='text-4xl uppercase font-semibold'>
        We love to hear from you
      </h4>
      <p className='text-sm  '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className='md:flex md:items-center'>
        <TextField labelName='name' type='text' />
      </div>
      <div className='md:flex md:items-center '>
        <TextField labelName='email' type='email' />
        <TextField labelName='phone number' type='number' />
      </div>
      <div className='md:flex md:items-center  '>
        <TextField labelName='subject' type='text' />
        <span className='my-2 ml-4'>
          <select id='restaurant' className=' border-2 border-gray-300 p-2'>
            <option value=''>Select a restaurant</option>
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
          </select>
        </span>
      </div>
      <div className='flex flex-col my-3'>
        <label className='capitalize text-md font-semibold'>
          comment or message
        </label>
        <textarea
          id=''
          cols='30'
          rows='10'
          className='border-2 border-gray-300'
        ></textarea>
      </div>
      <Button>submit</Button>
    </form>
  )
}
