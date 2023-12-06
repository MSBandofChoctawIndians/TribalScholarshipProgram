export default function Statistics() {
  const CurrentFunding = [
    {
      label: "Students",
      icon: "student",
      number: 414,
      increase: 74,
    },
    {
      label: "New Tribal Member Recipients",
      icon: "student",
      number: 119,
    },
    {
      label: "Full-time",
      icon: "student",
      number: 339,
    },
    {
      label: "Part-time",
      icon: "student",
      number: 18,
    },
    {
      label: "Dual Credit",
      icon: "student",
      number: 57,
      increase: 30,
    },
    {
      label: "Students @ 4 Year Institutions",
      icon: "student",
      number: 214,
      increase: 28,
    },
    {
      label: "Students @ 2 Year Institutions",
      icon: "student",
      number: 198,
      increase: 44,
    },
    {
      label: "Students @ Graduate School",
      icon: "student",
      number: 64,
      increase: 14,
    },
    {
      label: "Students @ Doctoral School",
      icon: "student",
      number: 9,
      increase: 6,
    },
  ];

  const StudentDiplomas = [
    {
      label: "Graduates",
      icon: "student",
      number: 41,
      increase: 20,
    },
    {
      label: "Associates",
      icon: "student",
      number: 16,
      increase: 2,
    },
    {
      label: "Bachelors",
      icon: "student",
      number: 19,
      increase: 4,
    },
    {
      label: "Masters",
      icon: "student",
      number: 6,
      increase: 4,
    },
  ];

  return (
    <>
      <div className="py-4">
        <h1 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Currently Funding:
        </h1>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CurrentFunding.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border-2 border-danger bg-black px-4 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-danger p-3">
                  <img
                    className="h-6 w-6"
                    src={`./image/icon/${item.icon}.svg`}
                  />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-200">
                  {item.label}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl text-white">{item.number}</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {item.increase && (
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
                      {item.increase}
                    </>
                  )}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="py-4">
        <h1 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Student Awarded Diplomas:
        </h1>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {StudentDiplomas.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border-2 border-danger bg-black px-4 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-danger p-3">
                  <img
                    className="h-6 w-6"
                    src={`./image/icon/${item.icon}.svg`}
                  />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-200">
                  {item.label}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl text-white">{item.number}</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {item.increase && (
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
                      {item.increase}
                    </>
                  )}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
