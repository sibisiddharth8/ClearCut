import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 mt-10'>
      <div className=''>
        <h1 className='text-4xl xl:text-6xl 2xl:text-7xl font-bold text-neutral-700 leading-tight'>
        Remove the <br className='max-md:hidden'/> 
        <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background </span> 
        from <br className='max-md:hidden'/> 
        images for free.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='max-md:hidden'/>
          Consectetur, sunt repellat? Nihil voluptatem fugit adipisci.
        </p>
        <div>
          <input type="file" name='' id='upload1' hidden/>
          <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm'>Upload Your Image</p>
          </label>
        </div>
      </div>
      <div className='flex justify-center'>
        <img className='w-full max-w-md' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
