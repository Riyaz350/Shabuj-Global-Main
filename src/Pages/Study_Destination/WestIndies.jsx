import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import DocumentsRequired_WestIndies from "../../Components/Study_Destination_Components/West-Indies/DocumentsRequired_WestIndies";
import Faq_WestIndies from "../../Components/Study_Destination_Components/West-Indies/Faq_WestIndies";
import West_Indies_Counselor from "../../Components/Study_Destination_Components/West-Indies/West_Indies_Counselor/West_Indies_Counselor";
const WestIndies = () => {
  return (
    <div>
      <UKBanner country={'West-Indies'}/>
      <StudyUK country={'West-Indies'}/>
      <QuickFacts />
      <Tabs />
      <AnimatedText />
      <RequirementCard country={'West-Indies'} />
      <Exams country={'West-Indies'}/>
      <GuidanceBanner />
      <DocumentsRequired_WestIndies />
      <Faq_WestIndies />
      <West_Indies_Counselor/>
    </div>
  );
};

export default WestIndies;
