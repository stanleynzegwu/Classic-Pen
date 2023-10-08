const Section1 = () => {
  return (
    <div
      className="section_one opacity-0 h-[100vh] w-[100vw] flex items-center"
      style={{ position: "absolute", top: `100vh` }}
    >
      <div
        className="absolute right-5 max-w-[400px]"
        // style={{
        //   position: "absolute",
        //   top: "50%",
        //   transform: `translateY(-50%,-50%)`,
        // }}
      >
        <h2>Precision in Every Stroke</h2>
        <p>
          The heart of our classic pen lies in its nib or ballpoint. Crafted with the utmost
          precision, it glides smoothly on paper, leaving behind a trail of beautifully inked words.
          Every stroke is a testament to the artistry that goes into creating each pen.
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default Section1;
