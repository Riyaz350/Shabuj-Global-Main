
import './Home_Events.css'
const Home_Events = () => {


    function slideNext() {
        var $slide_pos_center = document.getElementsByClassName("slide-pos-center")[0];
        var $slide_pos_left1 = document.getElementsByClassName("slide-pos-left1")[0];
        var $slide_pos_left2 = document.getElementsByClassName("slide-pos-left2")[0];
        var $slide_pos_right2 = document.getElementsByClassName("slide-pos-right2")[0];
        var $slide_pos_right1 = document.getElementsByClassName("slide-pos-right1")[0];

        $slide_pos_center.classList.remove('slide-pos-center');
        $slide_pos_center.classList.add('slide-pos-left1');

        $slide_pos_left1.classList.remove('slide-pos-left1');
        $slide_pos_left1.classList.add('slide-pos-left2');

        $slide_pos_left2.classList.remove('slide-pos-left2');
        $slide_pos_left2.classList.add('slide-pos-right2');

        $slide_pos_right2.classList.remove('slide-pos-right2');
        $slide_pos_right2.classList.add('slide-pos-right1');

        $slide_pos_right1.classList.remove('slide-pos-right1');
        $slide_pos_right1.classList.add('slide-pos-center');
    }

    function slidePrev() {
        var $slide_pos_center = document.getElementsByClassName('slide-pos-center')[0];
        var $slide_pos_left1 = document.getElementsByClassName('slide-pos-left1')[0];
        var $slide_pos_left2 = document.getElementsByClassName('slide-pos-left2')[0];
        var $slide_pos_right2 = document.getElementsByClassName('slide-pos-right2')[0];
        var $slide_pos_right1 = document.getElementsByClassName('slide-pos-right1')[0];

        $slide_pos_center.classList.remove('slide-pos-center');
        $slide_pos_center.classList.add('slide-pos-right1');

        $slide_pos_right1.classList.remove('slide-pos-right1');
        $slide_pos_right1.classList.add('slide-pos-right2');

        $slide_pos_right2.classList.remove('slide-pos-right2');
        $slide_pos_right2.classList.add('slide-pos-left2');

        $slide_pos_left2.classList.remove('slide-pos-left2');
        $slide_pos_left2.classList.add('slide-pos-left1');

        $slide_pos_left1.classList.remove('slide-pos-left1');
        $slide_pos_left1.classList.add('slide-pos-center');
    }

    return (
        <div className='events-bg lg:h-[915px] h-[629px] lg:mb-[100px] mb-5 events-width overflow-hidden'>
            <div>
                <h2 className='poppins-bold lg:text-[64px] text-[28px] text-gradient text-center lg:pt-[123px] pt-[50px] lg:pb-[68px] pb-[41px]'>Upcoming Events</h2>
            </div>
            <div className='events-bg max-w-[1254px] mx-auto relative pl-[50px] pr-[50px]'>
                
                    <div className='absolute left-[50%] -translate-x-1/2 slide-pos-center carousel-1 w-full'>
                        <img src="./assets/event1.png" alt="" className='w-[945px] h-[525px]' onClick={slideNext} />
                    </div>
                    <div className='absolute left-[50%] -translate-x-1/2 slide-pos-right1 carousel-1 w-full'>
                        <img src="./assets/event2.png" alt="" className='w-[945px] h-[525px]' onClick={slideNext} />
                    </div>
                    <div className='absolute left-[50%] -translate-x-1/2 slide-pos-right2 carousel-1 w-full'>
                        <img src="./assets/event3.png" alt="" className='w-[945px] h-[525px]' onClick={slideNext} />
                    </div>
                    <div className='absolute left-[50%] -translate-x-1/2 slide-pos-left1 carousel-1 w-full'>
                        <img src="./assets/event4.png" alt="" className='w-[945px] h-[525px]' onClick={slideNext} />
                    </div>
                    <div className='absolute left-[50%] -translate-x-1/2 slide-pos-left2 carousel-1 w-full'>
                        <img src="./assets/event5.png" alt="" className='w-[945px] h-[525px]' onClick={slideNext} />
                    </div>
                
                
                    <button className='absolute lg:flex hidden items-center lg:top-60 lg:left-0 button-one-next' onClick={slideNext}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 0H8C5.87827 0 3.84344 0.842854 2.34315 2.34315C0.842854 3.84344 0 5.87827 0 8V28C0 30.1217 0.842854 32.1566 2.34315 33.6569C3.84344 35.1571 5.87827 36 8 36H28C30.1217 36 32.1566 35.1571 33.6569 33.6569C35.1571 32.1566 36 30.1217 36 28V8C36 5.87827 35.1571 3.84344 33.6569 2.34315C32.1566 0.842854 30.1217 0 28 0ZM22 22.94C22.2809 23.2213 22.4387 23.6025 22.4387 24C22.4387 24.3975 22.2809 24.7787 22 25.06C21.7187 25.3409 21.3375 25.4987 20.94 25.4987C20.5425 25.4987 20.1612 25.3409 19.88 25.06L13.88 19.06C13.5991 18.7787 13.4413 18.3975 13.4413 18C13.4413 17.6025 13.5991 17.2213 13.88 16.94L19.88 10.94C20.1643 10.675 20.5404 10.5308 20.929 10.5376C21.3176 10.5445 21.6884 10.7019 21.9632 10.9768C22.2381 11.2516 22.3955 11.6224 22.4023 12.011C22.4092 12.3996 22.265 12.7756 22 13.06L17.12 18L22 22.94Z" fill="white" />
                        </svg>
                    </button>
                
                
                    <button className='absolute lg:block hidden z-10 lg:right-0 lg:top-60 button-one-prev' onClick={slidePrev}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 36L28 36C30.1217 36 32.1566 35.1571 33.6569 33.6569C35.1571 32.1566 36 30.1217 36 28L36 8C36 5.87827 35.1571 3.84344 33.6569 2.34315C32.1566 0.842856 30.1217 -5.13895e-07 28 -6.99382e-07L8 -2.44784e-06C5.87827 -2.63333e-06 3.84344 0.842853 2.34315 2.34314C0.842859 3.84344 2.63333e-06 5.87826 2.44784e-06 8L6.99382e-07 28C5.13895e-07 30.1217 0.842857 32.1566 2.34315 33.6569C3.84344 35.1571 5.87827 36 8 36ZM14 13.06C13.7191 12.7787 13.5613 12.3975 13.5613 12C13.5613 11.6025 13.7191 11.2212 14 10.94C14.2813 10.6591 14.6625 10.5013 15.06 10.5013C15.4575 10.5013 15.8388 10.6591 16.12 10.94L22.12 16.94C22.4009 17.2213 22.5587 17.6025 22.5587 18C22.5587 18.3975 22.4009 18.7787 22.12 19.06L16.12 25.06C15.8357 25.325 15.4596 25.4692 15.071 25.4623C14.6824 25.4555 14.3116 25.2981 14.0368 25.0232C13.7619 24.7484 13.6045 24.3776 13.5977 23.989C13.5908 23.6004 13.735 23.2243 14 22.94L18.88 18L14 13.06Z" fill="white" />
                        </svg>
                    </button>
                
                
                    <button className='absolute lg:hidden block z-10 top-[440px] left-52 md:left-96' onClick={slideNext}>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.456522" y="41.5435" width="41.087" height="41.087" rx="20.5435" transform="rotate(-90 0.456522 41.5435)" fill="white" />
                            <rect x="0.456522" y="41.5435" width="41.087" height="41.087" rx="20.5435" transform="rotate(-90 0.456522 41.5435)" stroke="white" stroke-width="0.913044" />
                            <path d="M13.3913 20.0488C12.866 20.0488 12.4402 20.4746 12.4402 20.9999C12.4402 21.5252 12.866 21.951 13.3913 21.951L26.7881 21.951L22.2297 26.5094C21.8582 26.8809 21.8582 27.4831 22.2297 27.8545C22.6011 28.2259 23.2033 28.2259 23.5747 27.8545L29.0842 22.3449C29.8271 21.6021 29.8271 20.3977 29.0842 19.6549L23.5747 14.1453C23.2033 13.7739 22.6011 13.7739 22.2297 14.1453C21.8582 14.5167 21.8582 15.1189 22.2297 15.4904L26.7881 20.0488L13.3913 20.0488Z" fill="#0D0D0D" />
                        </svg>
                    </button>
                
                
                    <button className='absolute lg:hidden block top-[440px] left-40 md:left-80' onClick={slidePrev}>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="41.5435" y="0.456522" width="41.087" height="41.087" rx="20.5435" transform="rotate(90 41.5435 0.456522)" fill="white" />
                            <rect x="41.5435" y="0.456522" width="41.087" height="41.087" rx="20.5435" transform="rotate(90 41.5435 0.456522)" stroke="white" stroke-width="0.913044" />
                            <path d="M28.6087 21.9512C29.134 21.9512 29.5598 21.5254 29.5598 21.0001C29.5598 20.4748 29.134 20.049 28.6087 20.049L15.2119 20.049L19.7703 15.4906C20.1418 15.1191 20.1418 14.5169 19.7703 14.1455C19.3989 13.7741 18.7967 13.7741 18.4253 14.1455L12.9158 19.6551C12.1729 20.3979 12.1729 21.6023 12.9158 22.3451L18.4253 27.8547C18.7967 28.2261 19.3989 28.2261 19.7703 27.8547C20.1418 27.4833 20.1418 26.8811 19.7703 26.5096L15.2119 21.9512L28.6087 21.9512Z" fill="#0D0D0D" />
                        </svg>
                    </button>
            
            </div>
        </div>
    );
};

export default Home_Events;