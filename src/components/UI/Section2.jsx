const Section2 = () => {
  return (
    <div
      className="section_two bg-opacity-5 opacity-0 h-[100vh] w-[100vw] flex flex-col justify-center items-center"
      style={{
        position: "absolute",
        top: `200vh`,
        pointerEvents: "all",
        touchAction: "auto",
      }}
    >
      <div className="absolute top-[55%] w-[100%] max-w-[600px] px-5 md:px-0">
        <h2 className="capitalize font-extrabold text-2xl sm:text-4xl md:text-6xl text-center md:text-start py-4">
          A Barrel of Elegance
        </h2>
        <p className="text-gray-300">
          The <span className="text-[#F4C580] capitalize font-bold">barrel</span> of our classic pen
          is a work of art in itself. Crafted from the finest materials, it exudes elegance and
          grace. Its balanced weight ensures a comfortable grip, allowing you to write for hours
          without fatigue. Holding our pen is like holding a piece of timeless luxury.
        </p>
      </div>
    </div>
  );
};

export default Section2;
