// const Header = () => {
//   return (
//     <h1
//       className="title "
//       style={{
//         color: "#cdcbca",
//         position: "absolute",
//         top: `65vh`,
//         left: "50%",
//         fontSize: "13em",
//         transform: `translate(-50%,-50%)`,
//       }}
//     >
//       STAN
//     </h1>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <div className="header w-[50%]" style={{ position: "absolute", top: `40vh`, left: "5%" }}>
      <span>Introducing the new</span>
      <div className="py-8">
        <h1 className="title font-baskerville font-extrabold text-8xl " style={{}}>
          Classic Pen
        </h1>
        <h2 className="capitalize font-baskerville font-bold text-[#F4C580]">
          Where Class Meets Creativity
        </h2>
      </div>

      <h3 className="font-lato font-medium">
        Welcome to our world of timeless elegance and sophistication, where the art of writing meets
        the epitome of style. Our classic pen is a masterpiece that embodies the essence of
        craftsmanship, designed to elevate your writing experience to a new level of excellence.
      </h3>
    </div>
  );
};

export default Header;
