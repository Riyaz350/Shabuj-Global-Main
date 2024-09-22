const Blog_BlogInbox = () => {
  return (
    <div className="max-w-[1152px] mx-auto my-12 !mb-6 border-[#CACACA] border-y-[1px] pt-4 md:pt-[35px] lg:pt-[53px] md:pb-[30px] !pb-[200px]  lg:pb-[60px] md:my-24 border-b-0">
      <div className="flex lg:flex-row flex-col px-4 items-center gap-2">
        <p className="poppins-semibold text-[28px] leading-[39.2px] text-[#00399F] lg:pr-[27px] text-center  md:text-left ">
          Receive Our Blog Posts Straight to Your Inbox
        </p>
        <div className="relative lg:pr-20 md:mx-auto mx-auto  pr-8">
          <input
            type="text"
            placeholder="Please Enter Your Email"
            className="px-2 py-[7px] inter-regular text-[16px] leading-[24px] text-[#CACACA] rounded rounded-r-none border border-[#3B82F6] outline-none"
          />
          <span className="absolute bg-[#1D4EDB] py-[8px] px-[10px] text-white rounded-r">
            .com
          </span>
        </div>
        <div className="md:mx-auto mx-auto">
          <button className="bg-[#004ACB] flex items-center hover:bg-gray-200 duration-200 text-white hover:text-[#5B8DDB] py-2 px-[37px] gap-[4px]">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.83339 12.7162L13.8605 6.85131L12.7216 5.87512L8.74867 10.5102L7.07136 8.83289L6.0107 9.89355L8.83339 12.7162Z"
                fill="white"
              />
              <path
                d="M17.791 9.36328C17.791 13.9196 14.0974 17.6133 9.54102 17.6133C4.98467 17.6133 1.29102 13.9196 1.29102 9.36328C1.29102 4.80693 4.98467 1.11328 9.54102 1.11328C14.0974 1.11328 17.791 4.80693 17.791 9.36328ZM16.291 9.36328C16.291 5.63536 13.2689 2.61328 9.54102 2.61328C5.81309 2.61328 2.79102 5.63536 2.79102 9.36328C2.79102 13.0912 5.81309 16.1133 9.54102 16.1133C13.2689 16.1133 16.291 13.0912 16.291 9.36328Z"
                fill="white"
              />
            </svg>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog_BlogInbox;
