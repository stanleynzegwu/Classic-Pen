// import { useSnapshot } from "valtio";
// import penImg1 from "/images/pen_pix3.png";
// import penImg2 from "/images/pen_pix4.png";
// import { store } from "../../store";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Footer = () => {
//   const snap = useSnapshot(store);
//   const lastSectionRef = useRef();

//   const handleScrollToTop = () => {
//     // window.scrollTo({
//     //   top: 0,
//     //   behavior: "smooth",
//     // });
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     const timeline = gsap.timeline();
//     if (snap.customizer_Enabled) {
//       timeline.to(lastSectionRef.current, {
//         opacity: 0,
//         ease: "power1.inOut",
//         duration: 0.5,
//         onComplete: () => {
//           lastSectionRef.current.style.display = "none";
//         },
//       });
//     } else {
//       timeline.to(lastSectionRef.current, {
//         opacity: 1,
//         ease: "power1.inOut",
//         duration: 0.5,
//         onComplete: () => {
//           lastSectionRef.current.style.display = "flex";
//         },
//       });
//     }
//   }, [snap.customizer_Enabled]);

//   return (
//     <div
//       ref={lastSectionRef}
//       className="bg-gray-300 h-[100vh] min-h-screen w-[100vw] z-50 flex flex-col p-5 text-black bg-yellow-300"
//       style={{ position: "absolute", top: `650vh`, pointerEvents: "all", touchAction: "auto" }}
//     >
//       <div className="w-[100%] flex flex-col md:flex-row gap-4 h-[60%]">
//         <img
//           src={penImg1}
//           alt="penBrand"
//           className="w-[100%] md:w-[50%] h-1/2 md:h-full aspect-auto bg-gray-200"
//         />
//         <img
//           src={penImg2}
//           alt="penBrand1"
//           className="w-[100%] md:w-[50%] h-1/2 md:h-full aspect-auto bg-gray-200"
//         />
//       </div>
//       <div className="absolute bottom-[12%] w-full flex flex-col justify-center items-center py-5 border-y-[0.5px] border-[#ffffff] cursor-pointer bg-red-500">
//         <span>&and;</span>
//         <span className="text-sm font-semibold" onClick={handleScrollToTop}>
//           Back to top
//         </span>
//       </div>
//       <div className="absolute bottom-0 w-[100%] flex items-center p-4">
//         <ul className="font-semibold uppercase w-full flex justify-center gap-2 flex-wrap md:gap-10 text-center">
//           <li className="">Luxury brand</li>
//           <li>pens</li>
//           <li>collection</li>
//           <li>Legal notice</li>
//           <li>services</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { useSnapshot } from "valtio";
import penImg1 from "/images/pen_pix3.png";
import penImg2 from "/images/pen_pix4.png";
import { store } from "../../store";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import upArrow from "/images/up-arrow.png";

const Footer = () => {
  const snap = useSnapshot(store);
  const lastSectionRef = useRef();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    if (snap.customizer_Enabled) {
      timeline.to(lastSectionRef.current, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
        onComplete: () => {
          lastSectionRef.current.style.display = "none";
        },
      });
    } else {
      timeline.to(lastSectionRef.current, {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.5,
        onComplete: () => {
          lastSectionRef.current.style.display = "flex";
        },
      });
    }
  }, [snap.customizer_Enabled]);

  return (
    <div
      ref={lastSectionRef}
      className="bg-gray-300 h-[100vh] w-[100vw] max-w-full  min-h-screen z-30 flex flex-col p-5 text-black"
      style={{ position: "absolute", top: `700vh`, right: "0" }}
    >
      {/* //top was 650 */}
      <div className="w-[100%] flex flex-col md:flex-row gap-4 h-[60%]">
        <img
          src={penImg1}
          alt="penBrand"
          className="w-[100%] md:w-[50%] h-1/2 md:h-full aspect-auto bg-gray-200"
        />
        <img
          src={penImg2}
          alt="penBrand1"
          className="w-[100%] md:w-[50%] h-1/2 md:h-full aspect-auto bg-gray-200"
        />
      </div>
      <div className="h-[40%]">
        <div className="h-1/2 left-0 bottom-[12%] w-full flex flex-col justify-end items-center py-5 border-y-[0.5px] border-[#ffffff]">
          <img className="h-[20px] w-[20px]" src={upArrow} alt="upArrow" />
          <span className="text-sm font-semibold cursor-pointer" onClick={handleScrollToTop}>
            Back to top
          </span>
        </div>
        <div className="h-1/2 bottom-0 left-0 w-[100%] flex items-end p-4">
          <ul className="font-semibold uppercase w-full flex justify-center gap-2 flex-wrap md:gap-10 text-center">
            <li className="">Luxury brand</li>
            <li>pens</li>
            <li>collection</li>
            <li>Legal notice</li>
            <li>services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
