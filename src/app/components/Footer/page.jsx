import React from 'react'
import "./footer.css"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import jdnj from "../Services/Commercials/page"

const Footer = () => {
  return (
    <div>
       <div className='lg:px-24 px-4 text-white bg-black pt-10'>
            <div className='flex flex-wrap  justify-between'>
                <div className='space-y-4 lg:w-1/3 '>
                    <a href='/' className='text-white text-3xl font-bold'>
                        <span className='text-blue-500'>TM</span>
                        Contruction & ReModeling
                    </a>

                    <p className='text-gray-300'><span className='font-bold'>TM CONSTRUCTION & REMODELING </span> is a privately owned company founded  in 1986.  Since our inception, we have been recognized in the greater Chicagoland area for our reasonable prices and high quality workmanship.  We provide services for both Commercial and Residential customers.  .</p>
                    <div className='flex gap-5 text-white'>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaLinkedinIn className="w-5 h-5"></FaLinkedinIn>
                        </a>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaFacebook className="w-5 h-5"></FaFacebook>
                        </a>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaInstagram className="w-5 h-5"></FaInstagram>
                        </a>
                        <a href='/' className='block border-2 p-3 rounded-full hover:border-orange-500 hover:scale-110 transition-all duration-300'>
                            <FaTwitter className="w-5 h-5"></FaTwitter>
                        </a>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className='text-xl font-semibold'>Services</h3>
                    <div className='space-y-1  text-gray-300'>
                        <Link href='/components/Services/Commercials' className='block  underline'>COMMERCIALS</Link>
                        <a href='/' className='block underline'>INTERIORS</a>
                        <a href='/' className='block underline'>MEDICAL & HEALTH</a>
                        <a href='/' className='block underline'>HOTELS & HOSPITALITY</a>
                        <a href='/' className='block underline'>RESTAURANTS</a>
                        <a href='/' className='block underline'>OFFICES</a>
                        <a href='/' className='block underline'>RESIDENTIAL</a>
                        <a href='/' className='block underline'>BASEMENT</a>
                        <a href='/' className='block underline'>BATHROMM</a>
                        <a href='/' className='block underline'>DECK BUILDING</a>
                        <a href='/' className='block underline'>KITCHEN</a>



                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className='text-xl font-semibold'>Contact us</h3>
                    <div className='space-y-4 text-gray-300'>
                        <p>(630) 830-0828</p>
                        <p>tonmaint@sbcglobal.net</p>
                        <p>PO BOX 8002 BARTLETT,  <br /> IL 60103, UnitedStates</p>
                    </div>

                </div>
                <div className="space-y-4">
                <h3 className='text-xl font-semibold'>Subscribe</h3>
                <div className='space-y-4 text-gray-300'>
                    <div className="relative w-full">
                        <input type="email" placeholder='example@email.com' className='input'
                         />
                         <button className='btn'>SEND</button>
                    </div>
                </div>
                </div>



            </div>
            <div className="h-12"></div>
            <hr className='border-gray-300'/>
            <div className="h-12"></div>
            <div className='flex flex-col sm:flex-row justify-between pb-7'>
                <p>copyright@2024 hussain</p>
                <p>TERMS OF USE | PRIVACY POLICY</p>

            </div>

        </div>
    </div>
  )
}

export default Footer
