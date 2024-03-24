import React from 'react'
import { IoMdCall } from "react-icons/io";
import { HiWrenchScrewdriver } from "react-icons/hi2"
import Cards from "../Hero/cards"
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='text-black mt-30 lg:mb-36 mb-10'>
            <div className="bg-blue-600 rounded-full size-40 -mx-20" />
            <div className='flex justify-between w-full'>
                <div className='ml-3 lg:w-1/2 my-10 lg:my-20 w-full '>
                    <p className="w-full text-4xl ">Construction</p>
                    <p className="mt-3.5 w-full font-bold text-4xl">& Remodeling.</p>
                    <div className='ml-2 my-5'>
                        <p className='text-xs'><span className='font-bold'>TM CONSTRUCTION & REMODELING</span> is a privately owned company founded in 1986. Since our inception, we have been recognized in the Greater Chicagoland area for our reasonable prices and high quality workmanship.
                        </p>
                    </div>
                    <ul className='md:mx-20 ml-3 list-disc'>
                        <li>Nationaly Certified</li>
                        <li>Licensed</li>
                        <li>Insured & Bonde</li>
                    </ul>
                    <div className='flex md:mx-28  gap-5 mt-5'>
                       <Link href="#service"> <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-8 rounded' >Services</button></Link>
                        <a href='tel:92320'>   <button className='bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 sm:px-8 rounded flex justify-center items-center sm:gap-2'><IoMdCall />Call us</button></a>

                    </div>


                </div>
                <div className=' h-full -my-44 w-1/2 lg:flex hidden'>
                    <div className=' bg-blue-300 flex gap-8 flex-col justify-center items-center rounded-full rounded-tl-full rounded-tr-none  rounded-bl-full rounded-br-lg h-screen w-full'>
                        <div className='static flex flex-col rounded-full bg-blue-600  w-60 h-60 mt-28 mx-48 justify-center items-center'>
                            <HiWrenchScrewdriver className='w-20 h-20  text-white ' />
                            <p className='text-white italic font-thin '>"No Job is to small"</p>

                        </div>

                        <div className=' static flex gap-2 flex-wrap content-center justify-center '>
                            <Cards main="4.5+" data=" GOOGLE RATING" />
                            <Cards main="5+" data=" YEARS OF WARRANTY" />


                            <br />
                            <Cards main="1986" data="since" />
                            <Cards main="10+" data=" YEARS OF BUISNESS" />

                        </div>




                    </div>
                </div>



            </div>



        </div>
    )
}

export default Hero
