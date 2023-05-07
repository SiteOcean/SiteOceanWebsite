import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6b6bf7] to-[#d1a0f5] py-2 sm:py-4">
      <div className="container mx-auto px-4 w-[80%]">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left p-3">
            <h2 className="text-white text-xl font-bold leading-tight mb-2">SiteOcean</h2>
            <p className="text-gray-100 text-sm">Revolutionize Your Business's Online Presence with Our App</p>
          </div>
          <div className="w-full md:w-1/4 text-center">

            <ul className="p-5 lg:p-7 w-full flex justify-around">
            <Link href="/">
                  <span className="text-gray-100 md:m-2 underline hover:bg-gray-200  lg:px-3 lg:py-2 rounded-md text-md font-medium">Home</span>
                </Link>              
                <Link href="/Layouts/AboutPage">
                  <span className="text-gray-100 md:m-2 underline hover:bg-gray-200 hover:text-[#00cccc] lg:px-3 lg:py-2 rounded-md text-md font-medium">About</span>
                </Link>
                <Link href="/Layouts/ContactPage">
                  <span className="text-gray-100 md:m-2 underline hover:bg-gray-200 hover:text-[#00cccc] lg:px-3 lg:py-2 rounded-md text-md font-medium">Contact</span>
                </Link>            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-white text-xl font-bold leading-tight mb-2">Social Media</h2>
            <ul className="list-reset">
              <li className="my-2"><a href="#" className="text-gray-100 hover:text-white text-sm">Facebook</a></li>
              <li className="my-2"><a href="#" className="text-gray-100 hover:text-white text-sm">Twitter</a></li>
              <li className="my-2"><a href="#" className="text-gray-100 hover:text-white text-sm">Instagram</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
