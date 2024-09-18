import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import DocumentsRequired_France from "../../Components/Study_Destination_Components/France/DocumentsRequired_France";
import Faq_France from "../../Components/Study_Destination_Components/France/Faq_France";
import France_Counselor from "../../Components/Study_Destination_Components/France/France_Counselor/France_Counselor";
import { useEffect } from "react";
import UKBanner from "../../Components/Study_Destination_Components/Shared_Destination_Component/UKBanner";
import StudyUK from "../../Components/Study_Destination_Components/Shared_Destination_Component/StudyUK";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Document_Last_SVG_France from "../../Components/Study_Destination_Components/France/SVG/Document_Last_SVG_France";
import Doc2 from "../../Components/Study_Destination_Components/France/SVG/Doc2";
import Doc1 from "../../Components/Study_Destination_Components/France/SVG/Doc1";

const France = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Immerse yourself in the rich cultural heritage and intellectual tradition of France. Study at world-class universities with renowned professors, honing your skills in a stimulating and international environment. Gain practical experience through internships and placements with leading French companies, applying your knowledge in a dynamic and innovative setting. Graduate with a highly sought-after French degree, opening doors to exciting career opportunities in France and worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      <UKBanner country={"France"} />
      <StudyUK country={"France"} description={description} />
      <QuickFacts country={"France"} />
      <Tabs country={"France"} />
      <AnimatedText country={"France"} />
      <RequirementCard country={"France"} />
      <Exams country={"France"} />
      <GuidanceBanner />
      <DocumentsRequired_France />
      <University_Required_Docs
        country={"France"}
        doc1={<Doc1 />}
        doc2={<Doc2 />}
        doc3={<Document_Last_SVG_France />}
      />
      <Faq_France />
      <France_Counselor />
    </div>
  );
};

export default France;
