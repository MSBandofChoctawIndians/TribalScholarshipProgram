"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

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
];

export default function Page() {
  return (
    <section className="mx-auto mt-8 max-w-[1024px] px-4 sm:px-6 lg:px-0">
      <div className="prose prose-slate mx-auto max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
        <p className="lead">FAQs</p>
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              aria-label={`Accordion ${faq.id}`}
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
