import { useSnapshot } from "valtio";
import penImg1 from "/images/pen_pix3.png";
import penImg2 from "/images/pen_pix4.png";
import { store } from "../../store";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const snap = useSnapshot(store);
  const lastSectionRef = useRef();

  const handleScrollToTop = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
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
      className="bg-gray-300 h-[100vh] w-[100vw] z-50 flex flex-col py-5 text-black"
      style={{ position: "absolute", top: `650vh` }}
    >
      <div className="w-[100%] flex flex-col md:flex-row gap-4 h-[60%]">
        <img
          src={penImg1}
          alt="penBrand"
          className="w-[100%] md:w-[50%] h-1/2 aspect-auto bg-gray-200"
        />
        <img
          src={penImg2}
          alt="penBrand1"
          className="w-[100%] md:w-[50%] h-1/2 aspect-auto bg-gray-200"
        />
      </div>
      <div className="absolute bottom-[12%] w-full flex flex-col justify-center items-center py-5 border-y-[0.5px] border-[#ffffff] cursor-pointer">
        <span>&and;</span>
        <span className="font-semibold" onClick={handleScrollToTop}>
          Back to top
        </span>
      </div>
      <div className="absolute bottom-0 w-[100%] flex items-center p-4">
        <ul className="uppercase w-full flex justify-center gap-2 flex-wrap md:gap-10 text-center">
          <li className="">Luxury brand</li>
          <li>pens</li>
          <li>the collection</li>
          <li>Legal notice</li>
          <li>services</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
