import { useProgress } from "@react-three/drei";
import { store } from "../../store";
import { useSnapshot } from "valtio";
import logo from "/images/silverLogo.png";
import { useEffect } from "react";

export default function Overlay() {
  const snap = useSnapshot(store);
  const progress = useProgress((state) => state.progress);

  useEffect(() => {
    progress >= 100 && (store.start_Experience = true);
  }, [progress]);

  return (
    <div
      className={`${
        snap.start_Experience ? "hidden" : "flex"
      } items-center overlay bg-[#0f0e0e] z-20`}
    >
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="w-[100%] flex justify-center items-center">
          <img src={logo} alt="logo" className="w-[150px] md:w-[10%] aspect-square object-cover" />
        </div>
        <div className="p-5 pt-0 flex flex-col justify-center items-center select-none">
          <h1 className="overlay_text text-lg font-bold">Classic Pen</h1>
          {/* <p>Loading... Please wait</p> */}
        </div>
        <div className="w-[60%] lg:w-[20%] h-[2px] bg-[#0f0e0e]">
          <div className={`h-[100%] bg-gray-600`} style={{ width: `${Math.round(progress)}%` }} />
        </div>
      </div>
    </div>
  );
}
