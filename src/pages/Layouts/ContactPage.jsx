import Banner from "@/Components/AboutPageComp/Banner"
import AddressSection from "@/Components/ContactPageComp/AddressSection"
import FormSection from "@/Components/ContactPageComp/FormSection"
import Footer from "@/Components/Footer"
import Head from "next/head"

const { default: NavBar } = require("@/Components/NavBar")


const ContactPage=()=>{


    return (<div className="bg-white sm:min-h-[100vh] ">
        <NavBar/>
        <Head>
    <meta name="google-adsense-account" content="ca-pub-1951666009365713"/>
    </Head>
     <div className="flex flex-col sm:flex-row w-[99%] mx-auto sm:py-5">
     <FormSection/>
        <AddressSection/>
     </div>
     <Footer/>
        
    </div>)
}
export default ContactPage