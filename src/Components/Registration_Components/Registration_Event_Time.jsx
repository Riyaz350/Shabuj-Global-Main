import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Registration_Form from "./Registration_Form";
const Registration_Event_Time = () => {
  return (
    <div className="lg:w-[560px] md:w-[560px] w-full">
      <p className="text-4xl font-bold ">
        What day and time <br /> works best for you?
      </p>

      <div className="w-[350px]">
        <div className="flex items-center mt-20 mb-10 lg:mx-0 md:mx-0 mx-5">
          <p className="text-3xl font-bold text-[#2563EB]">July 2024</p>
          <IoArrowForwardCircleOutline className="text-3xl text-[#8E8E8E] ml-auto" />
        </div>
        <ul className="grid lg:grid-cols-7 md:grid-cols-7 grid-cols-4 lg:gap-0 md:gap-0 gap-5 space-x-2 text-center  items-center w-full text-lg lg:-ml-3 md:-ml-1 -ml-0 text-[#8E8E8E] font-thin mb-20">
          <li>
            <p>th</p>
            <p>04</p>
          </li>
          <li>
            <p>fr</p>
            <p>05</p>
          </li>
          <li>
            <p>st</p>
            <p>06</p>
          </li>
          <li>
            <p>su</p>
            <p>07</p>
          </li>
          <li className="relative">
            <div className="bg-[#2563EB] text-white rounded-md">
              <p>mo</p>
              <p>08</p>
            </div>
            <GoDotFill className=" text-[#2563EB] absolute left-1/2 transform -translate-x-1/2" />
          </li>
          <li>
            <p>tu</p>
            <p>09</p>
          </li>
          <li>
            <p>we</p>
            <p>10</p>
          </li>
        </ul>
      </div>

      <div className="lg:w-[50%] md:w-[50%] w-full lg:mx-0 md:mx-0 mx-5 mb-20">
        <p className="text-3xl font-bold text-[#2563EB] mb-10">Time</p>
        <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-3 gap-3 text-[#4B4B4B] font-semibold">
          <li>
            <p className="bg-[#2563EB] text-white rounded-md w-[90px] p-2">
              10:00 am
            </p>
          </li>
          <li className=" p-2">11:00 am</li>
          <li className=" p-2">12:00 am</li>
          <li className=" p-2">01:00 am</li>
          <li className=" p-2">02:00 am</li>
          <li className=" p-2">03:00 am</li>
          <li className=" p-2">04:00 am</li>
          <li className=" p-2">05:00 am</li>
        </ul>
      </div>
      <div>
        <p className="text-4xl font-bold lg:text-left md:text-left text-center lg:mx-0 md:mx-0 mx-5">Please help me with <br /> some details about you</p>
      </div>
      <Registration_Form/>
    </div>
  );
};

export default Registration_Event_Time;
