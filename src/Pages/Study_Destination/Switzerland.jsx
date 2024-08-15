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
import Uk_Counselor from "../../Components/Study_Destination_Components/UK/Uk_Counselor/Uk_Counselor";


const Switzerland = () => {
  return (
    <div>
      <UKBanner country={'Switzerland'}/>
      <StudyUK country={'Switzerland'}/>
      <QuickFacts />
      <Tabs />
      <AnimatedText />
      <RequirementCard country={'Switzerland'} />
      <Exams country={'Switzerland'}/>
      <GuidanceBanner />
      <DocumentsRequired_Swit />
      <Faq_Swit />
      <Uk_Counselor/>
    </div>
  );
};

export default Switzerland;
