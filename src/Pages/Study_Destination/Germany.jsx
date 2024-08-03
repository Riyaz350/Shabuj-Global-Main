import Germany_Banner from "../../Components/Study_Destination_Components/Germany/Germany_Banner/Germany_Banner";
import Germany_Purpose from "../../Components/Study_Destination_Components/Germany/Germany_Purpose/Germany_Purpose";
import Germany_StudyInGermany from "../../Components/Study_Destination_Components/Germany/Germany_StudyInGermany/Germany_StudyInGermany";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import DocumentsRequired from "../../Components/Study_Destination_Components/Germany/DocumentsRequired/DocumentsRequired";
import Faq_Ger from "../../Components/Study_Destination_Components/Germany/Germany_Faq/Faq_Ger";

const Germany = () => {
    return (
        <div>
            <Germany_Banner/>
            <Germany_StudyInGermany/>
            <RequirementCard country={'Germany'}/>
            <Exams country={'Germany'}/>
            <DocumentsRequired/>
            <Germany_Purpose/>
            <Faq_Ger/>
        </div>
    );
};

export default Germany;