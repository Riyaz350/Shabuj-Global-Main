import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Home_Testimonial = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  return (
    <div className="bg-gradient-to-r from-[#031EE5] to-[#2081ff] overflow-hidden">
      <div className="md:flex block lg:ml-[15%] md:ml-[15%] ml-0 relative gap-10">
        <div className="md:w-[26%] w-full  drop-shadow-lg ">
          <h1 className="lg:text-7xl text-3xl sm:text-5xl  lg:text-left md:text-left text-center font-bold mb-3 bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent w-full transition-all duration-300 lg:pt-16 md:pt-16 pt-10 px-4 ">
            Become a Part of Our Success Stories
          </h1>
          <div className="flex gap-3 px-5 lg:pt-[200px] md:pt-[200px] pt-[400px] pb-10 lg:justify-start md:justify-start justify-center">
            <button
              onClick={prevSlider}
              className="flex justify-center items-center text-white border-white border-[2px] lg:text-5xl md:text-5xl text-4xl hover:bg-white rounded-full lg:p-2 md:p-2 p-4 hover:text-black transition-colors duration-300"
            >
              <GoArrowLeft />
            </button>
            <button
              onClick={nextSlider}
              className="flex justify-center items-center text-white border-white border-[2px] lg:text-5xl md:text-5xl text-4xl hover:bg-white rounded-full lg:p-2 md:p-2 p-4 hover:text-black transition-colors duration-300"
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="lg:w-[1000px] md:w-[1000px] w-full  flex items-center lg:relative md:relative absolute lg:top-0 md:top-0 top-80 lg:overflow-hidden md:overflow-hidden overflow-visible lg:ml-auto md:ml-auto ml-16">
          {/* slider container */}
          <div
            className="lg:w-[80%] md:w-[80%] w-[100%] ease-linear flex gap-[2%] absolute lg:left-0 md:left-0 left-10  transition-transform duration-300 -mt-30 lg:mt-0 h-max items-center py-6"
            style={{ transform: `translateX(-${currentSlider * 52}%)` }}
          >
            {/* sliders */}
            {/* for tab and large device */}
            {sliders.map((slide, inx) => (
              <div
                key={inx}
                className={`${
                  currentSlider === inx
                    ? "bg-gradient-to-b from-[#88D6F3] via-[#88F3D0] to-[#ACFFE4] transition-all duration-300"
                    : " transition-all duration-300"
                } h-full flex-grow !p-5 min-w-[50%]  relative duration-200 bg-white rounded-3xl md:block hidden`}
              >
                <img className="absolute w-fit md:w-1/5 lg:top-8 top-2 left-2 lg:left-8" src='https://i.ibb.co.com/tQnYRyP/Highlight.png' alt="" />
                <img
                  src={slide.img}
                  className="mx-auto mt-10 lg:mt-16 h-40 w-40 object-cover rounded-xl"
                  alt={slide.tags}
                />
                <div className="lg:mx-5 flex-1">
                  <p className="text-xl lg:text-3xl my-5 font-semibold text-center">
                    {slide.name}
                  </p>
                  <p className="text-xs lg:text-lg mx-2 ">{slide.text}</p>
                </div>
              </div>
            ))}
            {/* for mobile */}
            {sliders.map((slide, inx) => (
              <div
                key={inx}
                className={`${
                  currentSlider === inx
                    ? "bg-gradient-to-b from-[#88D6F3] via-[#88F3D0] to-[#ACFFE4] h-[280px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                    : "h-[280px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                } min-w-[50%] duration-200 bg-white rounded-3xl lg:hidden md:hidden block relative`}
              >
                <img
                  className="absolute top-4 left-6 w-8"
                  src='https://i.ibb.co.com/tQnYRyP/Highlight.png'
                  alt=""
                />
                <img
                  src={slide.img}
                  className="mx-auto mt-10 w-36 h-32 object-cover rounded-lg"
                  alt={slide.tags}
                />
                <div className="mx-1">
                  <p className="text-sm my-2 font-semibold text-center">
                    {slide.name}
                  </p>
                  <p className="text-[9px] mx-5">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Testimonial;

const sliders = [
  {
    img: "https://i.ibb.co/smYfCG0/author.png",
    name: "Naima Islam",
    text: "Shabuj Global Education transformed my career prospects. Excellent guidance and support throughout!",
  },
  {
    img: "https://i.ibb.co/LPNmfbk/author2.png",
    name: "Jakaria Khan",
    text: "Highly recommend Shabuj Global Education. Their expert counseling helped me secure my dream university.",
  },
  {
    img: "https://i.ibb.co/9Wy7gmJ/author3.jpg",
    name: "Alexa John",
    text: "Amazing experience with Shabuj Global Education. Friendly staff, personalized guidance, and great results!",
  },
  {
    img: "https://i.ibb.co/RTq6HcR/author4.jpg",
    name: "Masud Parvez",
    text: "Shabuj Global Education made the entire application process smooth and stress-free. Thank you!",
  },
  {
    img: "https://i.ibb.co/bHjqW8W/author5.jpg",
    name: "Sinthia Gomes",
    text: "Best study abroad consultancy! Shabuj Global Education provided invaluable support and resources.",
  },
  {
    img: "https://i.ibb.co/DwbSRxp/author6.jpg",
    name: "Nayona Serxokha",
    text: "Shabuj Global Education is a game-changer. Their expertise helped me achieve my study abroad goals.",
  },
  {
    img: "https://i.ibb.co/VpBsDG0/author7.jpg",
    name: "David Luke",
    text: "Couldn't be happier with Shabuj Global Education. They made my dream of studying abroad a reality.",
  },
];
