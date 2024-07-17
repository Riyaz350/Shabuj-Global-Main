import Home_Banner from "../../Components/Home/Home_Banner/Home_Banner";
import Home_Connection from "../../Components/Home/Home_Connection/Home_Connection";
import Home_Contact from "../../Components/Home/Home_Contact/Home_Contact";
import Home_Counter from "../../Components/Home/Home_Counter/Home_Counter";
import Home_DestinationCard from "../../Components/Home/Home_DestinationCard/Home_DestinationCard";
import Home_Events from "../../Components/Home/Home_Events/Home_Events";
import Home_ImageGallery from "../../Components/Home/Home_ImageGallery/Home_ImageGallery";
import Home_Tab from "../../Components/Home/Home_Tab/Home_Tab";
import Home_Testimonial from "../../Components/Home/Home_Testimonial/Home_Testimonial";
import Home_Ticker from "../../Components/Home/Home_Ticker/Home_Ticker";
import Home_UniversityList from "../../Components/Home/Home_UniversityList/Home_Universitylist";


export default function Home() {
  return (
    <div>
      <Home_Banner/>
      <Home_Events/>
      <Home_Tab/>
      <Home_Counter/>
      <Home_Ticker/>
      <Home_Testimonial/>
      <Home_Connection/>
      <Home_DestinationCard/>
      <Home_UniversityList/>
      <Home_ImageGallery/>
      <Home_Contact/>
    </div>
  )
}
