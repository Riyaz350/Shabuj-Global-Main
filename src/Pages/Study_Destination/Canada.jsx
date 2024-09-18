import { useEffect } from "react";
import Canada_Banner from "../../Components/Study_Destination_Components/Canada/Canada_Banner/Canada_Banner";
import Canada_Counselor from "../../Components/Study_Destination_Components/Canada/Canada_Counselor/Canada_Counselor";
import Canada_DocumentsRequired from "../../Components/Study_Destination_Components/Canada/Canada_Documents/Canada_DocumentsRequired";
import Canada_Faq from "../../Components/Study_Destination_Components/Canada/Canada_Faq/Canada_Faq";
import Canada_Tabs from "../../Components/Study_Destination_Components/Canada/Canada_Tabs/Canada_Tabs";
import Canada_UniversityCards from "../../Components/Study_Destination_Components/Canada/Canada_UniversityCards/Canada_UniversityCards";
import Georgia_Study from "../../Components/Study_Destination_Components/Georgia/Georgia_Study/Georgia_Study";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";
import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";

const Canada = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Experience the friendly culture and stunning natural beauty of Canada while pursuing a world-class education. Study at top-tier universities with renowned faculty, honing your skills in a diverse and international setting. Gain valuable practical experience through internships and placements with leading Canadian companies, applying your knowledge in a dynamic and innovative environment. Graduate with a highly sought-after Canadian degree, opening doors to exciting career opportunities in Canada and worldwide.`;
  return (
    <div className="font-poppins">
      <Canada_Banner></Canada_Banner>
      <Georgia_Study
        country={"Canada"}
        description={description}
      ></Georgia_Study>
      <QuickFacts country="Canada"></QuickFacts>
      <Canada_Tabs></Canada_Tabs>
      <AnimatedText country={"Canada"} />
      <Canada_UniversityCards></Canada_UniversityCards>
      <GuidanceBanner></GuidanceBanner>
      <UAE_RequirementCard country={"Canada"}></UAE_RequirementCard>
      <Exams country={"Canada"}></Exams>
      <Canada_DocumentsRequired></Canada_DocumentsRequired>
      <Canada_Faq></Canada_Faq>
      <Canada_Counselor></Canada_Counselor>
    </div>
  );
};

export default Canada;
