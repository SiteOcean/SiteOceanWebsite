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
    
  
          <h2  className="text-gray-500 md:text-gray-500 font-serif font-bold text-[14px]  sm:text-[23px] md:text-[18px] md:text-center w-[90%] sm:w-[85%] lg:w-[60%] mx-auto my-auto">
          <ReactTypingEffect
          text={['Exploring Innovation: A Warm Welcome']}
          speed={110}
          eraseSpeed={60}
          typingDelay={500}
          className="bg-gradient-to-r sm:p-0 from-[#c9be2c] via-pink-500 to-indigo-500 text-transparent bg-clip-text text-[15px] md:text-[30px]"
        />
        
        <br></br>We're a startup dedicated to creating a cutting-edge platform that revolutionizes online presence for businesses. Experience the power of digital accessibility and seamless connectivity, empowering businesses to thrive in the dynamic and interconnected digital landscape, unlocking unprecedented growth and success in the online realm.
        </h2>
    </div>
  )
}

export default Carousel
