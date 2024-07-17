import './Home_DestinationCard.css'
import { MdKeyboardArrowRight } from "react-icons/md";
const Home_DestinationCard = () => {
    return (
        <div className='bg-color mt-20 pb-10 pt-[110px] lg:pb-[100px] relative'>
            <div className='text-center'>
                <h2 className='poppins-semibold lg:poppins-bold leading-[130%] -tracking-[0.02em] lg:text-[50px] text-[28px] text-gradient pb-2'>Choose Your Destination</h2>
                <p className='poppins-bold lg:text-[67px] leading-[130%] tracking-tight text-[38px] text-white pb-[80px]'>We’ll Plan the Rest</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-x-[170px] gap-x-4 lg:gap-y-[66px] gap-y-8 max-w-[1154px] mx-auto md:px-16 px-6'>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='uppercase text-[#88F3D0] flex items-center justify-center lg:pt-[145px] md:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>UK</p>
                        <button className='lg:pl-28 md:pl-32 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/uk.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='uppercase text-[#88F3D0] flex items-center justify-center lg:pt-[145px] md:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>USA</p>
                        <button className='lg:pl-28 md:pl-32 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/usa.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='uppercase text-[#88F3D0] flex items-center justify-center lg:pt-[145px] md:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>Canada</p>
                        <button className='lg:pl-28 md:pl-32 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/canada.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='text-[#88F3D0] flex items-center justify-center lg:pt-[145px] md:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>Australia</p>
                        <button className='lg:pl-28 md:pl-32 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/australia.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='text-[#88F3D0] flex items-center justify-center lg:pt-[145px] md:pt-[145px] pt-[81px] poppins-bold lg:text-[38px] text-[20px]'>Germany</p>
                        <button className='lg:pl-28 md:pl-32 pl-[62px] lg:pt-[61px] pt-[32px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/germany.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                    <div className='flip-card--front z-10 lg:w-[270px] w-[148px] lg:h-[350px] h-[192px] bg-[#0B1831]'>
                        <p className='text-[#88F3D0] flex items-center justify-center lg:pt-[120px] md:pt-[145px] pt-[69px] poppins-bold text-center lg:text-[38px] text-[20px]'>New<br></br> Zealand</p>
                        <button className='lg:pl-28 md:pl-32 pl-[62px] lg:pt-[27px] pt-[20px]'><MdKeyboardArrowRight className='rounded-full lg:w-[40px] w-[22px] lg:h-[40px] h-[22px] text-white bg-[#2563EB]'></MdKeyboardArrowRight></button>
                    </div>
                    <div className='flip-card--back'>
                        <img className='rounded-[32px] lg:w-[270px] w-[148px] lg:h-[350px] h-[192px]' src="./assets/newzealand.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div className='text-center pt-[70px]'>
                <button className='relative z-20 text-white hover:text-[#1968E7] bg-transparent border border-[#E1E1E1] hover:border-[#1968E7] rounded-[32px] poppins-bold lg:text-[18px] text-[14px] px-[124px] py-[21px]'>Explore More</button>
            </div>
            
            <div className='relative lg:block hidden max-w-[1155px] mx-auto'>
                <img src="./assets/planepath.png" className='absolute top-[-1350px] right-6' alt="path" />
            </div>
        </div>
    );
};

export default Home_DestinationCard;