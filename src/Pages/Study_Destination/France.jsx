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


const France = () => {
  return (
    <div>
      <UKBanner country={'France'}/>
      <StudyUK country={'France'}/>
      <QuickFacts />
      <Tabs />
      <AnimatedText />
      <RequirementCard country={'France'} />
      <Exams country={'France'}/>
      <GuidanceBanner />
      <DocumentsRequired_France />
      <Faq_France />
      <France_Counselor/>
    </div>
  );
};

export default France;
