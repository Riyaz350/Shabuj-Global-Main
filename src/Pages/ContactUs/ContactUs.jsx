import Contact_Us_Map from "../../Components/ContactUs/Contact_Us_Map/Contact_Us_Map";
import ContactUs_Accordion from "../../Components/ContactUs/ContactUs_Accordion/ContactUs_Accordion";
import ContactUs_Components from "../../Components/ContactUs/ContactUs_Components";

export default function ContactUs() {
  return (
    <div>
      <ContactUs_Components />
      <Contact_Us_Map />
      <ContactUs_Accordion />
    </div>
  );
}
