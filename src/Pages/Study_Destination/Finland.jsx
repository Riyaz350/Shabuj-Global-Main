import { useEffect } from "react";
import Finland_AnimatedText from "../../Components/Study_Destination_Components/Finland/Finland_AnimatedText";
import Finland_Banner from "../../Components/Study_Destination_Components/Finland/Finland_Banner/Finland_Banner";
import Finland_Counselor from "../../Components/Study_Destination_Components/Finland/Finland_Counselor/Finland_Counselor";
import Finland_DocumentsRequired from "../../Components/Study_Destination_Components/Finland/Finland_Document/Finland_DocumentsRequired";
import Finland_Faq from "../../Components/Study_Destination_Components/Finland/Finland_Faq/Finland_Faq";
import Finland_Tabs from "../../Components/Study_Destination_Components/Finland/Finland_Tabs/Finland_Tabs";
import Finland_UniversityCards from "../../Components/Study_Destination_Components/Finland/Finland_UniversityCards/Finland_UniversityCards";
import Georgia_Study from "../../Components/Study_Destination_Components/Georgia/Georgia_Study/Georgia_Study";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";

import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";

const Finland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="font-poppins">
      <Finland_Banner></Finland_Banner>
      <Georgia_Study country={"Finland"}></Georgia_Study>
      <QuickFacts></QuickFacts>
      <Finland_Tabs></Finland_Tabs>
      <Finland_AnimatedText></Finland_AnimatedText>
      <Finland_UniversityCards></Finland_UniversityCards>
      <UAE_RequirementCard country={"Finland"}></UAE_RequirementCard>
      <Exams country={"Finland"}></Exams>
      <GuidanceBanner></GuidanceBanner>
      <Finland_DocumentsRequired></Finland_DocumentsRequired>
      <Finland_Faq></Finland_Faq>
      <Finland_Counselor></Finland_Counselor>
    </div>
  );
};

export default Finland;
