import React from 'react'
import Image from 'next/image'
import Img from '../images/TechLady.jpg'
import ReactTypingEffect from 'react-typing-effect';

import Img1 from '../images/TabTouch.jpg'
import Img2 from '../images/WorkingLady.jpg'
const Carousel = () => {
  const images = [
    {src: Img1, alt: 'Image 1',content:" we're dedicated to making all businesses accessible online, so that customers can easily find and connect with them from anywhere, at any time",color:"#00cccc"},
    {src: Img2, alt: 'Image 2',content:"We've developed a local search engine app to help you discover and connect with your local business community.",color:"red"},
    {src: Img, alt: 'Image 3',content:"Everyone can create an appSite that helps businesses succeed in the competitive world of online marketing.",color:"blue"},
 
  ]

  const [activeImage, setActiveImage] = React.useState(0)

  const handleNext = () => {
    setActiveImage((activeImage + 1) % images.length)
  }

  const handlePrev = () => {
    setActiveImage((activeImage - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full md:min-h-[50vh] pt-8 md:pt-6 flex flex-col md:items-center md:justify-center" >
    
  
          <h2  className="text-gray-500 md:text-gray-500 font-serif font-bold text-[14px]  sm:text-[23px] md:text-[18px] md:text-left w-[90%] sm:w-[85%] lg:w-[75%] mx-auto my-auto tracking-wider">
          <ReactTypingEffect
          text={[
            'Exploring Innovation: A Warm Welcome',
            // 'Siteocean Pvt Ltd: Innovating with Hyper-Local App',
            // 'Empowering Freshers and Students with IT Career Training',
            // 'Join Us at Siteocean Pvt Ltd to Kickstart Your IT Career'
          ]}
          speed={110}
          eraseSpeed={30}
          typingDelay={300}
          className="bg-gradient-to-r sm:p-0 from-[#c9be2c] via-pink-500 to-indigo-500 text-transparent bg-clip-text text-[15px] md:text-[30px] "
        />
        
        <br></br>Siteocean Pvt Ltd is an innovative IT startup committed to pushing the boundaries of technology. We are developing a cutting-edge hyper-local search engine app designed to bring businesses closer to their customers with real-time, location-based offerings. In addition to our product development, we are dedicated to nurturing the next generation of IT professionals by providing comprehensive training programs. Our courses in MERN stack, Java full stack, Python full stack, digital marketing, C, and C++ are tailored to help freshers and students successfully launch their careers in the ever-evolving IT industry.
        </h2>
    </div>
  )
}

export default Carousel
