import React from 'react'
import Cards from './cards'
import kitchen from "../../assets/Kitchens.jpg"
import structure from "../../assets/foundations.jpg"
import bathroom from "../../assets/Bathrooms.jpg"
import door from "../../assets/door.jpg"
import electric from "../../assets/electric.jpg"
import plumbing from "../../assets/plumbing.jpg"


const Service = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center gap-8 md:mb-10'>
        <div className='flex md:w-2/3 w-full md:h-10 justify-center border-2 rounded-full border-black  bg-slate-200'>
          <div className=' flex  flex-col md:flex-row justify-items-end content-center items-center  md:gap-11 '>

            <h2 className='italic'>"FROM SMALL BIG WE DO IT ALL"</h2>
            <h1 className='md:text-4xl text-xl font-bold '>SERVICES</h1>


          </div>

        </div>
        <div className="w-[217px] h-[157px] relative flex">
          <div className="w-[215px] h-[157px] left-0 top-0 absolute bg-amber-400 rounded-tl-[78.50px] rounded-tr rounded-bl-[78.50px] rounded-br border border-black border-opacity-70" />
          <div className="w-[189px] h-[34px] left-[28px] top-[19px] absolute"><span className="text-black text-[17px] font-normal font-['JetBrains Mono']">Service Avail </span><span className="text-black text-[17px] font-bold font-['JetBrains Mono']">24/7</span></div>
          <div className="w-[90px] h-[32.50px] left-[73px] top-[108px] absolute">
            <div className="w-[13px] h-[25px] left-[15px] top-0 absolute"><span className="text-white text-[9px] font-normal font-['Inter']">📞</span><span className="text-white text-[13px] font-normal font-['Inter']">    </span><span className="text-white text-[27px] font-normal font-['Inter']"> </span></div>
            <div className="left-[30px] top-[12px] absolute text-white text-[10px] font-normal font-['Inter']">Call Us</div>
          </div>
          <div className="left-[60px] top-[57px] absolute text-black text-[11px] font-normal font-['JetBrains Mono']">Plumbing Emergencies<br />Electrical Emergencies<br />Safety Emergencies</div>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        <Cards Heading="Kitchen" description="• Total Kitchen Remodeling
            • Countertops
            • Backsplashes
            • Sinks
            • Appliances" src={kitchen} />
        <Cards Heading="New Structure" description="• Custom Homes
            • 1 or 2-Story Additions
            • Single Room Additions
            • “Four Season” Rooms
            • Garages" src={structure} />
        <Cards Heading="Bathrooms" description="• Total Bathroom Remodeling
          • Sink/Vanity Replacement
          • Toilet 
          • Exhaust Fans
          • Bathtubs or Shower
          • Tile" src={bathroom} />
        <h1 className='text-3xl font-bold md:mb-10 md:mt-10'>SMALL JOBS</h1>
      </div><div className="flex flex-wrap gap-4 justify-center">
        <Cards Heading="Window and Door Replacement" description="• Exterior:  Prehung, Patio or French Doors, Sidelights
• Single Hung, Double Hung, Sliding, Bow or Bay 
• Screen Doors 
• Garage Doors & Openers
" src={door} />
        <Cards Heading="Minor Electric" description="• Install Ceiling Fans, Chandeliers, or Sconces
• Install Under Cabinet Lighting
• Install Security or Accent Lighting
• Service Upgrades
• Move or Change Existing Outlets and Switches" src={electric} />
        <Cards Heading="Plumbing" description="• • Installation of Water Heaters
• Change of Sink, Faucet or Shower Fixtures
• Garbage Disposal Installation
• Install Sump Pumps" src={plumbing} />
      </div>
    </div>
  )
}

export default Service
