import { useRef } from "react";
import "./Australia_Tab.css";
import Programs from "./Tab/Programs";
import Cost from "./Tab/Cost";
import Intakes from "./Tab/Intakes";
import Deadline from "./Tab/Deadline";

const Australia_Tab = () => {
  const tabArea = useRef(null);
  const handleClick = (event) => {
    event.target.offsetParent.classList.add("active");
    console.log(event);
    tabArea.current.querySelectorAll("li.tab-link-item").forEach((li) => {
      if (li !== event.target.offsetParent) {
        li.classList.remove("active");
      }
    });

    const currentTabContent = tabArea.current.querySelector(
      "#" + event.target.offsetParent.dataset.tab
    );

    tabArea.current
      .querySelectorAll(".tab-content-display")
      .forEach((tabContent) => {
        if (currentTabContent !== tabContent) {
          tabContent.classList.remove("active");
        } else {
          tabContent.classList.add("active");
        }
      });
  };

  return (
    <div ref={tabArea}>
      <ul className="lg:flex tab-item-links hidden">
        <li
          className="h-[90px] pt-[22px] w-[25%] text-center text-white bg-[#EF9C66] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item active relative"
          data-tab="tab-program"
        >
          <button
            className="bg-transparent  hover:text-blue-700"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Programs & Duration
          </button>
        </li>
        <li
          className="h-[90px] pt-[22px] w-[25%] text-center text-white bg-[#9667EF] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item relative"
          data-tab="tab-cost"
        >
          <button
            className="bg-transparent  hover:text-blue-700"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Cost of Studying
          </button>
        </li>
        <li
          className="h-[90px] pt-[22px] w-[25%] text-center text-white bg-[#E2635E] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item relative"
          data-tab="tab-intakes"
        >
          <button
            className="bg-transparent  hover:text-blue-700"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Academic Intakes
          </button>
        </li>
        <li
          className="h-[90px] pt-[22px] w-[25%] text-center text-white bg-[#58B1EA] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item relative"
          data-tab="tab-deadline"
        >
          <button
            className="bg-transparent hover:text-blue-700"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Deadline
          </button>
        </li>
      </ul>
      <div className="tab-content--container">
        <div className="tab-content-display active" id="tab-program">
          <Programs />
        </div>
        <div className="tab-content-display" id="tab-cost">
          <Cost />
        </div>
        <div className="tab-content-display" id="tab-intakes">
          <Intakes />
        </div>
        <div className="tab-content-display" id="tab-deadline">
          <Deadline />
        </div>
      </div>
    </div>
  );
};

export default Australia_Tab;
