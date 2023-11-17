"use client";
import { Button, Link } from "@nextui-org/react";
import { Fragment } from "react";

export default function Page() {
  const scholarships = [
    {
      name: "Harvard University",
      description:
        "Harvard University has taken significant strides to make its world-class education accessible to a broader range of students, particularly those from families with limited financial means. Notably, Harvard has implemented a groundbreaking financial aid initiative for families with incomes below $85,000. Under this program, families within this income bracket are not expected to contribute anything towards their child's Harvard education. This initiative reflects Harvard's commitment to ensuring that economic barriers do not impede deserving students from pursuing a top-tier education. By eliminating the financial burden for families in this income range, Harvard aims to encourage talented individuals from diverse backgrounds to benefit from the transformative experience of attending one of the world's leading universities. This proactive approach to financial inclusivity underscores Harvard's dedication to fostering a community of scholars that represents a broad spectrum of socioeconomic backgrounds and enhances the university's mission of advancing knowledge and creating positive societal impact.",
      url: "https://college.harvard.edu/financial-aid",
    },
    {
      name: "Intertribal Timber Council",
      description:
        "The Intertribal Timber Council (ITC) offers a valuable scholarship program aimed at supporting Native American and Alaska Native students pursuing higher education in natural resources-related fields. The ITC scholarship is designed to empower and encourage individuals from indigenous communities to pursue careers in forestry, natural resources management, or other disciplines relevant to the sustainable use and stewardship of tribal forest resources. The scholarship program not only provides financial assistance but also fosters a sense of community and connection among Native students interested in environmental and forestry-related fields. By investing in the education of Native American and Alaska Native students, the Intertribal Timber Council contributes to the development of a skilled and knowledgeable workforce within tribal communities, ensuring that indigenous perspectives play a vital role in the sustainable management of natural resources. This scholarship exemplifies the ITC's commitment to supporting the educational aspirations of Native students and promoting the responsible and culturally sensitive management of tribal lands.",
      url: "https://www.itcnet.org",
    },
    {
      name: "Carol Jorgensen Scholarship for Environmental Stewardship",
      description:
        "This scholarship provides funds to a full time student pursuing an undergraduate degree in an environmental stewardship discipline, including environmental studies, natural resource management, the natural sciences, public administration, public policy, and related disciplines.",
      url: "https://saige.org/member-resources/scholarships/",
    },
    {
      name: "Internships at the Indian Arts Research Center",
      description:
        "The Indian Arts Research Center (IARC) offers three internships annually to Native American, Alaska Native, Native Hawaiian, and First Nations students who are enrolled in undergraduate or graduate programs. Interns work closely with IARC staff and undertake collections-based projects, such as researching the collection, working with artists, developing educational resources, or assisting with an exhibition. Past interns have cataloged the collection, digitized photographs, served as liaison to artists, and conducted research for exhibitions, among other projects. The internships are intended to provide students with opportunities to gain hands-on experience in a museum setting, learn about museum practices, enhance their research skills, and refine career goals. Interns receive a stipend of $600 per week, housing, and travel reimbursement.",
      url: "https://sarweb.org/iarc/internships/",
    },
    {
      name: "American Association of Advertising Agencies (4A) Foundation Scholarships",
      description:
        "The 4A Foundation is a nonprofit organization that provides scholarships to multicultural students pursuing a career in advertising. The 4A Foundation offers several scholarships, including the 4A Foundation Multicultural Advertising Intern Program (MAIP) Scholarship, the 4A Foundation Scholars Program, and the 4A Foundation Carolinas Scholarship. The MAIP Scholarship is open to students who have completed their junior year of college and are interested in pursuing a career in advertising. The 4A Foundation Scholars Program is open to students who have completed their sophomore year of college and are interested in pursuing a career in advertising. The 4A Foundation also offers a scholarship for students pursuing a master's degree in advertising.",
      url: "https://foundation.aaaa.org/scholarshipsawards.html",
    },
    {},
  ];
  return (
    <section className="mx-auto mt-8 max-w-[1024px] px-4 sm:px-6 lg:px-0">
      <div className="prose prose-slate mx-auto max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
        <p className="lead">Other Scholarships</p>
        <p>
          According to Poverty USA, Indigenous Americans experience the highest
          poverty rates among all ethnic groups, highlighting the great need for
          financial support. While there is still a shortage of programs, our
          team at BestColleges.com created a page that highlights several Native
          American scholarships available to support these underserved students.
          You can view it below:{" "}
          <Link
            isExternal
            href="https://college.harvard.edu/financial-aid"
            color="primary"
            size="md"
          >
            https://college.harvard.edu/financial-aid
          </Link>
        </p>
        {scholarships.map((scholarship) => (
          <Fragment key={scholarship.url}>
            <hr />
            <h3>{scholarship.name}</h3>
            <p>{scholarship.description}</p>
            <p>
              <Link isExternal href={scholarship.url} color="primary" size="md">
                {scholarship.url}
              </Link>
            </p>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
