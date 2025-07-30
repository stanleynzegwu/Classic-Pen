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
import { store } from "./store";
import AllSections from "./components/UI/AllSections";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Experience = () => {
  const snap = useSnapshot(store);
  const viewport = useThree((state) => state.viewport);
  useEffect(() => {
    store.mediaScreen = viewport.width < 22 ? "isMobile" : "isDesktop";
  }, []);

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
      <Environment files="/textures/city.hdr" environmentIntensity={0.8} />
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.8}
      />
      <Center>
        <ScrollControls pages={7.5} damping={0.1} enabled={snap.scroll_Enabled}>
          {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
          <MainPen />
          <AllSections />
        </ScrollControls>
      </Center>
    </>
  );
};

export default Experience;
