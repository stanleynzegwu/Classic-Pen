import React, { useEffect, useRef } from "react";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { store } from "../store";

export function MainPen(props) {
  const snap = useSnapshot(store);
  const { nodes, materials } = useGLTF("/models/penNew.glb");
  const scroll = useScroll();
  const { camera, controls } = useThree();
  const tl = useRef();
  const pen = useRef();

  // meshes ref
  const clipRef = useRef();
  const penStanRef = useRef();
  const barrelRef = useRef();
  const ballpointRef = useRef();
  const ringRef = useRef();
  const tipRef = useRef();
  const refillRef = useRef();

  // Html div references
  const main_ref = useRef();
  const header_ref = useRef();
  const section_1_ref = useRef();
  const section_2_ref = useRef();
  const section_3_ref = useRef();

  useEffect(() => {
    if (snap.start_Experience) {
      main_ref.current = document.getElementsByClassName("main");
      header_ref.current = document.getElementsByClassName("header");
      section_1_ref.current = document.getElementsByClassName("section_one");
      section_2_ref.current = document.getElementsByClassName("section_two");
      section_3_ref.current = document.getElementsByClassName("section_three");
    }
  }, [snap.start_Experience]);

  useEffect(() => {
    if (snap.start_Experience) {
      tl.current = gsap.timeline({ defaults: { duration: 2, ease: "power1.inOut" } });

      let AnimationsData = [];

      //Nib/Ballpoint Animations
      const BallpointAnimation = [
        {
          // Html
          objectToAnimate: header_ref.current,
          properties: {
            left: "-40%",
            opacity: 0,
            duration: 2,
          },
          timelinePoint: 0.02 * 20,
        },
        {
          objectToAnimate: section_1_ref.current,
          properties: {
            opacity: 1,
            duration: 0.5,
          },
          timelinePoint: 0.14 * 20,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: 2.0,
            y: -0.5,
            z: -0.5,
            duration: 2,
          },
          timelinePoint: 0.1 * 20,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: 0,
            y: 0.5,
            z: 0,
            duration: 2,
          },
          timelinePoint: 0.1 * 20,
        },
        {
          objectToAnimate: camera,
          properties: {
            zoom: 1.5,
            onUpdate: () => {
              camera.updateProjectionMatrix();
            },
            duration: 2,
          },
          timelinePoint: 0.1 * 20,
        },
      ];
      AnimationsData = [...AnimationsData, ...BallpointAnimation];

      //Barrel Animation
      const BarrelAnimation = [
        {
          objectToAnimate: section_2_ref.current,
          properties: {
            opacity: 1,
            duration: 0.5,
          },
          timelinePoint: 0.34 * 20,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: -9,
            y: 10,
            z: -10,
            duration: 2,
          },
          timelinePoint: 0.28 * 20,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: 1.9,
            y: -1.5,
            z: -0.5,
            duration: 2,
          },
          timelinePoint: 0.28 * 20,
        },
      ];
      AnimationsData = [...AnimationsData, ...BarrelAnimation];

      //Clip Animation
      const ClipAnimation = [
        {
          objectToAnimate: section_3_ref.current,
          properties: {
            opacity: 1,
            duration: 0.5,
          },
          timelinePoint: 0.68 * 20,
        },
        {
          objectToAnimate: camera,
          properties: {
            zoom: 1,
            onUpdate: () => {
              camera.updateProjectionMatrix();
            },
            duration: 2,
          },
          timelinePoint: 0.57 * 20,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: 38,
            y: 12,
            z: -10,
            duration: 2,
          },
          timelinePoint: 0.57 * 20,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: -0.1,
            y: 0.5,
            z: 0,
            duration: 2,
          },
          timelinePoint: 0.57 * 20,
        },
      ];

      AnimationsData = [...AnimationsData, ...ClipAnimation];

      //Tip Animation
      const TipAnimation = [
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: -1.0,
            y: 0,
            z: 0,
            duration: 2,
          },
          timelinePoint: 0.73 * 20,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: -4.0,
            y: 8.5,
            z: -14.5,
            duration: 2,
          },
          timelinePoint: 0.73 * 20,
        },
        {
          objectToAnimate: camera,
          properties: {
            zoom: 2,
            onUpdate: () => {
              camera.updateProjectionMatrix();
            },
            duration: 2,
          },
          timelinePoint: 0.75 * 20,
        },
      ];

      AnimationsData = [...AnimationsData, ...TipAnimation];

      //Construction Animation
      const ConstructionAnimation = [
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: -0.5,
            y: 0.3,
            z: 0,
            duration: 2,
          },
          timelinePoint: 0.82 * 20,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: 1.5,
            y: 10.5,
            z: 0,
            duration: 2,
          },
          timelinePoint: 0.82 * 20,
        },
        {
          objectToAnimate: camera,
          properties: {
            zoom: 1.3,
            onUpdate: () => {
              camera.updateProjectionMatrix();
            },
            duration: 2,
          },
          timelinePoint: 0.82 * 20,
        },
        {
          objectToAnimate: ballpointRef.current.position,
          properties: {
            z: 5,
            y: -10,
            duration: 2,
          },
          timelinePoint: 0.95 * 20,
        },
        {
          objectToAnimate: tipRef.current.position,
          properties: {
            z: 3,
            y: -8,
            duration: 2,
          },
          timelinePoint: 0.95 * 20,
        },
        {
          objectToAnimate: refillRef.current.position,
          properties: {
            z: 0,
            y: -4.8,
            duration: 2,
          },
          timelinePoint: 0.95 * 20,
        },
        {
          objectToAnimate: clipRef.current.position,
          properties: {
            z: -4,
            y: -0.4,
            duration: 2,
          },
          timelinePoint: 0.95 * 20,
        },
        {
          objectToAnimate: penStanRef.current.position,
          properties: {
            z: -4,
            y: -0.4,
            duration: 2,
          },
          timelinePoint: 0.95 * 20,
        },
      ];

      AnimationsData = [...AnimationsData, ...ConstructionAnimation];

      //Customizer Animation
      const CustomizerAnimation = [
        {
          objectToAnimate: ballpointRef.current.position,
          properties: {
            z: -0.76,
            y: -3.633,
            duration: 1,
          },
          timelinePoint: 1.3 * 20,
        },
        {
          objectToAnimate: tipRef.current.position,
          properties: {
            z: -1.374,
            y: -3.295,
            duration: 1,
          },
          timelinePoint: 1.3 * 20,
        },
        {
          objectToAnimate: refillRef.current.position,
          properties: {
            z: -1.367,
            y: -3.299,
            duration: 1,
          },
          timelinePoint: 1.3 * 20,
        },
        {
          objectToAnimate: clipRef.current.position,
          properties: {
            z: -1.358,
            y: -3.223,
            duration: 1,
          },
          timelinePoint: 1.3 * 20,
        },
        {
          objectToAnimate: penStanRef.current.position,
          properties: {
            z: -1.358,
            y: -3.223,
            duration: 1,
          },
          timelinePoint: 1.3 * 20,
        },
        {
          objectToAnimate: main_ref.current,
          properties: {
            background: "radial-gradient(circle at center, #ffff, #d9d9d9)",
            duration: 0.5,
          },
          timelinePoint: 1.5 * 20,
        },
      ];

      AnimationsData = [...AnimationsData, ...CustomizerAnimation];

      AnimationsData.map((animation) => {
        tl.current.to(
          animation.objectToAnimate,
          {
            ...animation.properties,
          },
          animation.timelinePoint
        );
      });
    }
  }, [snap.start_Experience]);

  useFrame(() => {
    if (snap.start_Experience) {
      tl.current.seek(scroll.offset * tl.current.duration());
      // const a = scroll.range(0, 1 / 2);
      // const a = scroll.curve(1 / 3, 1 / 3);
      // const a = scroll.visible(2 / 3, 1 / 3);
      // console.log(a);
      // console.log(clipRef.current.position);
    }
  });
  // const { position, rotation, penPosition, penRotation } = useControls({
  //   position: {
  //     value: { x: 33, y: 27, z: -28 },
  //     step: 0.5,
  //   },
  //   penPosition: {
  //     value: { x: 2.0, y: 5.0, z: 2.5 },
  //     step: 0.5,
  //   },
  //   penRotation: {
  //     value: { x: -0.5, y: 0, z: 0 },
  //     step: 0.5,
  //   },
  //   rotation: {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     value: { x: camera.rotation.x, y: camera.rotation.y, z: camera.rotation.z },
  //     step: 0.04,
  //   },
  // });

  return (
    <group
      {...props}
      dispose={null}
      ref={pen}
      // position={[penPosition.x, penPosition.y, penPosition.z]}
      // rotation={[penRotation.x, penRotation.y, penRotation.z]}
    >
      <mesh
        ref={barrelRef}
        name="Pen_Barrel"
        geometry={nodes.Pen_Barrel.geometry}
        material={materials.goldpen_Gold}
        position={[11.112, -3.295, -1.374]}
        rotation={[1.03, -0.942, -1.131]}
      />
      <mesh
        ref={ballpointRef}
        name="ballpoint"
        geometry={nodes.ballpoint.geometry}
        material={materials.silverBallMouth}
        position={[11.552, -3.633, -0.76]}
        rotation={[1.03, -0.942, -1.131]}
      />
      <mesh
        ref={penStanRef}
        name="Pen_STAN"
        geometry={nodes.Pen_STAN.geometry}
        material={materials.goldpen_Silver}
        position={[11.112, -3.295, -1.374]}
        rotation={[1.03, -0.942, -1.131]}
      />
      <mesh
        ref={tipRef}
        name="Pen_Tip"
        geometry={nodes.Pen_Tip.geometry}
        material={materials.goldpen_Silver}
        position={[11.112, -3.295, -1.374]}
        rotation={[1.03, -0.942, -1.131]}
      />
      <mesh
        ref={clipRef}
        name="Pen_Clip"
        geometry={nodes.Pen_Clip.geometry}
        material={materials["Pen - Clip material.006"]}
        position={[11.143, -3.223, -1.358]}
        rotation={[0.952, -0.962, -1.194]}
      />
      <mesh
        ref={ringRef}
        name="Pen_Ring"
        geometry={nodes.Pen_Ring.geometry}
        material={materials.goldpen_Silver}
        position={[11.112, -3.295, -1.374]}
        rotation={[1.03, -0.942, -1.131]}
      />
      <mesh
        ref={refillRef}
        name="refill"
        geometry={nodes.refill.geometry}
        material={materials.inkMaterial}
        position={[11.117, -3.299, -1.367]}
        rotation={[1.03, -0.942, -1.131]}
      />
      <mesh
        name="pen_head"
        geometry={nodes.pen_head.geometry}
        material={materials.goldpen_Silver}
        position={[1.966, 4.438, -16.99]}
        rotation={[0.509, 0.578, -0.296]}
        scale={0.106}
      />
    </group>
  );
}

useGLTF.preload("/models/penNew.glb");
