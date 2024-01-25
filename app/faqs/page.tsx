"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "./metadata";

const faqs = [
  {
    id: 1,
    question:
      "What services will the Tribal Scholarship Program provide for me?",
    answer:
      "Although most applicants contact the Tribal Scholarship Program seeking money for college, the program also provides numerous other services, In addition to scholarship funds, you can expect the staff to provide: career counseling; assistance in completing applications for admission, housing and financial aid; visits from staff members if you attend school in Mississippi; assistance in contacting family members if you have an emergency; encouragement to earn good grades and complete your degree; and a friendly ear if you just need someone to listen.",
  },
  {
    id: 2,
    question: "How often do I need to apply for the Tribal Scholarship?",
    answer:
      "Full-time students must complete an application for each academic year and a separate one for the Summer Term, Part-time students are required to submit an application every term.",
  },
  {
    id: 3,
    question:
      "What are the deadline dates for Tribal Scholarship applications?",
    answer: "Deadline dates are listed on Page 3 of this Handbook.",
  },
  {
    id: 4,
    question:
      "What happens if I turn in my Tribal Scholarship application after the deadline?",
    answer:
      "Applicants who turn in Tribal Scholarship applications after the deadline will not qualify for a scholarship, but will be encouraged to apply immediately for the next semester/quarter/term.",
  },
  {
    id: 5,
    question:
      "How often do I need to submit a Free Application for Federal Student Aid (FAFSA)?",
    answer: "Students are required to submit a F AFSA for each academic year.",
  },
  {
    id: 6,
    question:
      "Why do I need to submit a Free Application for Federal Student Aid?",
    answer:
      "When students submit a FAFSA, they are applying for all types of need-based financial aid, plus the FAFSA is required for many other types of financial aid, The Tribal Scholarship is supplemental funding, It covers the portion of the Cost of Attendance not covered by other financial aid for full-time students who do not work full-time. For part-time students and full-time students who work full-time, the Tribal Scholarship covers the portion of tuition, fees and course-related book charges not covered by other financial aid. Thus, students must apply for financial aid by submitting the FAFSA.",
  },
  {
    id: 7,
    question:
      "The Financial Aid Office notified me that I was selected for verification. What does that mean? Why was I selected?",
    answer:
      "The Federal Government randomly selects applications to verify that the information submitted is correct. Your Financial Aid Office will notify you that you need to contact them and/or send you additional forms to complete.",
  },
  {
    id: 8,
    question:
      "What happens if my Student Aid Report says that I am selected for verification?",
    answer:
      "The college will instruct you to complete a Verification Worksheet and submit a copy of your tax return, a copy of your parents' tax return if you are a dependent student, and possibly other documents to verify that the information you submitted on your FAFSA is correct.",
  },
  {
    id: 9,
    question:
      "Why does the Cost of Attendance set by the school's Financial Aid Office determine the amount of scholarship funds I can receive?",
    answer:
      "Because the Tribal Scholarship is defined as supplemental funding, students are required to apply for all available financial aid, including federal financial aid. Regulations that govern federal student financial assistance programs require that the amount of assistance the student receives from all sources does not exceed the Cost of Attendance as defined by the school's Financial Aid office. Additionally, the Cost of Attendance which is set by each school is intended to be, and is a good indication of, the amount that a student should need to attend that school, pay direct charges and have enough additional funds to survive.",
  },
  {
    id: 10,
    question:
      "Can I enroll as a full-time student, work full-time and receive living expense funds from the Tribal Scholarship Program?",
    answer:
      "No, the Tribal Scholarship will cover only tuition, fees and course-related book charges for full-time students who work full-time.",
  },
  {
    id: 11,
    question:
      "If I enroll as a full-time student and don't work full-time, how much 'stipend' will I receive?",
    answer:
      "The Tribal Scholarship Program does not provide a 'stipend'. It does, however, provide the difference between the student's Cost of Attendance (COA) and the student's financial aid. Any portion of that amount which is not paid to the school for direct charges, will be disbursed to the student for 'living expenses'. (One exception to this method of computing the student's living expenses award is for the student who has an Off-Campus COA. For that student, the Program will use the OnCampus COA or 80% of the Off-Campus COA, whichever is larger.) Every school that administers federal aid has a set Cost of Attendance for identified categories of students (e.g. On-Campus, Off-Campus, etc.). The Cost of Attendance generally includes, in addition to tuition, fees and books, a set amount for items that are considered necessary for 'living expenses' such as room, board, travel, and miscellaneous expenses. The Tribal Scholarship Program uses the Cost of Attendance figures supplied by the student's chosen school. Because every school sets their own Costs of Attendance and determines the amounts and types of financial aid that a student receives, it is impossible for the Tribal Scholarship Program to give the student an estimate of the amount of living expenses he/she will receive until the application process is completed and the Financial Aid Package Form is received. It should be noted that financial aid at any school, as well as the Tribal Scholarship, should never be looked at as a 'pay check'. Tribal Scholarship funds are available to assist students in obtaining an education.",
  },
  {
    id: 12,
    question: "How is my Tribal Scholarship award determined?",
    answer: `Part-time Students:\n
    The Tribal Scholarship Program will cover the portion of tuition, fees, and course-related book charges not covered by other financial aid for part-time students.\n
    Full-time Students Who Work Full-time:\n
    The Tribal Scholarship Program will cover the portion of tuition, fees, and course-related book charges not covered by other financial aid for full-time students who work full-time.\n
    Full-time students Who Do Not Work Full-time:\n
    The Financial Aid Office at the college/university will use the results from the FAFSA (the Student Aid Report), to determine the appropriate Cost of Attendance (budget) that will be assigned to each student, the amount of financial aid that the student will receive for the year, and the student's unmet need, after which a Financial Aid Award is prepared.\n
    The Financial Aid Office must have the above information to complete the Tribal Scholarship Program Financial Aid Package Form (some schools use the term Financial Needs Analysis or FNA for the form), which the Tribal Scholarship Program uses to determine the amount of money the school will allow the student to receive from the Tribal Scholarship Program without reducing the other aid.`,
  },
  {
    id: 13,
    question:
      "When do I need to have the college/university send an official transcript to the Tribal Scholarship Office?",
    answer: `First-time Tribal Scholarship applicants are required to submit, with their initial application, an official transcript from each college/university they have attended. All Tribal Scholarship recipients are required to submit a current, official transcript at the end of each academic year (traditionally at the end of Spring Term). Grade reports are required at the end of all other terms.\n
    Former Tribal Scholarship students who have taken classes without Tribal Scholarship assistance since leaving the program, must also submit a current, official transcript when re-applying, even though the Tribal Scholarship Program did not pay for those classes. The reason for this is that a current, cumulative grade point average must be on file to verify that the student has the minimum grade point average required by the Program.`,
  },
  {
    id: 14,
    question: "Can I have someone pick up my living expense check for me?",
    answer:
      "No one other than the student can receive a student's living expense check without written authorization from the student. Forms for this are available in the Tribal Scholarship Office. A letter from the student will be accepted provided it contains the student's signature, the current date and the person's name who will receive the check.",
  },
  {
    id: 15,
    question:
      "Can I have my scholarship funds sent to me and/or the college/university via electronic transfer?",
    answer:
      "The Tribal Finance Office currently has no provision for electronic transfer of funds for students.",
  },
  {
    id: 16,
    question:
      "Why do I have to send an official transcript to the Tribal Scholarship Office?",
    answer:
      "Students must send current, official transcripts to the Tribal Scholarship Office to document progress and to verify that they are maintaining the required minimum grade point average.",
  },
  {
    id: 17,
    question:
      "Can I call the Tribal Scholarship staff after I arrive on campus if I have questions about how to register for classes, how to obtain my books, how to find my academic advisor, how many classes I should take, etc.?",
    answer:
      "Yes, students can call the Tribal Scholarship staff for assistance. The telephone numbers are 601-650-7409 and 800-446-5006. The staff is familiar with local college/universities, and will attempt to assist students at other institutions. However, most colleges/universities publish and distribute this information at orientation, and also have staff members available to assist new students.",
  },
  {
    id: 18,
    question:
      "When I register, can I just tell the school that the Tribal Scholarship Program will pay for my tuition and then assume that my charges will be paid?",
    answer: `During registration, many schools require immediate payment, verification of financial aid, or some type of Third-Party billing authorization from the agency that will sponsor the student. Other schools will allow the student to register without any type of payment or verification that someone will sponsor the student, and later send an invoice to the student. PLEASE BE AWARE that if you don't have other financial aid and you register for classes without completing the application process for the Tribal Scholarship (or making arrangements with the Tribal Scholarship staffto send a billing authorization) by the time payment is due, YOU will have to pay for the classes. "Completing the application process" means that you have submitted an application and all required supporting documents. The Tribal Scholarship Program will not, under any circumstances, actually send scholarship funds to the school for students who have not submitted the required transcript and/or grades. Staff members are aware that grades are not always available prior to the date students can register for classes for the next term. If students are in good standing with the Program, and ifthey have a history of providing grades in a timely manner, a billing authorization may be sent to the school prior to the receipt of grades. However, a billing authorization will not be provided for students who do not typically submit grades as requested, or for students who are on probation with the Program.`,
  },
  {
    id: 19,
    question:
      "I'm a full-time student, I don't work full-time, and I receive living expenses from the Tribal Scholarship Program. If I don't have enough other financial aid to cover my charges at the school, will the Scholarship Program pay my account balance?",
    answer:
      "Yes, provided you have not already received your full scholarship award.",
  },
  {
    id: 20,
    question:
      "I'm a full-time student, I don't work full-time, and I receive living expenses from the Tribal Scholarship Program. When will the Tribal Scholarship Program pay my account charges at the school?",
    answer:
      "There are a variety of ways that the Tribal Scholarship Program disburses scholarship funds. Generally, the Program sends a billing authorization to the school's Student Accounts Office or the Financial Aid Office stating that the Program will cover the portion of the student's charges not covered by other financial aid. If the student does not have enough financial aid to cover all direct charges, the Student Accounts Office sends an invoice sometime during the semester to the Tribal Scholarship Program. The Program processes a purchase order and forwards a check to the school. If the student has enough other financial aid to cover all direct charges, the Program may disburse the full scholarship award directly to the student. In this case, the Scholarship Program will notify the Financial Aid Office that an award has been made and disbursed to the student.",
  },
  {
    id: 21,
    question:
      "I'm a part-time student. If I don't have enough other financial aid to cover my charges at the school, will the Scholarship Program pay my account balance?",
    answer:
      "Yes, provided you are cleared for a scholarship with the Tribal Scholarship Program.",
  },
  {
    id: 22,
    question:
      "I'm a part-time student, I have completed the application process, I'm in good standing with the Tribal Scholarship Program and I have been awarded a Pell Grant. Does the school keep my Pell Grant to pay for my classes and my books, or will the Tribal Scholarship Program pay for my charges and thereby allow the school to refund the full amount of my Pell Grant to me?",
    answer:
      "The Tribal Scholarship is supplemental funding. Therefore, the Pell Grant will always be applied to the student's account. If the Pel! Grant, plus any other financial aid that the student has, does not cover all of the student's charges, the Tribal Scholarship Program will pay the balance. If the Pell Grant is more than the student's charges, the difference between the amount of the Pell Grant and the student's charges will be refunded to the student by the school.",
  },
  {
    id: 23,
    question:
      "I'm a part-time student. Will the Tribal Scholarship Program provide travel funds for me?",
    answer:
      "No. The Tribal Scholarship Program will pay only tuition, fees, and course-related book charges for part-time students.",
  },
  {
    id: 24,
    question:
      "I'm a part-time student. Will I be allowed to charges supplies in the Bookstore when I get my books?",
    answer:
      "A student who has enough Pell Grant or other financial aid to cover the cost of tuition, fees, books and supplies will generally be allowed by the school to charge supplies in the Bookstore unless the Bookstore is not run by the school. The Tribal Scholarship Program will not pay for supplies for part-time students. As stated earlier, the Tribal Scholarship Program will pay only tuition, fees, and courserelated book charges for part-time students.",
  },
  {
    id: 25,
    question: "I'm a full-time commuting student. Can I get a meal ticket?",
    answer:
      "If the student has enough financial aid to cover a meal ticket plus all other direct charges, he/she should contact the appropriate school official to make arrangements for the meal ticket. A full-time commuting student who does not have enough financial aid to cover a meal ticket plus all other direct charges, and does not work full-time, should contact the Tribal Scholarship Program staff to find out if a meal ticket can be provided. Schools vary in their policies concerning commuter meal tickets. If the school allows the student to charge a meal ticket that is not covered by other financial aid, and if the Tribal Scholarship Program agrees to pay for it, the amount of the meal ticket will be deducted from the student's living expenses. If the student has already received hislher full scholarship award, a meal ticket may not be charged to the Tribal Scholarship Program. A full-time commuting student who does not have enough financial aid to cover a meal ticket plus all other direct charges, and does work full-time will not be provided a meal ticket by the Tribal Scholarship Program.",
  },
  {
    id: 26,
    question:
      "I'm a part-time student taking day classes. Can I get a meal ticket?",
    answer:
      "The Tribal Scholarship Program will not pay for a meal ticket for a part-time student. However, if the student has enough other financial aid (e.g. Pell Grant) to cover all charges plus a meal ticket, he/she should contact the appropriate college official to arrange for a meal ticket.",
  },
  {
    id: 27,
    question:
      "I was told that I need to submit a Degree Plan. What is a Degree Plan?",
    answer:
      "A Degree Plan lists all the requirements for your degree, the requirements that you have met, and the requirements that you lack. Your school may use a different term, e.g. Graduation Worksheet, Degree Progress Report, Degree Audit or Degree Worksheet. Your advisor at the school can assist you with this form.",
  },
  {
    id: 28,
    question: "How many degrees can I get and receive living expenses?",
    answer: "One at each level.",
  },
  {
    id: 29,
    question:
      "If I choose to enroll in a technical program of study at a community college, will my classes transfer to a university?",
    answer:
      "Most universities will not accept technical courses. You should be very careful in selecting classes if you plan to transfer to a university. Always check with your advisor, or contact the university to find out if they will accept classes in which you are interested. All of the academic classes (e.g. English Composition, Psychology, American History) required for a technical degree should transfer without any problem.",
  },
  {
    id: 30,
    question:
      "How can I get additional information about the Tribal Scholarship? Who can answer questions if I don't understand something in this handbook or ifI don't know what I am supposed to do?",
    answer:
      "You can always contact the Tribal Scholarship Program staff at 601-650-7409, or you can contact the staff by email: scholarship.program@choctaw.org. The staff directory is located on the contact us page.",
  },
];

export default function Page() {
  return (
    <section className="top-[-40px]">
      <div className="top-4 mx-auto max-w-[1024px] bg-black px-4 pb-4 sm:px-6 lg:px-2">
        <div className="prose prose-slate mx-auto max-w-none pt-4 md:prose-lg lg:prose-xl dark:prose-invert">
          <h1>FAQs</h1>
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                aria-label={`Accordion ${faq.id}`}
                title={faq.question}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: faq.answer.replace(/\n/g, "<br />"),
                  }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
