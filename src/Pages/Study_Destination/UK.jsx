import AnimatedText from "../../Components/Study_Destination_Components/AnimatedText";
import DocumentsRequired from "../../Components/Study_Destination_Components/DocumentsRequired";
import Exams from "../../Components/Study_Destination_Components/Exams";
import Faq from "../../Components/Study_Destination_Components/Faq";
import GuidanceBanner from "../../Components/Study_Destination_Components/GuidenceBanner";

import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import RequirementCard from "../../Components/Study_Destination_Components/UK/RequirementCard";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs";
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
      <RequirementCard />
      <Exams />
      <GuidanceBanner />
      <DocumentsRequired />
      <Faq />
    </div>
  );
};

export default UK;
