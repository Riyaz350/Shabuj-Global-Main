import './Home_UniversityList.css'
import allUni from '../../../../public/universities_json/allUni.json'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
const Home_UniversityList = () => {
    return (
        <div className='lg:mt-[131px] mt-[40px] lg:mb-[117px] mb-[40px]'>
            <div className='text-center'>
                <h2 className='text-[#004ACB] poppins-bold text-[50px] mb-2'>Universities Across The Globe</h2>
                <p className='poppins-bold pt-5 lg:pt-0 text-4xl lg:text-[67px]'>The Choice is Endless</p>
                <img className='mx-auto lg:w-[290px] w-[190px] py-3 bg-white' src="https://i.ibb.co/wMCkStV/University-Section-Animation.gif" alt="" />
            </div>
            {/* <div className='ticker-one flex overflow-hidden mb-6'>
                <div className='flex ticker-items gap-5'>
                    {allUni.slice(0, 30).map((uni) => (
                        <Link to={`/singleUniversityAll/${uni.id}`} className='cursor-pointer' key={uni?.id}><img src={uni.logo} alt="university" /></Link>
                    ))}
                </div>
                <div className='flex ticker-items gap-5'>
                    {allUni.slice(31, 77).map((uni) => (
                        <Link to={`/singleUniversityAll/${uni.id}`} className='cursor-pointer' key={uni?.id}><img src={uni.logo} alt="university" /></Link>
                    ))}
                </div>
            </div>
            <div className='ticker-two flex overflow-hidden'>
                <div className='flex ticker-items gap-5'>
                    {allUni.slice(31, 77).map((uni) => (
                        <Link to={`/singleUniversityAll/${uni.id}`} className='cursor-pointer' key={uni?.id}><img src={uni.logo} alt="university" /></Link>
                    ))}
                </div>
                <div className='flex ticker-items gap-5'>
                    {allUni.slice(0, 30).map((uni) => (
                        <Link to={`/singleUniversityAll/${uni.id}`} className='cursor-pointer' key={uni?.id}><img src={uni.logo} alt="university" /></Link>
                    ))}
                </div>                
            </div> */}
            <Marquee className='mb-10' pauseOnHover={true} speed={250} direction='right'>
                <div className='flex  gap-10'>
                    {allUni.slice(0,40).map((uni) => (
                        <Link to={`/singleUniversityAll/${uni.id}`} className='cursor-pointer' key={uni?.id}><img className='w-[200px]' src={uni.logo} alt="university" /></Link>
                    ))}
                </div>
            </Marquee>
            <Marquee pauseOnHover={true} speed={250}>
                <div className='flex  gap-10'>
                    {allUni.slice(41,76).map((uni) => (
                        <Link to={`/singleUniversityAll/${uni.id}`} className='cursor-pointer' key={uni?.id}><img className='w-[200px]' src={uni.logo} alt="university" /></Link>
                    ))}
                </div>
            </Marquee>
            
            
            <div className='text-center mt-[98px]'>
                <Link to={"/comingSoon"}>
                <button className='text-white bg-[#2563EB] hover:bg-[#3D7DED] rounded-[32px] mulish-regular lg:text-[21px] text-[14px] px-[89px] py-2 mb-[41px]'>View All Universites</button>
                </Link>
            </div>
        </div>
    );
};

export default Home_UniversityList;