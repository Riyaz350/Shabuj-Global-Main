import Australia_Tab from "./Components/Australia_Tab";
import AustraliaBanner from "./Components/AustraliaBanner";
import DocumentsRequired from "./Components/DocumentsRequired";
import QuickFacts from "./Components/QuickFacts";
import Study_Australia from "./Components/Study_Australia";

const Study_Destination_Aus = () => {
  return (
    <div>
      <AustraliaBanner />
      <Study_Australia />
      <QuickFacts />
      <Australia_Tab />
      <DocumentsRequired />
    </div>
  );
};

export default Study_Destination_Aus;
