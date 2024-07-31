import { useState } from "react";
import FaqSVG from "./SVG/FaqSVG";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white pt-28">
      <h1 className="text-[56px] w-1/2 mx-auto font-bold text-center mb-16">
        Frequently Asked Questions
      </h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-10 gap-y-5 xl:gap-x-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <FaqSVG />
          </div>
          <div className="w-full lg:w-1/2 bg-[#191F2C] min-h-[620px] rounded-[36px] ">
            <div className="lg:max-w-xl border-2">
              <div
                className="accordion-group px-10 py-16 text-white overflow-y-hidden "
                data-accordion="default-accordion"
              >
                <div
                  className={`accordion pb-8 border-b border-solid border-gray-500 ${
                    activeIndex === 0 ? "active" : ""
                  }`}
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8  w-full transition duration-500  accordion-active:font-medium always-open"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                    onClick={() => toggleAccordion(0)}
                  >
                    <h5 className="text-lg">
                      Which course is best for PR in Australia?
                    </h5>
                    <svg
                      className={`transition duration-500  ${
                        activeIndex === 0 ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                      activeIndex === 0 ? "active" : ""
                    }`}
                    style={{ maxHeight: activeIndex === 0 ? "100px" : "0px" }}
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-base font-normal ">
                      The cost of studying in Australia varies depending on
                      factors such as the chosen university, course, and
                      location. On average, international students can expect to
                      pay between AUD 20,000 to AUD 45,000 per year for
                      undergraduate programs and AUD 22,000 to AUD 50,000 per
                      year for postgraduate programs.
                    </p>
                  </div>
                </div>
                <div
                  className={`accordion py-8 border-b border-solid border-gray-500 ${
                    activeIndex === 1 ? "active" : ""
                  }`}
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8  w-full transition duration-500 accordion-active:font-medium"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                    onClick={() => toggleAccordion(1)}
                  >
                    <h5 className="text-lg">How do I get PR in Australia?</h5>
                    <svg
                      className={`transition duration-500 ${
                        activeIndex === 1 ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                      activeIndex === 1 ? "active" : ""
                    }`}
                    style={{ maxHeight: activeIndex === 1 ? "100px" : "0px" }}
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-base font-normal">
                      There are different pathways to obtaining Permanent
                      Residency in Australia. Some common routes include
                      employer-sponsored visas, state/territory nomination
                      programs, the Skilled Independent visa (subclass 189), the
                      Skilled Nominated visa (subclass 190), and the Regional
                      Skilled visa (subclass 491). Each pathway has its own
                      specific criteria and requirements, which may include work
                      experience, English language proficiency, skill
                      assessments, and meeting the occupation list requirements.
                    </p>
                  </div>
                </div>
                <div
                  className={`accordion py-8 border-b border-solid border-gray-500 ${
                    activeIndex === 2 ? "active" : ""
                  }`}
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8  w-full transition duration-500 accordion-active:font-medium "
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                    onClick={() => toggleAccordion(2)}
                  >
                    <h5 className="text-lg">
                      Are there any options to reduce the cost of studying ?
                    </h5>
                    <svg
                      className={` transition duration-500  ${
                        activeIndex === 2 ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                      activeIndex === 2 ? "active" : ""
                    }`}
                    style={{ maxHeight: activeIndex === 2 ? "100px" : "0px" }}
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-normal">
                      Yes, options to reduce costs include scholarships,
                      part-time work, choosing regional areas, budgeting, and
                      work-integrated learning opportunities.
                    </p>
                  </div>
                </div>
                <div
                  className={`accordion py-8 border-b border-solid border-gray-500${
                    activeIndex === 3 ? "active" : ""
                  }`}
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8  w-full transition duration-500 accordion-active:font-medium"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                    onClick={() => toggleAccordion(3)}
                  >
                    <h5 className="text-lg">
                      How much does an Australian study visa cost?
                    </h5>
                    <svg
                      className={`transition duration-500  ${
                        activeIndex === 3 ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                      activeIndex === 3 ? "active" : ""
                    }`}
                    style={{ maxHeight: activeIndex === 3 ? "100px" : "0px" }}
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-base  font-normal">
                       A student visa in Australia costs AUD 650 for
                      international students. However, there are additional
                      costs that one may have to pay. This includes costs for
                      health checks, biometrics, police certificates, etc. If
                      you are under the age of 18, your total Australia student
                      visa fees will be AUD 650 + AUD 160.
                    </p>
                  </div>
                </div>
                <div
                  className={`accordion py-8 ${
                    activeIndex === 4 ? "active" : ""
                  }`}
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8  w-full transition duration-500 accordion-active:font-medium"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                    onClick={() => toggleAccordion(4)}
                  >
                    <h5 className="text-lg">
                      How much does it cost to study in Australia?
                    </h5>
                    <svg
                      className={`transition duration-500  ${
                        activeIndex === 4 ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                      activeIndex === 4 ? "active" : ""
                    }`}
                    style={{ maxHeight: activeIndex === 4 ? "100px" : "0px" }}
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-base  font-normal">
                      The cost of studying in Australia varies depending on
                      factors such as the chosen university, course, and
                      location. On average, international students can expect to
                      pay between AUD 20,000 to AUD 45,000 per year for
                      undergraduate programs and AUD 22,000 to AUD 50,000 per
                      year for postgraduate programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
