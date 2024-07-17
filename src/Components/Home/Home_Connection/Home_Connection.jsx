import './Home_Connection.css'

const Home_Connection = () => {
    return (
        <div className='max-w-[1154px] lg:mx-auto bg-one relative lg:my-[175px] my-[64px] mx-6'>
            <h2 className='outfit-bold lg:text-5xl text-[38px] text-white pt-[64px] lg:pb-[18px] pb-[9px] lg:pl-72 pl-4 lg:text-left mx-auto text-center lg:w-full w-[70%]'>Ready to take the leap?</h2>
            <p className='inter-regular text-center lg:text-2xl text-[14px] text-white lg:pb-[33px] pb-[21px]'>Connect with our finest counsellors and biggest<br></br>
                study abroad community</p>
            <div className='text-center'>
                <button className='text-[#1F1F1F] bg-white rounded-[32px] mulish-regular lg:text-[21px] text-[14px] lg:px-[89px] px-[10px] lg:py-2 py-[3px] mb-[41px]'>Talk to a Counsellor</button>
            </div>
            <div className='absolute -left-20 -top-40 hidden lg:block'>
                <img src="./assets/image1.png" alt="" />
            </div>    
        </div>
    );
};

export default Home_Connection;