import Image from "next/image";
import Navbar from "./components/Navbar/page"
import Hero from "./components/Hero/page";
import Service from "./components/Service/page"
import Contactus from "./components/Contactus/page"
import Footer from "./components/Footer/page"
import { ChakraProvider } from '@chakra-ui/react'
    
export default function Home() {
  return (
    <ChakraProvider>
    <Navbar />
    <Hero/>
    <Service/>
    <Contactus/>
    <Footer/>


    </ChakraProvider>
  );
}
