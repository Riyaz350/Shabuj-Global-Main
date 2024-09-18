import Georgia_Banner from "../../Components/Study_Destination_Components/Georgia/Georgia_Banner";
import Georgia_Counselor from "../../Components/Study_Destination_Components/Georgia/Georgia_Counselor/Georgia_Counselor";
import Georgia_Faq from "../../Components/Study_Destination_Components/Georgia/Georgia_Faq/Georgia_Faq";
import Georgia_Study from "../../Components/Study_Destination_Components/Shared_Destination_Component/Georgia_Study/Georgia_Study";
import Georgia_Tabs from "../../Components/Study_Destination_Components/Georgia/Georgia_Tabs/Georgia_Tabs";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import Georgia_DocumentsRequired from "../../Components/Study_Destination_Components/Georgia/Georgia_Document/Georgia_DocumentsRequired";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import Georgia_UniversityCards from "../../Components/Study_Destination_Components/Georgia/Georgia_UniversityCards/Georgia_UniversityCards";
import { useEffect } from "react";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Canada_Banner from "../../Components/Study_Destination_Components/Shared_Destination_Component/Canada_Banner/Canada_Banner";

const Georgia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Discover the ancient culture and breathtaking landscapes of Georgia while pursuing a world-class education. Study at top-tier universities with renowned faculty, honing your skills in a supportive and international environment. Gain valuable practical experience through internships and placements with leading Georgian companies, applying your knowledge in a dynamic and innovative setting. Graduate with a globally recognized degree and a deep appreciation for Georgian culture, opening doors to exciting career opportunities in Georgia and worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      {/* <Georgia_Banner></Georgia_Banner> */}
      <Canada_Banner country={'Gerogia'}/>
      <Georgia_Study
        country={"Georgia"}
        description={description}
      ></Georgia_Study>
      <QuickFacts country="Georgia"></QuickFacts>
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
