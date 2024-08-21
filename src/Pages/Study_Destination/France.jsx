import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import DocumentsRequired_France from "../../Components/Study_Destination_Components/France/DocumentsRequired_France";
import Faq_France from "../../Components/Study_Destination_Components/France/Faq_France";
import France_Counselor from "../../Components/Study_Destination_Components/France/France_Counselor/France_Counselor";
import { useEffect } from "react";

const France = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Immerse yourself in the rich cultural heritage and intellectual tradition of France. Study at world-class universities with renowned professors, honing your skills in a stimulating and international environment. Gain practical experience through internships and placements with leading French companies, applying your knowledge in a dynamic and innovative setting. Graduate with a highly sought-after French degree, opening doors to exciting career opportunities in France and worldwide.`;
  return (
    <div className="font-poppins">
      <UKBanner country={"France"} />
      <StudyUK country={"France"} description={description} />
      <QuickFacts />
      <Tabs country={"France"} />
      <AnimatedText country={"France"} />
      <RequirementCard country={"France"} />
      <Exams country={"France"} />
      <GuidanceBanner />
      <DocumentsRequired_France />
      <Faq_France />
      <France_Counselor />
    </div>
  );
};

export default France;
