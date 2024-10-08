import { useEffect } from "react";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import UKBanner from "../../Components/Study_Destination_Components/Shared_Destination_Component/UKBanner";
import DocumentsRequired_WestIndies from "../../Components/Study_Destination_Components/West-Indies/DocumentsRequired_WestIndies";
import Faq_WestIndies from "../../Components/Study_Destination_Components/West-Indies/Faq_WestIndies";
import West_Indies_Counselor from "../../Components/Study_Destination_Components/West-Indies/West_Indies_Counselor/West_Indies_Counselor";
import StudyUK from "../../Components/Study_Destination_Components/Shared_Destination_Component/StudyUK";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Document_Last_SVG_WestIndies from "../../Components/Study_Destination_Components/West-Indies/SVG/Document_Last_SVG_WestIndies";
import Doc2 from "../../Components/Study_Destination_Components/West-Indies/SVG/Doc2";
import Doc1 from "../../Components/Study_Destination_Components/West-Indies/SVG/Doc1";
import University_Faq from "../../Components/Study_Destination_Components/Shared/University_Faq";
import Faq_SVG_WestIndies from "../../Components/Study_Destination_Components/West-Indies/SVG/Faq_SVG_WestIndies";

const WestIndies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Experience the vibrant culture and rich history of the West Indies while pursuing a world-class education. Study alongside diverse international students at top-tier Caribbean universities, benefiting from expert faculty and state-of-the-art facilities. Gain valuable practical experience through internships and placements with regional and international organizations, applying your skills in real-world settings. Graduate with a globally recognized degree and a deep understanding of the Caribbean region, opening doors to exciting career opportunities in the region and beyond.`;
  return (
    <div className="font-poppins overflow-hidden">
      <UKBanner country={"West-Indies"} />
      <StudyUK country={"West-Indies"} description={description} />
      <QuickFacts country={"West-Indies"} />
      <Tabs country={"West-Indies"} />
      <AnimatedText country={"West-Indies"} />
      <RequirementCard country={"West-Indies"} />
      <Exams country={"West-Indies"} />
      <GuidanceBanner />
      {/* <DocumentsRequired_WestIndies /> */}
      <University_Required_Docs
        country={"West-Indies"}
        doc1={<Doc1 />}
        doc2={<Doc2 />}
        doc3={<Document_Last_SVG_WestIndies />}
      />
      {/* <Faq_WestIndies /> */}
      <University_Faq
        bgColor={"bg-[#890001]"}
        FAQimg={<Faq_SVG_WestIndies />}
      />
      <West_Indies_Counselor />
    </div>
  );
};

export default WestIndies;
