import React from 'react'

export default function TextField({ labelName, type }) {
  return (
    <div className='flex flex-col'>
      <label className='capitalize font-semibold text-md my-2'>
        {labelName}
      </label>
      <input
        type={type}
        className='w-auto my-2 ml-4 p-2 border-gray-300 border-2'
      />
    </div>
  )
}
