"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { TfiAlignJustify } from "react-icons/tfi";
import { FaXmark } from "react-icons/fa6"
import { Divide as Hamburger } from 'hamburger-react'
const Navbar = (props) => {

    const [isMenuopen, setisMenuopen] = useState(false)
    const [isSticky, setisSticky] = useState(false)

    const togglemenu = () => {
        setisMenuopen(!isMenuopen)

    }
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setisSticky(true);
                console.log("hello");
                
            } else {
                setisSticky(false);
            }
            console.log(isSticky)
        };
       
    
        // Add the event listener
        window.addEventListener("scroll", handleScroll);
    
        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Pass an empty dependency array to run the effect only once on mount
    
    const navitems = [
        { path: props.home, link: "Home" },
        { path: props.service, link: "Services" },
        { path: props.jobs, link: "jobs" },
        { path: props.contact, link: "Contactus" },
       
        




    ]
    return (
        <>
            <header className='w-full bg-transparent relative top-0 left-0 right-0 transition-all ease-in duration-300'>
                <div className="top-0 bg-black fixed  w-screen z-50">
                <nav className="py-4 lg:px-24 px-4 flex justify-between align-middle transition-all duration-300 ease-in  lg:gap-32 sm:gap-20 ">
                    <div className='flex justify-between items-center text-base'>
                        <a href='/' className='text-white text-xl flex justify-center items-center'><span className='text-blue-500 text-3xl font-bold'>TM</span><span className='sm:flex hidden'> Construction</span><span className='text-blue-500 text-3xl font-bold sm:flex hidden'>&</span><span className='sm:flex hidden'> Remodelling</span> </a>
                    </div>
                    <ul className='hidden md:flex  align-middle items-center space-x-12 navitems'>
                        {

                            // console.log(navitems)
                            navitems.map(({ link, path }) => (

                                <Link href={path} key={path} activeClass="active" spy={true} scroll={true} offset={-100} className="block scroll-smooth text-base text-white uppercase hover:text-blue-500 transition-all ease-in duration-300">
                                {link}
                              </Link>
                              
                            ))
                        }



                    </ul>
                    <div className='lg:flex space-x-12 hidden navitems' >
                        <button className='text-white bg-transparent p-2 border rounded-full'>
                            <TfiAlignJustify className="w-4 h-4 !important hover:text-orange-500" />
                        </button>
                    </div>
                    <div className='md:hidden flex'>
                    <Hamburger color='white' toggled={isMenuopen} toggle={setisMenuopen} />

                    </div>
                    <div className={`space-y-4 px-4 mt-14 py-7  bg-black ${
                        isMenuopen ? "block fixed top-0 right-0 left-0 md:hidden" : "hidden"
                    }`}>
                        {

                            // console.log(navitems)
                            navitems.map(({ link, path }) => (

                                <Link href={path} key={path} activeClass="active" spy={true} smooth={true} offset={-100} className="block 
                                text-base text-white uppercase !important hover:text-blue-500"> {link} </Link>   
                            ))
                        }



                    </div>


                </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar

