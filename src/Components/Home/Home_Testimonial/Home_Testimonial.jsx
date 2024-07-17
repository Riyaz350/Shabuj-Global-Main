import './Home_Testimonial.css'
import { useEffect, useState } from "react";
import SingleTestimonial from "./SingleTestimonial.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Home_Testimonial = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("testimonial.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className='bg-color lg:pt-[110px] pt-[34px] lg:pb-[122px] pb-[32px]'>
            <div className='flex flex-col lg:flex-row lg:gap-1 gap-6'>
                <div>
                    <h2 className='poppins-bold text-gradient leading-[130%] tracking-tight lg:text-[67px] text-[38px] lg:text-left  text-center  lg:pt-7 pt-4 lg:pl-[374px] padding-left'>Become a<br></br> Part of Our Success<br></br>
                        Stories</h2>
                    
                </div>

                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={22}
                    loop={true}
                    navigation={{
                        clickable: true,
                        nextEl: '.testimonial--btn-next',
                        prevEl: '.testimonial--btn-prev'
                    }}
                    modules={[FreeMode, Navigation]}
                    className='mySwiper'
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id} className='lg:!w-[371px]'>
                            <SingleTestimonial item={item}></SingleTestimonial>
                        </SwiperSlide>
                    ))}
                </Swiper>
                 
            </div>
            <div className='lg:pl-[376px] pl-36 lg:pt-0 pt-[27px] padding-left md:pl-72'>
                <button className='testimonial--btn-prev rounded-full inline-flex items-center justify-center lg:w-[72px] w-[60px] lg:h-[72px] h-[60px] border border-white text-lg text-[#fff] hover:text-black hover:bg-white mr-6'><FaArrowLeft></FaArrowLeft></button>
                <button className='testimonial--btn-next rounded-full inline-flex items-center justify-center lg:w-[72px] w-[60px] lg:h-[72px] h-[60px] border border-white text-lg text-[#fff] hover:text-black hover:bg-white'><FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Home_Testimonial;