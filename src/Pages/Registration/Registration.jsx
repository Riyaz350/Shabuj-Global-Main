import Registration_Banner from "../../Components/Registration_Components/Registration_Banner";
import Registration_Event_Time from "../../Components/Registration_Components/Registration_Event_Time";
import Registration_Events from "../../Components/Registration_Components/Registration_Events";

const Registration = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <Registration_Banner/>
            <div className="lg:flex md:flex max-w-screen-xl justify-between mx-auto lg:px-20 md:px-10 px-5 mt-20 space-y-10 lg:space-y-0 md:space-y-0">
                <div className="flex-1 lg:mr-10 md:mr-10 mb-20">
                    <Registration_Event_Time/>
                </div>
                <div className="flex-1">
                    <Registration_Events/>
                </div>
            </div>
        </div>
    );
};

export default Registration;
