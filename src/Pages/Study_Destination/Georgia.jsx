import Georgia_Banner from "../../Components/Study_Destination_Components/Georgia/Georgia_Banner";
import Georgia_Counselor from "../../Components/Study_Destination_Components/Georgia/Georgia_Counselor/Georgia_Counselor";
import Georgia_DocumentsRequired from "../../Components/Study_Destination_Components/Georgia/Georgia_Documentsrequired/Georgia_DocumentsRequired";
import Georgia_Faq from "../../Components/Study_Destination_Components/Georgia/Georgia_Faq/Georgia_Faq";

import Georgia_Study from "../../Components/Study_Destination_Components/Georgia/Georgia_Study/Georgia_Study";
import Georgia_Tabs from "../../Components/Study_Destination_Components/Georgia/Georgia_Tabs/Georgia_Tabs";
import UAE_AnimatedText from "../../Components/Study_Destination_Components/UAE/UAE_AnimatedText";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";

import Exams from "../../Components/Study_Destination_Components/UK/Exams";
import GuidanceBanner from "../../Components/Study_Destination_Components/UK/GuidenceBanner";

import QuickFacts from "../../Components/Study_Destination_Components/UK/QuickFacts";

import UniversityCards from "../../Components/Study_Destination_Components/UK/UniversityCards";



const Georgia = () => {
    return (
        <div>
            <Georgia_Banner></Georgia_Banner>
            <Georgia_Study country={"Georgia"}></Georgia_Study>
            <QuickFacts></QuickFacts>
            <Georgia_Tabs></Georgia_Tabs>
            <UAE_AnimatedText></UAE_AnimatedText>
            <UniversityCards></UniversityCards>
            <UAE_RequirementCard country={"Georgia"}></UAE_RequirementCard>
            <Exams country={"Georgia"}></Exams>
            <GuidanceBanner></GuidanceBanner>
            <Georgia_DocumentsRequired></Georgia_DocumentsRequired>
            <Georgia_Faq></Georgia_Faq>
            <Georgia_Counselor></Georgia_Counselor>
        </div>
    );
};

export default Georgia;