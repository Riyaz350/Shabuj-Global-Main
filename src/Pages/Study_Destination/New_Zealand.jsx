import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import DocumentsRequired_NZ from "../../Components/Study_Destination_Components/New Zealand/DocumentsRequired_NZ";
import Faq_NZ from "../../Components/Study_Destination_Components/New Zealand/Faq_NZ";
import NZ_Counselor from "../../Components/Study_Destination_Components/New Zealand/NZ_Counselor/NZ_Counselor";
import { useEffect } from "react";

const New_Zealand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="font-poppins">
      <UKBanner country={"New Zealand"} />
      <StudyUK country={"New Zealand"} />
      <QuickFacts />
      <Tabs />
      <AnimatedText />
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
