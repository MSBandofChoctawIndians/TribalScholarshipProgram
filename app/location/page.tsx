import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Tribal Scholarship Program",
  description:
    "The Scholarship Program pledges to provide high-quality, pre-college counseling by: helping students explore majors and assisting with admission, housing and financial aid applications and the registration process at nearby colleges; making on-campus visits to monitor student progress and to assist in resolving problems; and providing financial assistance by using the Title IV Cost of Attendance from each college or university to set the scholarship award amount for each individual student.",
  openGraph: {
    title: "Location | Tribal Scholarship Program",
    description:
      "The Scholarship Program pledges to provide high-quality, pre-college counseling by: helping students explore majors and assisting with admission, housing and financial aid applications and the registration process at nearby colleges; making on-campus visits to monitor student progress and to assist in resolving problems; and providing financial assistance by using the Title IV Cost of Attendance from each college or university to set the scholarship award amount for each individual student.",
    url: "https://scholarship.choctaw.org/location",
    siteName: "Tribal Scholarship Program",
    images: [
      {
        url: "https://msbandofchoctawindians.github.io/TribalScholarshipProgram/image/meta.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://msbandofchoctawindians.github.io/TribalScholarshipProgram/image/meta-alt.jpg",
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
    <section className="top-[-40px]">
      <div className="top-4 mx-auto max-w-[1024px] bg-background px-4 pb-4 text-foreground sm:px-6 lg:px-2">
        <div className="prose prose-slate mx-auto max-w-none pt-4 md:prose-lg lg:prose-xl dark:prose-invert">
          <h1>Location</h1>
          <p>
            Tribal Scholarship Program
            <br />
            107 Annex Circle
            <br />
            Choctaw, MS 39350
          </p>
          <iframe
            width="100%"
            height="750"
            className="dark:contrast-[95%] dark:grayscale-[50%] dark:invert-[95%]"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=107%20annex%20circle%2C%20choctaw%2C%20ms%2039350&key=AIzaSyDNcMoZR9-hG5Gl6jcNT_1iGmtpXTWhFAg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
