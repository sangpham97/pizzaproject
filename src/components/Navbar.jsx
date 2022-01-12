import React, { useState } from 'react'
import { navLinks } from '../utils'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between pt-3 max-w-screen-xl mx-auto text-white relative'>
      <span className='hidden md:flex md:items-center'>
        <SocialLinks color='text-white' />
      </span>
      <div className='flex flex-col items-center'>
        <h3 className='text-3xl capitalize italic'>the pizzeria</h3>
        <ul className='md:flex mt-6 hidden'>
          {navLinks.map((link, i) => {
            return (
              <li key={i} className='text-md uppercase mx-2 '>
                <Link to={link.to}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='md:flex md:items-center hidden'>
        <button className='rounded-md px-6 py-2 font-semibold text-md uppercase hover:text-gray-800 hover:bg-white'>
          order online
        </button>
      </div>
      <div
        className='flex items-center md:hidden mr-3'
        onClick={() => setToggle(!toggle)}
      >
        <i className='fas fa-bars '></i>
        <SideBar toggle={toggle} setToggle={setToggle} />
      </div>
    </nav>
  )
}

export const SideBar = ({ toggle, setToggle }) => {
  return (
    <ul
      className={
        toggle
          ? 'bg-white left-0 top-0 absolute  w-2/3 transition ease-in-out'
          : 'absolute top-0 -left-40 transition ease-in-out '
      }
    >
      {navLinks.map((link, i) => {
        return (
          <li
            key={i}
            className='text-xl capitalize mx-2 text-gray-800 my-4 ml-3'
          >
            <Link to={link.to} onClick={() => setToggle(false)}>
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
