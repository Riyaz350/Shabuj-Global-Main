import { FaAngleDown } from "react-icons/fa6";

const BlogSingle = () => {
  const Header = ({ title }) => {
    return <h2 className="text-xl font-semibold">{title}</h2>;
  };
  const Text = ({ text }) => {
    return <p className=" ">{text}</p>;
  };
  const Label = ({ text }) => {
    return (
      <p className=" font-medium">
        {text}
        <span className="text-red-500">*</span>
      </p>
    );
  };
  const Input = ({ text, type }) => {
    return (
      <input
        className="overscroll-none border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 placeholder:text-xs placeholder:text-gray-300 focus:outline-[#3b82f6] "
        placeholder={text}
        type={type}
      />
    );
  };

  const Card = ({ img, title }) => {
    return (
      <div className="space-y-2  lg:w-full sm:w-[48%] w-full  shadow-2xl rounded-2xl  h-max !mt-0">
        <img src={img} alt="" className="w-full" />
        <div className="p-5">
          <div className="bg-[#fff2ee] w-fit p-2 text-xs text-[#ff8156] rounded-sm">
            Networking
          </div>
          <h2 className="font-semibold w-11/12 pt-3">{title}</h2>
        </div>
      </div>
    );
  };
  return (
    <div className="poppins my-10 pt-16 sm:pt-40">
      <div className="max-w-6xl lg:grid grid-cols-5 gap-10 lg:mx-auto px-5">
        {/* Blog content */}
        <div className="col-span-3 ">
          <div className="mb-5">
            <Header title="1. Introduction" />
            <Text
              text={`Embarking on higher education in the UK is a crucial journey that sets the stage for your future career and personal development. With so many universities and courses available, making the right choice can seem confusing. This is where Shabuj Global Education steps in as your trusted guide. Our expertise lies in helping students navigate through the many different options to find a university and course that align perfectly with their aspirations and goals. In this article, ${`we'll`} explore the key factors you should consider to make the right decision about your higher education in the UK.`}
            />
          </div>
          <div className="mb-5">
            <Header title="2. Understanding Your Academic Interests and Goals" />
            <Text
              text={`The first step in choosing the right course and university is a deep understanding of your own academic interests and career goals. It's essential to select a field of study that not only excites and motivates you but also aligns with your future professional aspirations.
                            Identify Your Passion: Reflect on subjects that you are passionate about. What topics do you find yourself naturally drawn to? Are there specific areas or issues that you are eager to explore more deeply?
                            Align with Career Goals: Consider how your chosen course will pave the way for your desired career path. Does the course content align with the skills and knowledge required in your chosen field?
                            At Shabuj Global Education, we support this process through one-on-one counselling sessions, helping you to clarify your interests and how they translate into potential career paths.`}
            />
          </div>
          <div className="mb-5">
            <Header title="3. Researching Universities" />
            <Text
              text={`Once you have a clear idea of what you want to study, the next step is to research which universities offer the best programmes in your chosen field.
                            Academic Reputation: Investigate the academic reputation of the universities you are considering. Look at university rankings, but also delve deeper into the specific department or faculty’s reputation in your chosen field.`}
            />
            <Text
              text={`Course Offerings: Examine the course curriculum in detail. Does it cover the areas you're most interested in? What kind of specialisations or modules are offered?`}
            />
            <Text
              text={`Shabuj Global Education provides comprehensive resources and expert advice to help you analyse and compare universities. We offer insights into university rankings, faculty expertise, and course structures, ensuring you have all the information needed to make a well-informed decision.`}
            />
          </div>
          <div className="mb-5">
            <Header title="4. Location and Campus Life" />
            <Text
              text={`The location of your university and the campus life it offers are crucial factors that can significantly impact your overall university experience.
                            University Location: Consider whether you prefer a busy city or a quieter, countryside setting. Each location offers different advantages, from cultural experiences and networking opportunities in urban areas to the close-knit communities and scenic beauty of countryside campuses..`}
            />
            <Text
              text={`Campus Culture: Investigate the campus culture. Does the university have a strong focus on sports, arts, or academic research? What kind of clubs, societies, and extracurricular activities are available?`}
            />
            <Text
              text={`Shabuj Global Education provides valuable insights into UK regions and university environments, helping you understand what life at these universities would be like. We guide you through considering how the location and campus culture align with your personal preferences and learning style.`}
            />
          </div>
          <div className="mb-5">
            <Header title="5. Career Opportunities and Industry Links" />
            <Text
              text={`Your university's connections with industries and its track record in employability are critical to consider, especially if you're looking to enter the job market immediately after graduation.`}
            />
            <Text
              text={`Industry Connections: Research the university’s links with industries relevant to your field of study. Strong industry connections can lead to internships, work placements, and networking opportunities.`}
            />
            <Text
              text={`Employability Rates: Look at the university's employability rates for graduates. Universities with high employability rates often provide robust career services and have a good reputation among employers.`}
            />
            <Text
              text={`At Shabuj Global Education, we assist students in selecting universities that offer strong career support and have established industry ties. Our guidance includes providing information on career services, alumni networks, and potential pathways to employment post-graduation.`}
            />
          </div>
          <div className="mb-5">
            <Header title="6. Financial Considerations" />
            <Text
              text={`Understanding and planning for the financial aspects of your university education is essential.`}
            />
            <Text
              text={`Tuition Fees: Tuition fees can vary significantly between universities and courses. Consider the cost of the courses you are interested in and how this aligns with your budget.`}
            />
            <Text
              text={`Living Expenses: Factor in living expenses, which can vary depending on the university’s location. Living in a major city like London, for instance, can be more expensive than other parts of the UK.`}
            />
            <Text
              text={`Scholarship Opportunities: Explore scholarship opportunities that can help offset the cost of tuition and living expenses. Scholarships can be based on merit, financial need, or specific talents.`}
            />
            <Text
              text={`Shabuj Global Education offers comprehensive assistance in financial planning, including guidance on managing tuition fees, living expenses, and accessing scholarship information. We help you understand the full financial scope of studying in the UK, ensuring you are well-prepared for this aspect of your university experience.`}
            />
          </div>
          <div className="mb-5">
            <Header title="7. Support Services and Facilities" />
            <Text
              text={`The availability and quality of support services and facilities are key components of a fulfilling university experience.`}
            />
            <Text
              text={`Support Services: Look for universities that offer robust student support services, including mental health counselling, career advice, and health services. These resources can be crucial for your well-being and academic success.`}
            />
            <Text
              text={`Facilities: Consider the quality of facilities such as libraries, laboratories, sports centres, and study spaces. These facilities not only enhance your learning experience but also contribute to a balanced and enjoyable university life.`}
            />
            <Text
              text={`Shabuj Global Education helps students assess universities based on these criteria. We provide information on the range and quality of support services and facilities available at different universities, ensuring you choose a university that supports your overall well-being and academic ambitions.`}
            />
          </div>
          <div className="mb-5">
            <Header title="8. International Student Support" />
            <Text
              text={`For international students, additional support may be required to navigate the unique challenges of studying abroad.`}
            />
            <Text
              text={`Visa Support and Language Assistance: Ensure the university offers comprehensive visa support and language assistance programs. These services are crucial for smoothing your transition into a new country and educational system.`}
            />
            <Text
              text={`Integration Programs: Look for universities that offer orientation and integration programs. These programs can help you acclimatise to the new environment and culture and connect with fellow students.`}
            />
            <Text
              text={`Shabuj Global Education plays a pivotal role in helping international students navigate these challenges. We offer guidance on visa processes, language support, and the integration services provided by universities, ensuring a smooth transition for students studying abroad.`}
            />
          </div>
          <div className="mb-5">
            <Header title="9. Making the Final Decision" />
            <Text
              text={`Choosing the right university and course involves balancing various factors to make an informed and well-considered decision.`}
            />
            <Text
              text={`Balancing Factors: Weigh the academic offerings, location, career opportunities, financial considerations, support services, and international student support against your personal preferences and goals.`}
            />
            <Text
              text={`Personalised Counselling: Shabuj Global Education offers personalised counselling to help you finalise your decision. Our experienced counsellors work with you to review all factors, providing tailored advice based on your unique situation and aspirations..`}
            />
          </div>
          <div className="mb-5">
            <Header
              title={`10. Shabuj ${`Global's`} Vision for Your Success`}
            />
            <Text
              text={`As you stand at the crossroads of making one of the most significant decisions for your future, remember that choosing the right university and course is not just about academics; it's about finding a place that resonates with your personal and professional aspirations. At Shabuj Global Education, we understand the magnitude of this decision and are committed to guiding you through every step of this journey.`}
            />
            <div className="my-5">
              <Text
                text={`Our team of experienced counsellors is equipped with the knowledge and resources to help you navigate the complexities of selecting the perfect university and course in the UK. From understanding your unique needs to aligning them with the right academic and cultural environment, we are here to ensure that your choice sets the foundation for a successful and fulfilling academic career.`}
              />
            </div>
            <div className="mb-5">
              <Text
                text={`Remember, the right university experience can shape your future in profound ways. It's not just about the degree you earn but the experiences you gain, the networks you build, and the person you become in the process. With Shabuj Global Education by your side, you're not just making a choice; you're embarking on a journey towards a bright and promising future. We invite you to reach out to us and start this exciting journey together. Let's turn your educational dreams into reality with informed choices and expert guidance.`}
              />
            </div>
          </div>
          <div className="flex justify-between text-sm mb-5">
            <button className=" p-2 border-[1px]   hover:border-[#3b82f6] hover:text-[#3b82f6] ">
              Previous
            </button>
            <button className="p-2 border-[1px] hover:border-[#3b82f6] hover:text-[#3b82f6]">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-2 ">
          <div className="shadow-2xl rounded-b-2xl">
            <div className=" bg-[#3b82f6] text-center text-white p-5 rounded-t-2xl">
              <h2 className="text-2xl font-semibold ">Want to Study Abroad?</h2>
              <p className="text-xs font-light">We can help - Fill in your</p>
              <p className="text-xs font-light">
                details and we’ll call you back
              </p>
            </div>
            <form className="p-2 px-3 space-y-5">
              <div>
                <Label text="Name" />
                <Input text="Your Name" type="text" />
              </div>
              <div>
                <Label text="Email" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300"
                    placeholder="Your Email"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    .com
                  </span>
                </div>
              </div>
              <div>
                <Label text="Phone Number" />
                <div className="flex items-center gap-5 text-gray-300 text-xs">
                  <span className="flex p-2 border-[1px]">
                    <img src='https://i.ibb.co.com/QjQfzT1/contents.png' alt="" />
                    <p className="pr-2">+880</p>
                  </span>
                  <Input text="1891123654" type="text" />
                </div>
              </div>
              <div>
                <Label text="Country of Residence" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                    readOnly
                    placeholder="Select your current country"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    <FaAngleDown />
                  </span>
                </div>
              </div>
              <div>
                <Label text="Desired Country" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                    readOnly
                    placeholder="Select your desired country"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    <FaAngleDown />
                  </span>
                </div>
              </div>

              <div>
                <Label text="Desired Course" />
                <Input text="Write your desired course name" type="text" />
              </div>
              <div>
                <Label text="Desired University" />
                <Input text="Write your desired university name" type="text" />
              </div>
              <div>
                <Label text="Last Academic Qualification" />
                <Input text="Bachelor" type="text" />
              </div>
              <div>
                <Label text="English Test Status" />
                <Input text="IELTS" type="text" />
              </div>

              <div>
                <Label text="Which SGE Office is Nearest to You?" />
                <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                  <input
                    className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                    readOnly
                    placeholder="Dhanmondi, Dhaka"
                    type="text"
                  />
                  <span className="text-gray-400 bg-[#fafafa] text-xs">
                    <FaAngleDown />
                  </span>
                </div>
              </div>
            </form>

            <div className="p-5">
              <button className="font-inter bg-[#2563EB] hover:bg-[#3b82f6] text-white px-5 py-4 text-xs w-full  rounded-full">
                Schedule Meeting
              </button>
            </div>
          </div>

          <div className="my-10">
            <div className="flex items-center">
              <img src='https://i.ibb.co.com/0tWWKrV/Category-1-Plus.png' alt="" />
              <p className="font-semibold">Category</p>
            </div>
            <ul className="space-y-1 my-1">
              <li className="text-xs">Personal statements</li>
              <li className="text-xs">Interview preparation</li>
              <li className="text-xs">Common application mistakes</li>
              <li className="text-xs">Visa processes</li>
              <li className="text-xs">Post-study work visas</li>
              <li className="text-xs">Immigration updates</li>
              <li className="text-xs">Scholarship opportunities</li>
              <li className="text-xs">Budgeting tips</li>
              <li className="text-xs">Accommodation options</li>
              <li className="text-xs">Cultural adaptation</li>
              <li className="text-xs">Social life balance</li>
              <li className="text-xs">Job search strategies</li>
              <li className="text-xs">TOEFL, IELTS, GRE, GMAT tips</li>
            </ul>
          </div>

            <h2 className="font-semibold text-md mb-3">Related Blogs</h2>
          <div className="space-y-5 flex flex-wrap gap-5 justify-between w-full ">
            <Card
              img='https://i.ibb.co.com/pfHGbFK/Rectangle-191.png'
              title={`Networking in University: A Shabuj Global ${`Student's`} Guide`}
            />
            <Card
              img='https://i.ibb.co.com/D15Vx5q/Rectangle-192.png'
              title={`University Networking: Guide for Global Students by Shabuj`}
            />
            <Card
              img='https://i.ibb.co.com/pfHGbFK/Rectangle-191.png'
              title={`Networking in University: A Shabuj Global Student's Guide`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
