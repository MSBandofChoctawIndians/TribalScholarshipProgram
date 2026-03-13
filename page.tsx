"use client";

import { Button, Link } from "@nextui-org/react";
import { Fragment, useState } from "react";


export default function Page() {
  const [showVideo, setShowVideo] = useState(false);

  const documents = [
    {
      name: "Deadlines",
      url: "./document/deadline_dates.pdf",
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
      url: "./document/tsp_policies_and_procedures.pdf",
    },
    {
      name: "Verification of Receipt of Tribal Scholarship Policies Form",
      url: "./document/verification_of_receipt_of_tsp_policies_form.pdf",
      
    },
  
  ];

  return (
    <section className="-top-10">
      <div className="top-4 mx-auto max-w-[1024px] bg-background px-4 pb-4 text-foreground sm:px-6 lg:px-2">
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
          
  <div className="not-prose mt-4 ml-10 w-full flex justify-left">
  <Button
    color="danger"
    variant="solid"
    size="lg"
    className="whitespace-normal leading-tight"
    onPress={() => setShowVideo(true)}
  >
    Orientation Video and Test
  </Button>
</div>

          {showVideo && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Tribal Scholarship Orientation Video
              </h2>

              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <video controls className="w-full h-full">
                  <source src="/video/tribal-scholarship-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}