const Registration_Banner = () => {
  return (
    <div className="bg-[#EFF6FF] p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center lg:w-[80%] mx-auto">
        <div className="lg:my-auto text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">Book an Appointment</h1>
          <p className="text-lg lg:text-xl font-bold pt-3 lg:pt-5">
            Please choose one of the following options to determine the most <br className="hidden lg:block" />
            convenient time for you and to confirm the appointment.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-auto">
          <img 
            src="https://i.ibb.co/VmQpjRk/Calling-cuate-1.png" 
            alt="Booking Illustration" 
            className="w-full max-w-sm lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration_Banner;
