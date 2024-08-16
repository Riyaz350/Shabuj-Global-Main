import  { useState, useRef, useEffect } from 'react';

import UAE_FaqSVG from './UAE_FaqSVG';


const UAE_Faq = () => {
  const faq=[
    {
      question: "Which course is best for PR in Germany?",
      answer: "The cost of studying in Germany varies depending on factors such as the chosen university, course, and location. On average, international students can expect to pay between AUD 20,000 to AUD 45,000 per year for undergraduate programs and AUD 22,000 to AUD 50,000 per year for postgraduate programs."
    },
    {
      question: "How do I get PR in Germany?",
      answer: "There are different pathways to obtaining Permanent Residency in Australia. Some common routes include employer-sponsored visas, state/territory nomination programs, the Skilled Independent visa (subclass 189), the Skilled Nominated visa (subclass 190), and the Regional Skilled visa (subclass 491). Each pathway has its own specific criteria and requirements, which may include work experience, English language proficiency, skill assessments, and meeting the occupation list requirements."
    },
    {
      question: "Are there any options to reduce the cost of studying?",
      answer: "Yes, options to reduce costs include scholarships, part-time work, choosing regional areas, budgeting, and work-integrated learning opportunities."
    },
    {
      question: "How much does an Germanian study visa cost?",
      answer: "A student visa in Germany costs AUD 650 for international students. However, there are additional costs that one may have to pay. This includes costs for health checks, biometrics, police certificates, etc. If you are under the age of 18, your total Australia student visa fees will be AUD 650 + AUD 160."
    },
    {
      question: "How much does it cost to study in Germany?",
      answer: "The cost of studying in Germany varies depending on factors such as the chosen university, course, and location. On average, international students can expect to pay between AUD 20,000 to AUD 45,000 per year for undergraduate programs and AUD 22,000 to AUD 50,000 per year for postgraduate programs."
    }
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const updatedHeights = contentRefs.current.map(ref => ref ? `${ref.scrollHeight}px` : "0px");
    setHeights(updatedHeights);
  }, [activeIndex]);

  return (
    <div className="bg-white pt-7 md:pt-14 lg:pt-20">
      <h1 className="poppins-semibold text-[28px] md:text-[56px] w-full mx-auto text-center mb-16">
        Frequently Asked Questions
      </h1>

      <div className="mx-auto md:max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-y-5 lg:flex-row lg:justify-between mx-auto">
          <div className="w-full px-5 lg:w-1/2">
            <UAE_FaqSVG />
          </div>
          <div className="w-full lg:w-1/2 bg-[#1A1A1A] h-[525px] rounded-[36px] ">
            <div className="lg:max-w-xl">
              <div className="accordion-group px-5 py-8 text-white overflow-y-hidden" data-accordion="default-accordion">
                {faq.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion py-6 border-b border-solid border-gray-500 ${
                      activeIndex === index ? "active" : ""
                    } ${index === 4 ? "border-b-0" : ""}`}
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl poppins-normal leading-8 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls={`basic-collapse-${index}-with-arrow-always-open`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h5 className="text-base md:text-lg text-left">{item.question}</h5>
                      <svg
                        className={`transition duration-500 ${activeIndex === index ? "rotate-180" : ""}`}
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
                      id={`basic-collapse-${index}-with-arrow-always-open`}
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === index ? "active" : ""}`}
                      ref={(el) => (contentRefs.current[index] = el)}
                      style={{ maxHeight: activeIndex === index ? heights[index] : "0px", transition: 'max-height 0.3s ease-out' }}
                      aria-labelledby={`basic-heading-${index}-with-arrow-always-open`}
                    >
                      <p className="text-sm md:text-base font-normal">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UAE_Faq;
