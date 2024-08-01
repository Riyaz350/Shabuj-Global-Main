import { useEffect, useState } from "react";

import Responsive_Exams from "../UK/Responsive_Exams";
import ExamsLargeScreen from "../UK/ExamsLargeScreen";

const Exams = ({ country }) => {
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
      <h1 className="pt-24 text-center font-semibold text-6xl text-black">
        Exams Required to Study in {country}
      </h1>
      {isSmallScreen ? <Responsive_Exams /> : <ExamsLargeScreen />}
    </div>
  );
};

export default Exams;