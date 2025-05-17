import React from "react";

const Impact: React.FC = () => {
  const impacts = [
    {
      id: 1,
      description: "90%+ staff uptake on live deployments",
    },
    {
      id: 2,
      description: "60%+ reduction in unmanaged legacy documents",
    },
    {
      id: 3,
      description: "Significant time savings on audits & reviews",
    },
    {
      id: 4,
      description: "Fully traceable, real time compliance dashboards",
    },
  ];

  return (
    <section className="bg-white overflow-hidden mt-10">
      <div className="w-[100vw]  flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-[70vw] flex flex-col">
          <div className="flex flex-col px-10 mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 leading-snug"
              data-aos="fade-down"
            >
              Real Impact, <br /> Proven Outcomes
            </h2>
            <div className="text-start mb-6">
              <img
                src="./line.png"
                alt="Line"
                className="w-[120px] h-auto ml-[-20px]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-0 sm:mb-0">
              {impacts.map((impact) => (
                <div
                  key={impact.id}
                  className="flex items-center gap-3"
                  data-aos="fade-right"
                >
                  <img
                    src={`./impact${impact.id}.png`}
                    alt={`Impact ${impact.id}`}
                    className="w-[80px] h-[80px] object-contain"
                  />
                  <p className="text-blue-600 text-start text-base font-medium leading-tight">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-blue-600 text-white px-6 sm:px-10 py-4"
            data-aos="fade-up"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
              Let’s Talk
            </h3>
            <div className="text-start mb-3">
              <img
                src="./line.png"
                alt="Line"
                className="w-[120px] h-auto ml-[-20px]"
              />
            </div>
            <p className="mb-4 text-sm sm:text-base">
              See how MyStaff app can transform governance at your organisation.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-yellow-500 transition">
              Request a Demo
            </button>
          </div>
        </div>

        <div data-aos="fade-left">
          <img
            src="./impacts.png"
            alt="Impact Visual"
            className="w-[60vw] h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;
