import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex item-center jsutify-between gap-4 px-4 lg:px-44 py-3 '>
      <img src={assets.logo} alt="" />
      <p className='flex-1 border-l-1 px-4 border-gray-600 text-lg mt-1.5 text-gray-500 max-sm:hidden'>Copyright @Greastack.dev| All right reserved</p>
   
    <div className='flex gap-1'>
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
         </div>
   </div>
  )
}

export default Footer
