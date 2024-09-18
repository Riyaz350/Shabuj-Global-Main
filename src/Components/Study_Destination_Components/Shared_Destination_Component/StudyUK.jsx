import TowerSVG from "../UK/SVG/TowerSVG";
const StudyUK = ({ country, description }) => {
  return (
    <div className=" max-w-screen-xl mx-auto rounded-[32px] bg-[#004AC8] relative my-16">
      <div className=" py-16 rounded-[32px] px-5 md:px-14 pt-5 md:pt-8 lg:px-24 lg:pt-12 pb-5 md:pb-12 lg:pb-24 text-white relative">
        <h4 className="text-lg md:text-xl lg:text-[40px] font-semibold text-center pb-6">
          Why Study in The {country}?
        </h4>
        <p className="text-xs md:text-lg lg:px-20 text-justify">
          {description}
        </p>
      </div>
      <div className="-mt-5 lg:-mt-44  lg:block">
        <TowerSVG />
      </div>
    </div>
  );
};

export default StudyUK;
