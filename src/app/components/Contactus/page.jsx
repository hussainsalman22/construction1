import React from 'react'
import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import "./contact.css"

const Contactus = () => {
    return (
        <div id="contact">
            <div className="contact-content">
                <div className="text-grid">
                    <div className="text-grid-main">
                        <div className="container">
                            <div className="grid grid-cols-1">
                                <div className="col-span-1">
                                    <div className="main-title flex items-center flex-col contact-col text-center wow fadeIn">
                                        <h3>Contact Me</h3>
                                        <div className='flex '>
                                        <div className="underline1"></div>
                                        <div className="underline2"></div>
                                        </div>
                                        <p>
                                            I’m always open to discussing product design work or partnership opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-grid">
                    <div className="contact-form-details wow fadeIn">
                        <div className="container">
                            <div className="grid grid-cols-1 md:grid-cols-4">
                                <div className="contact-col">
                                    <div className="contact-col-info" data-wow-delay=".2s">
                                        <FaMapMarker className='contact-icon'></FaMapMarker>
                                        <h3>Address</h3>
                                        <p>
                                            PO BOX 8002
                                            BARTLETT, IL  60103</p>
                                    </div>
                                </div>
                                <div className="contact-col">
                                    <div className="contact-col-info" data-wow-delay=".4s">
                                        <FaEnvelope  className='contact-icon'></FaEnvelope>
                                        <h3>Email</h3>
                                        <a href=" tonmaint@sbcglobal.net" className="text-black underline text-base"> tonmaint@sbcglobal.net</a>
                                    </div>
                                </div>
                                <div className="contact-col">
                                    <div className="contact-col-info" data-wow-delay=".6s">
                                        <FaMobile className='contact-icon'></FaMobile> 
                                        <h3>Phone</h3>
                                        <a href="tel:8372876775" className="text-black underline text-base">(630) 830-0828</a>
                                    </div>
                                </div>
                                <div className="contact-col">
                                    <div className="contact-col-info" data-wow-delay=".6s">
                                        <FaStopwatch  className='contact-icon'></FaStopwatch>
                                        <h3>Office Hours: </h3>
                                        <p>Everyday, Sunday- Saturday from 7 a.m. to 9 p.m./</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid map-col">
                            <div className="col-span-1">
                                <div className="google-maps">
                                    <div className="map-wrap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189838.07357765472!2d-88.50498280174519!3d41.97408825412882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f00b095a0fd1f%3A0xaa640e3e15725f30!2sOntarioville%2C%20IL%2060103%2C%20USA!5e0!3m2!1sen!2s!4v1708970282368!5m2!1sen!2s" width="100%" height="450" style={{border:0}} loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contactus
