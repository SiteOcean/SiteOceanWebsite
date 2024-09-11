import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function BannerByRaji (){

    return( 
        <div className='bg-gradient-to-r from-[#44d0e2] via-[#59d7e7]  to-purple-400 flex items-center justify-center min-h-[90vh] relative mx-auto px-4 sm:px-6 lg:px-8'>
                   
                    <div className='bg-purple-500 relative  md:w-[80%] mt-2 font-serif text-lg p-3.5 md:p-10 rounded-lg'>
                    <h2  className="tracking-wider mb-1">
          <ReactTypingEffect
          text={[
            'SITEOCEAN Welcomes You',
          ]}
          speed={110}
          eraseSpeed={30}
          typingDelay={300}
          className="text-lg font-bold md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-pink-200 to-violet-200 z-50 "
        />
        </h2>
                    <p className='text-white'>Siteocean Pvt Ltd is an innovative IT startup committed to pushing the boundaries of technology. We are developing a cutting-edge hyper-local search engine app designed to bring businesses closer to their customers with real-time, location-based offerings. In addition to our product development, we are dedicated to nurturing the next generation of IT professionals by providing comprehensive training programs. Our courses in MERN stack, Java full stack, Python full stack, digital marketing, C, and C++ are tailored to help freshers and students successfully launch their careers in the ever-evolving IT industry.</p>

                    <div className='absolute top-0 -right-0 '>
                        <div className='relative w-[50px] h-[50px]  border-r-2 border-t-2 rounded-md'></div>
                    </div>
                   
                    <div className='absolute bottom-0 left-0 '>
                        <div className='relative w-[50px] h-[50px] border-l-2 border-b-2 rounded-md'></div>
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