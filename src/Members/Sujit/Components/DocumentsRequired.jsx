import DocumentSVG from "./SVG/DocumentSVG";

const DocumentsRequired = () => {
  return (
    <div className="min-h-screen bg-[#EFF6FF] py-28">
      <h1 className="text-[56px] w-1/2 mx-auto font-bold text-center mb-16">
        Documents Required to apply for Australia Study Visa
      </h1>
      <div className="max-w-screen-xl mx-auto flex gap-5 items-center justify-between">
        <div className="flex-1 text-[18px] font-normal text-xl">
          <p className="pb-5">
            To apply for a Canadian study visa, you'll need to provide the
            following documents:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Passport: A valid passport that covers the length of your intended
              stay in Canada
            </li>
            <li>
              Statement of Purpose (SOP): A written statement that explains your
              academic background, career goals, and reasons for choosing Canada
            </li>
            <li>
              Passport-sized photographs: Two photographs that meet the required
              criteria if you're applying by mail, or a digital copy if you're
              applying online
            </li>
            <li>
              Letter of acceptance: From a Designated Learning Institution (DLI)
            </li>
            <li>
              Proof of financial support: Also known as proof of funds, this
              document shows that you have enough money to cover your first year
              of tuition and live in Canada
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <DocumentSVG />
        </div>
      </div>
    </div>
  );
};

export default DocumentsRequired;
