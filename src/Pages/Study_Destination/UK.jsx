import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import DocumentsRequired from "../../Components/Study_Destination_Components/UK/DocumentsRequired";
import Faq_UK from "../../Components/Study_Destination_Components/UK/Faq_UK";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";
import Uk_Counselor from "../../Components/Study_Destination_Components/UK/Uk_Counselor/Uk_Counselor";
import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import UniversityCards from "../../Components/Study_Destination_Components/UK/UniversityCards";

const UK = () => {
  return (
    <div>
      <UKBanner country={'UK'} />
      <StudyUK country={'UK'}/>
      <QuickFacts />
      <Tabs />
      <AnimatedText />
      <UniversityCards />
      <RequirementCard country={'UK'} />
      <Exams country={'UK'}/>
      <GuidanceBanner />
      <DocumentsRequired />
      <Faq_UK />
      <Uk_Counselor/>
    </div>
  );
};

export default UK;
