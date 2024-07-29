import AnimatedText from "../../Components/Study_Destination_Components/AnimatedText";
import DocumentsRequired from "../../Components/Study_Destination_Components/DocumentsRequired";
import Exams from "../../Components/Study_Destination_Components/Exams";
import Faq from "../../Components/Study_Destination_Components/Faq";
import GuidanceBanner from "../../Components/Study_Destination_Components/GuidenceBanner";

import QuickFacts from "../../Components/Study_Destination_Components/QuickFacts";
import RequirementCard from "../../Components/Study_Destination_Components/RequirementCard";
import StudyUK from "../../Components/Study_Destination_Components/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/UKBanner";
import UniversityCards from "../../Components/Study_Destination_Components/UniversityCards";

const Study_Destination = () => {
  return (
    <div>
      <UKBanner/>
      <StudyUK />
      <QuickFacts />
      <Tabs />
      <AnimatedText />
      <UniversityCards />
      <RequirementCard />
      <Exams/>
      <GuidanceBanner />
      <DocumentsRequired />
      <Faq />
    </div>
  );
};

export default Study_Destination;
