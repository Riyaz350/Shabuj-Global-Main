import { useEffect } from "react";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import DocumentsRequired_USA from "../../Components/Study_Destination_Components/USA/DocumentsRequired_USA";
import Faq_USA from "../../Components/Study_Destination_Components/USA/Faq_USA";
import USA_Counselor from "../../Components/Study_Destination_Components/USA/USA_Counselor/USA_Counselor";


const USA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, );
  return (
    <div>
      <UKBanner country={'USA'}/>
      <StudyUK country={'USA'}/>
      <QuickFacts />
      <Tabs />
      <AnimatedText />
      <RequirementCard country={'USA'} />
      <Exams country={'USA'}/>
      <GuidanceBanner />
      <DocumentsRequired_USA />
      <Faq_USA />
      <USA_Counselor/>
    </div>
  );
};

export default USA;
