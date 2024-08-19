import { useState } from "react";
import imageOne from "../../../../public/cartoon/49a.png";
import imageTwo from "../../../../public/cartoon/49b.png";
import imageThree from "../../../../public/cartoon/49c.png";
import imageFour from "../../../../public/cartoon/49d.png";
import { motion } from "framer-motion"

const RequirementCard = () => {
  const [cardNo, setCardNo] = useState(0)
  return (
    <>
      <h1 className="pt-24 text-center font-semibold text-6xl">
        Requirements for Studying in the UK
      </h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-x-6 gap-y-8 pt-24 pb-36">

        {/* first card */}
        <motion.div initial={{height:'100%'}} animate={cardNo== 1?{height:'150%',duration:0.3 }:{height:'100%',duration:0.3}} transition={cardNo ==1  ?{ type:'spring', bounce: .7} :{}} onMouseEnter={()=>setCardNo(1)} onMouseLeave={()=>setCardNo(0)}  
         className="relative bg-[#59C3CF] rounded-[32px]   overflow-hidden">
          <div className=" ">
            <div className="text-white px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">Diploma</h2>
              <p className="  mb-2  ">
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <p className={`${cardNo == 1 ? 'flex' : 'hidden'}`}>
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component(Reading, Writing,Listening,Speaking) score
                below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test(IBT) in TOFEL and a minimum overall score of
                C1 or C2 level respectively are typically required.
              </p>
            </div>
            <div>
            <motion.div animate={cardNo ==1 ? {  }:{  }} transition={{duration:.1}}    className=" absolute bottom-0 right-0">
              <motion.img
                animate={cardNo ==1 ? {width:'160%'}: {width:'100%'}}
                src={imageOne}
                alt="Diploma"
                className="   "
              />
            </motion.div>
            <div className="absolute left-8 bottom-5  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                  fill="white"
                />
              </svg>
            </div>
            </div>
          </div>
        </motion.div>

        {/* second card */}

        <div className="relative bg-[#E2635E] rounded-[32px]  hover:h-[750px]">
          <div className="h-[450px]">
            <div className="text-white px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">{`Master's`}</h2>
              <p className=" mb-4 group-hover:hidden">
                Hold a relevant {`Bachelor's`} degree or an equivalent qualification
                from a recognized institution.
              </p>
              <p className="hidden mb-2 group-hover:block">
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <p className="hidden group-hover:block">
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component(Reading, Writing,Listening,Speaking) score
                below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test(IBT) in TOFEL and a minimum overall score of
                C1 or C2 level respectively are typically required.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 group-hover:right-2">
              <img
                src={imageTwo}
                alt="Diploma"
                className={`object-cover group-hover:scale-125  `}
              />
            </div>
            <div className="absolute left-8 bottom-5 group-hover:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* third card */}

        <motion.div animate={cardNo == 1 ? { height:'50%', y:'100%'}: {height:'100%', y:0}} transition={{duration:.1}} className="relative bg-[#A881F3] rounded-[32px] overflow-hidden">
          <div className="h-[450px]">
            <div className="text-white px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">{`Bachelor's`}</h2>
              <p className=" mb-4 group-hover:hidden">
                Students need to have completed their higher secondary
                education, such as HSC or A-levels, with satisfactory grades.
              </p>
              <p className="hidden mb-2 group-hover:block">
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <p className="hidden group-hover:block">
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component(Reading, Writing,Listening,Speaking) score
                below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test(IBT) in TOFEL and a minimum overall score of
                C1 or C2 level respectively are typically required.
              </p>
            </div>
            <motion.div animate={cardNo ==1 ?{opacity:0, y:100}:{opacity:1, y:0}} transition={{duration:.1}} className="absolute bottom-0 right-0 group-hover:right-2">
              <img
                src={imageThree}
                alt="Diploma"
                className={`object-cover group-hover:scale-125  `}
              />
            </motion.div>
            <div className="absolute left-8 bottom-5 group-hover:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* fourth card */}

        <div className="relative bg-[#58B1EA] rounded-[32px]  hover:h-[750px]">
          <div className="h-[450px]">
            <div className="text-white px-8 py-14">
              <h2 className="text-4xl font-semibold mb-2">Doctorate</h2>
              <p className=" mb-4 group-hover:hidden">
                Hold a relevant {`Master's`} degree or an equivalent qualification
                from a recognised institution.
              </p>
              <p className="hidden mb-2 group-hover:block">
                Students usually need to have completed their secondary
                education, such as SSC or O-levels, with satisfactory grades.
                The specific grade requirements may vary depending on the
                university and program.
              </p>
              <p className="hidden group-hover:block">
                A minimum overall band score of 5.5 to 6.0 in IELTS, with no
                individual component(Reading, Writing,Listening,Speaking) score
                below 5.5, a minimum overall score of 72 to 79 on the
                internet-based test(IBT) in TOFEL and a minimum overall score of
                C1 or C2 level respectively are typically required.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 group-hover:right-2">
              <img
                src={imageFour}
                alt="Diploma"
                className="object-cover group-hover:scale-125 "
              />
            </div>
            <div className="absolute left-8 bottom-5 group-hover:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0002 29.1717L7.41436 12.5859L4.58594 15.4144L24.0002 34.8286L43.4144 15.4144L40.5859 12.5859L24.0002 29.1717Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequirementCard;
