import './Home_Banner.css'




const Home_Banner = () => {
    const text = "DREAM BIG STUDY ABROAD.";
    const Letter = text.split("");



    return (
        <div className='relative z-[2]'>
            <div className='section'>
                <div className='section-bg'></div>
                <div className='section-content pt-[31px] lg:pt-[93px] lg:pb-[206px] pb-[70px] max-w-[1155px] mx-auto'>
                    <div className='text-center lg:text-left'>
                        <h2 className='text-[#00399f] text-center tracking-tight lg:text-left text-[45px] lg:text-[90px] font-bold lg:leading-[110px] leading-[130%]'>Start Your Path to<br></br> Global Education</h2>
                        <p className='font-normal lg:text-left md:text-center text-left text-[14px] leading-[160%] lg:text-[21px] text-[#081831] pl-6 lg:pl-0 pt-[14px] lg:pb-[61px] pb-[19px]'>We take pride in our ability to help students achieve their<br></br> academic goals and succeed in life.</p>
                        <div className="buttons-group-container">
                            <div className="buttons-group">

                                <button>Enquire</button>
                                <button>Apply</button>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className='hidden lg:flex justify-center items-center max-w-[1155px] mx-auto'>
                <div className="circle">
                    <div className="icon">
                        <svg width="56" height="56" className='animate-bounce' viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.3333 9.33333C30.3333 8.04467 29.2887 7 28 7C26.7113 7 25.6667 8.04467 25.6667 9.33333V42.2002L14.4832 31.0168C13.572 30.1055 12.0946 30.1055 11.1834 31.0168C10.2722 31.928 10.2722 33.4054 11.1834 34.3166L24.7002 47.8333C26.5226 49.6558 29.4774 49.6558 31.2998 47.8333L44.8166 34.3166C45.7278 33.4054 45.7278 31.928 44.8166 31.0168C43.9054 30.1055 42.428 30.1055 41.5168 31.0168L30.3333 42.2002V9.33333Z" fill="#35383F" />
                        </svg>
                    </div>
                    <div className="text-two">
                        <p className='poppins-semibold'>
                            {Letter.map((item, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="letter"
                                        style={{
                                            transform: `rotate(${index * 15.5}deg)`
                                        }}
                                    >
                                        {item}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home_Banner;