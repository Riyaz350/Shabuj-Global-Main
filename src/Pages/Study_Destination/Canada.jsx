import { useEffect } from "react";
import Canada_Banner from "../../Components/Study_Destination_Components/Shared_Destination_Component/Canada_Banner/Canada_Banner";
import Canada_Counselor from "../../Components/Study_Destination_Components/Canada/Canada_Counselor/Canada_Counselor";
import Canada_DocumentsRequired from "../../Components/Study_Destination_Components/Canada/Canada_Documents/Canada_DocumentsRequired";
import Canada_Faq from "../../Components/Study_Destination_Components/Canada/Canada_Faq/Canada_Faq";
import Canada_Tabs from "../../Components/Study_Destination_Components/Canada/Canada_Tabs/Canada_Tabs";
import Canada_UniversityCards from "../../Components/Study_Destination_Components/Canada/Canada_UniversityCards/Canada_UniversityCards";
import Georgia_Study from "../../Components/Study_Destination_Components/Shared_Destination_Component/Georgia_Study/Georgia_Study";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Canada_Doc1 from "../../Components/Study_Destination_Components/Canada/Canada_Documents/Canada_Doc1";
import Canada_Doc2 from "../../Components/Study_Destination_Components/Canada/Canada_Documents/Canada_Doc2";
import Canada_DocumentsSvg from "../../Components/Study_Destination_Components/Canada/Canada_Documents/Canada_DocumentsSvg";
import Unversity_Cards from "../../Components/Study_Destination_Components/Shared/Unversity_Cards";
import University_Faq from "../../Components/Study_Destination_Components/Shared/University_Faq";
import Canada_FaqSVG from "../../Components/Study_Destination_Components/Canada/Canada_Faq/Canada_FaqSVG";

const Canada = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Experience the friendly culture and stunning natural beauty of Canada while pursuing a world-class education. Study at top-tier universities with renowned faculty, honing your skills in a diverse and international setting. Gain valuable practical experience through internships and placements with leading Canadian companies, applying your knowledge in a dynamic and innovative environment. Graduate with a highly sought-after Canadian degree, opening doors to exciting career opportunities in Canada and worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      <Canada_Banner country={"Canada"}></Canada_Banner>
      <Georgia_Study
        country={"Canada"}
        description={description}
      ></Georgia_Study>
      <QuickFacts country="Canada"></QuickFacts>
      {/* <Canada_Tabs></Canada_Tabs> */}
      <Tabs country={"Canada"} />
      <AnimatedText country={"Canada"} />
      {/* <Canada_UniversityCards></Canada_UniversityCards> */}
      <Unversity_Cards
        country={"Canada"}
        apiRoute={"uk"}
        routeLabel={"singleUniversityUK"}
      />
      <GuidanceBanner></GuidanceBanner>
      {/* <UAE_RequirementCard country={"Canada"}></UAE_RequirementCard> */}
      <RequirementCard country={"Canada"} />
      <Exams country={"Canada"}></Exams>
      {/* <Canada_DocumentsRequired></Canada_DocumentsRequired> */}
      <University_Required_Docs
        country={"Canada"}
        doc1={<Canada_Doc1 />}
        doc2={<Canada_Doc2 />}
        doc3={<Canada_DocumentsSvg />}
      />
      {/* <Canada_Faq></Canada_Faq> */}
      <University_Faq bgColor={"bg-[#06400a]"} FAQimg={<Canada_FaqSVG />} />
      <Canada_Counselor></Canada_Counselor>
    </div>
  );
};

export default Canada;
