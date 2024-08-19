import Australia_Counselor from "../../Components/Study_Destination_Components/Australia/Australia_Counselor/Australia_Counselor";
import Tabs from "../../Components/Study_Destination_Components/Australia/Tabs/Tabs";
import Faq_Aus from "../../Components/Study_Destination_Components/Australia/Faq_Aus";
import QuickFacts from "../../Components/Study_Destination_Components/Australia/QuickFacts";
import Study_Australia from "../../Components/Study_Destination_Components/Australia/Study_Australia";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import AustraliaBanner from "./../../Components/Study_Destination_Components/Australia/AustraliaBanner";
import DocumentsRequired from "./../../Components/Study_Destination_Components/Australia/DocumentsRequired";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import UniversityCards_Australia from "../../Components/Study_Destination_Components/Australia/UniversityCards_Australia";
import { useEffect } from "react";


  
const Australia = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, );
  return (
    <div>
      <AustraliaBanner />
      <Study_Australia />
      <QuickFacts />
      <Tabs />
      <AnimatedText/>
      <UniversityCards_Australia/>
      <RequirementCard country={'Australia'} />
      <Exams country={'Australia'} />
      <DocumentsRequired />
      <Faq_Aus />
      <Australia_Counselor />
    </div>
  );
};

export default Australia;