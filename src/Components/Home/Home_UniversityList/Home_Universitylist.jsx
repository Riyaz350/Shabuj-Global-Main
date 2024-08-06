import './Home_UniversityList.css'
import allUni from '../../../../public/universities_json/allUni.json'
import { Link } from 'react-router-dom';
const Home_UniversityList = () => {
    console.log(allUni)
    return (
        <div className='lg:mt-[131px] mt-[40px] lg:mb-[117px] mb-[40px]'>
            <div className='text-center'>
                <h2 className='text-[#004ACB] poppins-bold text-[50px] mb-2'>Universities Across The Globe</h2>
                <p className='poppins-bold text-[67px]'>The Choice is Endless</p>
                <img className='mx-auto lg:w-[290px] w-[190px] py-3 bg-white' src="https://i.ibb.co/wMCkStV/University-Section-Animation.gif" alt="" />
            </div>
            <div className='ticker-one flex overflow-hidden mb-6'>
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
            </div>
            <div className='text-center mt-[98px]'>
                <button className='text-white bg-[#2563EB] hover:bg-[#3D7DED] rounded-[32px] mulish-regular lg:text-[21px] text-[14px] px-[89px] py-2 mb-[41px]'>View All Universites</button>
            </div>
        </div>
    );
};

export default Home_UniversityList;