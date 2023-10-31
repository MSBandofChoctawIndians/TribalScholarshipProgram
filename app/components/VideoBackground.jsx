"use client";
import React, { useState, useEffect } from "react";

const VideoBackground = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    videoElement.addEventListener("ended", handleVideoEnd);
  }, [videos]);

  return (
    <header className="relative flex items-center justify-center h-[85vh] overflow-hidden">
      <div className="relative z-30 p-5 bg-black bg-opacity-50 rounded-xl self-end mb-5 max-w-[1024px]">
        <h2 className="text-base text-3xl md:text-5xl text-white text-center font-semibold tracking-wide">
          Elevating Indigenous Voices, One Scholarship at a Time
        </h2>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-auto min-w-full min-h-[85vh] max-w-none max-h-[85vh]"
        id="background-video"
      >
        <source src={videos[currentVideoIndex].url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default VideoBackground;
