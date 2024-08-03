import Registration_Banner from "../../Components/Registration_Components/Registration_Banner";
import Registration_Event_Time from "../../Components/Registration_Components/Registration_Event_Time";
import Registration_Events from "../../Components/Registration_Components/Registration_Events";


const Registration = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <Registration_Banner/>
            <div className="flex max-w-screen-2xl mx-auto justify-between px-20 mt-20">
                <Registration_Event_Time/>
                <Registration_Events/>
            </div>
        </div>
    );
};

export default Registration;