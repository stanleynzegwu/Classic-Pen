import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Overlay from "./components/UI/Overlay";

function App() {
  return (
    <div className="main text-white">
      <Canvas
        shadows
        camera={{
          fov: 30,
          near: 0.1,
          far: 100,
          // position: [33, 27, -28],
          position: [36, 23, -27],
        }}
      >
        {/* <color attach="background" args={["red"]} /> */}
        <Experience />
      </Canvas>
      <Overlay />
    </div>
  );
}

export default App;
