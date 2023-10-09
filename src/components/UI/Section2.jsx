const Section2 = () => {
  return (
    <div
      className="section_two bg-opacity-5 opacity-0 h-[100vh] w-[100vw] flex flex-col justify-center items-center"
      style={{
        position: "absolute",
        top: `200vh`,
      }}
    >
      <div className="absolute top-[55%] w-[100%] max-w-[600px]">
        <h2 className="capitalize font-extrabold text-6xl py-4">A Barrel of Elegance</h2>
        <p className="text-gray-300">
          The barrel of our classic pen is a work of art in itself. Crafted from the finest
          materials, it exudes elegance and grace. Its balanced weight ensures a comfortable grip,
          allowing you to write for hours without fatigue. Holding our pen is like holding a piece
          of timeless luxury.
        </p>
      </div>
    </div>
  );
};

export default Section2;
