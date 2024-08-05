const Deadline = () => {
    return (
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="flex w-full text-[#181A1B] items-center lg:flex-row flex-col">
          <div className="lg:w-[70%] w-full">
            <h1 className="text-5xl font-bold text-center">
              Deadline for the UK Universities
            </h1>
            <p className="text-xl font-medium text-center mx-auto mt-5">
              You need to start preparing your application a minimum of 9-10 months in advance before the commencement of your program.
            </p>
          </div>
          <div className="lg:w-[35%] w-full lg:block hidden">
            <img
              className="w-full"
              src="https://i.ibb.co/6vKQm6G/Deadline-rafiki-1.png"
              alt="Deadline illustration"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Deadline;
  