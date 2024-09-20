import { motion } from "framer-motion";
import { useState } from "react";
import arrow from "../../../assets/down-iKFcuXTMIQ.png";
const Exams = () => {
  const [cardNo, setCardNo] = useState(0);
  const isSmallScreen = () => window.innerWidth <= 768;
  return (
    <div className="m-5 md:m-0 lg:m-0 text-[#3B82F6] bg-[#F1F8FF] px-5">
      <h1 className="pt-24 text-center font-semibold text-6xl text-black">
        Exams Required to Study in Germany
      </h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-24 pb-36">
        {/* first card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            !isSmallScreen() && cardNo === 1
              ? { height: "150%" }
              : cardNo === 3
              ? { height: "100%", y: 0 }
              : { height: "100%", y: 0 }
          }
          transition={
            !isSmallScreen() && cardNo === 1
              ? { type: "spring", bounce: 0.3, duration: 1 }
              : cardNo === 3
              ? { duration: 0.4 }
              : { duration: 0.3 }
          }
          onMouseEnter={() => !isSmallScreen() && setCardNo(1)}
          onMouseLeave={() => !isSmallScreen() && setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">
                {" "}
                English Language Proficiency Exams
              </h2>

              <p className={`${cardNo === 1 ? "flex" : "hidden"}`}>
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <br />
              <p className={`${cardNo === 1 ? "flex" : "hidden"}`}>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component (Reading, Writing, Listening, Speaking)
                score below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test (IBT) in TOFEL and a minimum overall score
                of C1 or C2 level respectively are typically required.
              </p>
            </div>
            <div>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-5 ${
                  cardNo == 1 ? "hidden" : ""
                }`}
              >
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            !isSmallScreen() && cardNo === 2
              ? { height: "150%" }
              : cardNo === 4
              ? { height: "100%", y: 0 }
              : { height: "100%", y: 0 }
          }
          transition={
            !isSmallScreen() && cardNo === 2
              ? { type: "spring", bounce: 0.3, duration: 1 }
              : cardNo === 4
              ? { duration: 0.4 }
              : { duration: 0.3 }
          }
          onMouseEnter={() => !isSmallScreen() && setCardNo(2)}
          onMouseLeave={() => !isSmallScreen() && setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">
                Graduation Admission Requirements
              </h2>

              <p className={`${cardNo === 2 ? "flex" : "hidden"}`}>
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <br />
              <p className={`${cardNo === 2 ? "flex" : "hidden"}`}>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component (Reading, Writing, Listening, Speaking)
                score below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test (IBT) in TOFEL and a minimum overall score
                of C1 or C2 level respectively are typically required.
              </p>
            </div>
            <div>
            <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-5 ${
                  cardNo == 2 ? "hidden" : ""
                }`}
              >
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            !isSmallScreen() && cardNo === 3
              ? { height: "150%", y: "0%" }
              : cardNo === 1
              ? { height: "100%", y: "50%" }
              : { height: "100%", y: 0 }
          }
          transition={{
            type: "spring",
            bounce: !isSmallScreen() && cardNo === 3 ? 0.3 : 0,
            duration:
              !isSmallScreen() && cardNo === 1 ? 0.9 : cardNo === 3 ? 0.9 : 0.6,
          }}
          onMouseEnter={() => !isSmallScreen() && setCardNo(3)}
          onMouseLeave={() => !isSmallScreen() && setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">
                Undergraduation Admission Requirements
              </h2>

              <p className={`${cardNo === 3 ? "flex" : "hidden"}`}>
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <br />
              <p className={`${cardNo === 3 ? "flex" : "hidden"}`}>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component (Reading, Writing, Listening, Speaking)
                score below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test (IBT) in TOFEL and a minimum overall score
                of C1 or C2 level respectively are typically required.
              </p>
            </div>
            <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-5 ${
                  cardNo == 3 ? "hidden" : ""
                }`}
              >
                <img src={arrow} alt="" />
              </div>
          </div>
        </motion.div>

        {/* fourth card */}
        <motion.div
          initial={{ height: "100%" }}
          animate={
            !isSmallScreen() && cardNo === 4
              ? { height: "150%", y: "0%" }
              : cardNo === 2
              ? { height: "100%", y: "50%" }
              : { height: "100%", y: 0 }
          }
          transition={{
            type: "spring",
            bounce: !isSmallScreen() && cardNo === 4 ? 0.3 : 0,
            duration:
              !isSmallScreen() && cardNo === 2 ? 0.9 : cardNo === 4 ? 0.9 : 0.6,
          }}
          onMouseEnter={() => !isSmallScreen() && setCardNo(4)}
          onMouseLeave={() => !isSmallScreen() && setCardNo(0)}
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg lg:m-0 md:m-0 m-5"
        >
          <div className="h-[250px]">
            <div className="px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">
                Subject-Specific Exams
              </h2>

              <p className={`${cardNo === 4 ? "flex" : "hidden"}`}>
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <br />
              <p className={`${cardNo === 4 ? "flex" : "hidden"}`}>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component (Reading, Writing, Listening, Speaking)
                score below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test (IBT) in TOFEL and a minimum overall score
                of C1 or C2 level respectively are typically required.
              </p>
            </div>
            <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-5 ${
                  cardNo == 4 ? "hidden" : ""
                }`}
              >
                {/* <img src={arrow} alt="" /> */}
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Exams;