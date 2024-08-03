import DocumentSVG from "../SVG/DocumentSVG";

const DocumentsRequired = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="text-3xl md:text-4xl lg:text-[52px] p-5 lg:p-0 lg:w-1/2 mx-auto font-bold text-center mb-16 text-[#081831]">
          Documents Required to Study in the Australia for International Students
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
            <DocumentSVG />
          </div>
        </div>
      </div>     
        </div>
    );
};

export default DocumentsRequired;