
import TowerSVG from "./SVG/TowerSVG";
const StudyUK = () => {
  return (
    <div className=" max-w-screen-xl mx-auto rounded-[32px] bg-[#004AC8] relative my-16">
      <div className="  py-16  rounded-[32px] px-24 pt-12 pb-24 text-white relative">
        <h4 className="text-lg md:text-xl lg:text-[40px] font-semibold text-center pb-6">
          Why Study in The UK?
        </h4>
        <p className="text-xs md:text-lg lg:px-20">
          Learn from some of the {`world's`} best academics and experts in some of
          world’s most prestigious universities and benefit from their
          exceptional academic support. Study alongside some of the finest and
          brilliant minds and hone your skills using state-of-the-art
          technology. Avail placements, internships and volunteering positions
          that are your right fit through strong industry links of UK
          universities and apply your knowledge and skills in a real-world
          professional environment. Graduate with skills and expertise that are
          in high demand around the world and get hired by your dream employers.
        </p>
      </div>
      <div className="-mt-32 md:-mt-44 ">
        <TowerSVG />
      </div>
    </div>
  );
};

export default StudyUK;
