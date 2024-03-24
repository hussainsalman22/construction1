
import React from 'react'
import commercial from "../../assets/commercial.jpg"
import Image from 'next/image'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'


const Hero2 = (props) => {
 
  return (
    <>
   <Navbar home="/" service="/#service" contact="/#contact" jobs="#" />
   <div className='relative'>
   <Image src={commercial} className="h-screen  bg-fixed bg-center bg-contain sm:bg-cover custom-img backdrop-blur-lg w-screen blur-sm " />
   <section className="absolute top-0 left-0 right-0 bottom-0 w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl  text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none transition-all">
            {props.heading}
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
              {props.message}
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="text-center animate-bounce">
              <h2 className="text-lg font-semibold text-white dark:text-[#ddd]">Stay tuned for our launch!</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  
<Footer/>

  </>

  )
}

export default Hero2
