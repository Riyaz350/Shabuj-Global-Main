import { useEffect, useState } from 'react';
import './Home_ImageGallery2.css'
import Home_SingleImage from './Home_SingleImage';

const Home_ImageGallery2 = () => {
    const [items , setItems] = useState([])
    useEffect(() => {
        fetch("image2.json")
        .then((res) => res.json())
        .then((data) => setItems(data))
    },[])
    return (
        <div className='gallery-bg lg:pb-[132px] pb-[52px]'>
            <div>
                <h2 className='poppins-bold lg:text-[67px] text-[28px] lg:leading-[130%] leading-none lg:tracking-tight tracking-normal text-white text-center lg:pt-[78px] pt-[56px] lg:pb-[88px] pb-[67px]'>Image Gallery</h2>
            </div>
            <div className='flex gallery-one overflow-hidden lg:mb-[44px] mb-4'>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    {
                        items.slice(0,30).map( (item) => <Home_SingleImage item={item} key={item.id}></Home_SingleImage>)
                    }
                </div>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    {
                        items.slice(0,30).map( (item) => <Home_SingleImage item={item} key={item.id}></Home_SingleImage>)
                    }
                </div>
            </div>
            <div className='flex gallery-two overflow-hidden'>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    {
                        items.slice(31,69).reverse.map( (item) => <Home_SingleImage item={item} key={item.id}></Home_SingleImage>)
                    }
                </div>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    {
                        items.slice(31,69).reverse.map( (item) => <Home_SingleImage item={item} key={item.id}></Home_SingleImage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home_ImageGallery2;