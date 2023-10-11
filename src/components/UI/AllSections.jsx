import { Scroll } from "@react-three/drei";
import Navbar from "./Navbar";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import Section5 from "./section5";
import CustomizeSection from "./CustomizeSection";

const AllSections = () => {
  const snap = useSnapshot(store);
  return (
    <Scroll html style={{ width: "100%", touchAction: "auto" }}>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <CustomizeSection />
      {/* <div
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
      </div> */}

      {/* <button
        style={{
          position: "absolute",
          top: `600vh`,
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
        onClick={() => console.log("clicked")}
      >
        Buy now
      </button> */}
      <Footer />
    </Scroll>
  );
};

export default AllSections;
