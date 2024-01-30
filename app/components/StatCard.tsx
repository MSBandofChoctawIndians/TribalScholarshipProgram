"use client";
import React, { useEffect, useState, useRef } from "react";

export default function StatCard({
  label,
  icon,
  number,
  increase,
}: {
  label: string;
  icon: string;
  number: number;
  increase: number | undefined;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border-2 border-danger bg-background px-4 pt-5 text-foreground shadow sm:px-6 sm:pt-6">
      <dt>
        <div className="absolute rounded-md bg-danger p-3">
          <span className="text-2xl">{icon}</span>
        </div>
        <p
          ref={ref}
          className={`ml-16 truncate text-sm font-medium text-foreground-800 dark:text-foreground-600 ${
            inView ? 'animate-text-reveal' : ''
          }`}
        >
          {label}
        </p>
      </dt>
      <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
        <p className="text-2xl">{number}</p>
        <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
          {increase ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 self-center text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Increased by</span>
              {increase}
            </>
          ) : null}
        </p>
      </dd>
    </div>
  );
}
