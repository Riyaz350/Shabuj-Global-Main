import Document_Last_SVG_Ger from "../SVG/Document_Last_SVG_Ger";
import DocumentSVG from "../SVG/DocumentSVG";
import DocumentSVG2 from "../SVG/DocumentSVG2";
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
      <div className="bg-[#FAFAFA] w-full">
        <div className=' max-w-[1154px] mx-auto lg:pt-[137px] pt-[50px] lg:pb-[120px] pb-[50px]'>
          <div className='text-center'>
            <h2 className='poppins-semibold lg:text-[56px] text-[28px] text-[#081831] lg:leading-[72.8px] lg:-tracking-[0.01em]'>Statement of Purpose for Germany</h2>
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:gap-[35px] gap-0 lg:pt-[58px] pt-[20px]'>

            <div className='px-5 lg:px-0'>
              <p className='poppins-medium text-[18px] text-[#1F1F1F] pb-[19px]'>The Statement of Purpose (SOP) is a crucial document for students who want to study abroad. It is typically 1000–1200 words long and serves as an essay that showcases your identity and outlines the value you will bring to the university. It is important to follow a specific format and stick to the word limit to create an impressive SOP. If you need detailed guidance on how to structure a compelling Statement of Purpose, you can seek assistance from Shabuj Global {`Educations's`} counselors.</p>
              <p className='poppins-medium text-[18px] text-[#1F1F1F] pb-8'>A typical SOP generally follows the following structure:</p>
              <ul className='list-disc poppins-medium text-[18px] text-[#1F1F1F] pl-6'>
                <li>Introduction</li>
                <li>Academic Background</li>
                <li>Research or Professional Experience</li>
                <li>Motivation and Objectives</li>
                <li>Future Plans and Contributions</li>
                <li>Conclusion</li>
              </ul>
            </div>
            <div>
              <DocumentSVG2 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#EFF6FF] py-10 lg:py-28">
        <h1 className="poppins-semibold w-full md:w-4/6 md:mx-auto text-[28px] text-[#081831] lg:text-[56px]  lg:leading-[72.8px] lg:-tracking-[0.01em] pb-14 px-5 md:px-0 text-center">
          Documents Required to apply for Germany Study Visa
        </h1>
        <div className="relative flex flex-col items-center md:max-w-screen-xl lg:px-10 mx-auto lg:grid grid-cols-2">
          <div className="flex-1 px-10 lg:px-0 text-[18px] poppins-medium md:poppins-semibold text-[#1F1F1F]">
            <p className=" pb-8">
              To apply for a Germanian study visa, you'll need to provide the
              following documents:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Passport: A valid passport that covers the length of your
                intended stay in Garman
              </li>
              <li>
                Statement of Purpose (SOP): A written statement that explains
                your academic background, career goals, and reasons for choosing
                Canada
              </li>
              <li>
                Passport-sized photographs: Two photographs that meet the
                required criteria if you're applying by mail, or a digital copy
                if you're applying online
              </li>
              <li>
                Letter of acceptance: From a Designated Learning Institution
                (DLI)
              </li>
              <li>
                Proof of financial support: Also known as proof of funds, this
                document shows that you have enough money to cover your first
                year of tuition and live in Canada
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Document_Last_SVG_Ger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsRequired;