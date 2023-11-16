"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import Marquee from "react-fast-marquee";

export default function CollegeTicker() {
  const colleges = [
    {
      name: "Mississippi State",
      image: "./image/msstate.svg",
      link: "https://www.msstate.edu/",
    },
    {
      name: "Jones College",
      image: "./image/jones.svg",
      link: "https://www.jcjc.edu/",
    },
    {
      name: "New York Medical College",
      image: "./image/nymc.svg",
      link: "https://www.nymc.edu/",
    },
    {
      name: "Delta State",
      image: "./image/deltastate.svg",
      link: "https://www.deltastate.edu/",
    },
    {
      name: "East Central Community College",
      image: "./image/eccc.svg",
      link: "https://www.eccc.edu/",
    },
    {
      name: "Belhaven University",
      image: "./image/belhaven.svg",
      link: "https://www.belhaven.edu/",
    },
  ];
  return (
    <div className="bg-rose-950 py-4">
      <h1 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
        Recent Graduates From:
      </h1>
      <Marquee>
        {colleges.map((item, index) => (
          <a href={item.link} target="_blank">
            <Image
              as={NextImage}
              key={index}
              src={item.image}
              alt={item.name}
              height={200}
              width={200}
              className="m-6 scale-100 px-4 transition duration-300 ease-in-out hover:scale-110"
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
}
