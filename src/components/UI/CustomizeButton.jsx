import { store } from "../../store";

const CustomizeButton = () => {
  return (
    <button
      className="customize_button font-bold absolute top-[60%] opacity-0 hidden left-1/2 -translate-x-1/2 h-[45px] w-[200px] z-10 bg-black bg-opacity-90 rounded-full border border-solid border-[#FFD700] shadow-md shadow-[#ecde8c]"
      onClick={() => (store.scroll_Enabled = false)}
    >
      Customize
    </button>
  );
};

export default CustomizeButton;
