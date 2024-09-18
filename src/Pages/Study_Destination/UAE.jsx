import { useEffect } from "react";
import UAE_Banner from "../../Components/Study_Destination_Components/UAE/UAE_Banner/UAE_Banner";
import UAE_Counselor from "../../Components/Study_Destination_Components/UAE/UAE_Counselor/UAE_Counselor";
import UAE_DocumentsRequired from "../../Components/Study_Destination_Components/UAE/UAE_Documents/UAE_DocumentsRequired";

import UAE_Exams from "../../Components/Study_Destination_Components/UAE/UAE_Exams/UAE_Exams";
import UAE_Faq from "../../Components/Study_Destination_Components/UAE/UAE_Faq/UAE_Faq";
import UAE_GuidanceBanner from "../../Components/Study_Destination_Components/UAE/UAE_GuidanceBanner";
import UAE_QuickFacts from "../../Components/Study_Destination_Components/UAE/UAE_QuickFacts";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import UAE_StudyUAE from "../../Components/Study_Destination_Components/UAE/UAE_StudyUAE/UAE_StudyUAE";
import UAE_Tabs from "../../Components/Study_Destination_Components/UAE/UAE_Tabs/UAE_Tabs";
import UAE_UniversityCards from "../../Components/Study_Destination_Components/UAE/UniversityCards/UAE_UniversityCards";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Canada_Banner from "../../Components/Study_Destination_Components/Shared_Destination_Component/Canada_Banner/Canada_Banner";
import Georgia_Study from "../../Components/Study_Destination_Components/Shared_Destination_Component/Georgia_Study/Georgia_Study";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";

const UAE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `   Immerse yourself in the vibrant culture and cosmopolitan atmosphere of
          the UAE while pursuing a world-class education. Study at top-tier
          universities with renowned faculty, honing your skills in a supportive
          and international environment. Gain valuable practical experience
          through internships and placements with leading UAE companies,
          applying your knowledge in a dynamic and innovative setting. Graduate
          with a globally recognized degree and a deep understanding of the
          Middle East, opening doors to exciting career opportunities in the UAE
          and worldwide.`;

  return (
    <div className="font-poppins overflow-hidden">
      {/* <UAE_Banner></UAE_Banner> */}
      <Canada_Banner country={"UAE"} />
      {/* <UAE_StudyUAE></UAE_StudyUAE> */}
      <Georgia_Study country={"UAE"} description={description}></Georgia_Study>
      <QuickFacts country="UAE" />
      <UAE_Tabs></UAE_Tabs>
      <AnimatedText country={"UAE"} />
      <UAE_UniversityCards></UAE_UniversityCards>
      <UAE_RequirementCard country={"UAE"}></UAE_RequirementCard>
      <UAE_Exams country={"UAE"}></UAE_Exams>
      <UAE_GuidanceBanner></UAE_GuidanceBanner>
      <UAE_DocumentsRequired country={"UAE"}></UAE_DocumentsRequired>
      <UAE_Faq></UAE_Faq>
      <UAE_Counselor></UAE_Counselor>
    </div>
  );
};

export default UAE;
