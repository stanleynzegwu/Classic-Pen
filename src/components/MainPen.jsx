import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";

export function MainPen(props) {
  const { nodes, materials } = useGLTF("/models/GoldPen.glb");
  const scroll = useScroll();
  const { camera } = useThree();
  console.log(camera.position);

  // const { position, rotation } = useControls({
  //   position: {
  //     value: { x: 19, y: -2, z: 50 },
  //     step: 0.5,
  //   },
  //   rotation: {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     value: { x: -0.12469281136954086, y: -0.09546946702122863, z: -0.011947701768852514 },
  //   },
  // });

  // useFrame(() => {
  //   camera.rotation.set(rotation.x, rotation.y, rotation.z);
  //   camera.position.set(position.x, position.y, position.z);
  // });

  return (
    <group {...props} rotation-y={-Math.PI / 2} dispose={null}>
      <mesh
        name="Pen_BodyMain"
        geometry={nodes.Pen_BodyMain.geometry}
        material={materials.goldpen_Gold}
        position={[12.854, -4.395, -0.704]}
        rotation={[1.636, -0.479, -0.894]}
      />
      <mesh
        name="ballpoint"
        geometry={nodes.ballpoint.geometry}
        material={materials.silverBallMouth}
        position={[13.427, -4.725, -0.206]}
        rotation={[1.636, -0.479, -0.894]}
      />
      <mesh
        name="Pen_ClipStan"
        geometry={nodes.Pen_ClipStan.geometry}
        material={materials.goldpen_Silver}
        position={[12.854, -4.395, -0.704]}
        rotation={[1.636, -0.479, -0.894]}
      />
      <mesh
        name="Pen_MouthScrew"
        geometry={nodes.Pen_MouthScrew.geometry}
        material={materials.goldpen_Silver}
        position={[12.854, -4.395, -0.704]}
        rotation={[1.636, -0.479, -0.894]}
      />
      <mesh
        visible={false}
        name="Pen_Clip1"
        geometry={nodes.Pen_Clip1.geometry}
        material={materials["Pen - Clip material.006"]}
        position={[12.848, -4.331, -0.656]}
        rotation={[1.592, -0.51, -0.915]}
      />
      <mesh
        name="Pen_CenterRing"
        geometry={nodes.Pen_CenterRing.geometry}
        material={materials.goldpen_Silver}
        position={[12.854, -4.395, -0.704]}
        rotation={[1.636, -0.479, -0.894]}
      />
      <mesh
        name="Pen_Head"
        geometry={nodes.Pen_Head.geometry}
        material={materials.goldpen_Silver}
        position={[0.505, 4.252, -13.354]}
        rotation={[0.579, 0.781, 0.29]}
        scale={0.106}
      />
    </group>
  );
}

useGLTF.preload("/models/GoldPen.glb");
