import { Metadata } from "next";
import { Link } from "@nextui-org/react";
import ScholarshipList from "../components/ScholarshipList";

export const metadata: Metadata = {
  title: "Other Scholarships | Tribal Scholarship Program",
  description:
    "The Scholarship Program pledges to provide high-quality, pre-college counseling by: helping students explore majors and assisting with admission, housing and financial aid applications and the registration process at nearby colleges; making on-campus visits to monitor student progress and to assist in resolving problems; and providing financial assistance by using the Title IV Cost of Attendance from each college or university to set the scholarship award amount for each individual student.",
  openGraph: {
    title: "Other Scholarships | Tribal Scholarship Program",
    description:
      "The Scholarship Program pledges to provide high-quality, pre-college counseling by: helping students explore majors and assisting with admission, housing and financial aid applications and the registration process at nearby colleges; making on-campus visits to monitor student progress and to assist in resolving problems; and providing financial assistance by using the Title IV Cost of Attendance from each college or university to set the scholarship award amount for each individual student.",
    url: "https://scholarship.choctaw.org/otherscholarships",
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
          <h1>Other Scholarships</h1>
          <p className="lead">
            According to Poverty USA, Indigenous Americans experience the
            highest poverty rates among all ethnic groups, highlighting the
            great need for financial support. While there is still a shortage of
            programs, our team at BestColleges.com created a page that
            highlights several Native American scholarships available to support
            these underserved students. You can view it here:{" "}
            <Link
              isExternal
              href="https://www.bestcolleges.com/financial-aid/native-american-scholarships/"
              size="md"
              className="bg-primary text-black"
            >
              https://www.bestcolleges.com/financial-aid/native-american-scholarships/
            </Link>
          </p>
          <ScholarshipList />
        </div>
      </div>
    </section>
  );
}
