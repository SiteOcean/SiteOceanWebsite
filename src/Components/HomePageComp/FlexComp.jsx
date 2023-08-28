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
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto mb-4">Create your own appsite within our platform and witness the rapid elevation of your business's online visibility, allowing you to reach a broader audience and thrive in the dynamic digital realm.</p>
       
      </div>

      <div className="w-full lg:w-1/2 px-4 py-4"
      >
      <Image src={Img1} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row-reverse justify-center">

 

      
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto mb-4">Customize your appsite with ease, tailoring it to your unique brand identity and seamlessly adding your products, services, and enticing offers. Take full control of your online presence and captivate your audience with a personalized appsite that truly represents your business.</p>
      
      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img2} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row justify-center ">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto  mb-4">Customizing every aspect, launch your business into the online world. Instantly share your offers with customers and maintain full control over your appsite's content, allowing you to update it anytime and from anywhere. This guarantees a dynamic, up-to-date, and highly relevant online presence that attracts a larger customer base and expands your business reach</p>

      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img3} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>
   </div>
  )
}

export default FlexSection
