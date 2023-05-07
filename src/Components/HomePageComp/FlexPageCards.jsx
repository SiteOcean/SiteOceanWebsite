import Image from 'next/image'
import React from 'react'

import Img from '../../images/TechLady.jpg'
import Img1 from '../../images/Andrea.jpg'
import Img2 from '../../images/CodeDisplay.jpg'
import Img3 from '../../images/ShopersCouple.jpg'
const FlexPageCards = () => {
  return (
    <div className='min-h-[50vh]'>
      <div className="flex flex-wrap justify-center text-white">
      <div className="bg-gradient-to-r from-[#6b6bf7] to-[#d1a0f5] shadow-md mx-4 my-4 rounded-lg overflow-hidden w-[250px] h-[250px] flex flex-col items-center justify-center">
        <h1 className="font-serif font-bold text-[19px]">App Users</h1>
        <p className=' font-sans text-[15px]'>Launching Soon...</p>
      </div>

      <div className="bg-gradient-to-r from-[#d1a0f5]  to-[#6b6bf7]  shadow-md mx-4 my-4 rounded-lg overflow-hidden w-[250px] h-[250px] flex flex-col items-center justify-center">
        <h1 className="font-serif font-bold text-[19px]">Created Apps </h1>
        <p className='font-sans text-[15px]'>Launching Soon...</p>
      </div>

      <div className="bg-gradient-to-r  from-[#6b6bf7] to-[#d1a0f5]  shadow-md mx-4 my-4 rounded-lg overflow-hidden w-[250px] h-[250px] flex flex-col items-center justify-center">
        <h1 className="font-serif font-bold text-[19px]">Status Count</h1>
        <p className='font-sans text-[15px]'>Launching Soon...</p>
      </div>
     
    </div>
    </div>
  )
}

export default FlexPageCards
