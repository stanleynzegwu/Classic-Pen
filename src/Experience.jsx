import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  useTexture,
} from "@react-three/drei";
import { useSnapshot } from "valtio";
import { MainPen } from "./components/MainPen";
import { PenAndBox } from "./components/PenAndBox";
import { store } from "./store";
import AllSections from "./components/UI/AllSections";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const Experience = () => {
  const snap = useSnapshot(store);
  // const environmentMap = useTexture("images/envMap.jpg");
  // const scene = useThree((state) => state.scene);

  // //EnvironmentMap
  // environmentMap.mapping = THREE.EquirectangularReflectionMapping;
  // environmentMap.colorSpace = THREE.SRGBColorSpace;
  // scene.environment = environmentMap;
  return (
    <>
      <OrbitControls
        // makeDefault
        enableDamping
        enableRotate={snap.controls_Enabled}
        enableZoom={false}
        enabled={false}
      />
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 2, 3]} intensity={1} castShadow />
      <Environment
        preset="city"
        ground={{
          height: 7,
          radius: 28,
          scale: 100,
        }}
      />
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.8}
      />
      <Center>
        <ScrollControls
          pages={7.5}
          damping={0.1}
          enabled={snap.scroll_Enabled}
          style={{ touchAction: "auto" }}
        >
          {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
          <MainPen />
          {/* <Scroll>
            <PenAndBox />
          </Scroll> */}
          <AllSections />
        </ScrollControls>
      </Center>
    </>
  );
};

export default Experience;
