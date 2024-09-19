import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import StudyUK from "../../Components/Study_Destination_Components/Shared_Destination_Component/StudyUK";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import DocumentsRequired_Swit from "../../Components/Study_Destination_Components/Switzerland/DocumentsRequired_Swit";
import Faq_Swit from "../../Components/Study_Destination_Components/Switzerland/Faq_Swit";
import Switz_Counselor from "../../Components/Study_Destination_Components/Switzerland/Switz_Counselor/Switz_Counselor";
import { useEffect } from "react";
import UKBanner from "../../Components/Study_Destination_Components/Shared_Destination_Component/UKBanner";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Document_Last_SVG_Swit from "../../Components/Study_Destination_Components/Switzerland/SVG/Document_Last_SVG_Swit";
import Doc2 from "../../Components/Study_Destination_Components/Switzerland/SVG/Doc2";
import Doc1 from "../../Components/Study_Destination_Components/Switzerland/SVG/Doc1";
import University_Faq from "../../Components/Study_Destination_Components/Shared/University_Faq";
import Faq_SVG_Swit from "../../Components/Study_Destination_Components/Switzerland/SVG/Faq_SVG_Swit";

const Switzerland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Immerse yourself in the heart of European academia and innovation in Switzerland. Learn from world-renowned professors at prestigious universities, honing your skills amidst breathtaking Alpine scenery. Gain practical experience through internships and placements with leading Swiss companies, applying your knowledge in a dynamic and international environment. Graduate with a highly sought-after Swiss degree, opening doors to exciting career opportunities worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      <UKBanner country={"Switzerland"} />
      <StudyUK country={"Switzerland"} description={description} />
      <QuickFacts country={"Switzerland"} />
      <Tabs country={"Switzerland"} />
      <AnimatedText country={"Switzerland"} />
      <RequirementCard country={"Switzerland"} />
      <Exams country={"Switzerland"} />
      <GuidanceBanner />
      {/* <DocumentsRequired_Swit /> */}
      <University_Required_Docs
        country={"Switzerland"}
        doc1={<Doc1 />}
        doc2={<Doc2 />}
        doc3={<Document_Last_SVG_Swit />}
      />
      {/* <Faq_Swit /> */}
      <University_Faq bgColor={"bg-[#f76c6c]"} FAQimg={<Faq_SVG_Swit />} />
      <Switz_Counselor />
    </div>
  );
};

export default Switzerland;
