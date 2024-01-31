"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";

const Deadline: React.FC = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the current month (January is 0)

  let bannerText = "";

  if (currentMonth > 5 && currentMonth <= 10) {
    bannerText = "Winter/Spring Semester deadline is October 31";
  } else if (currentMonth > 10 || currentMonth <= 3) {
    bannerText = "Summer Semester deadline is March 31";
  } else {
    bannerText = "Fall Semester deadline is May 31";
  }

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="w-full bg-danger py-2 text-center text-white">
          <Link
            isExternal
            href="https://tribalscholarshipprogram.secure-platform.com/site"
            showAnchorIcon
            className="text-white"
          >
            <motion.p
              className="m-0 text-lg font-bold"
              animate={{ opacity: [1, 0, 1, 0, 1, 0, 1] }}
              transition={{ duration: 3 }}
            >
              {bannerText}
            </motion.p>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-0 top-0 m-2"
          >
            <svg
              viewBox="0 0 12 12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <line
                x1="1"
                y1="11"
                x2="11"
                y2="1"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="1"
                y1="1"
                x2="11"
                y2="11"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Deadline;
