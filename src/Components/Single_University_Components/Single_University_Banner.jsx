
const Single_University_Banner = ({university}) => {


  return (
    <div className="relative w-auto h-[300px] md:h-[550px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/S72pvP8/Aberdeen-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-end justify-center">
          <img
            className="bg-white p-5 w-[200px] md:w-[370px] rounded-2xl shadow-2xl mb-[-30px] md:mb-[-60px]"
            src={university.logo}
            alt={university.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Single_University_Banner;
