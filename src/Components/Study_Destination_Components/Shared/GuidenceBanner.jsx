const GuidanceBanner = () => {
  return (
    <div className="py-24 m-5">
      <div className="max-w-screen-xl mx-auto lg:flex md:flex block justify-center items-center  bg-gradient-to-r from-red-400 to-orange-400  rounded-[32px] shadow-md px-10 md:px-24  py-14">
        <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-4xl gap-5">
          <span className="break-words text-white text-3xl lg:text-[28px] md:text-left text-center md:text-[28px]  font-semibold ">
            Need guidance? Let us help you.
          </span>
          <button className="bg-white text-orange-400 text-[18px] font-semibold py-2 lg:px-4 md:px-4 px-8 rounded-full lg:mt-0 md:mt-0 mt-10">
            Talk to a Counsellor
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidanceBanner;
