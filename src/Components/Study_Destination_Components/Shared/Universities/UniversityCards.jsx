import {  useState } from "react";
import { TiLocation } from "react-icons/ti";
import "./UniversityCards.css";
import { Link } from "react-router-dom";


const UniversityCards = ({prop}) => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);


  const handleCardClick = (university) => {
    setSelectedUniversity(university);
  };
  
  return (
    <div
      className="mx-auto p-4 bg-[#EFF6FF]"
      onMouseLeave={() => setSelectedUniversity(null)}
    >
      <h1 className="lg:text-[56px] text-[28px] font-bold py-28 text-center">
        Top Universities in The Germany
      </h1>
      <div className="flex max-w-screen-xl mx-auto">
        <div
          className={`flex flex-wrap lg:justify-normal md:justify-around gap-10 h-[700px] overflow-y-auto ${
            selectedUniversity
              ? "lg:w-[66%] md:w-[33%] w-[33%] overflow-x-hidden overflow-y-auto h-[700px] scrollbar"
              : "w-full"
          }`}
        >
          {prop.map((university, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg cursor-pointer"
              onMouseEnter={() => handleCardClick(university)}
            >
              <img
                src={university.logo}
                alt={university.name}
                className="w-36 h-24 object-contain mb-4 lg:px-4 md:px-4 px-0"
              />
            </div>
          ))}
        </div>
        <div
          className={` ${
            selectedUniversity ? "lg:w-[34%] md:w-[66%] w-[66%]" : "hidden"
          }`}
        >
          {selectedUniversity && (
            <div className="p-4 bg-[EFF6FF] rounded-lg">
              <img
                src={selectedUniversity.logo}
                className="mx-auto md:w-[50%] w-[30%]"
                alt=""
              />
              <h2 className="text-2xl font-bold mb-2">
                {selectedUniversity.name}
              </h2>
              <p className="text-justify">{selectedUniversity.info}</p>
              <p className="poppins-bold text-sm pt-5">
                One of the Germanian leading universities
              </p>
              <p className="flex items-center pt-5 pb-6 lg:text-sm text-[10px]">
                <TiLocation className="text-blue-500" /> Located in {selectedUniversity.location}
              </p>
              <Link to={`/singleUniversityNZ/${selectedUniversity.id}`}>
                <button className="btn mt-4 lg:px-28 px-16 py-2 bg-blue-500 text-white rounded-3xl">
                  Apply Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityCards;
