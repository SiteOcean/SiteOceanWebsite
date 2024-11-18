import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function BannerByRaji (){

    return( 
        <div className='bg-gradient-to-r from-[#44d0e2] via-[#59d7e7]  to-purple-400 flex items-center justify-center min-h-[60vh] md:min-h-[90vh] relative mx-auto px-4 sm:px-6 lg:px-8'>
                   
                   <div className='bg-purple-600 relative md:w-[80%] mt-4 font-serif text-lg p-5 md:p-10 rounded-md shadow-lg'>
  <h2 className="tracking-wider mb-2">
    <ReactTypingEffect
      text={['Welcome to Siteocean!']}
      speed={100}
      eraseSpeed={40}
      typingDelay={200}
      className="text-lg font-bold md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-pink-300 to-purple-100"
    />
  </h2>
  <p className='text-white'>
    At Siteocean Pvt Ltd, we are redefining how businesses connect with customers. Our hyper-local search engine app empowers businesses to showcase their products and services in real-time, making it easier for customers to find the best local offerings. We aim to bridge the gap between local businesses and their customers, ensuring that businesses stay visible and accessible, and users can discover nearby products and services instantly.
  </p>

  <div className='absolute top-0 -right-0'>
    <div className='relative w-[50px] h-[50px] border-r-2 border-t-2 border-white rounded-tr-md'></div>
  </div>

  <div className='absolute bottom-0 left-0'>
    <div className='relative w-[50px] h-[50px] border-l-2 border-b-2 border-white rounded-bl-md'></div>
  </div>
</div>


{/* rounded */}
<div className='hidden md:block'>
            <div className='border-2 rounded-full w-[80px] h-[80px] absolute right-1 top-1'></div>
            <div className='border-2 rounded-full w-[50px] h-[50px] absolute right-20 top-14'></div>
            <div className='hidden lg:block border-2 rounded-full w-[30px] h-[30px] absolute right-32 top-24'></div>
            <div className='border-2 rounded-full w-[80px] h-[80px] absolute left-1 bottom-1'></div>
            <div className='border-2 rounded-full w-[50px] h-[50px] absolute left-20 bottom-14'></div>
            <div className='hidden lg:block border-2 rounded-full w-[30px] h-[30px] absolute left-32 bottom-24'></div>
           </div>      
                </div>
                )
}