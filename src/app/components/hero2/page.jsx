"use client"
import React from 'react'
import commercial from "../../assets/commercial.jpg"
import Image from 'next/image'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'


const Hero2 = (props) => {
 
  return (
    <>
   <Navbar home="/" service="/#service" contact="/#contact" jobs="#" />
<div className="relative">
  <Image src={commercial} className="h-screen  bg-fixed bg-center bg-contain sm:bg-cover custom-img backdrop-blur-lg w-screen" />
  {/* Overlay */}
  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
    <div className="text-center text-white z-10">
      <h2 className="text-xl sm:text-5xl font-bold">{props.heading}</h2>
      <p className="py-5 sm:text-xl font-semibold">{props.message}</p>
      <button className="px-8 py-2 border font-bold rounded-lg bg-blue-300  hover:bg-blue-500 ">Contact NOW</button>
    </div>
  </div>
</div>

<Footer/>

  </>

  )
}

export default Hero2
