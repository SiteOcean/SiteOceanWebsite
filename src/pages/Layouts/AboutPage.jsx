import Footer from "@/Components/Footer"
import Banner from "@/Components/AboutPageComp/Banner"
import Head from "next/head"

const { default: NavBar } = require("@/Components/NavBar")


const AboutPage=()=>{


    return (<div>
        <Head>
    <meta name="google-adsense-account" content="ca-pub-1951666009365713"/>
    </Head>
        <NavBar/>
        <Banner/>
        <Footer/>
    </div>)
}
export default AboutPage