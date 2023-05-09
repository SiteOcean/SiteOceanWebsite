import Link from 'next/link';
import { useRouter } from 'next/router';
import {AiOutlineMenu} from 'react-icons/ai'
const NavBar = () => {

  const router = useRouter()

  const handleNav=()=>{

    const id=document.getElementById("nav")
    id.classList.toggle("navnone")
  }
  return (
    <nav className="bg-gradient-to-r from-[#6b6bf7] to-[#d1a0f5]  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 p-1 sm:p-0 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-[60px] ">
          <div className="flex-1 flex flex-col sm:flex-row items-center relative justify-between sm:items-stretch ">
            
            {/* icon */}
            <div  className="sm:hidden flex-shrink-0 absolute top-1 right-5 ">
            
           <button onClick={handleNav} className='relative'><AiOutlineMenu className='text-[25px] text-white'/>
           <span className='animate-pulse w-2 h-2 absolute top-0 right-0 rounded-full bg-white'></span>
           </button>
            </div>

            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-white text-[23px]">SiteOcean</span>
              </Link>
            </div>

            <div id='nav' className=" nav sm:block sm:ml-6 ">
              <div className="flex flex-col justify-around min-h-[150px] sm:min-h-0 sm:flex-row ">
              <Link href="/">
                  <span style={{color:router.pathname === "/" ? "black" : "white"}} className="text-gray-100 md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md text-md font-medium">Home</span>
                </Link>
                <Link href="/Layouts/AboutPage">
                  <span style={{color:router.pathname === "/Layouts/AboutPage" ? "black" : "white"}} className="text-gray-100 md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md text-md font-medium">About</span>
                </Link>
                <Link href="/Layouts/ContactPage">
                  <span style={{color:router.pathname === "/Layouts/ContactPage" ? "black" : "white"}} className="text-gray-100 md:hover:bg-gray-200 hover:text-[#00cccc] px-3 py-2 rounded-md text-md font-medium">Contact</span>
                </Link>
              </div>
            </div>
            <span className='hidden sm:block w-[150px]'></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
