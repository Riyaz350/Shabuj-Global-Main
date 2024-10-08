import { useEffect } from "react";
import Cyprus_Banner from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Banner/Cyprus_Banner";
import Cyprus_Counselor from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Counselor/Cyprus_Counselor";
import Cyprus_DocumentsRequired from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Document/Cyprus_DocumentsRequired";
import Cyprus_Faq from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Faq/Cyprus_Faq";
import Cyprus_Tabs from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Tabs/Cyprus_Tabs";
import Cyprus_UniversityCards from "../../Components/Study_Destination_Components/Cyprus/Cyprus_UniversityCards/Cyprus_UnversityCards";
import Georgia_Study from "../../Components/Study_Destination_Components/Shared_Destination_Component/Georgia_Study/Georgia_Study";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import QuickFacts from "../../Components/Study_Destination_Components/Shared_Destination_Component/QuickFacts";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";
import Canada_Banner from "../../Components/Study_Destination_Components/Shared_Destination_Component/Canada_Banner/Canada_Banner";
import Tabs from "../../Components/Study_Destination_Components/Shared_Destination_Component/Tabs/Tabs";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import GuidanceBanner from "../../Components/Study_Destination_Components/Shared/GuidenceBanner";
import University_Required_Docs from "../../Components/Study_Destination_Components/Shared/University_Required_Docs";
import Cyprus_Doc1 from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Document/Cyprus_Doc1";
import Cyprus_Doc2 from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Document/Cyprus_Doc2";
import Cyprus_DocumentsSvg from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Document/Cyprus_DocumentsSvg";
import Unversity_Cards from "../../Components/Study_Destination_Components/Shared/Unversity_Cards";
import University_Faq from "../../Components/Study_Destination_Components/Shared/University_Faq";
import Cyprus_FaqSVG from "../../Components/Study_Destination_Components/Cyprus/Cyprus_Faq/Cyprus_FaqSVG";

const Cyprus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const description = `Discover the beautiful island of Cyprus while pursuing a world-class education. Study at top-tier universities with renowned faculty, honing your skills in a supportive and international environment. Gain valuable practical experience through internships and placements with leading Cypriot companies, applying your knowledge in a dynamic and innovative setting. Graduate with a globally recognized degree and a deep appreciation for Cypriot culture, opening doors to exciting career opportunities in Cyprus and worldwide.`;
  return (
    <div className="font-poppins overflow-hidden">
      {/* <Cyprus_Banner></Cyprus_Banner> */}
      <Canada_Banner country={"Cyprus"} />
      <Georgia_Study
        country={"Cyprus"}
        description={description}
      ></Georgia_Study>
      <QuickFacts country="Cyprus"></QuickFacts>
      {/* <Cyprus_Tabs></Cyprus_Tabs> */}
      <Tabs country={"Cyprus"} />
      <AnimatedText country={"Cyprus"} />
      {/* <Cyprus_AnimatedText></Cyprus_AnimatedText> */}
      {/* <Cyprus_UniversityCards></Cyprus_UniversityCards> */}
      <Unversity_Cards
        country={"Cyprus"}
        apiRoute={"uk"}
        routeLabel={"singleUniversityUK"}
      />
      <RequirementCard country={"Cyprus"} />
      {/* <UAE_RequirementCard country={"Cyprus"}></UAE_RequirementCard> */}
      <Exams country={"Cyprus"}></Exams>
      <GuidanceBanner></GuidanceBanner>
      {/* <Cyprus_DocumentsRequired></Cyprus_DocumentsRequired> */}
      <University_Required_Docs
        country={"Cyprus"}
        doc1={<Cyprus_Doc1 />}
        doc2={<Cyprus_Doc2 />}
        doc3={<Cyprus_DocumentsSvg />}
      />
      {/* <Cyprus_Faq></Cyprus_Faq> */}
      <University_Faq bgColor={"bg-[#692a00]"} FAQimg={<Cyprus_FaqSVG />} />
      <Cyprus_Counselor></Cyprus_Counselor>
    </div>
  );
};

export default Cyprus;
