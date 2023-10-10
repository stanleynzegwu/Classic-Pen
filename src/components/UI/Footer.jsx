import { useSnapshot } from "valtio";
import penImg1 from "/images/pen_pix3.png";
import penImg2 from "/images/pen_pix4.png";
import { store } from "../../store";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const snap = useSnapshot(store);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const lastSectionRef = useRef();
  useEffect(() => {
    if (snap.customizer_Enabled) {
      const timeline = gsap.timeline();
      timeline.to(lastSectionRef.current, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
        onComplete: () => {
          lastSectionRef.current.style.display = "none";
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
      <div className="w-[100%] flex flex-col md:flex-row">
        <img src={penImg1} alt="penBrand" className="w-[100%] md:w-[50%] aspect-auto" />
        <img src={penImg2} alt="penBrand1" className="w-[100%] md:w-[50%] aspect-auto" />
      </div>
      <div className="absolute bottom-[12%] w-full flex flex-col justify-center items-center py-5 border-y-[0.5px] border-[#ffffff] cursor-pointer">
        <span>&and;</span>
        <span onClick={handleScrollToTop}>Back to top</span>
      </div>
      <div className="absolute bottom-0 h-[12%] w-[100%] flex items-center">
        <ul className="uppercase w-full flex justify-center gap-2 md:gap-10 text-center">
          <li>Luxury brand</li>
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
