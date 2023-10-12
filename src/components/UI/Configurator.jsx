import { useSnapshot } from "valtio";
import { store } from "../../store";
import { convertToCSSColor } from "../../utils";
import { clip_Animation, pen_Parts } from "../../constants";
import { useThree } from "@react-three/fiber";

const Configurator = () => {
  const snap = useSnapshot(store);
  const camera = useThree((state) => state.camera);
  const { clipType } = snap.modelConfigurator;
  return (
    <div
      className={`relative w-[100%] h-[100%] text-black ${
        snap.customizer_Enabled ? "visible" : "invisible"
      }`}
    >
      <div className="invisible lg:visible absolute bottom-[20%] right-0 w-[100%] md:w-[20%] h-[20%] md:h-[80%] p-2 md:p-6 flex md:flex-col items-center">
        <div className="w-[100%] h-full flex flex-col items-center gap-2 md:gap-6">
          <h2 className="capitalize text-md font-medium">model x</h2>
          <div className="hidden md:flex justify-center gap-4">
            <div className="text-center">
              <span className="block text-[12px] font-semibold">150mm L</span>
              <span className="block text-[10px] text-gray-700">standard</span>
            </div>
            <div className="text-center">
              <span className="block text-[12px] font-semibold">15mm W</span>
              <span className="block text-[10px] text-gray-700">standard</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span
              className={`block rounded-full py-1 px-3 w-[150px] text-center text-[10px] font-medium cursor-pointer ${
                clipType === "branded"
                  ? "border border-solid border-[#FFD700]"
                  : "border border-solid border-gray-300"
              }`}
              onClick={() => {
                //change the selectedPart to the clicked part if not already the case
                snap.modelConfigurator.selectedPart !== "Clip/Tip" &&
                  (store.modelConfigurator.selectedPart = "Clip/Tip");
                clip_Animation(camera);
                store.modelConfigurator.clipType = "branded";
              }}
            >
              Branded Clip
            </span>
            <span
              className={`block rounded-full py-1 px-3 w-[150px] text-center text-[10px] font-medium cursor-pointer ${
                clipType === "unBranded"
                  ? "border border-solid border-[#FFD700]"
                  : "border border-solid border-gray-300"
              }`}
              onClick={() => {
                //change the selectedPart to the clicked part if not already the case
                snap.modelConfigurator.selectedPart !== "Clip/Tip" &&
                  (store.modelConfigurator.selectedPart = "Clip/Tip");
                clip_Animation(camera);
                store.modelConfigurator.clipType = "unBranded";
              }}
            >
              Unbranded Clip
            </span>
          </div>
        </div>
        <div className="w-[100%] h-full flex flex-col gap-1 md:gap-4 items-center">
          <div className="">
            <span className="mx-2 md:mx-0 md:block capitalize text-center text-[10px] font-medium">
              potential savings
            </span>
            <span className="md:block capitalize text-center text-md font-semibold">$1000</span>
          </div>
          <div className="">
            <span className="mx-2 md:mx-0 md:block capitalize text-center text-[10px] font-medium">
              purchase price
            </span>
            <span className="md:block capitalize text-center text-md font-semibold">$9000</span>
          </div>
          <div>
            <p className="capitalize text-center text-[12px] font-semibold">Order your model x</p>
            <span className="block text-[10px] font-normal text-center">Est Delivery: Jan-Feb</span>
            <button className="rounded-full bg-blue-400 py-1 px-2 w-[150px] text-center text-[10px] font-medium uppercase">
              continue to payment
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-8 md:bottom-0 w-[100%] h-[20%] flex flex-wrap items-center justify-between md:justify-center md:gap-20 px-2 md:px-6`}
      >
        {pen_Parts.map(({ partName, data, valueToChange, animation }, index) => (
          <div className="flex flex-col gap-1 md:gap-2" key={index}>
            <h3
              className={`capitalize text-sm font-medium px-2 max-w-max ${
                snap.modelConfigurator.selectedPart === partName ? "rounded-full bg-[#f4dc52]" : ""
              }`}
            >
              {partName}
            </h3>
            <div className={`flex gap-4`}>
              {data.map(({ name, color }, index) => (
                <div
                  key={index}
                  className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-inherit ${
                    snap.modelConfigurator[valueToChange].name === name
                      ? "border-2 border-solid border-[#FFD700]"
                      : ""
                  }`}
                >
                  <div
                    key={index}
                    className={`w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full cursor-pointer `}
                    style={{ backgroundColor: `${convertToCSSColor(color)}` }}
                    onClick={() => {
                      //change the selectedPart to the clicked part if not already the case
                      snap.modelConfigurator.selectedPart !== partName &&
                        (store.modelConfigurator.selectedPart = partName);
                      animation(camera);
                      store.modelConfigurator[valueToChange] = { name, color };
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Configurator;
