import CountUp from "react-countup";
import './Home_Counter.css'
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Home_Counter = () => {
    const [counterState, setCounterState] = useState(false)
    return (
        <div className="bg-gradient-two bg-[#EBEBEB] max-w-[1154px] mx-auto rounded-[64px] lg:mt-[150px] mt-[28px] lg:mb-[140px] mb-[28px] relative lg:z-20">
            <div className="section-bg-overlay"></div>
            <div className="flex flex-col lg:block">
                <div className="lg:absolute lg:-top-24 lg:-z-40 order-2 pb-12 md:mx-auto">
                    <img src="./assets/strength1.png" alt="strength" />
                </div>
                
                <h2 className="poppins-bold text-gradient text-[67px] py-[101px] text-right pr-[66px] order-1">Our Core Strength</h2>
            </div>
            
            <ScrollTrigger onEnter={()=> setCounterState(true)} onExit={()=> setCounterState(false)}>
                <div className="flex justify-around flex-wrap gap-10 pb-[46px] pl-5 pr-5">
                    <div className="text-center child-one">
                        <img className="mx-auto" src="./assets/vector1.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                            { counterState && <CountUp start={0} end={16} duration={5}></CountUp>}
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Global Offices</p>
                    </div>
                    <div className="text-center child-two">
                        <img className="mx-auto" src="./assets/vector2.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={100} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">UK Education Fair</p>
                    </div>
                    <div className="text-center child-three">
                        <img className="mx-auto" src="./assets/vector3.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={50000} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Courses Offered</p>
                    </div>
                    <div className="text-center child-four">
                        <img className="mx-auto" src="./assets/vector4.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={350} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Global Counsellors</p>
                    </div>
                    <div className="text-center child-five">
                        <img className="mx-auto" src="./assets/vector5.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={150} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Recruiting University</p>
                    </div>
                    <div className="text-center child-six">
                        <img className="mx-auto" src="./assets/vector6.png" alt="icon" />
                        <h2 className="poppins-bold text-[50px] text-white">
                        { counterState && <CountUp start={0} end={5000} duration={5}></CountUp>}+
                        </h2>
                        <p className="mulish-regular text-[16px] text-white">Student Served</p>
                    </div>
                </div>
            </ScrollTrigger>
            <div className="absolute -bottom-36 lg:block hidden">
                <img src="./assets/bg-shape2.png" alt="" />
            </div>
        </div>
    );
};

export default Home_Counter;