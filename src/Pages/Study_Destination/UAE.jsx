import { useEffect } from "react";
import UAE_Counselor from "../../Components/Study_Destination_Components/UAE/UAE_Counselor/UAE_Counselor";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
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
      <Canada_Banner country={"UAE"} />
      <Georgia_Study country={"UAE"} description={description}></Georgia_Study>
      <QuickFacts country="UAE" />
      <Tabs country={"UAE"} />
      <AnimatedText country={"UAE"} />
      <Unversity_Cards
        country={"UAE"}
        apiRoute={"uk"}
        routeLabel={"singleUniversityUK"}
      />
      <RequirementCard country={"UAE"} />

      <Exams country={"UAE"} />
      <GuidanceBanner />
      <University_Required_Docs
        country={"UAE"}
        doc1={<UAE_Doc1 />}
        doc2={<UAE_Doc2 />}
        doc3={<UAE_DocumentsSvg />}
      />
      <University_Faq bgColor={"bg-[#63099c]"} FAQimg={<UAE_FaqSVG />} />
      <UAE_Counselor></UAE_Counselor>
    </div>
  );
};

export default UAE;
