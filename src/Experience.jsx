import {
  Center,
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { useSnapshot } from "valtio";
import { MainPen } from "./components/MainPen";
import { PenAndBox } from "./components/PenAndBox";
import { store } from "./store";
import Navbar from "./components/UI/Navbar";
import Header from "./components/UI/Header";
import Section1 from "./components/UI/Section1";
import Section2 from "./components/UI/Section2";
import Section3 from "./components/UI/Section3";
import Section4 from "./components/UI/Section4";

const Experience = () => {
  const snap = useSnapshot(store);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <Environment
        preset="city"
        ground={{
          height: 7,
          radius: 28,
          scale: 100,
        }}
      />
      <Center>
        <ScrollControls pages={5} damping={0.1}>
          {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
          <MainPen />

          <Scroll>
            <PenAndBox />
          </Scroll>

          <Scroll html style={{ width: "100%" }}>
            <Navbar />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            {/* <h2
              style={{
                position: "absolute",
                top: "350vh",
                left: "50%",
                transform: `translate(-50%,-50%)`,
              }}
            >
              Cutting-Edge of Grooming
            </h2>

            <button
              style={{
                position: "absolute",
                top: `590vh`,
                left: "50%",
                transform: `translate(-50%,-50%)`,
              }}
            >
              Buy now
            </button> */}
          </Scroll>
        </ScrollControls>
      </Center>
    </>
  );
};

export default Experience;

// import { Center, Environment, OrbitControls } from "@react-three/drei";
// import { useSnapshot } from "valtio";
// import { MainPen } from "./components/MainPen";
// import { PenAndBox } from "./components/PenAndBox";
// import { store } from "./store";

// const Experience = () => {
//   const snap = useSnapshot(store);

//   return (
//     <>
//       <OrbitControls />
//       <ambientLight intensity={1.5} />
//       <Environment
//         preset="city"
//         ground={{
//           height: 7,
//           radius: 28,
//           scale: 100,
//         }}
//       />
//       <Center>
//         <MainPen />
//         <PenAndBox />
//       </Center>
//     </>
//   );
// };

// export default Experience;
