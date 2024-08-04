import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import AnimatedText from "../../Components/Study_Destination_Components/UK/AnimatedText";
import DocumentsRequired from "../../Components/Study_Destination_Components/UK/DocumentsRequired";
import Faq from "../../Components/Study_Destination_Components/UK/Faq";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";

import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import UniversityCards from "../../Components/Study_Destination_Components/UK/UniversityCards";

const UK = () => {
  return (
    <div>
      <UKBanner />
      <StudyUK />
      <QuickFacts />
      <Tabs />
      <AnimatedText />
      <UniversityCards />
      <RequirementCard country={'UK'} />
      <Exams country={'UK'}/>
      <GuidanceBanner />
      <DocumentsRequired />
      <Faq />
    </div>
  );
};

export default UK;
