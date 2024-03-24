import React from 'react'
import Serviceslarge  from "../Serviceslarge/page.jsx"
import MobileService from "../Mobileservices/page.jsx"

const Service = () => {
    return (
        <div id='service'>
            <div className="md:block hidden">
                < Serviceslarge />
            </div>
            <div className="md:hidden block">
                <MobileService />
            </div>


        </div>
    )
}

export default Service
