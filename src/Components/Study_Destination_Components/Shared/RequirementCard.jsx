import { useEffect, useState } from "react";
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
      <h1 className="pt-24 text-center font-semibold lg:text-6xl md:text-6xl text-4xl">
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
