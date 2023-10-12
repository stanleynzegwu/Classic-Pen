import { useRef } from "react";
import { store } from "../../store";
import { useSnapshot } from "valtio";
import { customizationExit_Animation, customizationIntro_Animation } from "../../utils";
import Configurator from "./Configurator";
import { useThree } from "@react-three/fiber";

const CustomizeSection = () => {
  const snap = useSnapshot(store);
  const camera = useThree((state) => state.camera);
  const customizeSection_ref = useRef();
  const customizeButton_ref = useRef();

  const scrollToElement = () => {
    customizeButton_ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const customizerExitScroll = () => {
    customizeButton_ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      ref={customizeSection_ref}
      className={`h-[100vh] w-[100vw] flex items-center `}
      style={{ position: "absolute", top: `600vh`, pointerEvents: "all", touchAction: "auto" }}
    >
      <button
        ref={customizeButton_ref}
        className={`customize_button opacity-0 h-[45px] w-[200px] font-bold absolute left-1/2 -translate-x-1/2  z-10 bg-black bg-opacity-90 rounded-full border border-solid border-[#FFD700] shadow-md shadow-[#ecde8c] transition-all ${
          snap.customizer_Enabled ? "invisible" : "visible"
        }`}
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
          store.controls_Enabled = true;
          customizationIntro_Animation(camera);
        }}
      >
        Customize
      </button>
      <Configurator />
      <button
        className={`absolute bottom-6 h-[40px] w-[150px] font-bold right-10 z-10 bg-black bg-opacity-90 rounded-full border border-solid border-[#FFD700] shadow-md shadow-[#ecde8c] transition-all ${
          snap.customizer_Enabled ? "visible" : "invisible"
        }`}
        onClick={() => {
          store.controls_Enabled = false;
          store.customizer_Enabled = false;
          store.scroll_Enabled = true;
          customizerExitScroll();
          customizationExit_Animation(camera);
          //change selectedPart back to null
          store.modelConfigurator.selectedPart = null;
        }}
      >
        Exit
      </button>
    </div>
  );
};

export default CustomizeSection;
