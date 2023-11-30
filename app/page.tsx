import type { Metadata } from "next";
import { Image } from "@nextui-org/react";
import CollegeTicker from "./components/Ticker";
import VideoBackground from "./components/VideoBackground";
import ContactForm from "./components/ContactSection";

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
      <CollegeTicker />
      <div className="absolute inset-0 bg-[url(/TribalScholarshipProgram/image/tiles.jpg)] bg-top"></div>
      <section className="bg-tile mx-auto mt-8 max-w-[1024px] px-4 sm:px-6 lg:px-0">
        <div className="prose prose-slate mx-auto max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
          <Image
            width={1024}
            height={336}
            src="./image/tspstaff2.webp"
            alt="Tribal Scholarship Program Staff"
            isBlurred
          />
          <h2>Halito! Welcome to the Tribal Scholarship Program!</h2>
          <p className="lead">
            The Scholarship Program pledges to provide high-quality, pre-college
            counseling by: helping students explore majors and assisting with
            admission, housing and financial aid applications and the
            registration process at nearby colleges; making on-campus visits to
            monitor student progress and to assist in resolving problems; and
            providing financial assistance by using the Title IV Cost of
            Attendance from each college or university to set the scholarship
            award amount for each individual student.
          </p>
          <p>
            The primary objective of the Tribal Scholarship Program is to
            provide to eligible members of the Mississippi Band of Choctaw
            Indians who are committed to furthering their post-secondary
            education the best possible financial aid package for each student.
            The program also counsels and assists tribal members in structuring
            their educational endeavors and serves as a student's advocate at
            the post-secondary educational institution when necessary.
          </p>
          <p>
            Although most applicants seek financial assistance, this program
            provides a variety of post-secondary educational services. The
            scholarship is not need-based; however, students must complete the
            financial aid application process at the college to document
            expenses, resources and other financial aid that provide a basis for
            scholarship awards. This process includes completing the Free
            Application for Federal Student Aid. Applicants seeking financial
            assistance must be an enrolled member of the Mississippi Band of
            Choctaw Indians.
          </p>
          <p>
            Scholarship assistance is available at the bachelor, master and
            doctorate level, as well as technical degrees and a limited number
            of vocational programs of study. Students wishing to enter a
            technical or vocational program must file an application with the
            Vocational Education Program and Employment Assistance Program prior
            to receiving funding through the Tribal Scholarship Program.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
