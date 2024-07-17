import { useState } from "react";

const Contact_Us_Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="bg-[#EFF6FF] min-h-96">
      <div className="max-w-screen-xl mx-auto pt-20 grid grid-cols-5 gap-3 min-h-[300px]">
        <div>
          <h3 className="text-[28px] font-semibold">United Kingdom</h3>
          <div
            className="accordion-group pt-2"
            data-accordion="default-accordion"
          >
            <div
              className={`accordion ${activeIndex === 0 ? "active" : ""}`}
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center text-xl font-normal leading-8  w-full transition duration-500 accordion-active:font-medium always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
                onClick={() => toggleAccordion(0)}
              >
                <h5 className="text-xl font-semibold">London (Head Office)</h5>
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
                  1st Floor, 94A Whitechapel High Street, London E1 7RA, United
                  Kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[28px] font-semibold">Bangladesh</h3>
          <div
            className="accordion-group pt-2"
            data-accordion="default-accordion"
          >
            <div
              className={`accordion pb-5 ${activeIndex === 1 ? "active" : ""}`}
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-start gap-1 font-normal text-xl leading-8  w-full transition duration-500 accordion-active:font-medium"
                aria-controls="basic-collapse-two-with-arrow-always-open"
                onClick={() => toggleAccordion(1)}
              >
                <h5 className="text-xl text-left font-semibold">
                  Dhaka (South Asian Regional Head Office)
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
                <p className="text-base font-normal">Dhaka</p>
              </div>
            </div>
            <div
              className={`accordion pb-5 ${activeIndex === 2 ? "active" : ""}`}
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 font-normal text-xl leading-8  w-full transition duration-500 accordion-active:font-medium"
                aria-controls="basic-collapse-two-with-arrow-always-open"
                onClick={() => toggleAccordion(2)}
              >
                <h5 className="text-xl font-semibold">Chattogram</h5>
                <svg
                  className={`transition duration-500 ${
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
                id="basic-collapse-two-with-arrow-always-open"
                className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                  activeIndex === 2 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 2 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-base font-normal">Ctg</p>
              </div>
            </div>
            <div
              className={`accordion pb-5 ${activeIndex === 3 ? "active" : ""}`}
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center text-xl font-normal leading-8  w-full transition duration-500 accordion-active:font-medium "
                aria-controls="basic-collapse-three-with-arrow-always-open"
                onClick={() => toggleAccordion(3)}
              >
                <h5 className="text-xl font-semibold">Sylhet</h5>
                <svg
                  className={` transition duration-500  ${
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
                id="basic-collapse-three-with-arrow-always-open"
                className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                  activeIndex === 3 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 3 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-base font-normal">
                  3rd Floor, Symphony Heights, Baruth Khana, East Zindabazar,
                  Sylhet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[28px] font-semibold">India</h3>
          <div
            className="accordion-group py-2"
            data-accordion="default-accordion"
          >
            <div
              className={`accordion pb-5 ${activeIndex === 4 ? "active" : ""}`}
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 text-xl font-normal leading-8  w-full transition duration-500  accordion-active:font-medium always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
                onClick={() => toggleAccordion(4)}
              >
                <h5 className="text-xl font-semibold">Kochin</h5>
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
                id="basic-collapse-one-with-arrow-always-open"
                className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                  activeIndex === 4 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 4 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-base font-normal ">
                  Shabuj Global Kochin, Door Number: 303, 3rd Floor, Cityscape,
                  South Kalamassery, Kochi-Kerala, 682033.
                </p>
              </div>
            </div>
            <div
              className={`accordion pb-5  ${activeIndex === 5 ? "active" : ""}`}
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 font-normal text-xl leading-8  w-full transition duration-500 accordion-active:font-medium"
                aria-controls="basic-collapse-two-with-arrow-always-open"
                onClick={() => toggleAccordion(5)}
              >
                <h5 className="text-xl font-semibold">Kannur</h5>
                <svg
                  className={`transition duration-500 ${
                    activeIndex === 5 ? "rotate-180" : ""
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
                  activeIndex === 5 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 5 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-base font-normal">
                  Daliya Archade, 4th floor, NCC Road, Thalassery, Pilakool,
                  Thalassery,Kerala 670101.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[28px] font-semibold">Nigeria</h3>
          <div
            className="accordion-group py-2"
            data-accordion="default-accordion"
          >
            <div
              className={`accordion pb-5 ${activeIndex === 6 ? "active" : ""}`}
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 text-xl font-normal leading-8  w-full transition duration-500  accordion-active:font-medium always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
                onClick={() => toggleAccordion(6)}
              >
                <h5 className="text-xl font-semibold">Abuja</h5>
                <svg
                  className={`transition duration-500  ${
                    activeIndex === 6 ? "rotate-180" : ""
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
                  activeIndex === 6 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 6 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-base font-normal ">
                  No.9 Senangal Crescent, Wuse Zone 5, Abuja, Nigeria.
                </p>
              </div>
            </div>
            <div
              className={`accordion pb-5  ${activeIndex === 7 ? "active" : ""}`}
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 font-normal text-xl leading-8  w-full transition duration-500 accordion-active:font-medium"
                aria-controls="basic-collapse-two-with-arrow-always-open"
                onClick={() => toggleAccordion(7)}
              >
                <h5 className="text-xl font-semibold">Lagos</h5>
                <svg
                  className={`transition duration-500 ${
                    activeIndex === 7 ? "rotate-180" : ""
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
                  activeIndex === 7 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 7 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-base font-normal">
                  57,Bode Thomas Street, Surulere.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[28px] font-semibold">Middle East</h3>
          <div
            className="accordion-group py-2"
            data-accordion="default-accordion"
          >
            <div
              className={`accordion pb-5 ${activeIndex === 8 ? "active" : ""}`}
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 text-xl font-normal leading-8  w-full transition duration-500  accordion-active:font-medium always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
                onClick={() => toggleAccordion(8)}
              >
                <h5 className="text-xl font-semibold">Saudi Arabia</h5>
                <svg
                  className={`transition duration-500  ${
                    activeIndex === 8 ? "rotate-180" : ""
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
                  activeIndex === 8 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 8 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-base font-normal ">
                  1st Floor, 94A Whitechapel High Street, London E1 7RA, United
                  Kingdom.
                </p>
              </div>
            </div>
            <div
              className={`accordion pb-5 ${activeIndex === 9 ? "active" : ""}`}
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 font-normal text-xl leading-8  w-full transition duration-500 accordion-active:font-medium"
                aria-controls="basic-collapse-two-with-arrow-always-open"
                onClick={() => toggleAccordion(9)}
              >
                <h5 className="text-xl font-semibold">UAE</h5>
                <svg
                  className={`transition duration-500 ${
                    activeIndex === 9 ? "rotate-180" : ""
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
                  activeIndex === 9 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 9 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-base font-normal">Ctg</p>
              </div>
            </div>
            <div
              className={`accordion ${activeIndex === 10 ? "active" : ""}`}
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center gap-1 text-xl font-normal leading-8  w-full transition duration-500 accordion-active:font-medium "
                aria-controls="basic-collapse-three-with-arrow-always-open"
                onClick={() => toggleAccordion(10)}
              >
                <h5 className="text-xl font-semibold">Qatar</h5>
                <svg
                  className={` transition duration-500  ${
                    activeIndex === 10 ? "rotate-180" : ""
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
                  activeIndex === 10 ? "active" : ""
                }`}
                style={{ maxHeight: activeIndex === 10 ? "100px" : "0px" }}
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-base font-normal">
                  3rd Floor, Symphony Heights, Baruth Khana, East Zindabazar,
                  Sylhet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us_Accordion;
