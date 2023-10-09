import { useProgress } from "@react-three/drei";
import { store } from "../../store";
import { useSnapshot } from "valtio";
import inkColored from "/images/inkColored-bg.png";
import logo from "/images/silverLogo.png";

export default function Overlay() {
  const snap = useSnapshot(store);
  const progress = useProgress((state) => state.progress);
  return (
    <div
      className={`${
        snap.start_Experience ? "hidden" : "flex"
      } items-center overlay bg-[#0f0e0e] z-20`}
    >
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="w-[100%] flex justify-center items-center">
          {/* <img src={inkColored} alt="art" className="w-[300px] aspect-square object-cover" /> */}
          <img src={logo} alt="logo" className="w-[10%] aspect-square object-cover" />
        </div>
        <div className="w-[60%] h-[2px] bg-gray-300">
          <div className={`w-[${progress}%] h-[100%] bg-gray-600`}></div>
        </div>
        <div className="p-5 flex flex-col justify-center items-center select-none">
          <h1 className="overlay_text text-lg font-bold">Classic Pen</h1>
          <p className="py-2">It all started like this, drawing/writing with ink</p>
          <button
            disabled={progress < 100}
            onClick={() => {
              //Start The Experience
              store.start_Experience = true;
            }}
            className="w-[150px] text-md font-semibold text-black bg-white border-white border-2 px-4 py-1 rounded-lg hover:bg-black hover:text-white transition duration-500 ease-in-out"
          >
            {progress < 100 ? `Loading ${Math.round(progress)}%` : "EXPLORE"}
          </button>
        </div>
      </div>
    </div>
  );
}
