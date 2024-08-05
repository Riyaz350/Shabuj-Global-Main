import Germany_Banner from "../../Components/Study_Destination_Components/Germany/Germany_Banner/Germany_Banner";
import Germany_Purpose from "../../Components/Study_Destination_Components/Germany/Germany_Purpose/Germany_Purpose";
import Germany_StudyInGermany from "../../Components/Study_Destination_Components/Germany/Germany_StudyInGermany/Germany_StudyInGermany";
import Exams from "../../Components/Study_Destination_Components/Shared/Exams";
import RequirementCard from "../../Components/Study_Destination_Components/Shared/RequirementCard";
import DocumentsRequired from "../../Components/Study_Destination_Components/Germany/DocumentsRequired/DocumentsRequired";
import Faq_Ger from "../../Components/Study_Destination_Components/Germany/Germany_Faq/Faq_Ger";
import Germany_Counselor from "../../Components/Study_Destination_Components/Germany/Germany_Counselor/Germany_Counselor";
import Tabs from "../../Components/Study_Destination_Components/Australia/Tabs/Tabs";
import AnimatedText from "../../Components/Study_Destination_Components/Shared/AnimatedText/AnimatedText";


const Germany = () => {
    return (
        <div>
            <Germany_Banner/>
            <Germany_StudyInGermany/>
            <Tabs/>
            <AnimatedText/>
            <RequirementCard country={'Germany'}/>
            <Exams country={'Germany'}/>
            <DocumentsRequired/>
            <Faq_Ger/>
            <Germany_Counselor/>
        </div>
    );
};

export default Germany;