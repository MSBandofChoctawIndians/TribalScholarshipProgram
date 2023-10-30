"use client";

import React from "react";
import Ticker from "framer-motion-ticker";
import Image from "next/image";

function CollegeTicker() {
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
  const [isPlaying, setIsPlaying] = React.useState(true);
  return (
    <div className="bg-white py-4">
      <h1 className="text-center text-2xl font-bold text-black">
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
