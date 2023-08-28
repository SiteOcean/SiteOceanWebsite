import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {

  const router = useRouter()
  return (
    <footer className="bg-white text-gray-600 py-2 border-t sm:py-4">
      <div className="container mx-auto px-4 w-[80%]">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left p-3">
            <h2 className=" text-lg font-bold leading-tight mb-2">Site Ocean Private Limited</h2>
            <p className=" text-sm">Revolutionize Your Business's Online Presence with Our Products</p>
          </div>
          <div className="w-full md:w-1/4 text-center">

            <ul className="p-5 lg:p-7 w-full flex justify-around">
            <Link href="/">
                  <span style={{color:router.pathname === "/" ? "black" : "gray"}}  className=" md:m-2 underline hover:bg-gray-200  lg:px-3 lg:py-2 rounded-md text-md font-medium">Home</span>
                </Link>              
                <Link href="/Layouts/AboutPage">
                  <span style={{color:router.pathname === "/Layouts/AboutPage" ? "black" : "gray"}} className=" md:m-2 underline hover:bg-gray-200 hover:text-[#00cccc] lg:px-3 lg:py-2 rounded-md text-md font-medium">About</span>
                </Link>
                <Link href="/Layouts/ContactPage">
                  <span style={{color:router.pathname === "/Layouts/ContactPage" ? "black" : "gray"}} className=" md:m-2 underline hover:bg-gray-200 hover:text-[#00cccc] lg:px-3 lg:py-2 rounded-md text-md font-medium">Contact</span>
                </Link>            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className=" text-xl font-bold leading-tight mb-2">Social Media</h2>
            <ul className="list-reset">
              <li className="my-2"><a href="#" className=" hover: text-sm">Facebook</a></li>
              <li className="my-2"><a href="#" className=" hover: text-sm">Twitter</a></li>
              <li className="my-2"><a href="#" className=" hover: text-sm">Instagram</a></li>
            </ul>
          </div>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
