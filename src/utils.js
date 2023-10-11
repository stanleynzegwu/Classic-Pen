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

export const customizationIntro_Animation = (pen) => {
    const timeline = gsap.timeline();
    timeline
    .to(pen.position, {
      x: 1.5,
      y: -7.5,
      z: 1,
      duration: 1,
      ease: "power1.inOut"
    })
    .to(pen.rotation, {
      x: 0.5,
      y: 0.3,
      z: 0.0,
      duration: 1,
      ease: "power1.inOut"
    });
};

export const customizationExit_Animation = (pen) => {
    const timeline = gsap.timeline();
    timeline
    .to(pen.rotation, {
      x: -0.5,
      y: 0.3,
      z: 0,
      duration: 1,
      ease: "power1.inOut"
    })
    .to(pen.position, {
      x: 1.5,
      y: 10.5,
      z: 0,
      duration: 1,
      ease: "power1.inOut"
    });
};