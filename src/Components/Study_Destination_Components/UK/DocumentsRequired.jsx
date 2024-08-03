import imageTwo from "../../../assets/Documents-02.png";
import Doc1 from "./SVG/Doc1";
import Document_Last_SVG_UK from "./SVG/Document_Last_SVG_UK";

const DocumentsRequired = () => {
  return (
    <>
      <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="text-3xl md:text-4xl lg:text-[56px] p-5 lg:p-0 lg:w-1/2 mx-auto font-bold text-center mb-16 text-[#081831]">
          Documents Required to Study in the UK for International Students
        </h1>
        <div className="relative flex flex-col md:max-w-screen-xl lg:px-10 mx-auto lg:grid grid-cols-2 items-center justify-between">
          <div className="flex-1 px-10 lg:px-0 text-[18px] font-normal text-[#1F1F1F]  ">
            <p className="text-gray-700 mb-8 ">
              When seeking admission as an international student in the UK,
              {`you'll`} generally need to furnish various documents as part of your
              application process. Although the exact prerequisites might differ
              based on the university and the program {`you're`} applying to, the
              following are typically the documents requested:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Passport</li>
              <li>Tier 4 (General) Student Visa</li>
              <li>Confirmation of Acceptance for Studies (CAS)</li>
              <li>Proof of English Language Proficiency</li>
              <li>Academic Transcripts</li>
              <li>Financial documents</li>
              <li>Personal Statement</li>
              <li>Letters of Recommendation</li>
              <li>CV/Resume</li>
              <li>Tuberculosis (TB) test results</li>
              <li>Health Insurance</li>
              <li>Passport-sized Photographs</li>
            </ul>
          </div>
          <div className=" ">
            <Doc1 />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white py-28">
        <h1 className="text-2xl md:text-4xl lg:text-[56px] w-1/2 mx-auto font-bold text-center mb-16 text-[#081831]">
          Statement of Purpose for UK
        </h1>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <img src={imageTwo} alt="Documents" className="flex-1" />
          <div className="flex-1 text-[18px] font-normal text-[#1F1F1F]">
            <p className="mb-3">
              The Statement of Purpose (SOP) plays a crucial role in the
              application procedure for international students aiming to pursue
              studies in the UK. It functions as a written piece intended to
              articulate your reasons, academic history, career aspirations, and
              the reasoning behind your choice of university and program in the
              UK. With the SOP, you have an opportunity to showcase your
              passion, achievements, and suitability for the desired course,
              enabling the admissions committee to gauge your capabilities and
              compatibility with the program.
            </p>
            <p className="mb-5">
              A typical SOP generally follows the following structure:
            </p>
            <ul className="list-disc list-inside  space-y-2">
              <li>Introduction</li>
              <li>Academic Background</li>
              <li>Research or Professional Experience</li>
              <li>Motivation and Objectives</li>
              <li>Future Plans and Contributions</li>
              <li>Conclusion</li>
            </ul>
          </div>
        </div>
      </div>
 


       {/* Documents Required Last Section */}
       <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px]  lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-5 md:px-0 text-center">
        Documents Required to apply for the UK Study Visa
        </h1>
        <div className="relative flex flex-col items-center md:max-w-screen-xl lg:px-10 mx-auto lg:grid grid-cols-2">
          <div className="flex-1 px-10 lg:px-0 text-[18px] poppins-medium md:poppins-semibold text-[#1F1F1F]">
            <p className=" pb-8">
              To apply for an UK study visa, you'll need to provide the
              following documents:
            </p>
            <ul className="list-disc pl-6">
            <li>Valid passport</li>
              <li>Confirmation of Acceptance for Studies (CAS)</li>
              <li>Visa Application Form</li>
              <li>Passport-sized photographs</li>
              <li>Proof of English language proficiency</li>
              <li>Academic documents</li>
              <li>Financial Proof</li>
              <li>Tuberculosis (TB) test results</li>
              <li>Biometric information</li>
              <li className="w-2/3">
                Consent from parents or legal guardian if a student is under 18
                years old.
              </li>
              <li>Additional documents, if asked.</li>
            </ul>
          </div>
          <div className="flex-1">
            <Document_Last_SVG_UK/>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsRequired;
