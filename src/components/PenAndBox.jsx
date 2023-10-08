import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PenAndBox(props) {
  const { nodes, materials } = useGLTF("/models/penBox.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pebBox_bottom"
        geometry={nodes.pebBox_bottom.geometry}
        material={materials.BoxMaterial}
        position={[0.883, 0.068, -13.166]}
        rotation={[0, -0.239, 0]}
      />
      <mesh
        name="penBox_top"
        geometry={nodes.penBox_top.geometry}
        material={materials.BoxMaterial}
        position={[-3.835, 0.504, -14.385]}
        rotation={[0, -0.239, 1.472]}
      />
      <mesh
        name="innerMat"
        geometry={nodes.innerMat.geometry}
        material={materials.foam}
        position={[0.883, 2.739, -13.166]}
        rotation={[0, -0.239, 0]}
      />
      <group
        name="Pen_Clip1001"
        position={[-3.302, -2.034, 1.916]}
        rotation={[0.007, 1.332, 1.564]}
      >
        <mesh
          name="000_Pen_-_Clip004"
          geometry={nodes["000_Pen_-_Clip004"].geometry}
          material={materials.silverpen_Gold}
        />
        <mesh
          name="000_Pen_-_Clip004_1"
          geometry={nodes["000_Pen_-_Clip004_1"].geometry}
          material={materials.silverpen_Silver}
        />
        <mesh
          name="000_Pen_-_Clip004_2"
          geometry={nodes["000_Pen_-_Clip004_2"].geometry}
          material={materials.silverBallMouth}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/penBox.glb");
