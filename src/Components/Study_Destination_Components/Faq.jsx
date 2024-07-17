import { useState } from "react";
import imageFaq from "../../assets/Questions-1.png";

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
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <img src={imageFaq} alt="FAQ tailwind section" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 bg-[#004AC8] min-h-[600px] rounded-[36px]">
            <div className="lg:max-w-xl">
              <div
                className="accordion-group px-10 py-16 text-white"
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
                      How much can it cost to study in the UK?
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
                      The cost of studying in the UK can vary, but on average,
                      it can range from £10,000 to £38,000 per year for
                      international students.
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
                    <h5 className="text-lg">
                      How can I go to the UK from Bangladesh to study?
                    </h5>
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
                      To go to the UK from Bangladesh to study, you need to
                      apply for a student visa and meet the eligibility criteria
                      set by the UK government.
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
                      Do I need IELTS to study in the UK?
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
                      Yes, generally, a valid IELTS score is required for
                      studying in the UK, although some universities may accept
                      alternative English language proficiency tests.
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
                      What is the minimum qualification to study in the UK?
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
                      The minimum qualification to study in the UK is a
                      completed secondary education or equivalent, such as
                      A-levels, International Baccalaureate (IB), or equivalent
                      qualifications.
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
                      What is the minimum GPA required to study in the UK?
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
                      The minimum GPA required to study in the UK can vary
                      depending on the university and program, but a good
                      academic record is generally expected.
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
