import React from 'react'
import  {LargedevicesService} from "../LargedevicesService/page"
import MobileService from "../Mobileservices/page"

const Service = () => {
  return (
    <div id='service'>
        <div className="md:block hidden">
            < LargedevicesService />
          </div>
          <div  className="md:hidden block">
            <MobileService />
        </div>

      
    </div>
  )
}

export default Service
