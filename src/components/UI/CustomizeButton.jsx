import { button } from "leva";

const CustomizeButton = () => {
  return (
    <button
      className="customize_button absolute top-[60%] opacity-0 hidden left-1/2 -translate-x-1/2 h-[45px] w-[200px] z-10 bg-black bg-opacity-90 rounded-full border border-solid border-[#FFD700] font-bold"
      onClick={() => console.log("all")}
    >
      Customize
    </button>
  );
};

export default CustomizeButton;
