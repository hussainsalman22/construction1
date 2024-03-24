import React from 'react'
import {TabsDemo} from "../largedevicesService/page"
import MobileService from "../Mobileservices/page"

const Service = () => {
  return (
    <div id='service'>
        <div className="md:block hidden">
            <TabsDemo />
          </div>
          <div  className="md:hidden block">
            <MobileService />
        </div>

      
    </div>
  )
}

export default Service
