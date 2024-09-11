import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-white w-full text-gray-600 py-2 border-t sm:py-4">
      <div className="container mx-auto px-4 w-[80%]">
        <div className="flex flex-wrap items-center justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 text-center md:text-left p-3">
            <h2 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#43d7eb] via-[#59d7e7] to-purple-500 font-bold leading-tight mb-2">
              Site Ocean Private Limited
            </h2>
            <p className="text-sm">
              Coming Soon: Revolutionize Your Business's Online Presence with Our Innovative App
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 text-center">
            <ul className="p-5 lg:p-7 w-full flex justify-around">
              <li onClick={() => navigateTo('/')} className="cursor-pointer">
                <span
                  className={`md:m-2 underline hover:bg-gray-200 lg:px-3 lg:py-2 rounded-md text-md font-medium ${
                    router.pathname === '/' ? 'text-[#59d7e7]' : 'text-gray-600'
                  }`}
                >
                  Home
                </span>
              </li>
              <li onClick={() => navigateTo('/Layouts/AboutPage')} className="cursor-pointer">
                <span
                  className={`md:m-2 underline hover:bg-gray-200 lg:px-3 lg:py-2 rounded-md text-md font-medium ${
                    router.pathname === '/Layouts/AboutPage' ? 'text-[#59d7e7]' : 'text-gray-600'
                  }`}
                >
                  About
                </span>
              </li>
              <li onClick={() => navigateTo('/Layouts/ContactPage')} className="cursor-pointer">
                <span
                  className={`md:m-2 underline hover:bg-gray-200 lg:px-3 lg:py-2 rounded-md text-md font-medium ${
                    router.pathname === '/Layouts/ContactPage' ? 'text-[#59d7e7]' : 'text-gray-600'
                  }`}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#43d7eb] via-[#59d7e7] to-purple-500 text-lg font-bold leading-tight mb-2 capitalize">
              social media
            </div>
            <ul className="list-reset md:flex gap-x-6">
              <li className="my-2">
                <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#43d7eb] via-[#59d7e7] to-purple-500 text-sm">
                  Facebook
                </span>
              </li>
              <li className="my-2">
                <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#43d7eb] via-[#59d7e7] to-purple-500 text-sm">
                  Twitter
                </span>
              </li>
              <li className="my-2">
                <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#43d7eb] via-[#59d7e7] to-purple-500 text-sm">
                  Instagram
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
