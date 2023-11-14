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
    question: "Who is eligible for the Tribal Scholarship Program?",
    answer:
      "To be eligible for the Tribal Scholarship Program, you must be a member of a federally recognized Native American tribe and be enrolled in an accredited college or university.",
  },
  {
    id: 3,
    question: "How do I apply for the Tribal Scholarship Program?",
    answer:
      "To apply for the Tribal Scholarship Program, please visit our website and fill out the online application form.",
  },
];

export default function Page() {
  return (
    <section className="mx-auto mt-8 max-w-[1024px] px-4 sm:px-6 lg:px-0">
      <div className="prose prose-slate mx-auto max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
        <p className="lead">Faqs</p>
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
