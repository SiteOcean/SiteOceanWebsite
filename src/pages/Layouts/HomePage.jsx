import Carousel from "@/Components/Carousel"
import FlexSection from "@/Components/HomePageComp/FlexComp"
import FlexPageCards from "@/Components/HomePageComp/FlexPageCards"

const { default: NavBar } = require("@/Components/NavBar")
const { default: Footer } = require("@/Components/Footer")

const HomePage=()=>{


    return (<div className="w-full bg-white">
         <NavBar/>
         <Carousel/>
        <div className="w-[100%] sm:w-[90%] mx-auto">
       
        <FlexPageCards/>
        <FlexSection/>
       
        
    </div>
    <Footer/>
    </div>)
}
export default HomePage