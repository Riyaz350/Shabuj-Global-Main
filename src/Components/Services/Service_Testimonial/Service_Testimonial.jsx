import './Service_Testimonial.css'

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Service_SingleTestimonial from './Service_SingleTestimonial';
const Service_Testimonial = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("service_testimonial.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className='serviceTestimonial-bg'>
            <div>
                <h2 className='poppins-semibold text-[56px] leading-[72.8px] -tracking-[0.01em] text-white pt-[82px] pb-[62px] text-center'>Testimonial</h2>
            </div>
            <div>
                <Swiper
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40
                        },
                        1024: {
                          slidesPerView: 2.5,
                          spaceBetween: 59
                        }
                      }}
                    centeredSlides={true}
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
                        <SwiperSlide key={item.id} className='!m-0'>
                            <Service_SingleTestimonial item={item}></Service_SingleTestimonial>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='text-center pt-[66px] pb-[75px]'>
                <button className='testimonial--btn-prev rounded-full inline-flex items-center justify-center lg:w-[72px] w-[60px] lg:h-[72px] h-[60px] border border-white text-lg text-[#fff] hover:text-black hover:bg-white mr-6'><FaArrowLeft></FaArrowLeft></button>
                <button className='testimonial--btn-next rounded-full inline-flex items-center justify-center lg:w-[72px] w-[60px] lg:h-[72px] h-[60px] border border-white text-lg text-[#fff] hover:text-black hover:bg-white'><FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Service_Testimonial;