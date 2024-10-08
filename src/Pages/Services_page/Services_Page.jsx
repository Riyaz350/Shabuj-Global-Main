import Home_Connection from "../../Components/Home/Home_Connection/Home_Connection";
import Service_Testimonial from "../../Components/Services/Service_Testimonial/Service_Testimonial";
import Services_Components from "../../Components/Services/Services_Components/Services_Components";

const Services_Page = () => {
  return (
    <div className="font-poppins">
      <Services_Components />
      <Service_Testimonial></Service_Testimonial>
      <div className="pb-16 sm:-11">
      <Home_Connection />
      </div>
    </div>
  );
};

export default Services_Page;
