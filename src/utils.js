import gsap from "gsap";

export const customizationIntroAnimation = (pen) => {
    const timeline = gsap.timeline();
    timeline
    .to(pen.position, {
      x: 1.5,
      y: -6.5,
      z: 0.0,
      duration: 1,
      ease: "power1.inOut"
    })
    .to(pen.rotation, {
      x: 1.0,
      y: 0.8,
      z: 5.5,
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