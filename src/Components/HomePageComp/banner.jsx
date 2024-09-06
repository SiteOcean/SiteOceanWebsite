import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

const HomeBanner = () => {


  return (
    <div className="relative bgimg  w-full md:min-h-[90vh] pt-8 pb-3 md:pt-6 flex flex-col md:items-center md:justify-center" >
    
  
          <h2  className="text-[#1b5161]  font-serif font-bold text-[14px]  sm:text-[23px] md:text-[18px] md:text-left w-[90%] sm:w-[85%] lg:w-[75%] mx-auto my-auto tracking-wider">
          <ReactTypingEffect
          text={[
            'SITEOCEAN Welcomes You',
          ]}
          speed={110}
          eraseSpeed={30}
          typingDelay={300}
          className="bg-gradient-to-r  sm:p-0 from-[#3db9d8] via-purple-500 to-pink-400 text-transparent bg-clip-text text-[15px] md:text-[30px] "
        />
        
        <br></br>Siteocean Pvt Ltd is an innovative IT startup committed to pushing the boundaries of technology. We are developing a cutting-edge hyper-local search engine app designed to bring businesses closer to their customers with real-time, location-based offerings. In addition to our product development, we are dedicated to nurturing the next generation of IT professionals by providing comprehensive training programs. Our courses in MERN stack, Java full stack, Python full stack, digital marketing, C, and C++ are tailored to help freshers and students successfully launch their careers in the ever-evolving IT industry.
        </h2>
    </div>
  )
}

export default HomeBanner
