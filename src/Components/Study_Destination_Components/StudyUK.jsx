import image from "../../assets/Layer_1.png";
const StudyUK = () => {
  return (
    <div className="bg-[#EFF6FF] rounded-[32px] py-16">
      <div className="max-w-screen-xl mx-auto bg-[#004AC8] rounded-[32px] px-24 pt-12 pb-24 text-white relative">
        <h4 className="text-[40px] font-semibold text-center pb-6">
          Why Study in The UK?
        </h4>
        <p className="text-lg">
          Learn from some of the world's best academics and experts in some of
          world’s most prestigious universities and benefit from their
          exceptional academic support. Study alongside some of the finest and
          brilliant minds and hone your skills using state-of-the-art
          technology. Avail placements, internships and volunteering positions
          that are your right fit through strong industry links of UK
          universities and apply your knowledge and skills in a real-world
          professional environment. Graduate with skills and expertise that are
          in high demand around the world and get hired by your dream employers.
        </p>
        <img src={image} alt="" className="absolute right-0 bottom-0" />
      </div>
    </div>
  );
};

export default StudyUK;
