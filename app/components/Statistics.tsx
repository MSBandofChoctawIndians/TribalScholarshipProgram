import StatCard from "./StatCard";

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
      label: "4 Year Institutions",
      icon: "student",
      number: 214,
      increase: 28,
    },
    {
      label: "2 Year Institutions",
      icon: "student",
      number: 198,
      increase: 44,
    },
    {
      label: "Graduate School",
      icon: "student",
      number: 64,
      increase: 14,
    },
    {
      label: "Doctoral School",
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
      label: "Associates Degree",
      icon: "student",
      number: 16,
      increase: 2,
    },
    {
      label: "Bachelors Degree",
      icon: "student",
      number: 19,
      increase: 4,
    },
    {
      label: "Masters Degree",
      icon: "student",
      number: 6,
      increase: 4,
    },
  ];

  const StudentAthletes = [
    {
      label: "Basketball",
      icon: "student",
      number: 16,
    },
    {
      label: "Softball",
      icon: "student",
      number: 6,
    },
    {
      label: "Cross Country / Track",
      icon: "student",
      number: 5,
    },
    {
      label: "Football",
      icon: "student",
      number: 5,
    },
    {
      label: "Baseball",
      icon: "student",
      number: 4,
    },
    {
      label: "Soccer",
      icon: "student",
      number: 2,
    },
    {
      label: "Cheerleading",
      icon: "student",
      number: 1,
    },
  ];

  return (
    <>
      <div className="py-4">
        <h1 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Currently Funding
        </h1>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CurrentFunding.map((item, index) => (
            <StatCard
              key={index}
              label={item.label}
              icon={item.icon}
              number={item.number}
              increase={item.increase}
            />
          ))}
        </dl>
      </div>
      <div className="py-4">
        <h1 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Student Awarded Diplomas
        </h1>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {StudentDiplomas.map((item, index) => (
            <StatCard
              key={index}
              label={item.label}
              icon={item.icon}
              number={item.number}
              increase={item.increase}
            />
          ))}
        </dl>
      </div>
      <div className="py-4">
        <h1 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Student Athletes
        </h1>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {StudentAthletes.map((item, index) => (
            <StatCard
              key={index}
              label={item.label}
              icon={item.icon}
              number={item.number}
              increase={undefined}
            />
          ))}
        </dl>
      </div>
    </>
  );
}
