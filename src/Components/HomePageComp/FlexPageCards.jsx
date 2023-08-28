import Image from 'next/image'
import React from 'react'

import Img from '../../images/TechLady.jpg'
import Img1 from '../../images/Andrea.jpg'
import Img2 from '../../images/CodeDisplay.jpg'
import Img3 from '../../images/ShopersCouple.jpg'
import Link from 'next/link'
const FlexPageCards = () => {
  return (
    <div className='pt-4 w-full'>
      <h1 className='text-center font-bold text-[25px] py-3 text-[gray] uppercase underline underline-offset-4'>Our Products</h1>
      <div  
      data-aos="fade-right"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className="grid grid-col-1 md:grid-cols-2 text-[#615d5d] justify-center ">
      <div className="hover:bg-[#f8f5f5] bg-white shadow-lg mx-4 my-4 border rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[blue] capitalize underline underline-offset-4">ApLook</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] '>Elevate your local experience with our Aplook, effortlessly searching and engaging with nearby businesses. Stay up-to-date with current services, events, offers and more, all in one place. Experience the future of seamless local exploration.</p>
        <Link href="https://aplook.in/" target="_blank" rel="noopener noreferrer" className={`px-1 md:px-3 py-1 rounded-md text-[#4646f1] mt-2 underline self-end`}>
          www.aplook.in
        </Link>
      </div>

      <div className="bg-gradient-to-r bg-white shadow-lg h-[100px] md:h-auto mx-4 my-4 border rounded-lg overflow-hidden flex flex-col items-center justify-center">
        <h1 className="font-serif font-bold text-[14px] md:text-[19px]">Scalable Solutions</h1>
        <p className='font-sans text-[12px] md:text-[15px]'>Grow your business with confidence.</p>
      </div>
     
    </div>
    </div>
  )
}

export default FlexPageCards
