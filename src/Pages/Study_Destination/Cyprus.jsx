import { useEffect } from "react";
import Cyprus_AnimatedText from "../../Components/Study_Destination_Components/Cyprus/Cyprus_AnimatedText";
import Cyprus_Banner from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Banner/Cyprus_Banner";
import Cyprus_Counselor from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Counselor/Cyprus_Counselor";
import Cyprus_DocumentsRequired from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Document/Cyprus_DocumentsRequired";
import Cyprus_Faq from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Faq/Cyprus_Faq";
import Cyprus_Tabs from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Tabs/Cyprus_Tabs";
import Cyprus_UniversityCards from "../../Components/Study_Destination_Components/Cyprus/Cyprus_UniversityCards/Cyprus_UnversityCards";
import Georgia_Study from "../../Components/Study_Destination_Components/Georgia/Georgia_Study/Georgia_Study";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";

import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";

const Cyprus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="font-poppins">
      <Cyprus_Banner></Cyprus_Banner>
      <Georgia_Study country={"Cyprus"}></Georgia_Study>
      <QuickFacts></QuickFacts>
      <Cyprus_Tabs></Cyprus_Tabs>
      <AnimatedText country={"Cyprus"} />
      {/* <Cyprus_AnimatedText></Cyprus_AnimatedText> */}
      <Cyprus_UniversityCards></Cyprus_UniversityCards>
      <UAE_RequirementCard country={"Cyprus"}></UAE_RequirementCard>
      <Exams country={"Cyprus"}></Exams>
      <GuidanceBanner></GuidanceBanner>
      <Cyprus_DocumentsRequired></Cyprus_DocumentsRequired>
      <Cyprus_Faq></Cyprus_Faq>
      <Cyprus_Counselor></Cyprus_Counselor>
    </div>
  );
};

export default Cyprus;
