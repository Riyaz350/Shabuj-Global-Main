
import Australia_Counselor from "../../Components/Study_Destination_Components/Australia/Australia_Counselor/Australia_Counselor";
import Australia_Purpose from "../../Components/Study_Destination_Components/Australia/Australia_Purpose/Australia_Purpose";
import Australia_Tab from "../../Components/Study_Destination_Components/Australia/Australia_Tab";
import Faq_Aus from "../../Components/Study_Destination_Components/Australia/Faq_Aus";
import QuickFacts from "../../Components/Study_Destination_Components/Australia/QuickFacts";
import Study_Australia from "../../Components/Study_Destination_Components/Australia/Study_Australia";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import AustraliaBanner from "./../../Components/Study_Destination_Components/Australia/AustraliaBanner";
import DocumentsRequired from "./../../Components/Study_Destination_Components/Australia/DocumentsRequired";

const Australia = () => {
  return (
    <div>
        <AustraliaBanner />
      {/* <Study_Australia />
      <QuickFacts />
      <Australia_Tab /> */}
      <RequirementCard country={'Australia'}/>
      <Exams country={'Australia'}/>
      <DocumentsRequired />
      <Faq_Aus />
      <Australia_Counselor/>
    </div>
  );
};

export default Australia;
