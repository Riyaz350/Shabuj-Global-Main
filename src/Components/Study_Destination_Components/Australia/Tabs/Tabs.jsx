import { useEffect, useState } from "react";
import Programs from "../TabComponents/Programs";
import Cost from "../TabComponents/Cost";
import Intakes from "../TabComponents/Intakes";
import Deadline from "../TabComponents/Deadline";
import './Tabs.css'
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab-program");

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [width, setWidth] = useState(null)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

  return (
    <div>
      <ul className="lg:flex md:flex hidden tab-item-links">
        <li
          onClick={() => handleClick("tab-program")}
          className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#EF9C66] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item relative ${
            activeTab === "tab-program" ? "active" : ""
          } `}
          data-tab="tab-program"
        >
          <button className={`bg-transparent p-1  ${activeTab === "tab-program" ? "  " : " hover:text-white"}`}>Programs & Duration</button>
        </li>
        <li
          onClick={() => handleClick("tab-cost")}
          className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#9667EF] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item relative ${
            activeTab === "tab-cost" ? "active" : ""
          }`}
          data-tab="tab-cost"
        >
          <button className={`bg-transparent p-1  ${activeTab === "tab-cost" ? "  " : " hover:text-white"}`}>Cost of Studying</button>
        </li>
        <li
          onClick={() => handleClick("tab-intakes")}
          className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#E2635E] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item relative ${
            activeTab === "tab-intakes" ? "active" : ""
          } `}
          data-tab="tab-intakes"
        >
          <button className={`bg-transparent p-1  ${activeTab === "tab-intakes" ? "  " : " hover:text-white"}`}>Academic Intakes</button>
        </li>
        <li
          onClick={() => handleClick("tab-deadline")}
          className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#58B1EA] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item relative ${
            activeTab === "tab-deadline" ? "active" : ""
          }`}
          data-tab="tab-deadline"
        >
          <button className={`bg-transparent p-1  ${activeTab === "tab-deadline" ? "  " : " hover:text-white"}`}>Deadline</button>
        </li>
      </ul>
      {/* for mobile */}
      <ul className="lg:hidden md:hidden block tab-item-links space-y-1">
        <li
          onClick={() => handleClick("tab-program")}
          className={`h-[90px] pt-[22px] w-full text-center ${
            activeTab === "tab-program"
              ? "bg-white text-[#EF9C66] border-[#EF9C66] border-[2px]"
              : "bg-[#EF9C66] text-white"
          } poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`}
          data-tab="tab-program"
        >
          <button className="bg-transparent pb-5 w-full h-full">
            Programs & Duration
          </button>
        </li>
        <li
          onClick={() => handleClick("tab-cost")}
          className={`h-[90px] pt-[22px] w-full text-center ${
            activeTab === "tab-cost"
              ? "bg-white text-[#9667EF] border-[#9667EF] border-[2px]"
              : "bg-[#9667EF] text-white"
          } poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`}
          data-tab="tab-cost"
        >
          <button className="bg-transparent pb-5 w-full h-full">
            Cost of Studying
          </button>
        </li>
        <li
          onClick={() => handleClick("tab-intakes")}
          className={`h-[90px] pt-[22px] w-full text-center ${
            activeTab === "tab-intakes"
              ? "bg-white text-[#E2635E] border-[#E2635E] border-[2px]"
              : "bg-[#E2635E] text-white"
          } poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`}
          data-tab="tab-intakes"
        >
          <button className="bg-transparent pb-5 w-full h-full">
            Academic Intakes
          </button>
        </li>
        <li
          onClick={() => handleClick("tab-deadline")}
          className={`h-[90px] pt-[22px] w-full text-center ${
            activeTab === "tab-deadline"
              ? "bg-white text-[#58B1EA] border-[#58B1EA] border-[2px]"
              : "bg-[#58B1EA] text-white"
          } poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`}
          data-tab="tab-deadline"
        >
          <button className="bg-transparent pb-5 w-full h-full">
            Deadline
          </button>
        </li>
      </ul>
      <div className={`${width < 600 ? "" :'tab-content--container' }   lg:p-[100px] md:p-[100px] p-0 bg-[#EFF6FF]`}>
        <div
          className={`tab-content-display ${
            activeTab === "tab-program" ? "active" : ""
          }`}
          id="tab-program"
        >
          <Programs />
        </div>
        <div
          className={`tab-content-display ${
            activeTab === "tab-cost" ? "active" : ""
          }`}
          id="tab-cost"
        >
          <Cost />
        </div>
        <div
          className={`tab-content-display ${
            activeTab === "tab-intakes" ? "active" : ""
          }`}
          id="tab-intakes"
        >
          <Intakes />
        </div>
        <div
          className={`tab-content-display ${
            activeTab === "tab-deadline" ? "active" : ""
          }`}
          id="tab-deadline"
        >
          <Deadline />
        </div>
      </div>
    </div>
  );
};

export default Tabs;