"use client";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import React, { useState, useEffect, useRef } from "react";

const VideoBackground = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    "./video/Ashlynn_Willis.mp4?v=1",
    "./video/Candice_York.mp4?v=1",
    "./video/Deona_Allen.mp4?v=1",
    "./video/Jade_Willis.mp4?v=1",
    "./video/Kelli_Jones.mp4?v=1",
    "./video/Latricia_Johnson.mp4?v=1",
    "./video/Miriam_Curry.mp4?v=1",
    "./video/Stephanie_Langford.mp4?v=1",
    "./video/Tashina_Taylor.mp4?v=1",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [videos.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex, videos]);

  return (
    <header className="relative flex h-[85vh] items-center justify-center overflow-hidden">
      <div className="relative z-30 mb-5 flex max-w-[1024px] flex-col items-center justify-between self-end rounded-md bg-black bg-opacity-50 p-5 md:flex-row">
        <div className="mb-10 flex items-center md:mb-0">
          <Image
            src={"./image/TSPlogo01.webp"}
            as={NextImage}
            width={160}
            height={160}
            alt="Logo"
            className="h-40 w-auto"
          />
        </div>
        <div className="text-center text-white md:ml-4 md:text-right">
          <h2 className="mb-2 text-2xl font-semibold tracking-wide md:text-5xl">
            Elevating Indigenous Voices,
          </h2>
          <h2 className="text-2xl font-semibold tracking-wide md:text-5xl">
            One Scholarship at a Time
          </h2>
        </div>
      </div>
      <video
        id="bg-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-10 max-h-[85vh] min-h-[85vh] w-auto min-w-full max-w-none"
        ref={videoRef}
      ></video>
    </header>
  );
};

export default VideoBackground;
