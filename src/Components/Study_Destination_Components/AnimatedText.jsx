import { useEffect, useState } from "react";

const keywords = ["Psychology", "Law", "Data Science"];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-[56px] font-bold py-28 w-[750px] mx-auto ">
      <span className="text-black">Popular programs to study in the UK </span>
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
  );
};

export default AnimatedText;
