import { useSnapshot } from "valtio";
import { store } from "../../store";
import { convertToCSSColor } from "../../utils";
import { ballpointColors, barrelColors, otherColors } from "../../constants";

const Configurator = () => {
  const snap = useSnapshot(store);
  const { clipType } = snap.modelConfigurator;
  return (
    <div
      className={`relative w-[100%] h-[100%] text-black ${
        snap.customizer_Enabled ? "visible" : "invisible"
      }`}
    >
      <div className="absolute bottom-[20%] right-0 w-[20%] h-[80%] p-6 flex flex-col items-center">
        <div className="w-[100%] h-full flex flex-col items-center gap-6">
          <h2 className="capitalize text-md font-medium">model x</h2>
          <div className="flex justify-center gap-4">
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
              onClick={() => (store.modelConfigurator.clipType = "branded")}
            >
              Branded Clip
            </span>
            <span
              className={`block rounded-full py-1 px-3 w-[150px] text-center text-[10px] font-medium cursor-pointer ${
                clipType === "unBranded"
                  ? "border border-solid border-[#FFD700]"
                  : "border border-solid border-gray-300"
              }`}
              onClick={() => (store.modelConfigurator.clipType = "unBranded")}
            >
              Unbranded Clip
            </span>
          </div>
        </div>
        <div className="w-[100%] h-full flex flex-col gap-4 items-center">
          <div className="">
            <span className="block capitalize text-center text-[10px] font-medium">
              potential savings
            </span>
            <span className="block capitalize text-center text-md font-semibold">$1000</span>
          </div>
          <div className="">
            <span className="block capitalize text-center text-[10px] font-medium">
              purchase price
            </span>
            <span className="block capitalize text-center text-md font-semibold">$9000</span>
          </div>
          <div>
            <p className="capitalize text-center text-[12px] font-semibold">Order your model x</p>
            <span className="block text-[10px] font-normal text-center">Est Delicery: Jan-Feb</span>
            <button className="rounded-full bg-blue-400 py-1 px-2 w-[150px] text-center text-[10px] font-medium uppercase">
              continue to payment
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 w-[100%] h-[20%] flex items-center justify-center gap-10 md:gap-20 px-6 `}
      >
        <div className="flex flex-col ">
          <h3 className={``}>Ballpoint/Nib</h3>
          <div className={`flex gap-4`}>
            {ballpointColors.map(({ name, color }, index) => (
              <div
                key={index}
                className={`w-[40px] h-[40px] rounded-full cursor-pointer`}
                style={{ backgroundColor: `${convertToCSSColor(color)}` }}
                onClick={() => (store.modelConfigurator.ballPointColor = color)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3>Barrel</h3>
          <div className="flex gap-4">
            {barrelColors.map(({ name, color }, index) => (
              <div
                key={index}
                className={`w-[40px] h-[40px] rounded-full cursor-pointer`}
                style={{ backgroundColor: `${convertToCSSColor(color)}` }}
                onClick={() => (store.modelConfigurator.barrelColor = color)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h3>Clip/Tip</h3>
          <div className="flex gap-4">
            {otherColors.map(({ name, color }, index) => (
              <div
                key={index}
                className={`w-[40px] h-[40px] rounded-full cursor-pointer`}
                style={{ backgroundColor: `${convertToCSSColor(color)}` }}
                onClick={() => (store.modelConfigurator.otherColor = color)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
