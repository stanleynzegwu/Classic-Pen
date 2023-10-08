import { Scroll } from "@react-three/drei";
import Navbar from "./Navbar";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const AllSections = () => {
  return (
    <Scroll html style={{ width: "100%" }}>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <div
        className="header bg-red-400 h-[100vh] w-[100vw]"
        style={{ position: "absolute", top: `500vh`, right: "0" }}
      >
        <h2>ggggggggggggg</h2>
        <p>
          The heart of our classic pen lies in its nib or ballpoint. Crafted with the utmost
          precision, it glides smoothly on paper, leaving behind a trail of beautifully inked words.
          Every stroke is a testament to the artistry that goes into creating each pen.
        </p>
        <button>Read more</button>
      </div>
      <h2
        style={{
          position: "absolute",
          top: "600vh",
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
      >
        Cutting-Edge of Grooming
      </h2>

      {/* <button
        style={{
          position: "absolute",
          top: `680vh`,
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
      >
        Buy now
      </button> */}
    </Scroll>
  );
};

export default AllSections;

// import { Scroll } from "@react-three/drei";
// import Navbar from "./Navbar";
// import Header from "./Header";
// import Section1 from "./Section1";
// import Section2 from "./Section2";
// import Section3 from "./Section3";
// import Section4 from "./Section4";

// const AllSections = () => {
//   return (
//     <div className="pages text-white">
//       <Navbar />
//       <Header />
//       <Section1 />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <div
//         className="bg-red-400 h-[100vh] w-[100vw]"
//         style={{ position: "absolute", top: `500vh`, right: "0" }}
//       >
//         <h2>ggggggggggggg</h2>
//         <p>
//           The heart of our classic pen lies in its nib or ballpoint. Crafted with the utmost
//           precision, it glides smoothly on paper, leaving behind a trail of beautifully inked words.
//           Every stroke is a testament to the artistry that goes into creating each pen.
//         </p>
//         <button>Read more</button>
//       </div>
//       <h2
//         style={{
//           position: "absolute",
//           top: "600vh",
//           left: "50%",
//           transform: `translate(-50%,-50%)`,
//         }}
//       >
//         Cutting-Edge of Grooming
//       </h2>

//       {/* <button
//         style={{
//           position: "absolute",
//           top: `680vh`,
//           left: "50%",
//           transform: `translate(-50%,-50%)`,
//         }}
//       >
//         Buy now
//       </button> */}
//     </div>
//   );
// };

// export default AllSections;
