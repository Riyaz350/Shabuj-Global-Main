import Home_Connection from "../../Components/Home/Home_Connection/Home_Connection";
import Service_Testimonial from "../../Components/Services/Service_Testimonial/Service_Testimonial";
import Services_Components from "../../Components/Services/Services_Components/Services_Components";


const Services_Page = () => {
    return (
        <div>
            <Services_Components/>
            <Service_Testimonial></Service_Testimonial>
            <Home_Connection/>
        </div>
    );
};

export default Services_Page;