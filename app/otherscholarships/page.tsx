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
        "The Indian Arts Research Center (IARC) offers three internships annually to Native American, Alaska Native, Native Hawaiian, and First Nations students who are enrolled in undergraduate or graduate programs. Interns work closely with IARC staff and undertake collections-based projects, such as researching the collection, working with artists, developing educational resources, or assisting with an exhibition. Past interns have cataloged the collection, digitized photographs, served as liaison to artists, and conducted research for exhibitions, among other projects. The internships are intended to provide students with opportunities to gain hands-on experience in a museum setting, learn about museum practices, enhance their research skills, and refine career goals.",
      url: "https://sarweb.org/iarc/internships/",
    },
    {
      name: "American Association of Advertising Agencies (4A) Foundation Scholarships",
      description:
        "The 4A Foundation is a nonprofit organization that provides scholarships to multicultural students pursuing a career in advertising. The 4A Foundation offers several scholarships, including the 4A Foundation Multicultural Advertising Intern Program (MAIP) Scholarship, the 4A Foundation Scholars Program, and the 4A Foundation Carolinas Scholarship. The MAIP Scholarship is open to students who have completed their junior year of college and are interested in pursuing a career in advertising. The 4A Foundation Scholars Program is open to students who have completed their sophomore year of college and are interested in pursuing a career in advertising. The 4A Foundation also offers a scholarship for students pursuing a master's degree in advertising.",
      url: "https://foundation.aaaa.org/scholarshipsawards.html",
    },
    {
      name: "Actuarial Foundation Diversity Scholarship",
      description:
        "The Actuarial Foundation offers a scholarship for minority students pursuing a career in actuarial science. The scholarship is open to full-time undergraduate students who are enrolled in a degree program that may lead to a career in the actuarial profession. Applicants must be a member of an underrepresented minority group, including Black/African American, Hispanic, Native North American, or Pacific Islander.",
      url: "https://actuarialfoundation.org/scholarships/actuarial-diversity-scholarship/",
    },
    {
      name: "American Chemistry Society Scholars Program",
      description:
        "The ACS Scholars Program awards renewable scholarships to undergraduate students from historically underrepresented groups in the chemical sciences, majoring in chemistry-related disciplines, and intending to pursue chemistry-related careers. Selected recipients are awarded up to $5,000 per academic year. To date, over 3,500 students have received funding from the ACS Scholars Program.",
      url: "https://www.acs.org/education/acs-scholars.html",
    },
    {
      name: "AISES (American Indian Science and Engineering Society)",
      description:
        "AISES helps students move forward in their educational journeys by providing a wide range of programs and scholarship opportunities. AISES scholarships help students acquire skills and training that will help them meet the unique STEM needs of our communities. AISES scholarships range from $500 to $10,000 and include funding for tuition, books, and academic fees. To be eligible for an AISES scholarship, you must be pursuing a degree in one of the following fields: computer science, engineering, engineering technology, geology, mathematics, natural resources, physical science, or science.",
      url: "https://www.aises.org/students/scholarships",
    },
    {
      name: "American Indian College Fund",
      description:
        "The American Indian College Fund provides scholarships to American Indian and Alaska Native college students seeking undergraduate and graduate degrees at tribal colleges, nonprofit, and accredited schools. The American Indian College Fund also provides scholarships to students attending any other accredited public and non-profit private college all across the United States. The American Indian College Fund also provides scholarships to students attending any other accredited public and non-profit private college all across the United States.",
      url: "https://collegefund.org/students/scholarship-journey/",
    },
    {
      name: "American Indian Education Foundation",
      description:
        "The American Indian Education Foundation (AIEF) provides scholarships to American Indian and Alaska Native undergraduate and graduate students attending tribal colleges and public or private nonprofit colleges across the United States. The AIEF also provides scholarships to students attending any other accredited public and non-profit private college all across the United States.",
      url: "http://www.nativepartnership.org/site/PageServer?pagename=aief_services_scholarships",
    },
    {
      name: "Native Forward Scholarship Fund",
      description:
        "The Native Forward Scholarship Fund is a scholarship program that provides financial support to Native American students pursuing higher education. The scholarship is open to Native American students who are enrolled in a tribe from the continental United States or Alaska. Applicants must be enrolled in an accredited college or university and have a minimum GPA of 2.5. The scholarship is open to students pursuing any degree program, including STEM, business, law, and medicine. The scholarship is open to students pursuing any degree program, including STEM, business, law, and medicine.",
      url: "https://www.nativeforward.org",
    },
    {
      name: "American Indian Services",
      description:
        "American Indian Services (AIS) is a nonprofit organization that provides scholarships to Native American students pursuing higher education. AIS offers scholarships for undergraduate and graduate students attending tribal colleges and public or private nonprofit colleges across the United States. AIS also provides scholarships to students attending any other accredited public and non-profit private college all across the United States.",
      url: "https://www.americanindianservices.org/scholarships",
    },
    {
      name: "American Nuclear Society",
      description:
        "The American Nuclear Society offers a variety of scholarships for students pursuing a degree in nuclear science, nuclear engineering, or a nuclear-related field. The scholarships are open to undergraduate and graduate students. The American Nuclear Society also offers scholarships for high school students who are interested in pursuing a degree in nuclear science, nuclear engineering, or a nuclear-related field.",
      url: "https://www.ans.org/scholarships/",
    },
    {
      name: "American Physical Society Minority Scholarships",
      description:
        "The American Physical Society offers a scholarship for minority students pursuing a degree in physics. The scholarship is open to high school seniors, college freshmen, and college sophomores. The scholarship is open to high school seniors, college freshmen, and college sophomores.",
      url: "https://www.aps.org/programs/minorities/honors/index.cfm",
    },
    {
      name: "Association on American Indian Affairs Scholarship",
      description:
        "The Association on American Indian Affairs (AAIA) offers a scholarship for Native American students pursuing a degree in a STEM field. The scholarship is open to undergraduate and graduate students. The scholarship is open to undergraduate and graduate students.",
      url: "https://www.indian-affairs.org/nativescholarship.html",
    },
    {
      name: "Catching the Dream Scholarship",
      description:
        "Catching the Dream offers scholarships for Native American students pursuing a degree in a STEM field. The scholarship is open to undergraduate and graduate students. The scholarship is open to undergraduate and graduate students.",
      url: "https://www.catchingthedream.org",
    },
    {
      name: "Daughters of the American Revolution American Indian Scholarship",
      description:
        "The Daughters of the American Revolution offers a scholarship for Native American students pursuing a degree in a STEM field. The scholarship is open to undergraduate and graduate students. The scholarship is open to undergraduate and graduate students.",
      url: "https://www.dar.org/national-society/scholarships/american-indian",
    },
    {
      name: "Gates Millennium Scholars Program",
      description:
        "The Gates Millennium Scholars Program offers scholarships for Native American students pursuing a degree in a STEM field. The scholarship is open to undergraduate and graduate students. The scholarship is open to undergraduate and graduate students.",
      url: "https://www.gmsp.org",
    },
    {
      name: "Indian Health Services Scholarship Program",
      description:
        "The Indian Health Services Scholarship Program offers scholarships for Native American students pursuing a degree in a STEM field. The scholarship is open to undergraduate and graduate students. The scholarship is open to undergraduate and graduate students.",
      url: "https://www.ihs.gov/scholarship/apply/",
    },
    {
      name: "International Order of the King's Daughters and Sons North American Indian Scholarship",
      description:
        "The International Order of the King's Daughters and Sons offers a scholarship for Native American students pursuing a degree in a STEM field. The scholarship is open to undergraduate and graduate students. The scholarship is open to undergraduate and graduate students.",
      url: "https://iokds.org/native-american-scholarship/",
    },
    {
      name: "Maureen L. and Howard N. Blitman, P.E., Scholarship to Promote Diversity in Engineering",
      description:
        "The National Society of Professional Engineers offers a scholarship for minority students pursuing a degree in engineering. The scholarship is open to high school seniors who are members of an underrepresented minority group, including Black/African American, Hispanic, Native North American, or Pacific Islander.",
      url: "https://www.nspe.org/resources/students/scholarships/maureen-l-howard-n-blitman-pe-scholarship-promote-diversity",
    },
    {
      name: "AGI Scholarship for Advancing Diversity in the Geoscience Profession",
      description:
        "The AGI Scholarship for Advancing Diversity in the Geoscience Profession is a scholarship program that provides financial support to Native American students pursuing higher education. The scholarship is open to Native American students who are enrolled in a tribe from the continental United States or Alaska. Applicants must be enrolled in an accredited college or university and have a minimum GPA of 2.5. The scholarship is open to students pursuing any degree program, including STEM, business, law, and medicine. The scholarship is open to students pursuing any degree program, including STEM, business, law, and medicine.",
      url: "https://www.americangeosciences.org/scholarships/diversity/",
    },
    {
      name: "National Action Council for Minorities in Engineering Scholarships",
      description:
        "The National Action Council for Minorities in Engineering (NACME) offers a scholarship for minority students pursuing a degree in engineering. The scholarship is open to high school seniors who are members of an underrepresented minority group, including Black/African American, Hispanic, Native North American, or Pacific Islander.",
      url: "https://www.nacme.org/scholarships",
    },
    {
      name: "National Association of Women in Construction Founders' Scholarship",
      description:
        "The National Association of Women in Construction Founders' Scholarship is awarded to women pursuing a career in the construction industry.",
      url: "https://nawic.org/education/nfsf-scholarships/",
    },
    {
      name: "Native American Journalists Association Scholarships",
      description:
        "The Native American Journalists Association offers scholarships for Native American students pursuing a degree in journalism. The scholarship is open to undergraduate and graduate students. The scholarship is open to undergraduate and graduate students.",
      url: "https://www.naja.com/programs/scholarships/",
    },
    {
      name: "Jackie Robinson Foundation Scholarship",
      description:
        "The Jackie Robinson Foundation Scholarship is awarded to minority students pursuing a degree in any field.",
      url: "https://www.jackierobinson.org/apply/",
    },
    {
      name: "Society of Women Engineers Scholarships",
      description:
        "SWE Scholarships support those who identify as a woman and pursue an ABET-accredited bachelor or graduate student program in preparation for careers in engineering, engineering technology, and fields related to engineering globally.",
      url: "https://swe.org/scholarships/",
    },
    {
      name: "Truman D. Picard Scholarship",
      description:
        "The Truman D. Picard Scholarship is awarded to Native American students pursuing a degree in natural resources.",
      url: "https://www.itcnet.org/about_us/scholarships.html",
    },
    {
      name: "Future Farmers of America Scholarships",
      description:
        "The National FFA Organization offers scholarships for students pursuing a degree in agriculture.",
      url: "https://www.ffa.org/participate/grants-and-scholarships/scholarships/",
    },
    {
      name: "United Negro College Fund",
      description:
        "The United Negro College Fund (UNCF) is a comprehensive minority higher education assistance organization.",
      url: "https://uncf.org/",
    },
  ];
  return (
    <section className="top-[-40px]">
      <div className="top-4 mx-auto max-w-[1024px] bg-black px-4 pb-4 sm:px-6 lg:px-2">
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
          {scholarships
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((scholarship) => (
              <Fragment key={scholarship.url}>
                <hr />
                <h3>{scholarship.name}</h3>
                <p>{scholarship.description}</p>
                <Button
                  href={scholarship.url}
                  as={Link}
                  color="danger"
                  showAnchorIcon
                  size="lg"
                  isExternal
                >
                  Read More
                </Button>
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
}
