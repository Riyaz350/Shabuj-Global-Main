import { useState } from "react";
import { motion } from "framer-motion";

const Requirement_Card_LargeScreen = () => {
  const [cardNo, setCardNo] = useState(0);

  // Helper function to detect small screens
  const isSmallScreen = () => window.innerWidth <= 768;
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-24 pb-36">
      {/* first card */}
      <motion.div
        initial={{ height: "100%" }}
        animate={
          !isSmallScreen() && cardNo === 1
            ? { height: "150%" }
            : cardNo === 3
            ? { height: "50%", y: 0 }
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
        className="relative bg-[#59C3CF] rounded-[32px] overflow-hidden"
      >
        <div className="h-[450px]">
          <div className="text-white px-8 py-14">
            <h2 className="text-4xl font-semibold mb-2">Diploma</h2>
            <p className={`mb-2 ${cardNo === 1 ? "hidden" : "flex"}`}>
              Students usually need to have completed their secondary education,
              such as SSC or O-levels, with satisfactory grades. The specific
              grade requirements may vary depending on the university and
              program.
            </p>
            <p className={`${cardNo === 1 ? "flex" : "hidden"}`}>
              Students usually need to have completed their secondary education,
              such as SSC or O-levels, with satisfactory grades. The specific
              grade requirements may vary depending on the university and
              program.
            </p>
            <br />
            <p className={`${cardNo === 1 ? "flex" : "hidden"}`}>
              A minimum overall band score of 5.5 to 6.0 in IELTS, with no
              individual component (Reading, Writing, Listening, Speaking) score
              below 5.5, a minimum overall score of 72 to 79 on the
              internet-based test (IBT) in TOFEL and a minimum overall score of
              C1 or C2 level respectively are typically required.
            </p>
          </div>
          <div>
            <motion.div
              animate={
                !isSmallScreen() && cardNo === 3
                  ? { opacity: 0, y: 100 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.1 }}
              className="absolute bottom-0 right-0 group-hover:right-2"
            >
              <img
                src='https://i.ibb.co.com/sWF93mL/49a.png'
                alt="Diploma"
                className="object-cover group-hover:scale-125"
              />
            </motion.div>
            <div className="absolute left-8 bottom-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                  fill="white"
                />
              </svg>
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
            ? { height: "50%", y: 0 }
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
        className="relative bg-[#E2635E] rounded-[32px] overflow-hidden"
      >
        <div className="h-[450px]">
          <div className="text-white px-8 py-14">
            <h2 className="text-4xl font-semibold mb-2">Master's</h2>
            <p className={`mb-2 ${cardNo === 2 ? "hidden" : "flex"}`}>
              Hold a relevant Bachelor's degree or an equivalent qualification
              from a recognized institution.
            </p>
            <p className={`${cardNo === 2 ? "flex" : "hidden"}`}>
              Students usually need to have completed their Bachelor's degree or
              an equivalent qualification from a recognized institution with
              satisfactory grades. The specific grade requirements may vary
              depending on the university and program.
            </p>
            <br />
            <p className={`${cardNo === 2 ? "flex" : "hidden"}`}>
              A minimum overall band score of 5.5 to 6.0 in IELTS, with no
              individual component (Reading, Writing, Listening, Speaking) score
              below 5.5, a minimum overall score of 72 to 79 on the
              internet-based test (IBT) in TOFEL and a minimum overall score of
              C1 or C2 level respectively are typically required.
            </p>
          </div>
          <div>
            <motion.div
              animate={
                !isSmallScreen() && cardNo === 4
                  ? { opacity: 0, y: 100 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.1 }}
              className="absolute bottom-0 right-0 group-hover:right-2"
            >
              <img
                src='https://i.ibb.co.com/k1XKjVj/49b.png'
                alt="Diploma"
                className="object-cover group-hover:scale-125"
              />
            </motion.div>
            <div className="absolute left-8 bottom-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* third card */}
      <motion.div
        initial={{ height: "100%" }}
        animate={
          !isSmallScreen() && cardNo === 3
            ? { height: "150%", y: "-33%" }
            : cardNo === 1
            ? { height: "50%", y: "100%" }
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
        className="relative bg-[#A881F3] rounded-[32px] overflow-hidden"
      >
        <div className="h-[450px]">
          <div className="text-white px-8 py-14">
            <h2 className="text-4xl font-semibold mb-2">Bachelor's</h2>
            <p
              className={`mb-4 group-hover:hidden ${
                cardNo === 3 ? "hidden" : "flex"
              }`}
            >
              Students need to have completed their higher secondary education,
              such as HSC or A-levels, with satisfactory grades.
            </p>
            <p className={`${cardNo === 3 ? "flex" : "hidden"}`}>
              Students usually need to have completed their higher secondary
              education, such as HSC or A-levels, with satisfactory grades. The
              specific grade requirements may vary depending on the university
              and program.
            </p>
            <br />
            <p className={`${cardNo === 3 ? "flex" : "hidden"}`}>
              A minimum overall band score of 5.5 to 6.0 in IELTS, with no
              individual component (Reading, Writing, Listening, Speaking) score
              below 5.5, a minimum overall score of 72 to 79 on the
              internet-based test (IBT) in TOFEL and a minimum overall score of
              C1 or C2 level respectively are typically required.
            </p>
          </div>
          <motion.div
            animate={
              !isSmallScreen() && cardNo === 1
                ? { opacity: 0, y: 100 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.1 }}
            className="absolute bottom-0 right-0 group-hover:right-2"
          >
            <img
              src='https://i.ibb.co.com/GRVqSrx/49c.png'
              alt="Diploma"
              className="object-cover group-hover:scale-125"
            />
          </motion.div>
          <div className="absolute left-8 bottom-5 group-hover:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* fourth card */}
      <motion.div
        initial={{ height: "100%" }}
        animate={
          !isSmallScreen() && cardNo === 4
            ? { height: "150%", y: "-33%" }
            : cardNo === 2
            ? { height: "50%", y: "100%" }
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
        className="relative bg-[#58B1EA] rounded-[32px] overflow-hidden"
      >
        <div className="h-[450px]">
          <div className="text-white px-8 py-14">
            <h2 className="text-4xl font-semibold mb-2">Doctorate</h2>
            <p
              className={`mb-4 group-hover:hidden ${
                cardNo === 4 ? "hidden" : "flex"
              }`}
            >
              Hold a relevant Master's degree or an equivalent qualification
              from a recognized institution.
            </p>
            <p className={`${cardNo === 4 ? "flex" : "hidden"}`}>
              Students usually need to have completed their Master's degree or
              an equivalent qualification from a recognized institution, with
              satisfactory grades. The specific grade requirements may vary
              depending on the university and program.
            </p>
            <br />
            <p className={`${cardNo === 4 ? "flex" : "hidden"}`}>
              A minimum overall band score of 5.5 to 6.0 in IELTS, with no
              individual component (Reading, Writing, Listening, Speaking) score
              below 5.5, a minimum overall score of 72 to 79 on the
              internet-based test (IBT) in TOFEL and a minimum overall score of
              C1 or C2 level respectively are typically required.
            </p>
          </div>
          <motion.div
            animate={
              !isSmallScreen() && cardNo === 2
                ? { opacity: 0, y: 100 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.1 }}
            className="absolute bottom-0 right-0 group-hover:right-2"
          >
            <img
              src='https://i.ibb.co.com/XZDbmwg/49d.png'
              alt="Diploma"
              className="object-cover group-hover:scale-125"
            />
          </motion.div>
          <div className="absolute left-8 bottom-5 group-hover:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Requirement_Card_LargeScreen;
