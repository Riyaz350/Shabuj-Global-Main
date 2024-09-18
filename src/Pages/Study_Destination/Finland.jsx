import { useEffect } from "react";
import Finland_Banner from "../../Components/Study_Destination_Components/Finland/Finland_Banner/Finland_Banner";
import Finland_Counselor from "../../Components/Study_Destination_Components/Finland/Finland_Counselor/Finland_Counselor";
import Finland_DocumentsRequired from "../../Components/Study_Destination_Components/Finland/Finland_Document/Finland_DocumentsRequired";
import Finland_Faq from "../../Components/Study_Destination_Components/Finland/Finland_Faq/Finland_Faq";
import Finland_Tabs from "../../Components/Study_Destination_Components/Finland/Finland_Tabs/Finland_Tabs";
import Finland_UniversityCards from "../../Components/Study_Destination_Components/Finland/Finland_UniversityCards/Finland_UniversityCards";
import Georgia_Study from "../../Components/Study_Destination_Components/Shared_Destination_Component/Georgia_Study/Georgia_Study";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Canada_Banner from "../../Components/Study_Destination_Components/Shared_Destination_Component/Canada_Banner/Canada_Banner";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import Finland_Doc1 from "../../Components/Study_Destination_Components/Finland/Finland_Document/Finland_Doc1";
import Finland_Doc2 from "../../Components/Study_Destination_Components/Finland/Finland_Document/Finland_Doc2";
import Finland_DocumentsSvg from "../../Components/Study_Destination_Components/Finland/Finland_Document/Finland_DocumentsSvg";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";

const Finland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Experience the unique culture and stunning landscapes of Finland while pursuing a world-class education. Study at top-tier universities with renowned faculty, honing your skills in a supportive and international environment. Gain valuable practical experience through internships and placements with leading Finnish companies, applying your knowledge in a dynamic and innovative setting. Graduate with a highly sought-after Finnish degree, opening doors to exciting career opportunities in Finland and worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      {/* <Finland_Banner></Finland_Banner> */}
      <Canada_Banner country={"Finland"} />
      <Georgia_Study
        country={"Finland"}
        description={description}
      ></Georgia_Study>
      <QuickFacts country="Finland"></QuickFacts>
      {/* <Finland_Tabs></Finland_Tabs> */}
      <Tabs country={"Finland"} />
      <AnimatedText country={"Finland"} />
      {/* <Finland_AnimatedText></Finland_AnimatedText> */}
      <Finland_UniversityCards></Finland_UniversityCards>
      {/* <UAE_RequirementCard country={"Finland"}></UAE_RequirementCard> */}
      <RequirementCard country={"Finland"} />
      <Exams country={"Finland"}></Exams>
      <GuidanceBanner></GuidanceBanner>
      {/* <Finland_DocumentsRequired></Finland_DocumentsRequired> */}
      <University_Required_Docs
        country={"Finland"}
        doc1={<Finland_Doc1 />}
        doc2={<Finland_Doc2 />}
        doc3={<Finland_DocumentsSvg />}
      />
      <Finland_Faq></Finland_Faq>
      <Finland_Counselor></Finland_Counselor>
    </div>
  );
};

export default Finland;
