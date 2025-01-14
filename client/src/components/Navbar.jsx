import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <button>
        Get Started <img src={assets.arrow_icon} alt="" />
      </button>
    </div>
  )
}

export default Navbar
