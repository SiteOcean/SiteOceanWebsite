import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()
  const timer = useRef(null);
  const handleNav=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenuOnBlur = () => {
    timer.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); 
  }

  return (
    <nav className="bg-gradient-to-r w-full bg-white text-stone-900  sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 p-1 sm:p-0 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-[60px] ">
          <div className="flex-1 flex flex-col px-5 md:px-1 sm:flex-row md:items-center relative justify-between sm:items-stretch ">
            
            {/* icon */}
            <div  className="sm:hidden flex-shrink-0 absolute top-1 right-5 ">
            
           <button onClick={handleNav}  onBlur={closeMenuOnBlur} className='relative'>
           <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
           </button>
            </div>

            <div className="flex-shrink-0">
              <Link href="/">
                <span className=" text-[23px]">SiteOcean</span>
              </Link>
            </div>

            <div id='nav' className="hidden sm:block sm:ml-6 text-gray-900">
              <div className="flex flex-col justify-around md:space-x-5 min-h-[150px]
               sm:min-h-0 sm:flex-row text-[19px] font-serif">
              <Link href="/">
                  <span style={{color:router.pathname === "/" ? "black" : "gray"}} className=" md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md ">Home</span>
                </Link>
                <Link href="/Layouts/AboutPage">
                  <span style={{color:router.pathname === "/Layouts/AboutPage" ? "black" : "gray"}} className=" md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md ">About</span>
                </Link>
                <Link href="/Layouts/ContactPage">
                  <span style={{color:router.pathname === "/Layouts/ContactPage" ? "black" : "gray"}} className=" md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md ">Contact</span>
                </Link>
              </div>
            </div>
            {/* <span className='hidden sm:block w-[150px]'></span> */}

            {isMenuOpen ? <div id='nav' className={`md:hidden border-t fixed transform-gpu transition-all text-center opacity-95 -z-10 left-0 min-h-[200px] font-bold right-0 py-3 duration-1500 bg-white ${isMenuOpen ? "translate-y-12 top-2" : "translate-y-12 -top-[250px]"}`}>

              <div className="flex flex-col space-y-6 font-serif">
              <Link href="/">
                  <span style={{color:router.pathname === "/" ? "black" : "gray"}} className=" md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md ">Home</span>
                </Link>
                <Link href="/Layouts/AboutPage">
                  <span style={{color:router.pathname === "/Layouts/AboutPage" ? "black" : "gray"}} className=" md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md ">About</span>
                </Link>
                <Link href="/Layouts/ContactPage">
                  <span style={{color:router.pathname === "/Layouts/ContactPage" ? "black" : "gray"}} className=" md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md ">Contact</span>
                </Link>
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
