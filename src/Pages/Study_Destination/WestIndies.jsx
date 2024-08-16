import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/UK/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/UK/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/UK/UKBanner";
import Uk_Counselor from "../../Components/Study_Destination_Components/UK/Uk_Counselor/Uk_Counselor";
import DocumentsRequired_WestIndies from "../../Components/Study_Destination_Components/West-Indies/DocumentsRequired_WestIndies";
import Faq_WestIndies from "../../Components/Study_Destination_Components/West-Indies/Faq_WestIndies";
import WestIndies_Counselor from "../../Components/Study_Destination_Components/West-Indies/WestIndies_Counselor/WestIndies_Counselor";


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
      <WestIndies_Counselor/>
    </div>
  );
};

export default WestIndies;
