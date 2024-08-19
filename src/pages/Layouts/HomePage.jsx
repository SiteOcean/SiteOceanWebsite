import Carousel from "@/Components/Carousel"
import FlexSection from "@/Components/HomePageComp/FlexComp"
import FlexPageCards from "@/Components/HomePageComp/FlexPageCards"
import NewFlexSection from "@/Components/HomePageComp/newFlexComp"

const { default: NavBar } = require("@/Components/NavBar")
const { default: Footer } = require("@/Components/Footer")

const HomePage=()=>{


    return (<div className="w-[100%] bg-white">
         <NavBar/>
         <div className="bg-gradient-to-r from-white via-slate-50 to-green-50">
         <Carousel/>
        <div className="w-[100%] md:w-[90%]  mx-auto">
        <div className="flex flex-wrap justify-center ">
      <div className="w-[90%] md:w-64 p-6 m-4 rounded-lg shadow-md hover:scale-105 duration-500 bg-[#ff93de] text-[#724669]">
        <h2 className="text-xl font-bold text-[#9b2891]">Learn Full Stack Development</h2>
        <p>Start your journey to becoming a full stack developer!</p>
      </div>
      <div className="w-[90%] md:w-64 p-6 m-4  rounded-lg shadow-md hover:scale-105 duration-500 bg-[#d1fd57] text-[#7b8a54]">
        <h2 className="text-xl font-bold text-[#3c9126]">Mobile App Development</h2>
        <p>Explore the world of mobile app development!</p>
      </div>
      <div className="w-[90%] md:w-64 p-6 m-4  rounded-lg shadow-md hover:scale-105 duration-500 bg-[#7cf6ff] text-[#386669]">
        <h2 className="text-xl font-bold text-[#2c748a]">Real-time Projects</h2>
        <p>Learn frontend, backend, and database technologies through real-time projects.</p>
      </div>
    </div></div>

   
        {/* <FlexPageCards/> */}
        {/* <FlexSection/> */}
        <NewFlexSection/>     
        
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          
          <div className="bg-gradient-to-r from-blue-50 relative to-blue-300 h-64 w-full pl-12 pt-12">
              <span className="absolute h-12 w-12 border border-[#9ebdff] bottom-2 left-6 rounded-full"></span>
              <span className="absolute h-[80px] w-[80px] border border-[#74f8f1] top-3 right-6 rounded-full"></span>
              <h1 className="underline text-blue-900">Frontend Development</h1>
              <p className="mt-6 text-[20px] font-bold text-indigo-600 pr-3">Craft stunning, responsive interfaces with our expert Frontend Development.</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 relative to-indigo-200 h-64 w-full pl-12 pt-12">
              <span className="absolute h-[70px] w-[70px] border border-[#9ebdff] bottom-3 right-6 rounded-full"></span>
              <span className="absolute h-[50px] w-[50px] border border-[#74f8f1] top-1 left-1 rounded-full"></span>
              <h1 className="underline text-blue-900">Mobile App Development</h1>
              <p className="mt-6 text-[20px] font-bold text-blue-50 pr-3">Create versatile mobile applications with our in-depth Hybrid Mobile App Development.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-300 to-blue-50 relative h-64 w-full pl-12 pt-12">
              <span className="absolute h-12 w-12 border border-[#9ebdff] bottom-2 left-6 rounded-full"></span>
              <span className="absolute h-[80px] w-[80px] border border-[#74f8f1] top-3 right-6 rounded-full"></span>
              <h1 className="underline text-blue-900">Backend Development </h1>
              <p className="mt-6 text-[20px] font-bold text-indigo-600 pr-3">Build robust, scalable server-side applications with our comprehensive Backend Development.</p>
            </div>
  
      </div>
    <Footer/>
    </div>)
}
export default HomePage