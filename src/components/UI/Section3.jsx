const Section3 = () => {
  return (
    <div
      className="section_three bg-opacity-5 opacity-0 h-[100vh] w-[100vw] flex items-center"
      style={{ position: "absolute", top: `300vh` }}
    >
      <div className="absolute w-[50%] flex flex-col right-5 px-10">
        <h2 className="capitalize font-extrabold text-6xl py-4">Clip - A Touch of Practicality</h2>
        <p className="text-gray-300">
          Our pen's <span className="text-[#F4C580] capitalize font-bold">clip</span> is not just a
          practical feature; it's a statement of functionality and aesthetics. It securely attaches
          to your pocket, notebook, or planner, ensuring that your classic pen is always within
          reach. It's the perfect companion for your on-the-go lifestyle.
        </p>
      </div>
    </div>
  );
};

export default Section3;
