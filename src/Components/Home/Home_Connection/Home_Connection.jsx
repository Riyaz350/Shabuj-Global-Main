import { Link } from 'react-router-dom';
import './Home_Connection.css'

const Home_Connection = () => {
    return (
        <div className="w-full py-[20%] lg:py-[10% mx-10]">
        <div
          className="lg:max-w-[1150px]   rounded-[40px] h-[300px] bg-no-repeat relative lg:mx-auto md:mx-auto mx-10 lg:p-0   p-2 bg-top"
          style={{
            backgroundImage: `url(https://i.ibb.co/m8GTzjY/Rectangle.png)`,
          }}
        >
          <img
            className=" w-[350px] h-[350px] lg:block   hidden absolute -top-[145px] -left-[80px]"
            src="https://i.ibb.co/ZS43HFb/Leap-Icon.png"
            alt=""
          />
          <div className="text-center text-white lg:pt-16 md:pt-16 pt-7">
            <p className="font-bold lg:text-5xl md:text-5xl text-[42px] leading-[3rem]">Ready to take the leap?</p>
            <p className="lg:text-2xl md:text-2xl text-lg font-[300] lg:w-[45%] md:w-[45%] w-full mx-auto mb-7 mt-3">
              Connect With Our Finest Counsellors And Biggest Study Abroad
              Community
            </p>
            <Link to={"/comingSoon"}>
            <button className=" lg:text-xl md:text-xl text-lg bg-white rounded-full border-transparent border-[1px] text-black lg:px-20 md:px-20 px-5 lg:py-3 md:py-3  py-2 hover:text-blue-500 hover:border-blue-500 hover:border-[1px] ">
              Talk to a Counsellor
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Home_Connection;