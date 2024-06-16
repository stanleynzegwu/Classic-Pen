import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="w-[100%] h-[100vh]"
      style={{
        position: "absolute",
        top: `0`,
        pointerEvents: "all",
        touchAction: "auto",
      }}
    >
      <Navbar />
      <div
        className="header w-[100%]"
        style={{
          position: "absolute",
          top: `40vh`,
          left: "5%",
          pointerEvents: "all",
          touchAction: "auto",
        }}
      >
        <span>Introducing the new</span>
        <div className="py-8 w-full">
          <h1
            className="title font-baskerville font-extrabold text-4xl sm:text-6xl md:text-8xl "
            style={{}}
          >
            Classic Pen
          </h1>
          <h2 className="capitalize font-baskerville text-xs sm:text-sm md:text-base font-bold text-[#F4C580]">
            Where Class Meets Creativity
          </h2>
        </div>

        <h3 className="font-lato text-sm sm:text-base md:text-lg font-medium w-[60%] lg:w-[50%]">
          Welcome to our world of timeless elegance and sophistication, where the art of writing
          meets the epitome of style. Our classic pen is a masterpiece that embodies the essence of
          craftsmanship, designed to elevate your writing experience to a new level of excellence.
        </h3>
      </div>
    </div>
  );
};

export default Header;
