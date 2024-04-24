import React from 'react'
import Img from '../../images/TechLady.jpg'
import Image from 'next/image'

import Img1 from '../../images/TabTouch.jpg'
import Img2 from '../../images/WorkingLady.jpg'
import Img3 from '../../images/MobileInHand.jpg'

const NewFlexSection = () => {
  return (
   <div className='mt-12 md:pb-12 text-[19px]'>
     <div className="flex flex-col-reverse sm:flex-row justify-center">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-[#652579] font-serif sm:w-[70%] mx-auto mb-4">Learn the MERN stack: MongoDB, Express.js, React, and Node.js - a complete JavaScript-based toolkit for building full-stack web applications.</p>
       
      </div>

      <div className="w-full lg:w-1/2 px-4 py-4"
      >
      <Image src={Img1} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row-reverse justify-center">

 

      
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-[#652579] font-serif sm:w-[70%] mx-auto mb-4">Learn mobile app development with React Native, utilizing its versatility to craft dynamic applications for iOS and Android. Seamlessly integrate backend languages like Node.js or Python for robust functionality. Master the art of cross-platform development and bring your ideas to life.</p>
      
      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img2} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row justify-center ">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-[#652579] font-serif sm:w-[70%] mx-auto  mb-4">Learn Real-Time Web Development with React.js for dynamic user interfaces, Next.js for server-rendered applications, React Native for cross-platform mobile development, Node.js for scalable backend solutions, and MongoDB for flexible NoSQL database management. Dive into hands-on projects to master these technologies and create responsive, real-time web applications.</p>

      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img3} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>
   </div>
  )
}

export default NewFlexSection
