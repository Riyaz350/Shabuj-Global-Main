import './AboutUs_MeetOurFounder.css'

const AboutUs_MeetOurFounder = () => {
    return (
        <div className="max-w-[1152px] mx-auto pb-[120px] pt-[96px] relative">
            <div className='absolute top-3 -left-36 -z-10 lg:block md:hidden hidden'>
                <svg width="371" height="359" viewBox="0 0 371 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-20.2004 250.269L114.461 74.3497L-2.27924 353.146L195.187 5.28541L78.3684 328.804L193.531 154.494L159.485 304.333L237.316 217.381L252.112 315.315L329.131 269.501L361.486 335.804" stroke="#F5F5F5" strokeWidth="20" />
                </svg>
            </div>
            <div className='lg:px-[98px] md:px-12 px-8'>
                <div className="text-center">
                    <h2 className="poppins-semibold text-[28px] text-[#00399F] leading-[39.2px]">Meet Our Founder</h2>
                    <h3 className="poppins-semibold lg:text-[40px] text-[28px] text-[#081831] leading-[56px] -tracking-[0.02em] pb-[55px]">The visionary, inspiring global goals</h3>
                </div>
                <div className="flex shadow-about rounded-[32px] lg:flex-row flex-col">
                    <div className="lg:w-[28%] w-full">
                        <img src="./assets/founder.png" className="p-[31px] mx-auto" alt="image" />
                    </div>
                    <div className="lg:w-[72%] w-full lg:pr-[34px]">
                        <div className='flex justify-between items-center pt-[32px]'>
                            <h2 className="poppins-semibold text-[28px] text-[#081831]">MD. Zahidul Alam</h2>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_2055)">
                                    <path d="M22.7742 -0.000459671H2.31757C1.84769 -0.000459671 1.39706 0.186198 1.06481 0.51845C0.732556 0.850702 0.545898 1.30133 0.545898 1.77121V22.2279C0.545898 22.6977 0.732556 23.1484 1.06481 23.4806C1.39706 23.8129 1.84769 23.9995 2.31757 23.9995H22.7742C23.2441 23.9995 23.6947 23.8129 24.027 23.4806C24.3592 23.1484 24.5459 22.6977 24.5459 22.2279V1.77121C24.5459 1.30133 24.3592 0.850702 24.027 0.51845C23.6947 0.186198 23.2441 -0.000459671 22.7742 -0.000459671ZM7.69923 20.4445H4.0909V8.98287H7.69923V20.4445ZM5.89257 7.39454C5.48326 7.39224 5.08381 7.26874 4.74463 7.03963C4.40545 6.81052 4.14174 6.48607 3.98678 6.10723C3.83181 5.72839 3.79255 5.31213 3.87393 4.911C3.95531 4.50986 4.1537 4.14182 4.44405 3.85332C4.73441 3.56483 5.10371 3.36881 5.50536 3.29C5.90702 3.21119 6.32301 3.25313 6.70085 3.41053C7.07869 3.56792 7.40144 3.83371 7.62836 4.17435C7.85529 4.515 7.97622 4.91523 7.9759 5.32454C7.97976 5.59857 7.92841 5.87058 7.82491 6.12434C7.72141 6.37811 7.56788 6.60844 7.37347 6.80161C7.17906 6.99477 6.94775 7.14682 6.69332 7.24869C6.4389 7.35056 6.16657 7.40016 5.89257 7.39454ZM20.9992 20.4545H17.3926V14.1929C17.3926 12.3462 16.6076 11.7762 15.5942 11.7762C14.5242 11.7762 13.4742 12.5829 13.4742 14.2395V20.4545H9.8659V8.99121H13.3359V10.5795H13.3826C13.7309 9.87454 14.9509 8.66954 16.8126 8.66954C18.8259 8.66954 21.0009 9.86454 21.0009 13.3645L20.9992 20.4545Z" fill="#0A66C2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2055">
                                        <rect width="24" height="24" fill="white" transform="translate(0.545898 -0.000457764)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3 className="poppins-bold text-[20px] tracker-[0.01em] text-[#4B4B4B]">CEO</h3>
                        <p className="poppins-regular text-[16px] text-[#000000] pt-7 text-justify">Fifteen years ago, an enlightened visionary conceived Shabuj Global Education to simplify the daunting process of studying abroad. His goal is to help students explore global opportunities and access quality education. Today, he proudly supports thousands of students who have realized their dreams.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs_MeetOurFounder;