import gsap from "gsap";

export function convertToCSSColor(rgb) {
  // Ensure values are between 0 and 1
  const r = Math.min(1, Math.max(0, rgb.r));
  const g = Math.min(1, Math.max(0, rgb.g));
  const b = Math.min(1, Math.max(0, rgb.b));

  // Convert to 8-bit format (0-255)
  const r8Bit = Math.round(r * 255);
  const g8Bit = Math.round(g * 255);
  const b8Bit = Math.round(b * 255);

  // Return the CSS color
  return `rgb(${r8Bit}, ${g8Bit}, ${b8Bit})`;
}

// export const customizationIntro_Animation = (pen) => {
//     const timeline = gsap.timeline();
//     timeline
//     .to(pen.position, {
//       x: 1.5,
//       y: -7.5,
//       z: 1,
//       duration: 1,
//       ease: "power1.inOut"
//     })
//     .to(pen.rotation, {
//       x: 0.5,
//       y: 0.3,
//       z: 0.0,
//       duration: 1,
//       ease: "power1.inOut"
//     });
// };

export const customizationIntro_Animation = (camera, isMobile) => {
  const timeline = gsap.timeline();
  timeline
  .to(camera.position, {
    x: isMobile ? 40 : 33,
    y: isMobile ? 27 : 22,
    z: -28,
    duration: 1,
    ease: "power1.inOut"
  })
  .to(camera.rotation, {
    x: -2.44,
    y: 0.79,
    z: 2.20,
    duration: 1,
    ease: "power1.inOut"
  });
};

// export const customizationExit_Animation = (pen) => {
//     const timeline = gsap.timeline();
//     timeline
//     .to(pen.rotation, {
//       x: -0.5,
//       y: 0.3,
//       z: 0,
//       duration: 1,
//       ease: "power1.inOut"
//     })
//     .to(pen.position, {
//       x: 1.5,
//       y: 10.5,
//       z: 0,
//       duration: 1,
//       ease: "power1.inOut"
//     });
// };

export const customizationExit_Animation = (camera) => {
    const timeline = gsap.timeline();
    timeline
    .to(camera.rotation, {
      x: -2.436024475904582,
      y: 0.7928377487872545,
      z: 2.596177371920913,
      duration: 1,
      ease: "power1.inOut"
    })
    .to(camera.position, {
      x: 36.00000000000001,
      y: 23.000000000000004,
      z: -26.999999999999993,
      duration: 1,
      ease: "power1.inOut"
    })
};

// export const ballpointAnimation_Animation = (camera) => {
//   const timeline = gsap.timeline();
//   timeline
//   .to(camera.position, {
//     x: 22.0,
//     y: 11.5,
//     z: -2.0,
//     duration: 1,
//     ease: "power1.inOut"
//   })
//   .to(camera.rotation, {
//     x: -2.44,
//     y: 0.79,
//     z: 0.35,
//     duration: 1,
//     ease: "power1.inOut"
//   })

// };

// export const clip_Animation = (camera) => {
//   const timeline = gsap.timeline();
//   timeline

//   .to(camera.rotation, {
//     // x: -2.48,
//     // y: 0.83,
//     // z: 2.52,
//     x: -2.40,
//     y: 0.87,
//     z: 2.44,
//     duration: 1,
//     ease: "power1.inOut"
//   })
//   .to(camera.position, {
//     // x: 19.0,
//     // y: 19.5,
//     // z: -29.0,
//     x: 11.0,
//     y: 16.0,
//     z: -23.5,
//     duration: 1,
//     ease: "power1.inOut"
//   })

// };