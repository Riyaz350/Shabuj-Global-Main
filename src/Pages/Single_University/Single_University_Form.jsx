/* eslint-disable react/prop-types */
import { FaAngleDown } from "react-icons/fa";
import flag from "../../assets/contents.png";

export default function Single_University_Form() {
  const Label = ({ text }) => {
    return (
      <p className="font-medium text-lg">
        {text}
        <span className="text-red-500">*</span>
      </p>
    );
  };

  const Input = ({ text, type }) => {
    return (
      <input
        className="overscroll-none border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 placeholder:text-xs placeholder:text-gray-300 focus:outline-[#3b82f6] rounded-md"
        placeholder={text}
        type={type}
      />
    );
  };

  return (
    <div className=" ml-auto w-full md:p-0 p-5 mt-10">
      <div className="shadow-xl rounded-2xl">
        <div className="bg-[#3b82f6] text-center text-white p-5 rounded-t-2xl">
          <h2 className="md:text-2xl text-xl font-semibold">Want to Study at 
          The University of Aberdeen?</h2>
        </div>
        <form className="p-4 space-y-5">
          <div>
            <Label text="Name" />
            <Input text="Your Name" type="text" />
          </div>
          <div>
            <Label text="Email" />
            <div className="flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 rounded-md">
              <input
                className="focus:outline-none placeholder:text-xs placeholder:text-gray-300 w-full"
                placeholder="Your Email"
                type="text"
              />
              <span className="text-gray-400 bg-[#fafafa] text-xs px-2">.com</span>
            </div>
          </div>
          <div>
            <Label text="Phone Number" />
            <div className="flex items-center gap-5 text-gray-300 text-xs">
              <span className="flex p-2 border-[1px] rounded-md">
                <img src={flag} alt="" />
                <p className="pr-2">+880</p>
              </span>
              <Input text="1891123654" type="text" />
            </div>
          </div>
          <div>
            <Label text="Country of Residence" />
            <div className="flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 rounded-md">
              <input
                className="focus:outline-none placeholder:text-xs placeholder:text-gray-300 w-full"
                readOnly
                placeholder="Select your current country"
                type="text"
              />
              <span className="text-gray-400 bg-[#fafafa] text-xs px-2">
                <FaAngleDown />
              </span>
            </div>
          </div>
          <div>
            <Label text="Desired Country" />
            <div className="flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 rounded-md">
              <input
                className="focus:outline-none placeholder:text-xs placeholder:text-gray-300 w-full"
                readOnly
                placeholder="Select your desired country"
                type="text"
              />
              <span className="text-gray-400 bg-[#fafafa] text-xs px-2">
                <FaAngleDown />
              </span>
            </div>
          </div>
          <div>
            <Label text="Desired Course" />
            <Input text="Write your desired course name" type="text" />
          </div>
          <div>
            <Label text="Desired University" />
            <Input text="Write your desired university name" type="text" />
          </div>
          <div>
            <Label text="Last Academic Qualification" />
            <Input text="Bachelor" type="text" />
          </div>
          <div>
            <Label text="English Test Status" />
            <Input text="IELTS" type="text" />
          </div>
          <div>
            <Label text="Which SGE Office is Nearest to You?" />
            <div className="flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 rounded-md">
              <input
                className="focus:outline-none placeholder:text-xs placeholder:text-gray-300 w-full"
                readOnly
                placeholder="Dhanmondi, Dhaka"
                type="text"
              />
              <span className="text-gray-400 bg-[#fafafa] text-xs px-2">
                <FaAngleDown />
              </span>
            </div>
          </div>
        </form>
        <div className="p-5">
          <button className="bg-[#2563EB] hover:bg-[#3b82f6] text-white px-5 py-4 text-xs w-full rounded-full">
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
}
