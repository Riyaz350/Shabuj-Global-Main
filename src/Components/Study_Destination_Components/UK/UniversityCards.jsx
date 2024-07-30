import { useState } from "react";
import { TiLocation } from "react-icons/ti";
import './UniversityCards.css'
const universities = [
  {
    name: "UNIVERSITY OF ABERDEEN",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Anglia Ruskin University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/2.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "PRIFYSGOL BANGOR UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/3.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "BATH SPA UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/4.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Bedfordshire",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/5.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF BIRMINGHAM",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/6.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "BIRMINGHAM CITY University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/7.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY COLLEGE BIRMINGHAM",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/8.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Brighton",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/9.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Cardiff Metropolitan University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/10.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Conventry University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/11.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University for the Creative Arts",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/12.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "DE MONTFORT UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/13.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Derby",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/14.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Dundee",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/15.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of East Anglia",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/16.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of East London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/17.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Abertay University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/18.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Exeter",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/19.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF EXETER",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/19u.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Glasgow Caledonian University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/20.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF GLOUCESTERSHIRE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/21.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Hertfordshire",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/22.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of HUDDERSFIELD",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/23.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Manchester Metropolitan University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/24.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of South Wales Prifysgol",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/25.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "CITY UNIVERSITY LONDON",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/25U.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Newcastle University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/26.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Northumbria University NEWCASTLE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/27.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "The University of Nottingham",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/28.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "NOTTINGHAM TRENT UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/29.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "QUEEN'S UNIVERSITY BELFAST",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/30.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Reading",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/31.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Chester",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/32.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF CHICHESTER",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/33.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "St Mary's University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/34.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY of STIRLING",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/35.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF PORTSMOUTH",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/36.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF WOLVERHAMPTON",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/37.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF SURREY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/38.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Ulster University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/39.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "The University of Law",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/40.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of the West of England",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/41.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Worcester",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/42.png",
    link: "https://www.shabujglobal.com",
  },
 
  {
    name: "Coventry University, London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/48.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Newcastle University, London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/49.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Robert Gordon University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/50.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Canterbury Christ Church University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/51.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Solent University,Southampton",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/52.png",
    link: "https://www.shabujglobal.com",
  }
];

const UniversityCards = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleCardClick = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="mx-auto p-4 bg-[#EFF6FF]" onMouseLeave={() => setSelectedUniversity(null)}>
      <h1 className="lg:text-[56px] text-[28px] font-bold py-28 text-center">
        Top Universities in The UK
      </h1>
      <div
        className='flex max-w-screen-xl mx-auto'
      >
       <div className={`flex flex-wrap justify-around gap-10 ${
          selectedUniversity ? "lg:w-[66%] md:w-[33%] w-[33%] overflow-x-hidden overflow-y-auto h-[700px] uk-scrollbar" : "w-full"
        }`}>
       {universities.map((university, index) => (
          <div
            key={index}
            className='p-4 bg-white rounded-lg cursor-pointer'
            onMouseEnter={() => handleCardClick(university)}
          >
            <img
              src={university.logo}
              alt={university.name}
              className="w-full h-24 object-contain mb-4 lg:px-4 md:px-4 px-0"
            />
          </div>
        ))}
       </div>
       <div className={` ${
          selectedUniversity ? "lg:w-[34%] md:w-[66%] w-[66%]" : "hidden"
        }`}>
       {selectedUniversity && (
          <div className="p-4 bg-[EFF6FF] rounded-lg">
            <img src={selectedUniversity.logo} className="mx-auto md:w-[50%] w-[30%]" alt="" />
            <h2 className="text-2xl font-bold mb-2">
              {selectedUniversity.name}
            </h2>
            <p>{selectedUniversity.info}</p>
            <p className="poppins-bold text-sm pt-5">One of the UK's leading universities</p>
            <p className="flex items-center pt-5 pb-6 lg:text-sm text-[10px]"><TiLocation className="text-blue-500"/> Located in scenic Aberdeen , Scotland </p>
            <button className="btn mt-4 lg:px-28 px-16 py-2 bg-blue-500 text-white rounded-3xl">
              <a href={selectedUniversity.link}>Apply Now</a>
            </button>
          </div>
        )}
       </div>
      </div>
    </div>
  );
};

export default UniversityCards;
