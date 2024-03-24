import React from "react";
import { LayoutGridDemo } from "./cards";
import door from "../../assets/door.jpg";
import electric from "../../assets/electric.jpg";
import plumbing from "../../assets/plumbing.jpg";
import kitchen1 from "../../assets/kitchen1.jpg";
import kitchen2 from "../../assets/kitchen2.jpg";
import kitchen3 from "../../assets/kitchen3.jpg";
import kitchen4 from "../../assets/kitchen4.jpg";
import structure1 from "../../assets/structure1.jpg";
import structure2 from "../../assets/structure2.jpg";
import structure3 from "../../assets/structure3.png";
import structure4 from "../../assets/structure4.jpg";
import bath1 from "../../assets/bath1.jpg";
import bath2 from "../../assets/bath2.jpg";
import bath3 from "../../assets/bath3.jpg";
import bath4 from "../../assets/bath4.jpg";
import outdoor1 from "../../assets/outdoor1.jpg";
import outdoor2 from "../../assets/outdoor2.jpg";
import outdoor3 from "../../assets/outdoor3.jpg";
import outdoor4 from "../../assets/outdoor4.jpg";
import improv1 from "../../assets/improv1.jpg";
import improv2 from "../../assets/improv2.jpg";
import improv3 from "../../assets/improv3.jpg";
import improv4 from "../../assets/improv4.jpg";

import Image from "next/image";
import { Tabs } from "../../../../@/components/ui/tab";

export function TabsDemo(props) {
  const tabs = [
    {
      title: "NEW STRUCTURES",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-purple-900">
          <p>NEW STRUCTURES</p>
          <LayoutGridDemo
            title1={"Brand New Custom Homes"}
            title2={"Custom Homes"}
            title3={"New Garages"}
            title4={"renovate old garages"}
            img1={structure1}
            img2={structure2}
            img3={structure3}
            img4={structure4}
          />
        </div>
      ),
    },
    {
      title: "KITCHENS",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-purple-900">
          <p>KITCHENS</p>
          <LayoutGridDemo
            img1={kitchen1}
            img2={kitchen2}
            img3={kitchen3}
            img4={kitchen4}
            title1={"Kitchen with Granite Countertops"}
            title2={" Furniture-Style Cabinetry"}
            title3={"Glazed Kitchen Cabinets"}
            title4={"Solid Plywood Cabinets "}
          />
        </div>
      ),
    },
    {
      title: "BATHS",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-purple-900">
          <p>BATHS</p>
          <LayoutGridDemo
            img1={bath1}
            img2={bath2}
            img3={bath3}
            img4={bath4}
            title1={"Brand New Custom Homes"}
            title2={"Custom Homes"}
            title3={"New Garages"}
            title4={"renovate old garages"}
          />
        </div>
      ),
    },
    {
      title: "OUTDOOR PROJECTS",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-purple-900">
          <p>OUTDOOR PROJECTS</p>
          <LayoutGridDemo
            img1={outdoor1}
            img2={outdoor2}
            img3={outdoor3}
            img4={outdoor4}
            title1={"Brand New Custom Homes"}
            title2={"Custom Homes"}
            title3={"New Garages"}
            title4={"renovate old garages"}
          />
        </div>
      ),
    },
    {
      title: "HOME IMPROVEMENT",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-purple-900">
          <p>HOME IMPROVEMENT</p>
          <LayoutGridDemo
            img1={improv1}
            img2={improv2}
            img3={improv3}
            img4={improv4}
            title1={"Brand New Custom Homes"}
            title2={"Custom Homes"}
            title3={"New Garages"}
            title4={"renovate old garages"}
          />
        </div>
      ),
    },
    {
      title: " SMALL JOBS",
      value: "random2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-purple-900">
          <p>SMALL JOBS</p>
          <LayoutGridDemo
            img1={door}
            img2={electric}
            img3={plumbing}
            img4={improv3}
            title1={"Brand New Custom Homes"}
            title2={"Custom Homes"}
            title3={"New Garages"}
            title4={"renovate old garages"}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div id="service">
        <div className="flex flex-col md:flex-row items-center gap-8 md:mx-28">
          <div className="flex md:w-2/3 w-full md:h-10 justify-center border-2 rounded-full border-black  bg-slate-200">
            <div className=" flex  flex-col md:flex-row justify-items-end content-center items-center  md:gap-11 ">
              <h2 className="italic">"FROM SMALL TO BIG, WE DO IT ALL"</h2>
              <h1 className="md:text-4xl text-xl font-bold ">SERVICES</h1>
            </div>
          </div>
          <div className="w-[217px] h-[157px] relative flex">
            <div className="w-[215px] h-[157px] left-0 top-0 absolute bg-amber-400 rounded-tl-[78.50px] rounded-tr rounded-bl-[78.50px] rounded-br border border-black border-opacity-70" />
            <div className="w-[189px] h-[34px] left-[28px] top-[19px] absolute">
              <span className="text-black text-[17px] font-normal font-['JetBrains Mono']">
                Service Avail{" "}
              </span>
              <span className="text-black text-[17px] font-bold font-['JetBrains Mono']">
                24/7
              </span>
            </div>
            <div className="w-[90px] h-[32.50px] left-[73px] top-[108px] absolute">
              <div className="w-[13px] h-[25px] left-[15px] top-0 absolute">
                <span className="text-white text-[9px] font-normal font-['Inter']">
                  📞
                </span>
                <span className="text-white text-[13px] font-normal font-['Inter']">
                  {" "}
                </span>
                <span className="text-white text-[27px] font-normal font-['Inter']">
                  {" "}
                </span>
              </div>
              <div className="left-[30px] top-[12px] absolute text-white text-[10px] font-normal font-['Inter']">
                Call Us
              </div>
            </div>
            <div className="left-[60px] top-[57px] absolute text-black text-[11px] font-normal font-['JetBrains Mono']">
              Plumbing Emergencies
              <br />
              Electrical Emergencies
              <br />
              Safety Emergencies
            </div>
          </div>
        </div>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b  flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10 flex">
          <Tabs tabs={tabs} />
        </div>
        {/* <div className='md:hidden'>
    <LayoutGridDemo />
    </div> */}
      </div>
    </>
  );
}

const DummyContent = () => {
  return (
    <Image
      src={bath4}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
