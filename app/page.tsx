import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import VideoBackground from "./components/VideoBackground";
import WeaveBand from "./components/WeaveBand";
import CollegeTicker from "./components/Ticker";

const Statistics = dynamic(() => import("./components/Statistics"));
const ContactForm = dynamic(() => import("./components/ContactSection"));

export const metadata: Metadata = {
  title: "Home | Tribal Scholarship Program",
  description:
    "The Scholarship Program pledges to provide high-quality, pre-college counseling by: helping students explore majors and assisting with admission, housing and financial aid applications and the registration process at nearby colleges; making on-campus visits to monitor student progress and to assist in resolving problems; and providing financial assistance by using the Title IV Cost of Attendance from each college or university to set the scholarship award amount for each individual student.",
  openGraph: {
    title: "Home | Tribal Scholarship Program",
    description:
      "The Scholarship Program pledges to provide high-quality, pre-college counseling by: helping students explore majors and assisting with admission, housing and financial aid applications and the registration process at nearby colleges; making on-campus visits to monitor student progress and to assist in resolving problems; and providing financial assistance by using the Title IV Cost of Attendance from each college or university to set the scholarship award amount for each individual student.",
    url: "https://scholarship.choctaw.org/",
    siteName: "Tribal Scholarship Program",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <VideoBackground />
      <WeaveBand />
      <section>
        <div className="top-4 mx-auto max-w-[1024px] bg-black px-4 pb-4 sm:px-6 lg:px-2">
          <div className="prose prose-slate mx-auto max-w-none pt-8 dark:prose-invert md:prose-lg lg:prose-xl">
            <h1 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
              Tribal Scholarship Program
            </h1>
            <p className="lead">
              The Scholarship Program pledges to provide high-quality,
              pre-college counseling by: helping students explore majors and
              assisting with admission, housing and financial aid applications
              and the registration process at nearby colleges; making on-campus
              visits to monitor student progress and to assist in resolving
              problems; and providing financial assistance by using the Title IV
              Cost of Attendance from each college or university to set the
              scholarship award amount for each individual student.
            </p>
          </div>
          <Statistics />
        </div>
      </section>
      <CollegeTicker />
      <section>
        <div className="top-4 mx-auto max-w-[1024px] bg-black px-4 pb-4 sm:px-6 lg:px-2">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
