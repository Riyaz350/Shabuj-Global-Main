import bg from "../../assets/Background.jpg";
import heroImg from "../../assets/college admission-amico.svg";
import Lightning from "../../assets/Lightning Vector.svg";
import vision from "../../assets/Vision Icon.svg";
import mission from "../../assets/Mission Icon.svg";

const AboutUs_components = () => {
  const Card = ({ number, text }) => {
    return (
      <div className="w-2/3 md:w-1/3 mx-auto lg:w-full bg-white rounded-lg  shadow-2xl  flex flex-col gap-4 justify-center pb-14 p-10 text-start">
        <div
          style={{
            background: `linear-gradient(93deg, rgba(46,51,147,1) 0%, rgba(28,250,252,1) 100%)`,
            backgroundClip: "text",
          }}
          className="   text-transparent text-5xl font-bold"
        >
          <h1 className="font-bold">{number}</h1>
        </div>
        <p className="">{text}</p>
      </div>
    );
  };
  return (
    <div className="bg-[#EFF6FF]">
      {/*  Hero section */}
      <div
        className=""
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:grid max-w-5xl mx-auto grid-cols-2  relative items-center justify-center space-y-10 lg:space-y-0 py-2  ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold flex justify-center text-center lg:text-start">
            An Excellent Solution <br />
            for Your Admission
          </h1>
          <img className="w-1/2 mx-auto" src={heroImg} alt="" />
        </div>
      </div>

      {/* intro */}

      <div className="text-center z-0 space-y-20 py-28 max-w-5xl  min-h-screen mx-auto  relative">
        <div className="space-y-5">
          <h2 className="text-2xl z-10 md:text-4xl lg:text-5xl font-semibold">
            Hi, We are Shabuj Global Education
          </h2>
          <p className="max-w-5xl z-10 mx-auto font-semibold">
            Shabuj Global Education (SG Education), a BRITISH COUNCIL accredited
            provider, has proudly served local and international students since
            2010. We specialize in UK University admissions, ensuring top-notch
            professional support from our experienced team.
          </p>
        </div>
        <div className="z-10   ">
          <div className="mx-10  lg:flex justify-between space-y-5 lg:space-y-0 gap-5">
            <Card
              number="15+"
              text="years of expertise in guiding students to their ideal study-abroad destinations."
            />
            <Card
              number="150+"
              text="University partners in the UK, USA, Australia, Canada, Germany, & New Zealand"
            />
            <Card
              number="5000+"
              text="students from over 15 countries worldwide have been successfully counseled."
            />
          </div>
        </div>

        <img
          className="w-5/12 ml-auto -z-10 absolute  -top-[150px]  hidden lg:flex right-0"
          src={Lightning}
          alt=""
        />

        {/* mission vision section */}
        <div className="mx-10  lg:grid grid-cols-2 gap-10 space-y-10 lg:space-y-0 items-center text-start max-w-5xl pt-10 lg:pt-20">
          <div className="w-2/3 md:w-1/3 mx-auto lg:w-full relative">
            <div className=" bg-white p-5 rounded-3xl">
              <h2 className="text-[#00399F] font-semibold text-2xl">Our</h2>
              <h2 className="font-semibold text-3xl mb-2">Mission</h2>
              <p className="text-xs font-medium">
                At Shabuj Global, our mission is to forge meaningful connections
                between students and prestigious UK educational institutions. We
                are committed to understanding each {`student's`} unique needs,
                enabling us to guide them towards the perfect course. Through
                personalized support and expert advice, we aim to transform{" "}
                {`students'`} educational aspirations into reality, ensuring
                they graduate ready to face the world with confidence and
                competence.
              </p>
            </div>
            <img
              className="absolute -top-10 right-0 w-1/3  lg:w-1/4"
              src={mission}
              alt=""
            />
          </div>
          <div className="w-2/3 md:w-1/3 mx-auto lg:w-full relative">
            <div className="w-full bg-white p-5 rounded-3xl">
              <h2 className="text-[#00399F] font-semibold text-2xl">Our</h2>
              <h2 className="font-semibold text-3xl mb-2">Vision</h2>
              <p className="text-xs font-medium">
                Our vision at Shabuj Global is to be the premier student
                consultancy firm, recognized globally for our dedication to
                student success. We strive to continually expand our
                partnerships with top universities and colleges, providing
                unparalleled opportunities for academic and personal growth. By
                empowering students to achieve their highest potential, we
                envision a future where every Shabuj Global student thrives in
                their chosen field and contributes positively to the global
                community.
              </p>
            </div>
            <img
              className="absolute -top-10 right-0 w-1/3  lg:w-1/4"
              src={vision}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs_components;
