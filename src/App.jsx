import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
  return (
    <div className="main text-white">
      <Canvas
        shadows
        camera={{
          fov: 30,
          near: 0.1,
          far: 100,
          position: [19, -2.399893760681152, 50],
        }}
      >
        <Experience />
      </Canvas>
      <div className="text">hello three</div>
    </div>
  );
}

export default App;
