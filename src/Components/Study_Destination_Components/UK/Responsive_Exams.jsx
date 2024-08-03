import { useState } from "react";
import { motion } from "framer-motion";
import arrow from "../../../assets/blue-arrow.gif";

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
          initial={{ height: '250px' }}
          animate={{ height: expandedCard === 1 ? 'auto' : '250px' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-[31px] leading-tight font-semibold -mt-4 mb-2">
              English Language Proficiency Exams
            </h2>
            {expandedCard === 1 && (
              <div className="overflow-hidden">
                <p>
                  Students usually need to have completed their secondary
                  education, such as SSC or O-levels, with satisfactory grades.
                  The specific grade requirements may vary depending on the
                  university and program.
                </p>
                <br />
                <p>
                  A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                  individual component (Reading, Writing, Listening, Speaking)
                  score below 5.5, a minimum overall score of 72 to 79 on the
                  internet-based test (IBT) in TOEFL, and a minimum overall score
                  of C1 or C2 level respectively are typically required.
                </p>
              </div>
            )}
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                  expandedCard == 1 ? "hidden" : ""
                }`}>
            <img className="w-20" src={arrow} alt="Arrow indicating more content" />
          </div>
        </motion.div>

        {/* Second card */}
        <motion.div
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => toggleCard(2)}
          initial={{ height: '250px' }}
          animate={{ height: expandedCard === 2 ? 'auto' : '250px' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-[35px] leading-tight font-semibold -mt-4 mb-2">
              Graduation Admission Requirements
            </h2>
            {expandedCard === 2 && (
              <div className="overflow-hidden">
                <p>
                  Students usually need to have completed their secondary
                  education, such as SSC or O-levels, with satisfactory grades.
                  The specific grade requirements may vary depending on the
                  university and program.
                </p>
                <br />
                <p>
                  A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                  individual component (Reading, Writing, Listening, Speaking)
                  score below 5.5, a minimum overall score of 72 to 79 on the
                  internet-based test (IBT) in TOEFL, and a minimum overall score
                  of C1 or C2 level respectively are typically required.
                </p>
              </div>
            )}
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                  expandedCard == 2 ? "hidden" : ""
                }`}>
            <img className="w-20" src={arrow} alt="Arrow indicating more content" />
          </div>
        </motion.div>

        {/* Third card */}
        <motion.div
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => toggleCard(3)}
          initial={{ height: '250px' }}
          animate={{ height: expandedCard === 3 ? 'auto' : '250px' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-[35px] leading-tight font-semibold -mt-4 mb-2">
              Undergraduate Admission Requirements
            </h2>
            {expandedCard === 3 && (
              <div className="overflow-hidden">
                <p>
                  Students usually need to have completed their secondary
                  education, such as SSC or O-levels, with satisfactory grades.
                  The specific grade requirements may vary depending on the
                  university and program.
                </p>
                <br />
                <p>
                  A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                  individual component (Reading, Writing, Listening, Speaking)
                  score below 5.5, a minimum overall score of 72 to 79 on the
                  internet-based test (IBT) in TOEFL, and a minimum overall score
                  of C1 or C2 level respectively are typically required.
                </p>
              </div>
            )}
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                  expandedCard == 3 ? "hidden" : ""
                }`}>
            <img className="w-20" src={arrow} alt="Arrow indicating more content" />
          </div>
        </motion.div>

        {/* Fourth card */}
        <motion.div
          className="relative bg-[#F1F8FF] rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => toggleCard(4)}
          initial={{ height: '250px' }}
          animate={{ height: expandedCard === 4 ? 'auto' : '250px' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="px-8 py-14">
            <h2 className="text-[35px] leading-tight font-semibold -mt-4 mb-2">
              Subject-Specific Exams
            </h2>
            {expandedCard === 4 && (
              <div className="overflow-hidden">
                <p>
                  Students usually need to have completed their secondary
                  education, such as SSC or O-levels, with satisfactory grades.
                  The specific grade requirements may vary depending on the
                  university and program.
                </p>
                <br />
                <p>
                  A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                  individual component (Reading, Writing, Listening, Speaking)
                  score below 5.5, a minimum overall score of 72 to 79 on the
                  internet-based test (IBT) in TOEFL, and a minimum overall score
                  of C1 or C2 level respectively are typically required.
                </p>
              </div>
            )}
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                  expandedCard == 4 ? "hidden" : ""
                }`}>
            <img className="w-20" src={arrow} alt="Arrow indicating more content" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Responsive_Exams;
