import Footer from "@/Components/Footer"
import Banner from "@/Components/AboutPageComp/Banner"

const { default: NavBar } = require("@/Components/NavBar")


const AboutPage=()=>{


    return (<div>
        <NavBar/>
        <Banner/>
        <Footer/>
    </div>)
}
export default AboutPage