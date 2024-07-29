import heroImage from "../assets/UK City Line.png";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen rounded-[32px] bg-bg-image  hover:bg-gradient-to-r from-[#32C7F2] to-[#2C39BE] transition ease-in-out duration-500 group">
      <img
        src={heroImage}
        alt="Study in the UK"
        className="inset-0 w-full h-full object-cover"
      />
      <div className="absolute z-10 top-[10%] flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold text-[#00399F] group-hover:text-white">
          Study in the UK
        </h1>
        <p className="mt-4 text-xl font-medium text-[#1F1F1F] w-3/5 text-center group-hover:text-white">
          Here’s a comprehensive guide for all students who want to study in the
          UK.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
