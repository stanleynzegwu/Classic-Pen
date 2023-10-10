// import { store } from "../../store";

// const CustomizeButton = () => {
//   return (
//     <button
//       className="customize_button font-bold absolute top-[60%] opacity-0 hidden left-1/2 -translate-x-1/2 h-[45px] w-[200px] z-10 bg-black bg-opacity-90 rounded-full border border-solid border-[#FFD700] shadow-md shadow-[#ecde8c]"
//       onClick={() => (store.scroll_Enabled = false)}
//     >
//       Customize
//     </button>
//   );
// };

// export default CustomizeButton;

import { useEffect, useRef } from "react";
import { store } from "../../store";
import { useSnapshot } from "valtio";
import gsap from "gsap";

const CustomizeButton = () => {
  const snap = useSnapshot(store);
  const customizeSection_ref = useRef();
  const customizeButton_ref = useRef();

  const scrollToElement = () => {
    // customizeSection_ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    customizeButton_ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (snap.customizer_Enabled) {
      const timeline = gsap.timeline();
      timeline.to(customizeButton_ref.current, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
        onComplete: () => {
          customizeButton_ref.current.style.display = "none";
        },
      });
    }
  }, [snap.customizer_Enabled]);

  return (
    // <button
    //   className="h-[100vh] w-[100vw] customize_button font-bold absolute left-1/2 -translate-x-1/2  z-10 bg-black bg-opacity-90 rounded-full border border-solid border-[#FFD700] shadow-md shadow-[#ecde8c]"
    //   style={{
    //     position: "absolute",
    //     top: "600vh",
    //     left: "50%",
    //     transform: `translate(-50%,-50%)`,
    //     pointerEvents: "all",
    //     touchAction: "auto",
    //   }}
    //   onClick={() => (store.scroll_Enabled = false)}
    // >
    //   Customize
    // </button>
    <div
      ref={customizeSection_ref}
      className={`h-[100vh] w-[100vw] flex items-center `}
      style={{ position: "absolute", top: `600vh`, pointerEvents: "all", touchAction: "auto" }}
    >
      <button
        ref={customizeButton_ref}
        className="customize_button opacity-0 h-[45px] w-[200px] font-bold absolute left-1/2 -translate-x-1/2  z-10 bg-black bg-opacity-90 rounded-full border border-solid border-[#FFD700] shadow-md shadow-[#ecde8c]"
        style={{
          position: "absolute",
          top: "7%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
          pointerEvents: "all",
          touchAction: "auto",
        }}
        onClick={() => {
          store.customizer_Enabled = true;
          scrollToElement();
          store.scroll_Enabled = false;
          store.contols_Enabled = true;
        }}
      >
        Customize
      </button>
    </div>
  );
};

export default CustomizeButton;
