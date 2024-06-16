import { useSnapshot } from "valtio";
import penImg1 from "/images/penCase.png";
import penImg2 from "/images/penCase2.png";
import { store } from "../../store";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const snap = useSnapshot(store);
  const lastSectionRef = useRef();

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
      style={{ position: "absolute", top: `650vh`, left: "0" }}
    >
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
        <div className="h-1/2 absolute bottom-0 left-0 w-[100%] flex items-end p-4">
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
