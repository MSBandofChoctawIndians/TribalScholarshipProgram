"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function CollegeTicker() {
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
      <Marquee>
        {colleges.map((item, index) => (
          <a href={item.link} target="_blank">
            <Image
              key={index}
              src={item.image}
              alt={item.name}
              height={200}
              width={200}
              className="m-6 scale-100 transition duration-300 ease-in-out hover:scale-110"
              loading="eager"
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
}
