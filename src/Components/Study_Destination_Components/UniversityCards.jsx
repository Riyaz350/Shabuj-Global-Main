import { useState } from "react";

const universities = [
  {
    name: "UNIVERSITY OF ABERDEEN",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/1 53.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Anglia Ruskin University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/2 10.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "PRIFYSGOL BANGOR UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/3 51.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "BATH SPA UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/4 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Bedfordshire",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/5 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF BIRMINGHAM",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/6 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "BIRMINGHAM CITY University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/7 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY COLLEGE BIRMINGHAM",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/8 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Brighton",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/9 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Cardiff Metropolitan University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/10 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Conventry University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/11 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University for the Creative Arts",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/12 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "DE MONTFORT UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/13 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Dundee",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/15 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of East Anglia",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/16 2.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of East London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/17 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Abertay University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/18 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Exeter",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/19 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF EXETER",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/19u 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Glasgow Caledonian University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/20 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF GLOUCESTERSHIRE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/21 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Hertfordshire",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/22 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of HUDDERSFIELD",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/23 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Manchester Metropolitan University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/24 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of South Wales Prifysgol",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/25 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "CITY UNIVERSITY LONDON",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/25U 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Newcastle University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/26 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Northumbria University NEWCASTLE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/27 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "The University of Nottingham",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/28 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "NOTTINGHAM TRENT UNIVERSITY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/29 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "QUEEN'S UNIVERSITY BELFAST",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/30 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Reading",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/31 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Chester",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/32 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF CHICHESTER",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/33 2.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "St Mary's University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/34 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY of STIRLING",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/35 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF PORTSMOUTH",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/36 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF WOLVERHAMPTON",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/37 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "UNIVERSITY OF SURREY",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/38 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Ulster University",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/39 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "The University of Law",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/40 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of the West of England",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/41 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Worcester",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/42 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "THE UNIVERSITY of EDINBURGH",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/43 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Coventry University, London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/48 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Newcastle University, London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/49 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "Northumbria University NEWCASTLE",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/Northumbria_University_Logo 1.png",
    link: "https://www.shabujglobal.com",
  },
  {
    name: "University of Roehampton London",
    info: "Founded in 1495, blending tradition with innovation. Offers diverse undergraduate and postgraduate programs. Emphasizes research-led teaching. Fosters a supportive academic community. Located in scenic Aberdeen, Scotland.",
    logo: "./universities/University_of_Roehampton_logo 1.png",
    link: "https://www.shabujglobal.com",
  },
];

const UniversityCards = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleCardClick = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="mx-auto p-4 bg-[#EFF6FF]">
      <h1 className="text-[56px] font-bold py-28 text-center">
        Top Universities in The UK
      </h1>
      <div
        className={`grid grid-cols-6 gap-4 max-w-screen-xl mx-auto ${
          selectedUniversity ? "grid-cols-4" : "grid-cols-6"
        }`}
      >
        {universities.map((university, index) => (
          <div
            key={index}
            className={`col-span-1 p-4 bg-white rounded-lg cursor-pointer ${
              selectedUniversity && selectedUniversity.name === university.name
                ? "col-span-1"
                : ""
            }`}
            onClick={() => handleCardClick(university)}
          >
            <img
              src={university.logo}
              alt={university.name}
              className="w-full h-24 object-contain mb-4"
            />
          </div>
        ))}
        {selectedUniversity && (
          <div className="col-span-2 p-4 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              {selectedUniversity.name}
            </h2>
            <p>{selectedUniversity.info}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              <a href={selectedUniversity.link}>Apply Now</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityCards;
