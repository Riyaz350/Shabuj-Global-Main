import { useEffect } from "react";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import DocumentsRequired from "../../Components/Study_Destination_Components/UK/DocumentsRequired";
import Faq_UK from "../../Components/Study_Destination_Components/UK/Faq_UK";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import Uk_Counselor from "../../Components/Study_Destination_Components/UK/Uk_Counselor/Uk_Counselor";
import UniversityCards from "../../Components/Study_Destination_Components/UK/UniversityCards";
import UKBanner from "../../Components/Study_Destination_Components/Shared_Destination_Component/UKBanner";
import StudyUK from "../../Components/Study_Destination_Components/Shared_Destination_Component/StudyUK";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import Doc1 from "../../Components/Study_Destination_Components/UK/SVG/Doc1";
import Doc2 from "../../Components/Study_Destination_Components/UK/SVG/Doc2";
import Document_Last_SVG_UK from "../../Components/Study_Destination_Components/UK/SVG/Document_Last_SVG_UK";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";

const UK = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Learn from some of the world's best academics and experts in some of world’s most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of UK universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers.`;
  return (
    <div className="font-poppins overflow-hidden">
      <UKBanner country={"UK"} />
      <StudyUK country={"UK"} description={description} />
      <QuickFacts country={"UK"} />
      <Tabs country={"UK"} />
      <AnimatedText country={"UK"} />
      <UniversityCards />
      <RequirementCard country={"UK"} />
      <Exams country={"UK"} />
      <GuidanceBanner />
      {/* <DocumentsRequired /> */}
      <University_Required_Docs
        country={"UK"}
        doc1={<Doc1 />}
        doc2={<Doc2 />}
        doc3={<Document_Last_SVG_UK />}
      />
      <Faq_UK />
      <Uk_Counselor />
    </div>
  );
};

export default UK;
