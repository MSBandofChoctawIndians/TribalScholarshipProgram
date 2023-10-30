"use client";

import React from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";

function CollegeTicker() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const colleges = [
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu",
    },
  ];

  return (
    <div className="bg-white py-4">
      <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Recent Graduates From:
      </h1>
      <Ticker duration={20}>
        {colleges.map((item, index) => (
          <a href={item.link} target="_blank">
            <Image
              key={index}
              src={item.image}
              alt={item.name}
              height={200}
              width={200}
              className="m-6 scale-100 transition duration-300 ease-in-out hover:scale-110"
            />
          </a>
        ))}
      </Ticker>
    </div>
  );
}
export default CollegeTicker;
