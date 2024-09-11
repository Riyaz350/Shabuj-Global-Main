import { useEffect, useState } from "react";
import Responsive_Exams from "./UAE_Responsive_Exams";
import ExamsLargeScreen from "./UAE_ExamsLargescreen";



const UAE_Exams = ({ country }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="m-5 md:m-0 lg:m-0 text-[#3B82F6] bg-[#F1F8FF]">
      <h1 className="pt-10 lg:pt-24 text-center font-semibold text-3xl md:text-4xl lg:text-6xl text-black">
        Exams Required to Study in {country}
      </h1>
      {isSmallScreen ? <Responsive_Exams /> : <ExamsLargeScreen />}
    </div>
  );
};

export default UAE_Exams;
