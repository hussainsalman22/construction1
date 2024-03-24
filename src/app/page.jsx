import Navbar from "./components/Navbar/page"
import Hero from "./components/Hero/page";

import Contactus from "./components/Contactus/page"
import Service from "./components/Service/page"
import Footer from "./components/Footer/page"
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <div id="Home">
      <ChakraProvider>
        <Navbar home="#home" service="#service" contact="#contact" jobs="#" />
        <Hero />
        <Service />

        <Contactus />
        <Footer />



      </ChakraProvider>
    </div>
  );
}
