import Banner from "@/Components/AboutPageComp/Banner"
import AddressSection from "@/Components/ContactPageComp/AddressSection"
import FormSection from "@/Components/ContactPageComp/FormSection"
import Footer from "@/Components/Footer"

const { default: NavBar } = require("@/Components/NavBar")


const ContactPage=()=>{


    return (<div className="bg-white sm:min-h-[100vh] ">
        <NavBar/>
        
     <div className="flex flex-col sm:flex-row w-[99%] mx-auto sm:py-5">
     <FormSection/>
        <AddressSection/>
     </div>
     <Footer/>
        
    </div>)
}
export default ContactPage