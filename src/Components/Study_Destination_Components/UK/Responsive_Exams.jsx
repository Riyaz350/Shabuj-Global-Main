import { useState } from "react";
import { motion } from "framer-motion";

const Responsive_Exams = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <div className="text-[#3B82F6] bg-[#F1F8FF]">
      <div className="max-w-screen-xl mx-5 grid grid-cols-1 gap-x-6 gap-y-8 pt-24 pb-36">
        {/* First card */}
        <motion.div
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => toggleCard(1)}
          initial={{ height: "250px" }}
          animate={{ height: expandedCard === 1 ? "auto" : "250px" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-2xl sm:text-[35px] leading-tight font-semibold -mt-4 mb-2">
              English Language Proficiency Exams
            </h2>
            {expandedCard === 1 && (
              <div className="overflow-hidden">
                <ul className={`pl-5 space-y-2 list-disc`}>
                  <li>International English Language Testing System (IELTS)</li>
                  <li>Test of English as a Foreign Language (TOFEL)</li>
                  <li>The Pearson Test of English (PTE)</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
              expandedCard == 1 ? "hidden" : ""
            }`}
          >
            <img
              className="w-20"
              src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif'
              alt="Arrow indicating more content"
            />
          </div>
        </motion.div>

        {/* Second card */}
        <motion.div
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => toggleCard(2)}
          initial={{ height: "250px" }}
          animate={{ height: expandedCard === 2 ? "auto" : "250px" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-2xl sm:text-[35px] leading-tight font-semibold -mt-4 mb-2 ">
              Graduation Admission Requirements
            </h2>
            {expandedCard === 2 && (
              <div className="overflow-hidden">
                <ul className={`pl-5 space-y-2 list-disc`}>
                  <li>General Certificate of Secondary Education (GCSE)</li>
                  <li>Advanced Level (A-Level) exams</li>
                  <li>International Baccalaureate (IB) Diploma</li>
                  <li>Advanced Placement (AP) exams</li>
                  <li>SAT or ACT</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
              expandedCard == 2 ? "hidden" : ""
            }`}
          >
            <img
              className="w-20"
              src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif'
              alt="Arrow indicating more content"
            />
          </div>
        </motion.div>

        {/* Third card */}
        <motion.div
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => toggleCard(3)}
          initial={{ height: "250px" }}
          animate={{ height: expandedCard === 3 ? "auto" : "250px" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-2xl sm:text-[35px] leading-tight font-semibold -mt-4 mb-2">
              Undergraduate Admission Requirements
            </h2>
            {expandedCard === 3 && (
              <div className="overflow-hidden">
                <ul className={`pl-5 space-y-2 list-disc`}>
                  <li>International English Language Testing System (IELTS)</li>
                  <li>Test of English as a Foreign Language (TOFEL)</li>
                  <li>The Pearson Test of English (PTE)</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
              expandedCard == 3 ? "hidden" : ""
            }`}
          >
            <img
              className="w-20"
              src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif'
              alt="Arrow indicating more content"
            />
          </div>
        </motion.div>

        {/* Fourth card */}
        <motion.div
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => toggleCard(4)}
          initial={{ height: "100%" }}
          animate={{ height: expandedCard === 4 ? "auto" : "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-2xl sm:text-[35px] leading-tight font-semibold -mt-4 mb-2">
              Subject-Specific Exams
            </h2>
            {expandedCard === 4 && (
              <div className="overflow-hidden">
                <ul className={`pl-5 space-y-2 list-disc`}>
                  <li>General Certificate of Secondary Education (GCSE)</li>
                  <li>Advanced Level (A-Level) exams</li>
                  <li>International Baccalaureate (IB) Diploma</li>
                  <li>Advanced Placement (AP) exams</li>
                  <li>SAT or ACT</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
              expandedCard == 4 ? "hidden" : ""
            }`}
          >
            <img
              className="w-20"
              src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif'
              alt="Arrow indicating more content"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Responsive_Exams;
