const Section5 = () => {
  return (
    <div
      className="section_five bg-blue-500 bg-opacity-5 opacity-0 h-[100vh] w-[100vw] flex flex-col justify-center items-center"
      style={{
        position: "absolute",
        top: "550vh",
        left: "50%",
        transform: `translate(-50%,-50%)`,
        pointerEvents: "all",
        touchAction: "auto",
      }}
    >
      <div className="absolute top-[55%] w-[100%] max-w-[600px]">
        <h2 className="capitalize font-extrabold text-6xl py-4">Unveiling the Artistry</h2>
        <p className="text-gray-300">
          But the true magic happens when we deconstruct our classic pen. Each piece, carefully
          crafted and assembled, speaks of the dedication we pour into every pen. Witness the
          transformation as we unveil the artistry behind every component.
        </p>
      </div>
    </div>
  );
};

export default Section5;
