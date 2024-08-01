import { useEffect, useState } from "react";

import Responsive_Exams from "../UK/Responsive_Exams"; 
import ExamsLargeScreen from "../UK/ExamsLargeScreen";

const Exams = ({country}) => {
  // State to track if the screen is small
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effect to check the screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener
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
