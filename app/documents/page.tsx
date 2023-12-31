"use client";
import { Button, Link } from "@nextui-org/react";
import { Fragment } from "react";

export default function Page() {
  const documents = [
    {
      name: "Deadlines",
      url: "./document/deadlines.pdf",
    },
    {
      name: "Application",
      url: "./document/application.pdf",
    },
    {
      name: "Full Time New Student Checklist",
      url: "./document/full time new student checklist.pdf",
    },
    {
      name: "Part Time New Student Checklist",
      url: "./document/part time new student checklist.pdf",
    },
    {
      name: "Full Time Renewal Student Checklist",
      url: "./document/full time renewal student checklist.pdf",
    },
    {
      name: "Part Time Renewal Student Checklist",
      url: "./document/part time renewal student checklist.pdf",
    },
    {
      name: "Transcript Release Form",
      url: "./document/transcript release form.pdf",
    },
    {
      name: "Request for Transcript",
      url: "./document/request for transcript.pdf",
    },
    {
      name: "Request for Certificate of Degree of Indian Blood",
      url: "./document/cdib request form.pdf",
    },
    {
      name: "Academic Year Financial Aid Package Form",
      url: "./document/academic year financial aid package form.pdf",
    },
    {
      name: "Summer Financial Aid Package Form",
      url: "./document/summer financial aid package form.pdf",
    },
    {
      name: "Direct Deposit Form",
      url: "./document/direct deposit form.pdf",
    },
    {
      name: "Employment Verification Form",
      url: "./document/employment verification form.pdf",
    },
    {
      name: "Non-Employment Verification Form",
      url: "./document/non-employment verification form.pdf",
    },
    {
      name: "Tribal Scholarship Program Policies & Procedures Manual",
      url: "./document/tsp policies and procedures manual.pdf",
    },
    {
      name: "Verification of Receipt of Tribal Scholarship Policies Form",
      url: "./document/verification of receipt of tsp policies form.pdf",
    },
    {
      name: "Tutor Report Form",
      url: "./document/tutor report form.pdf",
    },
    {
      name: "Mid-Term Report Form",
      url: "./document/mid-term report form.pdf",
    },
  ];

  return (
    <section className="-top-10">
      <div className="top-4 mx-auto max-w-[1024px] bg-black px-4 pb-4 sm:px-6 lg:px-2">
        <div className="prose prose-slate mx-auto max-w-none pt-4 md:prose-lg lg:prose-xl dark:prose-invert">
          <h1>Documents</h1>
          <p>Please click the links below to download the documents.</p>
          <ul className="list-outside list-none p-0">
            {documents.map((document) => (
              <Fragment key={document.url}>
                <li>
                  <Button
                    href={document.url}
                    as={Link}
                    color="danger"
                    showAnchorIcon
                    variant="solid"
                    size="lg"
                    className="max-w-full whitespace-normal leading-tight"
                  >
                    {document.name}
                  </Button>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
