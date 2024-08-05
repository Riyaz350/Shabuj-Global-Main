import { useEffect, useState } from "react";
import imageOne from "../../../../public/cartoon/49a.png";
import imageTwo from "../../../../public/cartoon/49b.png";
import imageThree from "../../../../public/cartoon/49c.png";
import imageFour from "../../../../public/cartoon/49d.png";
import { motion } from "framer-motion";
import Requirement_Card_SmallScreen from "../UK/Requirement_Card_SmallScreen";
import Requirement_Card_LargeScreen from "../UK/Requirement_Card_LargeScreen";

const RequirementCard = ({ country }) => {
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
    <div className="m-5 md:m-0 lg:m-0">
      <h1 className="pt-24 text-center font-semibold text-3xl md:text-4xl lg:text-6xl">
        Requirements for Studying in the {country}
      </h1>
      {isSmallScreen ? (
        <Requirement_Card_SmallScreen />
      ) : (
        <Requirement_Card_LargeScreen />
      )}
    </div>
  );
};

export default RequirementCard;
