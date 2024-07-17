
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <div className='w-full bg-transparent mb-[-1px]'>
                    <img src="./assets/footerShape.png" className='w-full bg-white' alt="" />
                </div>
                <div className='bg-[#081831] px-6 relative'>
                    <div className='footer-1 text-center max-w-[1154px] mx-auto'>
                        <h2 className='poppins-semibold text-[21px] text-white mb-4'>Our Students are Our Reference</h2>
                        <img className='mx-auto mb-[22px]' src="./assets/logo2.png" alt="logo" />

                    </div>
                    
                    <div className='footer-2 leading-[150%] text-[#CACACA] border-t border-white pt-[35px] max-w-[1154px] mx-auto mt-[35px] flex flex-col lg:flex-row lg:gap-[117px]'>
                        <div className='w-[231px]'>
                            <h2 className='mulish-regular text-base mb-4'>About Shabuj Global Education</h2>
                            <p className='mulish-regular text-base'>Lorem ipsum dolor sit amet consectetur. Amet commodo bibendum ac sem molestie. Nisi imperdiet orci nulla in. Convallis eu ligula neque id varius sit lacus et. Pellentesque porta interdum morbi enim ultrices egestas aliquet amet. Aliquet elit amet porttitor posuere.</p>
                        </div>
                        <div className='w-[177px]'>
                            <h2 className='lg:mulish-bold mulish-regular text-base mb-4 mt-8 uppercase'>Study Destinations</h2>
                            <ul className='mulish-regular text-base'>
                                <li>UK</li>
                                <li>USA</li>
                                <li>Canada</li>
                                <li>Australia</li>
                                <li>Germany</li>
                                <li>New Zealand</li>
                            </ul>
                        </div>
                        <div className='w-[282px]'>
                            <h2 className='lg:mulish-bold mulish-regular text-base mb-4 mt-8 uppercase'>Services for students</h2>
                            <ul className='mulish-regular lg:text-base text-sm'>
                                <li>Counselling</li>
                                <li>Test Preparation</li>
                                <li>Course, Country & University Selection</li>
                                <li>Scholarship</li>
                                <li>File Assessment</li>
                            </ul>
                            <p className='lg:mulish-bold mulish-regular text-base mt-3 uppercase'>Services for institutions</p>
                            <p className='lg:mulish-bold mulish-regular text-base mt-3 uppercase'>Services for partners</p>
                        </div>
                        <div className='w-[229px]'>
                            <h2 className='lg:mulish-bold mulish-regular text-base mb-4 mt-8 uppercase'>Company</h2>
                            <ul className='mulish-regular lg:text-base text-sm'>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Events</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                            <p className='lg:mulish-bold mulish-regular text-base mt-9 uppercase'>search universities</p>
                            <p className='lg:mulish-bold mulish-regular text-base mt-3 uppercase'>upcoming events</p>
                            <p className='lg:mulish-bold mulish-regular text-base mt-3 mb-[41px] uppercase'>book online counselling</p>
                        </div>

                    </div>
                    
                    <div className='footer-3 leading-[150%] max-w-[1154px] mx-auto flex lg:flex-row flex-col lg:gap-[114px] border-t border-white'>
                        <div className='lg:border-none border-b border-white pb-[25px]'>
                            <div className='lg:w-[577px] lg:h-[164px] w-[309px] bg-[rgba(255,255,255,0.7)] rounded-2xl text-center mt-[27px] mb-[31px]'>
                                <h2 className='poppins-semibold text-[28px] text-[#081831] leading-[39.2px] pt-[14px] pb-[30px]'>UKVI Approved Test Centre for</h2>
                                <div className='flex lg:flex-row flex-col justify-center items-center gap-[41px]'>
                                    <img src="./assets/footer1.png" className='w-[125px] pb-8' alt="" />
                                    <img src="./assets/footer2.png" className='w-[166px] pb-8' alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='lg:mulish-bold mulish-regular uppercase text-base text-center text-[#CACACA] mb-6 mt-4'>Our offices</h2>
                            <div className='lg:flex block gap-[23px]'>
                                
                                <div className='flex flex-wrap lg:flex-nowrap lg:gap-[23px] gap-4'>
                                    <div>
                                        <h3 className='mulish-bold text-base text-[#5093FB] text-center lg:text-left mb-[18px]'>Head Office (London)</h3>
                                        <h3 className='mulish-bold text-base text-[#5093FB]'>South Asian Regional<br></br> Head Office (Dhaka)</h3>
                                        <p className='mulish-regular text-base text-[#CACACA]'>Chattogram Office</p>
                                        <p className='mulish-regular text-base text-[#CACACA] mb-0'>Sylhet Office</p>
                                    </div>
                                    <div>
                                        <h3 className='mulish-bold text-base text-[#5093FB]'>India Office</h3>
                                        <p className='mulish-regular text-base text-[#CACACA]'>Kannur</p>
                                        <p className='mulish-regular text-base text-[#CACACA]'>Kochi</p>
                                        <h3 className='mulish-bold text-base text-[#5093FB] pt-[20px]'>Middle East Office</h3>
                                        <p className='mulish-regular text-base text-[#CACACA] mb-[31px]'>Dubai</p>
                                    </div>
                                    <div>
                                        <h3 className='mulish-bold text-base text-[#5093FB]'>Nigeria Office</h3>
                                        <p className='mulish-regular text-base text-[#CACACA]'>Lagos</p>
                                        <p className='mulish-regular text-base text-[#CACACA]'>Abuja</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='footer-4 max-w-[1154px] mx-auto pb-6 flex flex-col lg:flex-row justify-between items-center border-t border-white'>
                        <div className='flex gap-[26px] mt-[21px] lg:border-none border-b border-white lg:w-1/3 w-full pb-[11px]'>
                            <img src="./assets/facebook.png" alt="facebook" />
                            <img src="./assets/instagram.png" alt="instagram" />
                            <img src="./assets/linkedin.png" alt="linkedin" />
                            <img src="./assets/youtube.png" alt="youtube" />
                        </div>
                        <div className='flex lg:gap-[18px] flex-col items-center lg:flex-row text-center'>
                            <p className='mulish-regular text-[14px] text-[#CACACA] mt-6 lg:mt-0 px-20 lg:px-0'>Copyright © 2024, All Right Reserved <span className='underline'>Shabuj Global Education</span></p>
                            <p className='mulish-regular text-[14px] text-[#CACACA]'>Terms & Conditions</p>
                            <p className='mulish-regular text-[14px] text-[#CACACA]'>Privacy Policy</p>
                        </div>
                    </div>
                    <div className='absolute bottom-0 left-48 lg:block hidden'>
                        <img src="./assets/vector7.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
