import logo from "/images/silverLogo.png";
import cart from "/images/shopping-cart.png";

const Navbar = () => {
  return (
    <nav
      className=" w-[100%] h-20"
      style={{
        position: "absolute",
        // top: `5vh`,
        // left: "5%",
      }}
    >
      <ul className="flex items-center justify-between h-full">
        <li className="w-[150px] h-full flex items-center justify-center">
          <img className=" " src={logo} alt="logo" />
        </li>
        <li className="w-[150px] h-full flex justify-center items-center">
          <img className="w-[30px] h-[30px]" src={cart} alt="shooping-cart" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
