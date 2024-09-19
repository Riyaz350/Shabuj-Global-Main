import Australia_Counselor from "../../Components/Study_Destination_Components/Australia/Australia_Counselor/Australia_Counselor";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import Faq_Aus from "../../Components/Study_Destination_Components/Australia/Faq_Aus";
import Study_Australia from "../../Components/Study_Destination_Components/Australia/Study_Australia";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import AustraliaBanner from "./../../Components/Study_Destination_Components/Australia/AustraliaBanner";
import DocumentsRequired from "./../../Components/Study_Destination_Components/Australia/DocumentsRequired";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import UniversityCards_Australia from "../../Components/Study_Destination_Components/Australia/UniversityCards_Australia";
import { useEffect } from "react";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import DocumentSVG1 from "../../Components/Study_Destination_Components/Australia/SVG/DocumentSVG1";
import DocumentSVG2 from "../../Components/Study_Destination_Components/Australia/SVG/DocumentSVG2";
import Document_Last_SVG_Aus from "../../Components/Study_Destination_Components/Australia/SVG/Document_Last_SVG_Aus";
import Unversity_Cards from "../../Components/Study_Destination_Components/Shared/Unversity_Cards";
import University_Faq from "../../Components/Study_Destination_Components/Shared/University_Faq";
import Faq_SVG_Aus from "../../Components/Study_Destination_Components/Australia/SVG/Faq_SVG_Aus";

const Australia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="font-poppins overflow-hidden">
      <AustraliaBanner />
      <Study_Australia />
      <QuickFacts country="Australia" />
      <Tabs country={"Australia"} />
      <AnimatedText country={"Australia"} />
      {/* <UniversityCards_Australia /> */}
      <Unversity_Cards
        country={"Australia"}
        apiRoute={"australia"}
        routeLabel={"singleUniversityAUS"}
      />
      <RequirementCard country={"Australia"} />
      <Exams country={"Australia"} />
      {/* <DocumentsRequired /> */}
      <University_Required_Docs
        country={"Australia"}
        doc1={<DocumentSVG1 />}
        doc2={<DocumentSVG2 />}
        doc3={<Document_Last_SVG_Aus />}
      />
      {/* <Faq_Aus /> */}
      <University_Faq bgColor={"bg-[#191F2C]"} FAQimg={<Faq_SVG_Aus />} />
      <Australia_Counselor />
    </div>
  );
};

export default Australia;
