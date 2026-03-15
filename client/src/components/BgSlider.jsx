import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {


const [sliderPosition, setsliderPosition]=useState(40)
const handlerSliderChange=(e)=>{
    setsliderPosition(e.target.value)
}
  return (



    <div className='pb-10 md:py-20 mx-2'>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-400 bg-clip-text text-transparent  mb-12 sm:mb-20  mr-20 ml-20 '>Remove Backgroumd with High<br/>
      Quality and Accuracy</h1>


      <div className=' relative w-100 m-auto max-x-3xl overflow-hidden  rounded-xl'>
        {/* background image */}
        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2-sliderPosition}%0 0)`}} alt="" />

        {/* forground image */}

        <img className='absolute top-0 left-0 w-full h-full ' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="" />

        {/* slider */}
        <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handlerSliderChange} />
      </div>
    </div>
  )
}

export default BgSlider


// 53:00