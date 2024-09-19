import React, { useEffect, useRef, useState } from 'react'

export default function University_Faq({bgColor, FAQimg}) {
    const faq=[
        {
          question: "How much can it cost to study in the UK?",
          answer: "The cost of studying in the UK can vary, but on average,it can range from £10,000 to £38,000 per year for international students."
        },
        {
          question: "How can I go to the UK from Bangladesh to study?",
          answer: "To go to the UK from Bangladesh to study, you need to apply for a student visa and meet the eligibility criteria set by the UK government."
        },
        {
          question: "Do I need IELTS to study in the UK?",
          answer: "Yes, generally, a valid IELTS score is required for studying in the UK, although some universities may accept alternative English language proficiency tests."
        },
        {
          question: "What is the minimum qualification to study in the UK?",
          answer: "The minimum qualification to study in the UK is a completed secondary education or equivalent, such as A-levels, International Baccalaureate (IB), or equivalent qualifications."
        },
        {
          question: "What is the minimum GPA required to study in the UK?",
          answer: "The minimum GPA required to study in the UK can vary depending on the university and program, but a good academic record is generally expected."
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
          <h1 className="px-5 poppins-semibold text-[28px] md:text-[56px] w-full mx-auto text-center mb-16">
            Frequently Asked Questions
          </h1>
    
          <div className="mx-auto md:max-w-screen-xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-y-5 lg:flex-row lg:justify-between mx-auto">
              <div className="w-full px-5 lg:w-1/2">
              {FAQimg}
              </div>
              <div className={`w-full lg:w-1/2 ${bgColor} h-auto rounded-[36px] `}>
                <div className="lg:max-w-xl mx-auto w-full">
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
}
