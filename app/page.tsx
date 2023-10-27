import type { Metadata } from "next";
import CollegeTicker from "./components/CollegeTicker";

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

// const videos = ["./vid/video01.mp4", "./vid/video02.mp4", "./vid/video03.mp4"];

export default function Page() {
  return (
    <>
      <header className="relative flex items-center justify-center h-[85vh] mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="Tashina_Taylor.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      <div>
        <CollegeTicker />
      </div>
    </>
  );
}
