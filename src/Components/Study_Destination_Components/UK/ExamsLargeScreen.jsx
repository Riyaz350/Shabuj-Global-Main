import { motion } from "framer-motion";
import { useState } from "react";
const ExamsLargeScreen = () => {
  const [cardNo, setCardNo] = useState(0);

  return (
    <div className="m-5 md:m-0 lg:m-0 text-[#3B82F6] bg-[#F1F8FF] ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-24 pb-36">
        {/* first card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            cardNo === 1
              ? { height: "153%" }
              : cardNo === 3
              ? { height: "100%", y: 0 }
              : { height: "100%", y: 0 }
          }
          transition={
            cardNo === 1
              ? { type: "spring", bounce: 0.3, duration: 1 }
              : cardNo === 3
              ? { duration: 0.4 }
              : { duration: 0.3 }
          }
          onMouseEnter={() => setCardNo(1)}
          onMouseLeave={() => setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="lg:text-[40px] md:text-[30px] text-[45px] leading-tight font-semibold  mb-2">
                {" "}
                English Language Proficiency Exams
              </h2>

              <ul
                className={`${
                  cardNo === 1 ? "block pl-5 space-y-2" : "hidden"
                } list-disc`}
              >
                <li>International English Language Testing System (IELTS)</li>
                <li>Test of English as a Foreign Language (TOFEL)</li>
                <li>The Pearson Test of English (PTE)</li>
              </ul>
            </div>
            <div>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                  cardNo == 1 ? "hidden" : ""
                }`}
              >
                <img className="w-20" src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif' alt="" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            cardNo === 2
              ? { height: "153%" }
              : cardNo === 4
              ? { height: "100%", y: 0 }
              : { height: "100%", y: 0 }
          }
          transition={
            cardNo === 2
              ? { type: "spring", bounce: 0.3, duration: 1 }
              : cardNo === 4
              ? { duration: 0.4 }
              : { duration: 0.3 }
          }
          onMouseEnter={() => setCardNo(2)}
          onMouseLeave={() => setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="lg:text-[40px] md:text-[30px] text-[45px] leading-tight font-semibold  mb-2">
                Graduation Admission Requirements
              </h2>

              <ul
                className={`${
                  cardNo === 2 ? "block pl-5 space-y-2" : "hidden"
                } list-disc`}
              >
                <li>International English Language Testing System (IELTS)</li>
                <li>Test of English as a Foreign Language (TOFEL)</li>
                <li>The Pearson Test of English (PTE)</li>
              </ul>
            </div>
            <div>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                  cardNo == 2 ? "hidden" : ""
                }`}
              >
                <img className="w-20" src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif' alt="" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            cardNo === 3
              ? { height: "153%", y: "0%" }
              : cardNo === 1
              ? { height: "100%", y: "50%" }
              : { height: "100%", y: 0 }
          }
          transition={{
            type: "spring",
            bounce: cardNo === 3 ? 0.3 : 0,
            duration: cardNo === 1 ? 0.9 : cardNo === 3 ? 0.9 : 0.6,
          }}
          onMouseEnter={() => setCardNo(3)}
          onMouseLeave={() => setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="lg:text-[40px] md:text-[30px] text-[45px] leading-tight font-semibold  mb-2">
                Undergraduation Admission Requirements
              </h2>

              <ul
                className={`${
                  cardNo === 3 ? "block pl-5 space-y-2" : "hidden"
                } list-disc`}
              >
                <li>General Certificate of Secondary Education (GCSE)</li>
                <li>Advanced Level (A-Level) exams</li>
                <li>International Baccalaureate (IB) Diploma</li>
                <li>Advanced Placement (AP) exams</li>
                <li>SAT or ACT</li>
              </ul>
            </div>
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                cardNo == 3 ? "hidden" : ""
              }`}
            >
              <img className="w-20" src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif' alt="" />
            </div>
          </div>
        </motion.div>

        {/* fourth card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            cardNo === 4
              ? { height: "153%", y: "0%" }
              : cardNo === 2
              ? { height: "100%", y: "50%" }
              : { height: "100%", y: 0 }
          }
          transition={{
            type: "spring",
            bounce: cardNo === 4 ? 0.3 : 0,
            duration: cardNo === 2 ? 0.9 : cardNo === 4 ? 0.9 : 0.6,
          }}
          onMouseEnter={() => setCardNo(4)}
          onMouseLeave={() => setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="lg:text-[40px] md:text-[30px] text-[45px] leading-tight font-semibold mt-3 mb-2">
                Subject-Specific Exams
              </h2>
              <ul
                className={`${
                  cardNo === 4 ? "block pl-5 space-y-2" : "hidden"
                } list-disc`}
              >
                <li>General Certificate of Secondary Education (GCSE)</li>
                <li>Advanced Level (A-Level) exams</li>
                <li>International Baccalaureate (IB) Diploma</li>
                <li>Advanced Placement (AP) exams</li>
                <li>SAT or ACT</li>
              </ul>
            </div>
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                cardNo == 4 ? "hidden" : ""
              }`}
            >
              <img className="w-20" src='https://i.ibb.co.com/r6XjskD/blue-arrow.gif' alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExamsLargeScreen;
