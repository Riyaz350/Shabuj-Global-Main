import { Link } from 'react-router-dom';
import './Australia_Counselor.css'
import CounsellorSVG from '../../Shared/CounsellorSvg/CounsellorSVG';

const Australia_Counselor = (props) => {
    return (
        <div className='bg-[#BD0000]  mt-[90px]'>
            <div className='max-w-[1154px] mx-auto'>
                <div className='flex justify-around lg:flex-row flex-col'>
                    <div className='lg:text-left text-center'>
                        <h1 className='lg:poppins-semibold poppins-bold lg:text-[56px] text-[28px] lg:leading-[72.8px] leading-[32px] -tracking-[0.01em] text-white pt-[51px] lg:pb-[69px] pb-[30px]'>Talk to Our Expert<br></br> Australia Counselor</h1>
                        <Link to={"/comingSoon"} className='poppins-bold lg:text-[18px] text-[10px] bg-white lg:px-[124px] px-[66px] lg:py-[22px] py-[16px] rounded-[36px]'>Contact Now</Link>
                    </div>
                    <div className='lg:-mb-[90px] md:-mb-[62px] -mb-[10px] australiaCounselor mx-auto lg:-mt-[70px]'>

                    <CounsellorSVG props={props}/>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Australia_Counselor;