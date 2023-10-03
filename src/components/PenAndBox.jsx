import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PenAndBox(props) {
  const { nodes, materials } = useGLTF("/models/penAndBox.glb");
  return (
    <group {...props} rotation-y={-Math.PI / 2} dispose={null}>
      <mesh
        name="pebBox_bottom"
        geometry={nodes.pebBox_bottom.geometry}
        material={materials.BoxMaterial}
        position={[0, 0.068, -13.594]}
      />
      <mesh
        name="penBox_top"
        geometry={nodes.penBox_top.geometry}
        material={materials.BoxMaterial}
        position={[-4.873, 0.504, -13.662]}
        rotation={[0, 0, 1.472]}
      />
      <mesh
        name="innerMat"
        geometry={nodes.innerMat.geometry}
        material={materials.foam}
        position={[0, 2.739, -13.594]}
      />
      <group name="Pen_Clip1001" position={[-0.497, -2.034, 2.049]} rotation={[1.571, 1.569, 0]}>
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

useGLTF.preload("/models/penAndBox.glb");
