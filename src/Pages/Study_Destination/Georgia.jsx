import Georgia_Banner from "../../Components/Study_Destination_Components/Georgia/Georgia_Banner";
import Georgia_Counselor from "../../Components/Study_Destination_Components/Georgia/Georgia_Counselor/Georgia_Counselor";

import Georgia_Faq from "../../Components/Study_Destination_Components/Georgia/Georgia_Faq/Georgia_Faq";

import Georgia_Study from "../../Components/Study_Destination_Components/Georgia/Georgia_Study/Georgia_Study";
import Georgia_Tabs from "../../Components/Study_Destination_Components/Georgia/Georgia_Tabs/Georgia_Tabs";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";

import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import Georgia_DocumentsRequired from "../../Components/Study_Destination_Components/Georgia/Georgia_Document/Georgia_DocumentsRequired";

import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";

import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import Georgia_UniversityCards from "../../Components/Study_Destination_Components/Georgia/Georgia_UniversityCards/Georgia_UniversityCards";
import Georgia_AnimatedText from "../../Components/Study_Destination_Components/Georgia/Georgia_AnimatedText";
import { useEffect } from "react";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";

const Georgia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="font-poppins">
      <Georgia_Banner></Georgia_Banner>
      <Georgia_Study country={"Georgia"}></Georgia_Study>
      <QuickFacts></QuickFacts>
      <Georgia_Tabs></Georgia_Tabs>
      {/* <Georgia_AnimatedText></Georgia_AnimatedText> */}
      <AnimatedText country={"Georgia"} />
      <Georgia_UniversityCards></Georgia_UniversityCards>
      <UAE_RequirementCard country={"Georgia"}></UAE_RequirementCard>
      <Exams country={"Georgia"}></Exams>
      <GuidanceBanner></GuidanceBanner>
      <Georgia_DocumentsRequired></Georgia_DocumentsRequired>
      <Georgia_Faq></Georgia_Faq>
      <Georgia_Counselor></Georgia_Counselor>
    </div>
  );
};

export default Georgia;
