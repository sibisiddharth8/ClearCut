import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-3'>
      <Link to='/'><div className='text-zinc-800 font-bold text-[20px] py-2 sm:py-3' >ClearCut</div></Link>
      <button className=' bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
        Get Started 
        <img className='w-3' src={assets.arrow_icon} alt="" />
      </button>
    </div>
  )
}

export default Navbar
