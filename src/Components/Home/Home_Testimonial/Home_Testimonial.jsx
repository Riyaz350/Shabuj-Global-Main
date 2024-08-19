import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Highlight from "../../../assets/Highlight.png";
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
      <div className="md:flex block lg:ml-[15%] md:ml-[15%] ml-0 relative">
        <div className="lg:w-[26%] md:w-[26%] w-full px-4 drop-shadow-lg ">
          <h1 className="lg:text-7xl md:text-7xl text-5xl lg:text-left md:text-left text-center font-bold mb-3 bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent w-full transition-all duration-300 lg:pt-16 md:pt-16 pt-5">
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
        <div className="lg:w-[1000px] md:w-[1000px] w-full h-[240px] md:h-[670px] flex items-center lg:relative md:relative absolute lg:top-0 md:top-0 top-60 lg:overflow-hidden md:overflow-hidden overflow-visible lg:ml-auto md:ml-auto ml-16">
          {/* slider container */}
          <div
            className="lg:w-[80%] md:w-[80%] w-[100%] ease-linear flex gap-[2%] absolute lg:left-0 md:left-0 left-10  transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlider * 52}%)` }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <div
                key={inx}
                className={`${
                  currentSlider === inx
                    ? "bg-gradient-to-b from-[#88D6F3] via-[#88F3D0] to-[#ACFFE4] h-[260px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                    : "h-[260px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                } min-w-[50%]  relative duration-200 bg-white rounded-3xl lg:block md:block hidden`}
              >
                <img className="absolute top-8 left-8" src={Highlight} alt="" />
                <img
                  src={slide.img}
                  className="mx-auto mt-28"
                  alt={slide.tags}
                />
                <div className="mx-5">
                  <p className="text-3xl my-5 font-semibold text-center">
                    {slide.name}
                  </p>
                  <p className="text-lg mx-5">{slide.text}</p>
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
                  className="absolute top-5 left-8 w-10"
                  src={Highlight}
                  alt=""
                />
                <img
                  src={slide.img}
                  className="mx-auto mt-14 w-16"
                  alt={slide.tags}
                />
                <div className="mx-1">
                  <p className="text-sm my-5 font-semibold text-center">
                    {slide.name}
                  </p>
                  <p className="text-[7px] mx-5">{slide.text}</p>
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/LPNmfbk/author2.png",
    name: "Jakaria Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/smYfCG0/author.png",
    name: "Naima Islam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/LPNmfbk/author2.png",
    name: "Jakaria Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/smYfCG0/author.png",
    name: "Naima Islam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];
