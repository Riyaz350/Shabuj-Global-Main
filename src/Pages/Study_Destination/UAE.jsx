import UAE_AnimatedText from "../../Components/Study_Destination_Components/UAE/UAE_AnimatedText";
import UAE_Banner from "../../Components/Study_Destination_Components/UAE/UAE_Banner/UAE_Banner";
import UAE_Counselor from "../../Components/Study_Destination_Components/UAE/UAE_Counselor/UAE_Counselor";
import UAE_DocumentsRequired from "../../Components/Study_Destination_Components/UAE/UAE_Documents/UAE_DocumentsRequired";

import UAE_Exams from "../../Components/Study_Destination_Components/UAE/UAE_Exams/UAE_Exams";
import UAE_Faq from "../../Components/Study_Destination_Components/UAE/UAE_Faq/UAE_Faq";
import UAE_GuidanceBanner from "../../Components/Study_Destination_Components/UAE/UAE_GuidanceBanner";
import UAE_QuickFacts from "../../Components/Study_Destination_Components/UAE/UAE_QuickFacts";
import UAE_RequirementCard from "../../Components/Study_Destination_Components/UAE/UAE_RequirementCard/UAE_RequirementCard";
import UAE_StudyUAE from "../../Components/Study_Destination_Components/UAE/UAE_StudyUAE/UAE_StudyUAE";
import UAE_Tabs from "../../Components/Study_Destination_Components/UAE/UAE_Tabs/UAE_Tabs";
import UAE_UniversityCards from "../../Components/Study_Destination_Components/UAE/UniversityCards/UAE_UniversityCards";


const UAE = () => {
    return (
        <div>
            <UAE_Banner></UAE_Banner>
            <UAE_StudyUAE></UAE_StudyUAE>
            <UAE_QuickFacts></UAE_QuickFacts>
            <UAE_Tabs></UAE_Tabs>
            <UAE_AnimatedText></UAE_AnimatedText>
            <UAE_UniversityCards></UAE_UniversityCards>
            <UAE_RequirementCard country={'UAE'}></UAE_RequirementCard>
            <UAE_Exams country={'UAE'}></UAE_Exams>
            <UAE_GuidanceBanner></UAE_GuidanceBanner>
            <UAE_DocumentsRequired></UAE_DocumentsRequired>
            <UAE_Faq></UAE_Faq>
            <UAE_Counselor></UAE_Counselor>
        </div>
    );
};

export default UAE;