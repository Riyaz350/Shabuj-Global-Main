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
                                
                                <img key={index} className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data.img} alt="" />
                        )
                        )}
                    </div>
                </Marquee>
            </div>
        </div>
    )

};

export default ImageGallery;