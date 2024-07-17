import { useState } from "react";
import Programs from "./TabComponents/Programs";
import Cost from "./TabComponents/Cost";
import Intakes from "./TabComponents/Intakes";
import Deadline from "./TabComponents/Deadline";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      label: "Programs & Duration",
      component: <Programs />,
      color: "bg-[#EF9C66]",
    },
    { label: "Cost of Studying", component: <Cost />, color: "bg-[#9667EF]" },
    {
      label: "Academic Intakes",
      component: <Intakes />,
      color: "bg-[#E2635E]",
    },
    { label: "Deadline", component: <Deadline />, color: "bg-[#58B1EA]" },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="flex">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-4 px-4 text-center text-3xl font-medium rounded-t-2xl rounded-bl-2xl transition-colors duration-300 ${
              activeTab === index
                ? "bg-[#EFF6FF] text-blue-600 rounded-bl-none"
                : `${tab.color} text-white`
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-[#EFF6FF]">{tabData[activeTab].component}</div>
    </div>
  );
};

export default Tabs;
