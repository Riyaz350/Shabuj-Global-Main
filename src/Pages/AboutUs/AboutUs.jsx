import "../../App.css";
import AboutUs_MeetOurFounder from "../../Components/AboutUs/AboutUs_MeetOurFounder/AboutUs_MeetOurFounder";
import AboutUs_Thebest from "../../Components/AboutUs/AboutUs_TheBest/AboutUs_TheBest";
import AboutUs_components from "../../Components/AboutUs/AboutUs_components";
import Home_Connection from "../../Components/Home/Home_Connection/Home_Connection";
const AboutUs = () => {
  return (
    <div className="font-poppins">
      <AboutUs_components />
      <AboutUs_MeetOurFounder></AboutUs_MeetOurFounder>
      <AboutUs_Thebest></AboutUs_Thebest>
      <Home_Connection />
    </div>
  );
};

export default AboutUs;
