"use client"
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Cards from './cards1';

import Corouselcard from "./corouselcard"

const Tab = (props) => (
  <Tabs.Root
    className="flex flex-col min-w-[250px] sm:w-[400px] h-full shadow-[0_2px_10px] shadow-blackA2 mx-2"
    defaultValue="tab1"
  >
    <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab1"
      >
       Service
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab2"
      >
      Work
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-2 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <Cards Heading={props.Heading} description= {props.description} src={props.src} />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-2 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
    
      <Corouselcard  beforephoto1={props.beforephoto1}
          beforedescription1={props.beforedescription1}
          afterphoto1={props.afterphoto1}
          afterdescription1={props.afterdescription1}
          beforephoto2={props.beforephoto2}
          beforedescription2={props.beforedescription2}
          afterphoto2={props.afterphoto2}
          afterdescription2={props.afterdescription2}
          
          
          />
    </Tabs.Content>
  </Tabs.Root>
);

export default Tab;
