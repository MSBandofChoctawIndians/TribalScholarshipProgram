import StatCard from "./StatCard";

export default function Statistics() {
  const CurrentFunding = [
    {
      label: "Students",
      icon: "🏫",
      number: 414,
      increase: 74,
    },
    {
      label: "New Recipients",
      icon: "🏫",
      number: 119,
    },
    {
      label: "Full-time",
      icon: "🏫",
      number: 339,
    },
    {
      label: "Part-time",
      icon: "🏫",
      number: 18,
    },
    {
      label: "Dual Credit",
      icon: "🏫",
      number: 57,
      increase: 30,
    },
    {
      label: "4 Year Institutions",
      icon: "🏫",
      number: 214,
      increase: 28,
    },
    {
      label: "2 Year Institutions",
      icon: "🏫",
      number: 198,
      increase: 44,
    },
    {
      label: "Graduate School",
      icon: "🏫",
      number: 64,
      increase: 14,
    },
    {
      label: "Doctoral School",
      icon: "🏫",
      number: 9,
      increase: 6,
    },
  ];

  const StudentDiplomas = [
    {
      label: "Graduates",
      icon: "🎓",
      number: 41,
      increase: 20,
    },
    {
      label: "Associates Degree",
      icon: "🎓",
      number: 16,
      increase: 2,
    },
    {
      label: "Bachelors Degree",
      icon: "🎓",
      number: 19,
      increase: 4,
    },
    {
      label: "Masters Degree",
      icon: "🎓",
      number: 6,
      increase: 4,
    },
  ];

  const StudentAthletes = [
    {
      label: "Basketball",
      icon: "🏀",
      number: 16,
    },
    {
      label: "Softball",
      icon: "🥎",
      number: 6,
    },
    {
      label: "Cross Country / Track",
      icon: "👟",
      number: 5,
    },
    {
      label: "Football",
      icon: "🏈",
      number: 5,
    },
    {
      label: "Baseball",
      icon: "⚾",
      number: 4,
    },
    {
      label: "Soccer",
      icon: "⚽",
      number: 2,
    },
    {
      label: "Cheerleading",
      icon: "📣",
      number: 1,
    },
  ];

  return (
    <>
      <div className="py-4">
        <h2 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          FY23 Funded
        </h2>
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
        <h2 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          FY23 Student Awarded Diplomas
        </h2>
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
        <h2 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          FY23 Student Athletes
        </h2>
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
