import Carousel from "@/Components/Carousel"
import FlexSection from "@/Components/HomePageComp/FlexComp"
import FlexPageCards from "@/Components/HomePageComp/FlexPageCards"
import NewFlexSection from "@/Components/HomePageComp/newFlexComp"

const { default: NavBar } = require("@/Components/NavBar")
const { default: Footer } = require("@/Components/Footer")

const HomePage=()=>{


    return (<div className="w-[100%] bg-white">
         <NavBar/>
         
         <Carousel/>
        <div className="w-[100%] md:w-[90%] mx-auto">
        <div className="flex flex-wrap justify-center">
      <div className="w-[90%] md:w-64 p-6 m-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-[#fc5fcd]">Learn Full Stack Development</h2>
        <p>Start your journey to becoming a full stack developer!</p>
      </div>
      <div className="w-[90%] md:w-64 p-6 m-4  rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-[#b036e9]">Mobile App Development</h2>
        <p>Explore the world of mobile app development!</p>
      </div>
      <div className="w-[90%] md:w-64 p-6 m-4  rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-[#39b0d4]">Real-time Projects</h2>
        <p>Learn frontend, backend, and database technologies through real-time projects.</p>
      </div>
    </div>
        {/* <FlexPageCards/> */}
        {/* <FlexSection/> */}
        <NewFlexSection/>
       
        
    </div>
    <Footer/>
    </div>)
}
export default HomePage