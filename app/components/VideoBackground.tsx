"use client";
import React, { useState, useEffect, useRef } from "react";

const VideoBackground = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    "./video/Ashlynn_Willis.mp4",
    "./video/Candice_York.mp4",
    "./video/Jade_Willis.mp4",
    "./video/Kelli_Jones.mp4",
    "./video/Miriam_Curry.mp4",
    "./video/Tashina_Taylor.mp4",
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
    <header className="relative flex items-center justify-center h-[85vh] overflow-hidden">
      <div className="relative z-30 p-5 self-end mb-5 max-w-[1024px] bg-black bg-opacity-50 rounded-md flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="./image/TSPlogo.webp" alt="Logo" className="h-40 w-auto" />
        </div>
        <div className="text-white text-center md:text-right md:ml-4">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-wide mb-2">
            Elevating Indigenous Voices,
          </h2>
          <h2 className="text-2xl md:text-5xl font-semibold tracking-wide">
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
        className="absolute z-10 w-auto min-w-full min-h-[85vh] max-w-none max-h-[85vh]"
        ref={videoRef}
      ></video>
    </header>
  );
};

export default VideoBackground;
