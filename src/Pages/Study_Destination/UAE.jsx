import { useEffect } from "react";
import UAE_Banner from "../../Components/Study_Destination_Components/UAE/UAE_Banner/UAE_Banner";
import UAE_Counselor from "../../Components/Study_Destination_Components/UAE/UAE_Counselor/UAE_Counselor";
import UAE_DocumentsRequired from "../../Components/Study_Destination_Components/UAE/UAE_Documents/UAE_DocumentsRequired";

import UAE_Exams from "../../Components/Study_Destination_Components/UAE/UAE_Exams/UAE_Exams";
import UAE_Faq from "../../Components/Study_Destination_Components/UAE/UAE_Faq/UAE_Faq";
import UAE_GuidanceBanner from "../../Components/Study_Destination_Components/UAE/UAE_GuidanceBanner";
import UAE_QuickFacts from "../../Components/Study_Destination_Components/UAE/UAE_QuickFacts";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import UAE_StudyUAE from "../../Components/Study_Destination_Components/UAE/UAE_StudyUAE/UAE_StudyUAE";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import UAE_UniversityCards from "../../Components/Study_Destination_Components/UAE/UniversityCards/UAE_UniversityCards";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Canada_Banner from "../../Components/Study_Destination_Components/Shared_Destination_Component/Canada_Banner/Canada_Banner";
import Georgia_Study from "../../Components/Study_Destination_Components/Shared_Destination_Component/Georgia_Study/Georgia_Study";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import UAE_Doc1 from "../../Components/Study_Destination_Components/UAE/UAE_Documents/UAE_Doc1";
import UAE_Doc2 from "../../Components/Study_Destination_Components/UAE/UAE_Documents/UAE_Doc2";
import UAE_DocumentsSvg from "../../Components/Study_Destination_Components/UAE/UAE_Documents/UAE_DocumentsSvg";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Unversity_Cards from "../../Components/Study_Destination_Components/Shared/Unversity_Cards";
import University_Faq from "../../Components/Study_Destination_Components/Shared/University_Faq";
import UAE_FaqSVG from "../../Components/Study_Destination_Components/UAE/UAE_Faq/UAE_FaqSVG";

const UAE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Immerse yourself in the vibrant culture and cosmopolitan atmosphere of
          the UAE while pursuing a world-class education. Study at top-tier
          universities with renowned faculty, honing your skills in a supportive
          and international environment. Gain valuable practical experience
          through internships and placements with leading UAE companies,
          applying your knowledge in a dynamic and innovative setting. Graduate
          with a globally recognized degree and a deep understanding of the
          Middle East, opening doors to exciting career opportunities in the UAE
          and worldwide.`;

  return (
    <div className="font-poppins overflow-hidden">
      {/* <UAE_Banner></UAE_Banner> */}
      <Canada_Banner country={"UAE"} />
      {/* <UAE_StudyUAE></UAE_StudyUAE> */}
      <Georgia_Study country={"UAE"} description={description}></Georgia_Study>
      <QuickFacts country="UAE" />
      {/* <UAE_Tabs></UAE_Tabs> */}
      <Tabs country={"UAE"} />
      <AnimatedText country={"UAE"} />
      {/* <UAE_UniversityCards></UAE_UniversityCards> */}
      <Unversity_Cards
        country={"UAE"}
        apiRoute={"uk"}
        routeLabel={"singleUniversityUK"}
      />
      <RequirementCard country={"UAE"} />

      {/* <UAE_RequirementCard ></UAE_RequirementCard> */}
      {/* <UAE_Exams country={"UAE"}></UAE_Exams> */}
      <Exams country={"UAE"} />
      {/* <UAE_GuidanceBanner></UAE_GuidanceBanner> */}
      <GuidanceBanner />
      {/* <UAE_DocumentsRequired country={"UAE"}></UAE_DocumentsRequired> */}
      <University_Required_Docs
        country={"UAE"}
        doc1={<UAE_Doc1 />}
        doc2={<UAE_Doc2 />}
        doc3={<UAE_DocumentsSvg />}
      />
      {/* <UAE_Faq></UAE_Faq> */}
      <University_Faq bgColor={"bg-[#63099c]"} FAQimg={<UAE_FaqSVG />} />
      <UAE_Counselor></UAE_Counselor>
    </div>
  );
};

export default UAE;
