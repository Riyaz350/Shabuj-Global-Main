import Event_Study from "../../Components/Events/Event_Study/Event_Study";
import Event_Subscribe from "../../Components/Events/Event_Subscribe/Event_Subscribe";
import Events_Components from "../../Components/Events/Events_Components/Events_Components";
import UpcomingEvents_PastEvents from "../../Components/Events/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";

const Events = () => {
  return (
    <div className="font-poppins">
      <Events_Components />
      {/* <UpcomingEvents_EducationFair/> */}
      <UpcomingEvents_PastEvents />
      <Event_Subscribe />
      <Event_Study />
    </div>
  );
};

export default Events;
