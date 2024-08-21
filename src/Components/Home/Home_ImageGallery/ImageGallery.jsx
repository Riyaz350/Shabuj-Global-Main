import './Home_ImageGallery.css'
import Marquee from "react-fast-marquee";

import img1 from '../../../assets/gallery/1.jpg'
import img2 from '../../../assets/gallery/2.jpg'
import img3 from '../../../assets/gallery/3.jpg'
import img4 from '../../../assets/gallery/4.jpg'
import img5 from '../../../assets/gallery/5.jpg'
import img6 from '../../../assets/gallery/6.jpg'
import img7 from '../../../assets/gallery/7.jpg'
import { useState } from 'react';
const ImageGallery = () => {
    const [imageState, setImageState] = useState(null)
    const galleryData = [
        {
            "img": img1,
            "title": "title",
            "description": "description"
        },
        {
            "img": img2,
            "title": "title",
            "description": "description"
        },
        {
            "img": img3,
            "title": "title",
            "description": "description"
        },
        {
            "img": img4,
            "title": "title",
            "description": "description"
        },
        {
            "img": img6,
            "title": "title",
            "description": "description"
        },
        {
            "img": img7,
            "title": "title",
            "description": "description"
        }
    ]
    return (
        <div className="main flex flex-col items-center align overflow-hidden">
            <h1 className="text-white text-[67px] text-center font-[700] leading-[87px] p-[20px]">Image Gallery</h1>


            <div className="flex overflow-hidden lg:mb-[44px] mb-4 cursor-pointer"  >

                <Marquee pauseOnHover={true} autoFill={true}>
                    <div className="flex gap-5 pl-2.5 pr-2.5 " >
                        {galleryData.map((data, index) =>
                        (
                            <div onMouseEnter={()=>setImageState(index)} onMouseLeave={()=>setImageState(null)} key={index} className="img1 mx-5 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s">
                                <div className={` absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] ${imageState == index? "flex flex-col" : 'hidden'}`}>
                                    <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
                                    <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
                                </div>
                                <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data.img} alt="" />
                            </div>
                        )
                        )}
                    </div>
                </Marquee>
            </div>
        </div>
    )

};

export default ImageGallery;