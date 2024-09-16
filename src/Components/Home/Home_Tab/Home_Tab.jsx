import { Link } from 'react-router-dom';
import './Home_Tab.css'

const Home_Tab = () => {
    return (
        <div className="tabs-area lg:pt-[175px] max-w-[1154px] mx-auto ">

        <div className="single-tab px-10">
            <input className='div-inputs' id="students" type="radio" name="tab" defaultChecked></input>
            <label className='tab-btn inter-bold text-[20px] rounded-[32px] py-[10px] px-[120px] bg-white text-[#004ACB] mr-[22px] label' htmlFor="students">For Students</label>
            <div className="tab-content tab-1 color_div text-center lg:text-left mb-[56px] pt-[50px] md:pt-[150px] lg:pt-0">
                <div className='flex flex-col'>
                    <p className='poppins-semibold text-[28px] text-[#2563EB] mb-[14px]'>For Students</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-[28px] items-center'>
                    <div className='order-2 lg:order-1 text-center lg:text-left'>
                        <h2 className='poppins-semibold text-[20px] lg:text-[38px] text-[#081831] leading-[130%] max-w-lg lg:px-0 px-6'>Get complete guidance in your study abroad journey from start to finish
                        </h2>
                        <p className='mulish-regular text-[12px] lg:text-[16px] text-[1F1F1F] pt-[14px] max-w-lg  lg:px-0 px-6'>Shabuj Global Education helps you with Course & University Selection, Interview and Test Preparation, Visa Application and Admission and more- so you can join your dream university with ease!</p>
                        <Link to={"/comingSoon"}>
                        <button className='bg-[#2563EB] hover:bg-[#126def] mulish-regular lg:text-[21px] text-[14px] text-white rounded-[32px] lg:px-[85px] px-10 lg:py-2 py-[8px] mt-6 mx-auto'>Start Now</button>
                        </Link>
                    </div>
                    <div className='order-1 lg:order-2 lg:pt-0 md:pt-10'>
                        <img className='w-[200px] md:w-[300px] lg:w-[447px] md:mx-auto' src="./assets/students.png" alt="students" />
                    </div>
                </div>
            </div>
        </div>

        <div className="single-tab px-10">
            <input className='div-inputs' id="partners" type="radio" name="tab"></input>
            <label className='tab-btn inter-bold text-[20px] rounded-[32px] py-[10px] px-[120px] bg-white text-[#2563EB] label' htmlFor="partners">For Partners</label>
            <div className="tab-content tab-2 color_div text-center lg:text-left  pt-[50px] md:pt-[150px] lg:pt-0">
                <div className='flex flex-col'>
                    <p className='poppins-semibold text-[28px] text-[#3560FF] mb-[14px]'>For Partners</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-[28px] items-center'>
                    <div className='order-2 lg:order-1 text-center lg:text-left'>
                        
                        <h2 className='poppins-semibold text-[20px] lg:text-[38px] text-[#081831]  max-w-lg leading-[130%]  lg:px-0 px-6'>Wow your students with Shabuj Global Education's trusted admission process</h2>
                        <p className='mulish-regular text-[12px] lg:text-[16px] text-[1F1F1F] pt-[14px] max-w-lg lg:px-0 px-6'>No more lack of trust and transparency we treat your business as our own. With SGE's 1500+ strong university network, experienced counsellors, and dedicated customer support, you can just focus on increasing your student reach and leave the processing part to us!</p>
                        <Link to={"/comingSoon"}><button className='bg-[#2563EB] hover:bg-[#126def] mulish-regular lg:text-[21px] text-[14px] text-white rounded-[32px] lg:px-[85px] px-10 lg:py-2 py-[8px] mt-6'>Explore More</button></Link>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <img className='w-[148px] md:w-[298px] lg:w-[447px] mx-auto' src="./assets/partner.png" alt="partners" />
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Home_Tab;