import Germany_Banner from "../../Components/Study_Destination_Components/Germany/Germany_Banner/Germany_Banner";
import Germany_StudyInGermany from "../../Components/Study_Destination_Components/Germany/Germany_StudyInGermany/Germany_StudyInGermany";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import DocumentsRequired from "../../Components/Study_Destination_Components/Germany/DocumentsRequired/DocumentsRequired";
import Faq_Ger from "../../Components/Study_Destination_Components/Germany/Germany_Faq/Faq_Ger";
import Germany_Counselor from "../../Components/Study_Destination_Components/Germany/Germany_Counselor/Germany_Counselor";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import UniversityCards_Ger from "../../Components/Study_Destination_Components/Germany/Germany_UniversityCards/UniversityCards_Ger";
import { useEffect } from "react";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import Canada_Banner from "../../Components/Study_Destination_Components/Shared_Destination_Component/Canada_Banner/Canada_Banner";
import Georgia_Study from "../../Components/Study_Destination_Components/Shared_Destination_Component/Georgia_Study/Georgia_Study";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Document_Last_SVG_Ger from "../../Components/Study_Destination_Components/Germany/SVG/Document_Last_SVG_Ger";
import DocumentSVG2 from "../../Components/Study_Destination_Components/Germany/SVG/DocumentSVG2";
import DocumentSVG from "../../Components/Study_Destination_Components/Germany/SVG/DocumentSVG";
import Unversity_Cards from "../../Components/Study_Destination_Components/Shared/Unversity_Cards";

const Germany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const description = `Germany, officially known as the Federal Republic of Germany, is a vibrant country situated in the heart of Europe. Renowned for its rich cultural heritage, it boasts centuries-old traditions, grand castles, and historical landmarks. Germany has excelled in various fields such as engineering, automotive industry, and sports. As one of the largest economies in Europe, it plays a crucial role in the EU. With a diverse landscape ranging from the bustling cities like Berlin and Munich to the serene beauty of the Black Forest and`;

  return (
    <div className="font-poppins overflow-hidden">
      {/* <Germany_Banner /> */}
      <Canada_Banner country="Germany" />
      <Georgia_Study
        country={"Germany"}
        description={description}
        bgColor={"bg-[#1A1A1A]"}
      />

      {/* <Germany_StudyInGermany /> */}
      <QuickFacts country="Germany" />
      <Tabs country={"Germany"} />
      <AnimatedText country={"Germany"} />
      {/* <UniversityCards_Ger /> */}
      <Unversity_Cards country={'Germany'} apiRoute={'germany'} routeLabel={'singleUniversityGER'}/>
      <RequirementCard country={"Germany"} />
      <Exams country={"Germany"} />
      {/* <DocumentsRequired /> */}
      <University_Required_Docs
        country={"Germany"}
        doc1={<DocumentSVG />}
        doc2={<DocumentSVG2 />}
        doc3={<Document_Last_SVG_Ger />}
      />
      <Faq_Ger />
      <Germany_Counselor />
    </div>
  );
};

export default Germany;
