import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import DocumentsRequired_Swit from "../../Components/Study_Destination_Components/Switzerland/DocumentsRequired_Swit";
import Faq_Swit from "../../Components/Study_Destination_Components/Switzerland/Faq_Swit";
import Switz_Counselor from "../../Components/Study_Destination_Components/Switzerland/Switz_Counselor/Switz_Counselor";
import { useEffect } from "react";

const Switzerland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Immerse yourself in the heart of European academia and innovation in Switzerland. Learn from world-renowned professors at prestigious universities, honing your skills amidst breathtaking Alpine scenery. Gain practical experience through internships and placements with leading Swiss companies, applying your knowledge in a dynamic and international environment. Graduate with a highly sought-after Swiss degree, opening doors to exciting career opportunities worldwide.`;
  return (
    <div className="font-poppins">
      <UKBanner country={"Switzerland"} />
      <StudyUK country={"Switzerland"} description={description} />
      <QuickFacts />
      <Tabs country={"Switzerland"} />
      <AnimatedText country={"Switzerland"} />
      <RequirementCard country={"Switzerland"} />
      <Exams country={"Switzerland"} />
      <GuidanceBanner />
      <DocumentsRequired_Swit />
      <Faq_Swit />
      <Switz_Counselor />
    </div>
  );
};

export default Switzerland;
