import React from 'react'
import Image from 'next/image'
import Img from '../images/TechLady.jpg'
import Typewriter from "typewriter-effect";

import Img1 from '../images/TabTouch.jpg'
import Img2 from '../images/WorkingLady.jpg'
import Img3 from '../images/NewEarth.jpg'
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
    <div className="relative pt-5 sm:min-h-[300px] flex flex-col items-center justify-center" >
    
     
          <h1  className='bg-gradient-to-r p-3 sm:p-0 from-blue-600 to-indigo-500 text-transparent bg-clip-text text-[19px] font-bold underline'>Wlecome To SiteOcean</h1>
          <h2  className="bg-gradient-to-r from-blue-600 via-green-600 to-indigo-500 text-transparent bg-clip-text font-serif font-bold text-[16px]  sm:text-[25px] text-center w-[92%] sm:w-[70%] lg:w-[50%] mx-auto my-auto">
          "We're dedicated to making all businesses accessible online, so that customers can easily find and connect with them from anywhere, at any time, empowering businesses to thrive in the digital era".
        </h2>
    </div>
  )
}

export default Carousel
