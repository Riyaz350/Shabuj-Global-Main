const GuidanceBanner = () => {
  return (
    <div className="py-24">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center bg-gradient-to-r from-red-400 to-orange-400  rounded-[32px] shadow-md px-24 py-14">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <span className="text-white text-[28px] font-semibold">
            Need guidance? Let us help you.
          </span>
          <button className="bg-white text-black text-[18px] font-semibold py-2 px-4 rounded-full ">
            Talk to a Counsellor
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidanceBanner;
