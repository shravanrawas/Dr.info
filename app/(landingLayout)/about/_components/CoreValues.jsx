import CoreValueCard from "./CoreValueCard";

const CoreValues = () => {
  const values = [
    {
      image:
        "/images/Shield.png",
      title: "Credibility",
      description:
        "We prioritize providing evidence-based, exactly referenced medical information to ensure healthcare professionals can trust the information they receive.",
    },
    {
      image:
        "/images/LightBulb.png",
      title: "Innovation",
      description:
        "Constantly advancing our propriotory AI algorithm to improve medical information aggregation and summarization tools.",
    },
    {
      image:
        "/images/Gear.png",
      title: "Simplicity",
      description:
        "Offering a user-friendly interface that makes medical information accessible and digestible in a matter of seconds.",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-11 pb-52 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="-mb-10 w-full max-w-[1436px] max-md:mb-2.5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-5xl font-medium text-center text-blue-900 max-md:max-w-full max-md:text-4xl">
            Our Core Values
          </h2>
          <div className="flex flex-wrap gap-10 items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
            {values.map((value, index) => (
              <CoreValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
