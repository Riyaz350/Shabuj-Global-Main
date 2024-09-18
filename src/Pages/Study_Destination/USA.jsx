import { useEffect } from "react";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import DocumentsRequired_USA from "../../Components/Study_Destination_Components/USA/DocumentsRequired_USA";
import Faq_USA from "../../Components/Study_Destination_Components/USA/Faq_USA";
import USA_Counselor from "../../Components/Study_Destination_Components/USA/USA_Counselor/USA_Counselor";
import UKBanner from "../../Components/Study_Destination_Components/Shared_Destination_Component/UKBanner";
import StudyUK from "../../Components/Study_Destination_Components/Shared_Destination_Component/StudyUK";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import Document_Last_SVG_USA from "../../Components/Study_Destination_Components/USA/SVG/Document_Last_SVG_USA";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Doc1 from "../../Components/Study_Destination_Components/USA/SVG/Doc1";
import Doc2 from "../../Components/Study_Destination_Components/USA/SVG/Doc2";

const USA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Experience the dynamic and innovative academic environment of the United States. Study at world-class universities with renowned professors, honing your skills in a diverse and international setting. Gain valuable practical experience through internships and placements with leading US companies, applying your knowledge in a competitive and fast-paced environment. Graduate with a highly sought-after US degree, opening doors to exciting career opportunities in the US and worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      <UKBanner country={"USA"} />
      <StudyUK country={"USA"} description={description} />
      <QuickFacts country="USA" />
      <Tabs country={"USA"} />
      <AnimatedText country={"USA"} />
      <RequirementCard country={"USA"} />
      <Exams country={"USA"} />
      <GuidanceBanner />
      {/* <DocumentsRequired_USA /> */}
      <University_Required_Docs
        country={"USA"}
        doc1={<Doc1 />}
        doc2={<Doc2 />}
        doc3={<Document_Last_SVG_USA />}
      />
      <Faq_USA />
      <USA_Counselor />
    </div>
  );
};

export default USA;
