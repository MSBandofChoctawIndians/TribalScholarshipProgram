import { Image, Link } from "@nextui-org/react";

export default function Page() {
  return (
    <section className="bg-tile top-[-40px]">
      <div className="top-4 mx-auto max-w-[1024px] bg-black px-4 pb-4 sm:px-6 lg:px-2">
        <div className="prose prose-slate mx-auto max-w-none pt-4 dark:prose-invert md:prose-lg lg:prose-xl">
          <Image
            width={1024}
            height={715}
            src="./image/tspstaff3.webp"
            alt="Tribal Scholarship Program Staff"
            className="!mt-0"
            isBlurred
          />
          <h1>About Us</h1>
          <p>
            The Mississippi Band of Choctaw Indians has consistently placed
            education as a high priority and emphasized the importance of
            increasing the number of students entering and completing
            post-secondary educational programs. To this purpose, the Tribal
            Scholarship Program was established to provide scholarship funds to
            eligible tribal members who wish to further their education beyond
            the secondary level.
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
            The Tribal Scholarship Program will assist students in deciding a
            field of study (major) in college as well as what college/university
            to attend when asked to do so. The Tribal Scholarship Staff will
            assist in the application process to the program and also assist
            students in completing the Free Application for Federal Student Aid
            (FAFSA). FAFSA or Pell Grant applications are done online at{" "}
            <Link
              isExternal
              href="https://www.fafsa.ed.gov"
              color="primary"
              size="md"
            >
              https://www.fafsa.ed.gov
            </Link>
            . Students should be aware of the Financial Aid Priority deadlines
            at the colleges and universities each year. Some colleges have an
            April 1 deadline and will process financial aid requests to those
            students who have met their deadline first. There are deadlines for
            applications to be turned in to the Tribal Scholarship Program each
            school year. Student applications to the Tribal Scholarship Program
            will be considered complete when all the items on the checklist are
            in the Tribal scholarship Office by the supporting document
            deadline. A full-time student's award will be determined when all
            documents are in.
          </p>
          <p>
            The Tribal Scholarship Program will assist the students in the
            application process dealing with the colleges /universities.
            Students need to apply for admission to the college/university of
            their choice months before the college term begins. It is
            recommended that new students apply to several colleges/universities
            in their senior year in high school. Students should also apply for
            housing (dorm) at the same time they apply for admission. Students
            must work closely with their College Financial Aid Office as well
            the Business Office. For full-time students, the College Financial
            Aid Office will need to send to the Tribal Scholarship Office the
            Financial Aid Package Form. The College Financial Aid Officewill
            need the Student Aid Report (SAR) from the completed FAFSA in order
            to complete the Financial Aid Package Form. Full-time student awards
            for the Tribal Scholarship Program cannot be processed without the
            completed Financial Aid Package Form from the college/university.
            Also, an application is considered incomplete if all the supporting
            documents are not in the student's file at the Tribal Scholarship
            Office. An incomplete application or an application received after
            the deadline will not be processed.
          </p>
        </div>
      </div>
    </section>
  );
}
