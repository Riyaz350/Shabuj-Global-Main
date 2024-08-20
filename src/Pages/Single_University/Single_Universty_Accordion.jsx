import { useState } from "react";
import { LuTriangle } from "react-icons/lu";

const Single_Universty_Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "Overview",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "History",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Ranking & Achievements",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Courses",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Departments and Faculties",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Fees & Scholarships",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Facilities & Services",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Accommodation",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Location",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="w-full font-poppins h-screen rounded-lg px-5 py-10">
      {dataArr.map((PerAccordion, idx) => (
        <div key={idx} className="my-3">
          <button
            onClick={() => toggle(idx)}
            className="flex w-full rounded-full bg-[#EEEEEE] items-center justify-between font-medium outline-none"
          >
            <span className="pl-5 py-3 text-lg md:text-2xl font-bold text-[#00399F]">
              {PerAccordion.title}
            </span>
            <span
              className={`rounded-full text-lg md:text-xl px-8 py-4 ${
                isOpen === idx ? "bg-[#00399F]" : "bg-[#e1e1e1]"
              }`}
            >
              <LuTriangle
                className={`origin-center transform transition duration-200 ease-out rotate-90 text-[#00399F] ${
                  isOpen === idx && "!rotate-180 text-white"
                }`}
              />
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4 text-sm">
              {PerAccordion.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Single_Universty_Accordion;
