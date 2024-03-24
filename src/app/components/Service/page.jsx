import React from 'react'
import LargedevicesService  from "../../components/LargedevicesService/page.jsx"
import MobileService from "../Mobileservices/page.jsx"

const Service = () => {
    return (
        <div id='service'>
            <div className="md:block hidden">
                < LargedevicesService />
            </div>
            <div className="md:hidden block">
                <MobileService />
            </div>


        </div>
    )
}

export default Service
