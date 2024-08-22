import { useEffect, useState } from "react";

const keywords = [
  "Computer Science",
  "Health Sciences",
  "Business",
  "Animation",
  "Gaming",
  "Engineering",
  "Physiotherapy",
  "Psychology",
  "Law",
  "Data Science",
];

const AnimatedText = ({ country }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto">
      <div className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold py-28 lg:w-[815px] mx-auto px-10">
        <span className="text-black leading-[65px] pr-2">
          Popular programs to study <br></br>in {country}
        </span>
        <span
          className="inline-block animate-scroll animate-bounce  delay-500 ease-in-out"
          style={{
            background:
              "var(--Orange-Gradient, linear-gradient(68deg, #ED1C24 -1.82%, #FCEC21 106.59%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {keywords[currentIndex]}
        </span>
      </div>
      <div className="md:hidden text-3xl md:text-4xl lg:text-5xl font-bold py-14 mx-auto text-center px-10">
        <span className="text-black  leading-[65px] pr-2">
          Popular programs to study in {country}
          <br></br>
        </span>
        <span
          className="inline-block animate-scroll animate-bounce  delay-500 ease-in-out"
          style={{
            background:
              "var(--Orange-Gradient, linear-gradient(68deg, #ED1C24 -1.82%, #FCEC21 106.59%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {keywords[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default AnimatedText;
