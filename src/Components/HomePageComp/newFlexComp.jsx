import React from 'react'
import Img from '../../images/TechLady.jpg'
import Image from 'next/image'

import Img1 from '../../images/TabTouch.jpg'
import Img2 from '../../images/WorkingLady.jpg'
import Img3 from '../../images/MobileInHand.jpg'

const NewFlexSection = () => {
  return (
   <div className=' text-[19px] text-gray-600'>
     <div className="flex flex-col-reverse sm:flex-row justify-center md:h-[90vh] items-center ">
      <div  className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        <h1 className="text-xl font-bold sm:w-[70%] mb-2 mx-auto">Learn Programming Languages to Launch Your Career in the IT Industry:</h1>
        <p data-aos="fade-zoom-in" className=" font-serif sm:w-[70%] mx-auto mb-4">Unlock your potential with our specialized programming training. Gain practical skills in key programming languages and get ready to excel in the IT industry. Our focused training sessions are designed to equip you with the essential knowledge and hands-on experience needed to thrive in the tech world.</p>
       
      </div>

      <div data-aos="fade-up" className="w-full lg:w-1/2 px-4 py-4 bg-white"
      >
      <img src={"/searchbarDesign.png"} width={300} height={120} alt='img' priority={true} className='w-full  h-[360px] sm:h-[390px] sm:w-[90%]  mx-auto my-auto rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row-reverse justify-center md:h-[90vh] items-center">    
      <div  className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        <h1 className="text-xl sm:w-[70%] mx-auto  font-bold mb-2">Comprehensive Full-Stack Training: Master Frontend, Backend, Database, and Cloud Deployment:</h1>
        <p data-aos="fade-zoom-in" className=" font-serif sm:w-[70%] mx-auto mb-4">Our full-stack training covers essential skills in frontend development, backend programming, database management, and cloud deployment. Gain practical experience in creating dynamic web applications, managing data efficiently, and deploying solutions to the cloud. Get ready to become a versatile developer with the expertise needed for today's tech landscape.</p>
      
      </div>

      <div data-aos="fade-up"  className="w-full lg:w-1/2 px-4 py-4">
      <img src={"/PinkInsta.png"} width={300} height={120} alt='img' priority={true} className='w-full  h-[360px] sm:h-[390px] sm:w-[90%]  mx-auto my-auto rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row justify-center md:h-[90vh] items-center">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        <h1 className="text-xl sm:w-[70%] mx-auto font-bold mb-2">Affordable Full-Stack Training: Real-Time Projects, Expert Guidance, and Job Assistance:</h1>
        <p data-aos="fade-zoom-in" className=" font-serif sm:w-[70%] mx-auto  mb-4">Our specialized full-stack training offers hands-on experience with real-time projects, guided by experienced developers, all at a competitive fee. Benefit from certified training designed to equip you with practical skills and industry knowledge. Additionally, we provide job assistance to help you transition smoothly into the tech industry, ensuring you’re well-prepared for your next career move.</p>

      </div>

      <div  data-aos="fade-up" className="w-full lg:w-1/2 px-4 py-4">
      <img src={"/online.png"} width={300} height={120} alt='img' priority={true} className='w-full  h-[360px] sm:h-[390px] sm:w-[90%]  mx-auto my-auto rounded-lg'/>
      </div>
      
    </div>
   </div>
  )
}

export default NewFlexSection
