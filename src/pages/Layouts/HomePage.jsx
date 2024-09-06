
import HomeBanner from "@/Components/HomePageComp/banner"
import CardSection from "@/Components/HomePageComp/cardSectionBanner"
import NewFlexSection from "@/Components/HomePageComp/newFlexComp"

const { default: NavBar } = require("@/Components/NavBar")
const { default: Footer } = require("@/Components/Footer")

const HomePage=()=>{

    return (<div className="w-[100%] bg-white">

         <NavBar />
         <div className="bg-gradient-to-r from-white via-purple-50 to-purple-50">
         <HomeBanner/>
        <CardSection/>
        <NewFlexSection/>     
        
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          
          <div className="bg-gradient-to-r from-blue-100 relative to-[#59d7e7] h-64 w-full pl-12 pt-12">
              <span className="absolute h-12 w-12 border border-[#59d7e7] bottom-2 left-6 rounded-full"></span>
              <span className="absolute h-[80px] w-[80px] border border-[#74f8f1] top-3 right-6 rounded-full"></span>
              <h1 className="underline text-[white] font-semibold">Frontend Development</h1>
              <p className="mt-6 text-[20px] font-bold text-gray-600 pr-3">Craft stunning, responsive interfaces with our expert Frontend Development.</p>
            </div>
            <div className="bg-gradient-to-r from-[#59d7e7] relative to-indigo-100 h-64 w-full pl-12 pt-12">
              <span className="absolute h-[70px] w-[70px] border border-[#59d7e7] bottom-3 right-6 rounded-full"></span>
              <span className="absolute h-[50px] w-[50px] border border-[#74f8f1] top-1 left-1 rounded-full"></span>
              <h1 className="underline text-[white] font-semibold">Mobile App Development</h1>
              <p className="mt-6 text-[20px] font-bold text-blue-50 pr-3">Create versatile mobile applications with our in-depth Hybrid Mobile App Development.</p>
            </div>
            <div className="bg-gradient-to-r from-[#59d7e7] to-blue-100 relative h-64 w-full pl-12 pt-12">
              <span className="absolute h-12 w-12 border border-[#74f8f1] bottom-2 left-6 rounded-full"></span>
              <span className="absolute h-[80px] w-[80px] border border-[#99a0a0] top-3 right-6 rounded-full"></span>
              <h1 className="underline text-[white] font-semibold">Backend Development </h1>
              <p className="mt-6 text-[20px] font-bold text-gray-600 pr-3">Build robust, scalable server-side applications with our comprehensive Backend Development.</p>
            </div>
  
      </div>
    <Footer/>
    </div>)
}
export default HomePage