const Footer = () => {
  return (
    <div
      className="bg-gray-300 h-[100vh] w-[100vw] z-50"
      style={{ position: "absolute", top: `650vh` }}
      onClick={() => console.log("top")}
    >
      <div className="text-black">go back to top</div>
    </div>
  );
};

export default Footer;
