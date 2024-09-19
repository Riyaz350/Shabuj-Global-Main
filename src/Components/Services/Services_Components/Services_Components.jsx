import project from '../../../assets/college-project-animate.svg'
import counsel from '../../../assets/counseling-pana.svg'
import passport from '../../../assets/Health passport-pana.svg'
import airport from '../../../assets/Airport-amico.svg'
import circle from '../../../assets/Circle.png'
import '../../../App.css'
const Services_Components = () => {

    const servicesData = [
        {
            "id":1,
            "title":"Personalized Counseling",
            "text":"Our experienced counselors provide personalized guidance to help you choose the best university and program that aligns with your academic goals and career aspirations. We take into account your preferences, strengths, and future plans to recommend the most suitable options."
        },
        {
            "id":2,
            "title":"University Selection",
            "text":"With our extensive database of universities worldwide, we assist you in selecting the right institution that matches your academic profile, budget, and personal preferences. Our expert team ensures you make informed decisions based on accurate and up-to-date information."
        },
        {
            "id":3,
            "title":"Application Assistance",
            "text":"Navigating the application process can be overwhelming. We offer step-by-step assistance, from filling out application forms to writing compelling personal statements and preparing necessary documents. Our goal is to make your application stand out."
        },
        {
            "id":4,
            "title":"Visa Guidance",
            "text":"Securing a student visa is a critical step in your study abroad journey. Our visa experts provide detailed guidance on visa requirements, application procedures, and interview preparation to increase your chances of a successful visa approval."
        },
        {
            "id":5,
            "title":"Test Preparation",
            "text":"Many universities require standardized tests such as the IELTS, TOEFL, GRE, or GMAT. We offer test preparation services, including coaching classes, practice tests, and study materials, to help you achieve competitive scores."
        },
        {
            "id":6,
            "title":"Financial Planning",
            "text":"Studying abroad involves significant financial investment. Our advisors help you explore various funding options, including scholarships, grants, and student loans, to make your education affordable and manageable."
        },
        {
            "id":7,
            "title":"Pre-Departure Orientation",
            "text":"Moving to a new country can be challenging. Our pre-departure orientation sessions cover essential topics such as cultural adaptation, accommodation, travel arrangements, and health insurance, ensuring you are well-prepared for your new adventure."
        },
        {
            "id":8,
            "title":"Post-Arrival Support",
            "text":"Our support doesn’t end once you reach your destination. We provide ongoing assistance to help you settle in, including guidance on local amenities, academic support, and connecting with other students. We are here to help you navigate any challenges that may arise during your stay abroad."
        },
        {
            "id":9,
            "title":"Career Counseling",
            "text":"Thinking ahead to your post-graduation plans, we offer career counseling services to help you explore job opportunities, internships, and further studies. Our network of professionals and alumni can provide valuable insights and connections in your field of interest."
        },
        {
            "id":9,
            "title":"Career Counseling",
            "text":"Thinking ahead to your post-graduation plans, we offer career counseling services to help you explore job opportunities, internships, and further studies. Our network of professionals and alumni can provide valuable insights and connections in your field of interest."
        },
    ]
    const Card = ({ circle, position,index }) => {
        return (
            <div className='w-80 mx-auto lg:mx-0 relative bg-white   shadow-lg px-5 py-10 rounded-2xl'>
                <h2 className='text-2xl w-1/3 font-semibold'>{servicesData[index].title}</h2>
                <p className='text-sm mt-5 font-medium'>{servicesData[index].text}</p>
                <button className='hover:border-blue-400 hover:text-blue-400 border-[2px] border-b-[1px] rounded-full px-4 py-2 text-sm mt-2'>Learn More</button>
                {circle &&
                    <div>
                        {position == 'top-center' ?
                            <img className='hidden lg:flex absolute -top-3 left-[135px]' src={circle} alt="" /> :
                            <img className='hidden lg:flex absolute  -right-6 top-9' src={circle} alt="" />
                        }
                    </div>
                }
            </div>
        )
    }

    const Connector1 = () => {
        return (
            <div className='border-[#8EBBE8] hidden lg:flex absolute border-2 rounded-2xl border-dashed w-[700px] -z-10 h-[80px] -top-5  border-t-0 border-l-0 '>

            </div>

        )
    }

    const Connector2 = () => {
        return (
            <div className='border-[#8EBBE8] hidden lg:flex absolute border-2 rounded-2xl border-dashed w-[800px] -z-10 h-[80px] top-28  border-b-0 border-l-0 '>

            </div>
        )
    }

    return (
        <div className='poppins px-5'>
            <div className=" lg:flex items-center  max-w-5xl mx-auto ">
                <img className='w-2/3 lg:w-1/2 mx-auto lg:mx-0' src={project} alt="" />
                <div className='w-2/3 md:w-2/5 mb-10 mx-auto lg:mx-0 lg:ml-auto'>
                    <h1 className='text-center md:text-start text-4xl lg:text-5xl my-10'>Our Services</h1>
                    <p className=' font-semibold lg:font-bold '>Welcome to Shabuj Global Education! We are dedicated to guiding you through the exciting journey of studying abroad. Our comprehensive range of services is designed to ensure a smooth and successful experience for every student. Explore our services below to see how we can help you achieve your academic dreams.</p>
                </div>
            </div>

            <div className='max-w-5xl z-0    mx-auto  flex flex-col items-center justify-center  gap-10 lg:gap-0'>
                {/* first 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card  index={0}/>
                    </div>
                    <div className='lg:grid grid-cols-3  -z-10 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-2/3   mx-auto mr-16' src={counsel} alt="" />
                        </div>
                        <Card circle={circle} position='top-center' index={1} />
                    </div>

                    {/* first bordered card */}
                    <Connector2 />
                </div>




                {/* second 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card circle={circle} index={2} />
                    </div>
                    <div className='lg:grid grid-cols-3  -z-10 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <Card circle={circle} position='top-center'  index={3}/>
                    </div>
                    {/* second bordered card */}
                    <Connector1 />
                    <Connector2 />
                </div>

                {/* third 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card circle={circle} index={4}/>
                    </div>
                    <div className='lg:grid grid-cols-3  -z-10 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-2/5   ml-auto  mb-5' src={passport} alt="" />
                        </div>
                        <Card circle={circle} position='top-center'  index={5}/>
                    </div>
                    <Connector1 />
                    <Connector2 />
                </div>

                {/* fourth 2 cards */}
                <div className='relative'>
                    <div className='z-10 mb-10 lg:mb-0'>
                        <Card circle={circle} index={6}/>
                    </div>
                    <div className='lg:grid grid-cols-3  z-20 lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-6/12 z-20  ml-auto mr-20' src={airport} alt="" />
                        </div>
                        <Card circle={circle} position='top-center' index={7}/>
                    </div>
                    <Connector1 />
                    <Connector2 />

                </div>

                {/* fifth card */}
                <div className='relative'>
                    <div className='  mb-10 lg:mb-0'>
                        <Card circle={circle} index={8}/>
                    </div>
                    <div className='lg:grid grid-cols-3    lg:-mt-56'>
                        <div className='col-span-2   items-end lg:flex hidden '>
                        </div>
                        <div className='col-span-2   items-end lg:flex hidden '>
                            <img className='w-6/12 z-10  hidden ml-auto mr-20' src={airport} alt="" />
                        </div>
                        <div className='invisible'>
                            <Card index={9}/>
                        </div>
                        <Connector1 />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Services_Components;