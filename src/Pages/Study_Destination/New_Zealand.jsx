import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/Shared_Destination_Component/UKBanner";
import DocumentsRequired_NZ from "../../Components/Study_Destination_Components/New Zealand/DocumentsRequired_NZ";
import Faq_NZ from "../../Components/Study_Destination_Components/New Zealand/Faq_NZ";
import NZ_Counselor from "../../Components/Study_Destination_Components/New Zealand/NZ_Counselor/NZ_Counselor";
import { useEffect } from "react";
import StudyUK from "../../Components/Study_Destination_Components/Shared_Destination_Component/StudyUK";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";

const New_Zealand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Discover the stunning natural beauty and friendly culture of New Zealand while pursuing a world-class education. Study at top-tier universities with renowned faculty, honing your skills in a supportive and international environment. Gain valuable practical experience through internships and placements with leading New Zealand companies, applying your knowledge in a dynamic and innovative setting. Graduate with a globally recognized degree and a deep appreciation for the Maori culture, opening doors to exciting career opportunities in New Zealand and worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      <UKBanner country={"New Zealand"} />
      <StudyUK country={"New Zealand"} description={description} />
      <QuickFacts country="New Zealand"/>
      <Tabs country="New Zealand"/>
      <AnimatedText country={"New Zealand"} />
      <RequirementCard country={"New Zealand"} />
      <Exams country={"New Zealand"} />
      <GuidanceBanner />
      <DocumentsRequired_NZ />
      <Faq_NZ />
      <NZ_Counselor />
    </div>
  );
};

export default New_Zealand;
