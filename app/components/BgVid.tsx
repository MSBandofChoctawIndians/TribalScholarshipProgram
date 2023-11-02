"use client";
import React, { useState, useEffect } from "react";

const BgVid = () => {
  // array of video paths
  const [videos] = useState([
    "./video/Ashlynn_Willis.mp4",
    "./video/Jade_Willis.mp4",
    "./video/Kelli_Jones.mp4",
    "./video/Miriam_Curry.mp4",
    "./video/Tashina_Taylor.mp4",
  ]);

  // current video index
  const [currentVideo, setCurrentVideo] = useState(0);

  // load and play video on mount
  useEffect(() => {
    const video = document.getElementById("bg-video") as HTMLVideoElement;

    // event listener to change video when current video ends
    const handleVideoEnd = () => {
      const nextVideoIndex = (currentVideo + 1) % videos.length;
      video.src = videos[nextVideoIndex];
      video.load();
      video.play();
      setCurrentVideo(nextVideoIndex);
    };
    video.addEventListener("ended", handleVideoEnd);

    // clear event listener on unmount
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, [currentVideo, videos]);

  return (
    <header className="relative flex items-center justify-center h-[85vh] overflow-hidden">
      <div className="relative z-30 p-5 bg-black bg-opacity-50 rounded-xl self-end mb-5 max-w-[1024px]">
        <h2 className="text-base text-3xl md:text-5xl text-white text-center font-semibold tracking-wide">
          Elevating Indigenous Voices, One Scholarship at a Time
        </h2>
      </div>
      <video
        id="bg-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-10 w-auto min-w-full min-h-[85vh] max-w-none max-h-[85vh]"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
    </header>
  );
};

export default BgVid;
