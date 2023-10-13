import gsap from "gsap";

export const pen_Parts = [
  {
    partName: 'Ballpoint/Nib',
    data: [
      {
        name: 'gold',
        color: {
          r: 0.9046609401702881,
          g: 0.5583400726318359,
          b: 0.21586063504219055,
        },
      },
      {
        name: 'silver',
        color: {
          r:0.5271145105361938,
          g:0.5271146893501282,
          b:0.5271151661872864,
        },
      },
    ],
    valueToChange: 'ballPointColor',
    animation: (camera,isMobile) => {
      const timeline = gsap.timeline();
      timeline
      .to(camera.position, {
        // x: 22.0,
        x: isMobile ? 17 : 22,
        // y: 9,
        y: isMobile ? 14 : 9,
        z: -2.0,
        duration: 1,
        ease: "power1.inOut"
      })
      .to(camera.rotation, {
        x: -2.44,
        y: 0.79,
        z: 0.35,
        duration: 1,
        ease: "power1.inOut"
      })
    
    }
  },
  {
    partName: 'Clip/Tip',
    data: [
      {
        name: 'gold',
        color: {
          r: 0.9046609401702881,
          g: 0.5583400726318359,
          b: 0.21586063504219055,
        }
      },
      {
        name: 'silver',
        color: {
          r:0.5271145105361938,
          g:0.5271146893501282,
          b:0.5271151661872864,
        }
      },
      {
        name: 'bronze',
        color: {
          r: 0.8,
          g: 0.34555,
          b: 0.2
        },
      },
    ],
    valueToChange: 'otherColor',
    animation: (camera,isMobile) => {
      const timeline = gsap.timeline();
      timeline
    
      .to(camera.rotation, {
        x: -2.40,
        y: 0.87,
        z: 2.44,
        duration: 1,
        ease: "power1.inOut"
      })
      .to(camera.position, {
        x: isMobile ? 17 : 11,
        y: isMobile ? 17 : 13,
        z: isMobile ? -17.5 : -23.5,
        duration: 1,
        ease: "power1.inOut"
      })
    
    }
  },
  {
    partName: 'Barrel',
    data: [
      {
        name: 'gold',
        color: {
          r: 0.9046609401702881,
          g: 0.5583400726318359,
          b: 0.21586063504219055,
        }
      },
      {
        name: 'silver',
        color: {
          r:0.5271145105361938,
          g:0.5271146893501282,
          b:0.5271151661872864,
        },
      },
      {
        name: 'bronze',
        color: {
          r: 0.8,
          g: 0.4,
          b: 0.2
        },
      },
      {
        name: 'lavenda',
        color: {
          r: 0.9046609401702881,
          g: 0.5583400726318359,
          b: 1,
        }
      },
    ],
    valueToChange: 'barrelColor',
    animation: (camera,isMobile) => {
      const timeline = gsap.timeline();
      timeline
    
      .to(camera.rotation, {
        x: -2.44,
        y: 0.79,
        z: 2.20,
        duration: 1,
        ease: "power1.inOut"
      })
      .to(camera.position, {
        x: isMobile ? 20 : 23.0,
        y: isMobile ? 18 : 16.5,
        z: isMobile ? -16 : -27,
        duration: 1,
        ease: "power1.inOut"
      })
    
    }
  },
]


//specific animations
export const clip_Animation = (camera,isMobile) => {
  const timeline = gsap.timeline();
  timeline

  .to(camera.rotation, {
    x: -2.40,
    y: 0.87,
    z: 2.44,
    duration: 1,
    ease: "power1.inOut"
  })
  .to(camera.position, {
    x: isMobile ? 17 : 11,
    y: isMobile ? 17 : 13,
    z: isMobile ? -17.5 : -23.5,
    duration: 1,
    ease: "power1.inOut"
  })

};