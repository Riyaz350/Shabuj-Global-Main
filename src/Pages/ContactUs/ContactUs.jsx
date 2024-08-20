import Contact_Us_Form from "../../Components/ContactUs/Contact_Us_Form";
import Contact_Us_Map from "../../Components/ContactUs/Contact_Us_Map/Contact_Us_Map";
import ContactUs_Accordion from "../../Components/ContactUs/ContactUs_Accordion/ContactUs_Accordion";

export default function ContactUs() {
  return (
    <div className="font-poppins">
      <Contact_Us_Form />
      <Contact_Us_Map />
      <ContactUs_Accordion />
    </div>
  );
}
