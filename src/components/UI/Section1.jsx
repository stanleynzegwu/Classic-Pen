const Section1 = () => {
  return (
    <div
      className={`section_one bg-opacity-5 opacity-0 h-[100vh] w-[100vw] flex items-center`}
      style={{ position: "absolute", top: `100vh`, pointerEvents: "all", touchAction: "auto" }}
    >
      <div className="absolute w-[50%] flex flex-col right-5 md:px-5 lg:px-10">
        <h2 className="capitalize font-extrabold text-2xl sm:text-4xl md:text-6xl py-4">
          Precision in Every Stroke
        </h2>
        <p className="text-gray-300">
          The heart of our classic pen lies in its{" "}
          <span className="text-[#F4C580] capitalize font-bold">nib/ballpoint</span>. Crafted with
          the utmost precision, it glides smoothly on paper, leaving behind a trail of beautifully
          inked words. Every stroke is a testament to the artistry that goes into creating each pen.
        </p>
      </div>
    </div>
  );
};

export default Section1;
