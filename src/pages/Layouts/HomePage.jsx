
import HomeBanner from "@/Components/HomePageComp/banner"
import BannerByRaji from "@/Components/HomePageComp/bannerByRaji"
import CardSection from "@/Components/HomePageComp/cardSectionBanner"
import NewFlexSection from "@/Components/HomePageComp/newFlexComp"

const { default: NavBar } = require("@/Components/NavBar")
const { default: Footer } = require("@/Components/Footer")
import { FaWhatsappSquare } from "react-icons/fa";

const HomePage=()=>{

    const handleWhatsAppRedirect = () => {
        window.open('https://wa.me/8122183129?text=Hi, ', '_blank');
      };

    return (<div className="w-[100%] bg-white">

         <NavBar />
         <div className="bg-gradient-to-r from-white via-purple-50 to-purple-50">
         {/* <HomeBanner/> */}
         <BannerByRaji/>
        <CardSection/>
        <NewFlexSection/>     
        
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          
          
            <div className="bg-gradient-to-r from-[#44d0e2] via-[#59d7e7]  to-purple-400 relative h-64 w-full pl-12 pt-12">
              <span className="absolute h-12 w-12 border border-[#9ee4e4] bottom-1 sm:bottom-2 left-1 sm:left-6 rounded-full"></span>
              <span className="absolute h-[80px]  w-[80px] border border-[#9fe9e9] top-3 right-1 md:right-6 rounded-full"></span>
              <h1 className="underline text-[white] font-semibold">Frontend Development</h1>
              <p className="mt-6 text-[20px] font-bold text-white pr-3 ">Craft stunning, responsive interfaces with our expert Frontend Development.</p>
            </div>


            <div className="bg-gradient-to-r from-purple-400 via-[#59d7e7]  to-[#44d0e2] h-64 w-full pl-12 pt-12 relative">
              <span className="absolute h-[70px]  w-[70px] border border-[#9ee4e4] bottom-3 right-1 md:right-6 rounded-full"></span>
              <span className="absolute h-[50px] w-[50px] border border-[#9fe9e9] top-1 left-1 rounded-full"></span>
              <h1 className="underline text-[white] font-semibold">Mobile App Development</h1>
              <p className="mt-6 text-[20px] font-bold text-blue-50 pr-3">Create versatile mobile applications with our in-depth Hybrid Mobile App Development.</p>
            </div>
            <div className="bg-gradient-to-r from-[#44d0e2] via-[#59d7e7]  to-purple-400 relative h-64 w-full pl-12 pt-12">
              <span className="absolute h-12 w-12 border border-[#9ee4e4] bottom-1 sm:bottom-2 left-1 sm:left-6 rounded-full"></span>
              <span className="absolute h-[80px]  w-[80px] border border-[#9fe9e9] top-3 right-1 md:right-6  rounded-full"></span>
              <h1 className="underline text-[white] font-semibold">Backend Development </h1>
              <p className="mt-6 text-[20px] font-bold  text-white pr-3 ">Build robust, scalable server-side applications with our comprehensive Backend Development.</p>
            </div>
  
      </div>
      <FaWhatsappSquare
      onClick={handleWhatsAppRedirect}
       className={'fixed top-[46%] animate-bounce right-2 sm:right-6 text-[#34db80] bg-white text-[50px] rounded-md cursor-pointer'}/>
    <Footer/>
    </div>)
}
export default HomePage