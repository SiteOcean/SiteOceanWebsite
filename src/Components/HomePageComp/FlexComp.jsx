import React from 'react'
import Img from '../../images/TechLady.jpg'
import Image from 'next/image'

import Img1 from '../../images/TabTouch.jpg'
import Img2 from '../../images/WorkingLady.jpg'
import Img3 from '../../images/MobileInHand.jpg'

const FlexSection = () => {
  return (
   <div className='mt-12 md:pb-12'>
     <div className="flex flex-col-reverse sm:flex-row justify-center">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto mb-4">online store app that's dedicated to providing a seamless shopping experience to our users. Our team of experts has developed a powerful and intuitive platform that enables you to browse and purchase products from your favorite retailers, all in one place.</p>
       
      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img1} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row-reverse justify-center">

 

      
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto mb-4">we understand that online shopping can be overwhelming, which is why we've made it our mission to simplify the process. Our app is designed to be user-friendly and intuitive, with powerful search capabilities that enable you to find the products you're looking for quickly and easily.</p>
      
      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img2} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row justify-center ">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto  mb-4">In our app, Everyone can be able to create online store or service AppSite with ease and convenience, anytime and anywhere.</p>

      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img3} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>
   </div>
  )
}

export default FlexSection
