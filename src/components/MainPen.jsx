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
  materials.goldpen_Gold.color = { ...snap.modelConfigurator.barrelColor, isColor: true };
  materials.goldpen_Silver.color = { ...snap.modelConfigurator.otherColor, isColor: true };
  materials.silverBallMouth.color = { ...snap.modelConfigurator.ballPointColor, isColor: true };
  const scroll = useScroll();
  const { camera } = useThree();
  const tl = useRef();

  // meshes ref
  const pen = useRef();
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
  const section_4_ref = useRef();
  const section_5_ref = useRef();
  const customizerButtonRef = useRef();

  useEffect(() => {
    if (snap.start_Experience) {
      main_ref.current = document.getElementsByClassName("main");
      header_ref.current = document.getElementsByClassName("header");
      section_1_ref.current = document.getElementsByClassName("section_one");
      section_2_ref.current = document.getElementsByClassName("section_two");
      section_3_ref.current = document.getElementsByClassName("section_three");
      section_4_ref.current = document.getElementsByClassName("section_four");
      section_5_ref.current = document.getElementsByClassName("section_five");
      customizerButtonRef.current = document.getElementsByClassName("customize_button");
      //save Pen model reference to state
      store.penRef = pen;
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
            duration: 1.5,
          },
          timelinePoint: 2,
        },
        {
          objectToAnimate: section_1_ref.current,
          properties: {
            opacity: 0,
            duration: 1,
          },
          timelinePoint: 6,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: 2.0,
            y: -0.5,
            z: -0.5,
            duration: 4,
          },
          timelinePoint: 0.2,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: 0,
            y: 0.5,
            z: -5,
            duration: 4,
          },
          timelinePoint: 0.2,
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
          timelinePoint: 0.2,
        },
      ];
      AnimationsData = [...AnimationsData, ...BallpointAnimation];

      //Barrel Animation
      const BarrelAnimation = [
        {
          objectToAnimate: section_2_ref.current,
          properties: {
            opacity: 1,
            duration: 1.5,
          },
          timelinePoint: 7,
        },
        {
          objectToAnimate: section_2_ref.current,
          properties: {
            opacity: 0,
            duration: 1.2,
          },
          timelinePoint: 10,
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
          timelinePoint: 5.2,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: -9,
            y: 10,
            z: -10,
            duration: 3,
          },
          timelinePoint: 5.2,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: 1.9,
            y: -1.5,
            z: -0.5,
            duration: 3,
          },
          timelinePoint: 5.2,
        },
      ];
      AnimationsData = [...AnimationsData, ...BarrelAnimation];

      //Clip Animation
      const ClipAnimation = [
        {
          objectToAnimate: section_3_ref.current,
          properties: {
            opacity: 1,
            duration: 1.5,
          },
          timelinePoint: 11,
        },
        {
          objectToAnimate: section_3_ref.current,
          properties: {
            opacity: 0,
            duration: 1.5,
          },
          timelinePoint: 14,
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
          timelinePoint: 9.6,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: 38,
            y: 12,
            z: -10,
            duration: 4,
          },
          timelinePoint: 9.6,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: -0.1,
            y: 0.5,
            z: 0,
            duration: 4,
          },
          timelinePoint: 9.6,
        },
      ];

      AnimationsData = [...AnimationsData, ...ClipAnimation];

      //Tip Animation
      const TipAnimation = [
        {
          objectToAnimate: section_4_ref.current,
          properties: {
            opacity: 1,
            duration: 1.5,
          },
          timelinePoint: 15.4,
        },
        {
          objectToAnimate: section_4_ref.current,
          properties: {
            opacity: 0,
            duration: 1.5,
          },
          timelinePoint: 18.5,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: -1.0,
            y: 0,
            z: 0,
            duration: 4,
          },
          timelinePoint: 14,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: -4.0,
            y: 8.5,
            z: -14.5,
            duration: 4,
          },
          timelinePoint: 14,
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
          timelinePoint: 14,
        },
      ];

      AnimationsData = [...AnimationsData, ...TipAnimation];

      //Construction Animation
      const ConstructionAnimation = [
        {
          objectToAnimate: section_5_ref.current,
          properties: {
            opacity: 1,
            duration: 1.5,
          },
          timelinePoint: 20.2,
        },
        {
          objectToAnimate: section_5_ref.current,
          properties: {
            opacity: 0,
            duration: 1.5,
          },
          timelinePoint: 22.8,
        },
        {
          objectToAnimate: pen.current.rotation,
          properties: {
            x: -0.5,
            y: 0.3,
            z: 0,
            duration: 2,
          },
          timelinePoint: 18.5,
        },
        {
          objectToAnimate: pen.current.position,
          properties: {
            x: 1.5,
            y: 10.5,
            z: 0,
            duration: 2,
          },
          timelinePoint: 18.5,
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
          timelinePoint: 18.5,
        },
        {
          objectToAnimate: ballpointRef.current.position,
          properties: {
            z: 5,
            y: -10,
            duration: 2,
          },
          timelinePoint: 20.5,
        },
        {
          objectToAnimate: tipRef.current.position,
          properties: {
            z: 3,
            y: -8,
            // z: 0,
            // y: -3,
            // x: 10,
            duration: 2,
          },
          timelinePoint: 20.5,
        },
        {
          objectToAnimate: refillRef.current.position,
          properties: {
            z: 0,
            y: -4.8,
            duration: 2,
          },
          timelinePoint: 20.5,
        },
        {
          objectToAnimate: clipRef.current.position,
          properties: {
            z: -4,
            y: -0.4,
            duration: 2,
          },
          timelinePoint: 20.5,
        },
        {
          objectToAnimate: penStanRef.current.position,
          properties: {
            z: -4,
            y: -0.4,
            duration: 2,
          },
          timelinePoint: 20.5,
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
          timelinePoint: 22.5,
        },
        {
          objectToAnimate: tipRef.current.position,
          properties: {
            z: -1.374,
            y: -3.295,
            duration: 1,
          },
          timelinePoint: 22.5,
        },
        {
          objectToAnimate: refillRef.current.position,
          properties: {
            z: -1.367,
            y: -3.299,
            duration: 1,
          },
          timelinePoint: 22.5,
        },
        {
          objectToAnimate: clipRef.current.position,
          properties: {
            z: -1.358,
            y: -3.223,
            duration: 1,
          },
          timelinePoint: 22.5,
        },
        {
          objectToAnimate: penStanRef.current.position,
          properties: {
            z: -1.358,
            y: -3.223,
            duration: 1,
          },
          timelinePoint: 22.5,
        },
        {
          objectToAnimate: main_ref.current,
          properties: {
            background: "radial-gradient(circle at center, #ffff, #d9d9d9)",
            duration: 0.5,
          },
          timelinePoint: 23.9,
        },
        {
          objectToAnimate: customizerButtonRef.current,
          properties: {
            opacity: 1,
            duration: 0.5,
          },
          timelinePoint: 24,
        },
        // {
        //   objectToAnimate: customizerButtonRef.current,
        //   properties: {
        //     display: "block",
        //     duration: 0.5,
        //   },
        //   timelinePoint: 24,
        // },
        {
          objectToAnimate: customizerButtonRef.current,
          properties: {
            opacity: 0,
            duration: 1,
          },
          timelinePoint: 25.5,
        },
        // {
        //   objectToAnimate: customizerButtonRef.current,
        //   properties: {
        //     display: "hidden",
        //     duration: 0.5,
        //   },
        //   timelinePoint: 26,
        // },
        // {
        //   objectToAnimate: customizerButtonRef.current,
        //   properties: {
        //     opacity: 1,
        //     duration: 0.5,
        //   },
        //   timelinePoint: 24,
        // },
        // {
        //   objectToAnimate: customizerButtonRef.current,
        //   properties: {
        //     top: "55%",
        //     duration: 2,
        //   },
        //   timelinePoint: 24,
        // },
        {
          objectToAnimate: main_ref.current,
          properties: {
            background: "radial-gradient(circle at center, #ffff, #d9d9d9)",
            duration: 0.5,
          },
          timelinePoint: 29,
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
      // console.log(pen.current);
    }
  });
  // const { position, rotation, penPosition, penRotation } = useControls({
  //   position: {
  //     value: { x: 33, y: 27, z: -28 },
  //     step: 0.5,
  //   },
  //   penPosition: {
  //     value: { x: 1.5, y: 10.5, z: 0 },
  //     step: 0.5,
  //   },
  //   penRotation: {
  //     value: { x: -0.5, y: 0.3, z: 0 },
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
        visible={snap.modelConfigurator.clipType === "branded"}
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
        visible={snap.modelConfigurator.clipType !== "branded"}
        ref={clipRef}
        name="Pen_Clip"
        geometry={nodes.Pen_Clip.geometry}
        material={materials.goldpen_Silver}
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
