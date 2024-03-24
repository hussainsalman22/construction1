"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../../../../@/components/ui/layout-grid";
import bth from "../../assets/bath1.jpg"
const SkeletonOne = (props) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{props.title1}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = (props) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{props.title2}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = (props) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{props.title3}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = (props) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{props.title4}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: bth,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      bth,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      bth,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      bth,
  },
];


export function LayoutGridDemo(props) {
  return (
    <div className="h-screen pt-5 pb-10 w-full ">
      <LayoutGrid cards={[
        {
          id: 1,
          content: <SkeletonOne title1={props.title1} />,
          className: "md:col-span-2",
          thumbnail: props.img1,
        },
        {
          id: 2,
          content: <SkeletonTwo title2={props.title2} />,
          className: "col-span-1",
          thumbnail: props.img2
          ,
        },
        {
          id: 3,
          content: <SkeletonThree title3={props.title3} />,
          className: "col-span-1",
          thumbnail:
          props.img3,
        },
        {
          id: 4,
          content: <SkeletonFour title4={props.title4} />,
          className: "md:col-span-2",
          thumbnail:
          props.img4,
        },
      ]
} />
    </div>
  );
}

