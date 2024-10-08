
import "./Australia_Tab.css";
import Programs from "./Tab/Programs";
import Cost from "./Tab/Cost";
import Intakes from "./Tab/Intakes";
import Deadline from "./Tab/Deadline";
import { useState } from "react";

const Australia_Tab = () => {
  const [activeTab, setActiveTab] = useState("tab-program");

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ul className="lg:flex md:flex hidden tab-item-links">
        <li onClick={() => handleClick("tab-program")} className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#EF9C66] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item ${activeTab === "tab-program" ? "active" : ""} relative`} data-tab="tab-program">
          <button className="bg-transparent p-1">Programs & Duration</button>
        </li>
        <li onClick={() => handleClick("tab-cost")} className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#9667EF] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item ${activeTab === "tab-cost" ? "active" : ""} relative`} data-tab="tab-cost">
          <button className="bg-transparent p-1">Cost of Studying</button>
        </li>
        <li onClick={() => handleClick("tab-intakes")} className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#E2635E] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item ${activeTab === "tab-intakes" ? "active" : ""} relative`} data-tab="tab-intakes">
          <button className="bg-transparent p-1">Academic Intakes</button>
        </li>
        <li onClick={() => handleClick("tab-deadline")} className={`h-[90px] pt-[22px] lg:w-[25%] md:w-[25%] w-full text-center text-white bg-[#58B1EA] poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] tab-link-item ${activeTab === "tab-deadline" ? "active" : ""} relative`} data-tab="tab-deadline">
          <button className="bg-transparent p-1">Deadline</button>
        </li>
      </ul>
      {/* for mobile */}
      <ul className="lg:hidden md:hidden block tab-item-links space-y-1">
        <li onClick={() => handleClick("tab-program")} className={`h-[90px] pt-[22px] w-full text-center ${activeTab === "tab-program" ? "bg-white text-[#EF9C66] border-[#EF9C66] border-[2px]" : "bg-[#EF9C66] text-white"} poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`} data-tab="tab-program">
          <button className="bg-transparent pb-5 w-full h-full">Programs & Duration</button>
        </li>
        <li onClick={() => handleClick("tab-cost")} className={`h-[90px] pt-[22px] w-full text-center ${activeTab === "tab-cost" ? "bg-white text-[#9667EF] border-[#9667EF] border-[2px]" : "bg-[#9667EF] text-white"} poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`} data-tab="tab-cost">
          <button className="bg-transparent pb-5 w-full h-full">Cost of Studying</button>
        </li>
        <li onClick={() => handleClick("tab-intakes")} className={`h-[90px] pt-[22px] w-full text-center ${activeTab === "tab-intakes" ? "bg-white text-[#E2635E] border-[#E2635E] border-[2px]" : "bg-[#E2635E] text-white"} poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`} data-tab="tab-intakes">
          <button className="bg-transparent pb-5 w-full h-full">Academic Intakes</button>
        </li>
        <li onClick={() => handleClick("tab-deadline")} className={`h-[90px] pt-[22px] w-full text-center ${activeTab === "tab-deadline" ? "bg-white text-[#58B1EA] border-[#58B1EA] border-[2px]" : "bg-[#58B1EA] text-white"} poppins-semibold text-[28px] leading-[39.2px] rounded-[32px] relative`} data-tab="tab-deadline">
          <button className="bg-transparent pb-5 w-full h-full">Deadline</button>
        </li>
      </ul>
      <div className="tab-content--container lg:p-[100px] md:p-[100px] p-5  bg-[#EFF6FF]">
        <div className={`tab-content-display ${activeTab === "tab-program" ? "active" : ""}`} id="tab-program">
          <Programs />
        </div>
        <div className={`tab-content-display ${activeTab === "tab-cost" ? "active" : ""}`} id="tab-cost">
          <Cost />
        </div>
        <div className={`tab-content-display ${activeTab === "tab-intakes" ? "active" : ""}`} id="tab-intakes">
          <Intakes />
        </div>
        <div className={`tab-content-display ${activeTab === "tab-deadline" ? "active" : ""}`} id="tab-deadline">
          <Deadline />
        </div>
      </div>
    </div>
  );
};

export default Australia_Tab;
