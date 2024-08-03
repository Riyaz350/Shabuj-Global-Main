import FlagSVG from "./SVG/FlagSVG";

const AustraliaBanner = () => {
  return (
    <div>
      <div className="relative w-full mx-auto flex flex-col items-center justify-center ">
        <div>
          <FlagSVG />
        </div>
        <div className="  absolute bottom-0   max-w-7xl mx-auto"></div>
      </div>
    </div>
  );
};

export default AustraliaBanner;
