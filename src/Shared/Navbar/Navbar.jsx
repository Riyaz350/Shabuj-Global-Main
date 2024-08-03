import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import UK from '../../assets/Flags/UK Flag.svg'
import USA from '../../assets/Flags/USA Flag.svg'
import Australia from '../../assets/Flags/Australia Flag.svg'
import Germany from '../../assets/Flags/Germany Flag.svg'
import Canada from '../../assets/Flags/Canada Flag.svg'
import NZ from '../../assets/Flags/Newzealand Flag.svg'

import testPrep1 from '../../assets/Navbar/Test Prep/IELTS Logo.svg'
import testPrep2 from '../../assets/Navbar/Test Prep/SELT Logo.png'
import { BsGridFill, BsCameraVideoFill } from "react-icons/bs";
import {
  IoShieldCheckmarkSharp,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { FaClock, FaUserFriends, FaHeart, FaChevronDown } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";
import { RiNewsFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrophoneLines, FaChevronUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navButton, setNavButton] = useState(0);
  const [navIndex, setNavIndex] = useState(0);
  const iconStyle = "flex items-center gap-2";
  const flagClass = "flex w-10/12 mx-auto lg:w-full flex-col justify-center item-center text-center my-2 lg:my-20"
  const flag = "w-3/4 mx-auto rounded-lg "

  const enterNavButton = (index) => {
    setNavButton(index)
  };
  const leaveNavButton = () => {
    setNavButton(0)
  };
  const [width, setWidth] = useState(null)



  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const NavButton = ({ ind, text }) => {
    return (
      <div className={` cursor-pointer  `}>
        <div className="flex items-center gap-2" onMouseEnter={() => enterNavButton(ind)} >
          <button className="flex items-center gap-1">
            <p className={`${width >= 1244 ? 'text-base' : 'text-sm'} bg-white  lg:bg-[#F0F8FF] font-semibold`}>{text}</p>
          </button>
          <span className={` ${navButton == ind && 'rotate-180 transition ease-in-out delay-450'}`}>
            <FaChevronUp />
          </span>
        </div>
      </div>
    );
  };

  const handleNavButton = (index) => {
    navButton == 0 ? setNavButton(index) : setNavButton(0);
  };
  const handleSmallNavButton = (index) => {
    setNavButton(index)
  };

  const SmallNavButton = ({ ind }) => {
    return (
      <div className={` cursor-pointer `}>
        <div onClick={() => handleNavButton(ind)}>
          {navButton == ind ? (
            <>
              <FaChevronUp />
            </>
          ) : (
            <>
              <FaChevronDown />
            </>
          )}
        </div>
      </div>
    );
  };

  useEffect(() => {
    setNavIndex(navButton);
  }, [navButton, setNavIndex]);
  return (
    <div onMouseLeave={() => leaveNavButton()} className="relative bg-[#F0F8FF]  ">
      <div className="px-3 lg:px-28 gap-10 flex flex-row items-center lg:items-end justify-between py-10  lg:py-5">

        <Link to={"/"}>
          <img
            className="h-[30px] w-[200px]   lg:mx-0 md:h-[40px] md:w-[250px] lg:h-[50px] lg:w-[350px]"
            src={logo}
            alt=""
          />
        </Link>

        {/* Small device nav drawer start */}
        <div className=" flex lg:hidden">
          <div className="drawer drawer-end  z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button  w-fit">
                <span className="btn bg-transparent shadow-none text-2xl p-2">
                  <GiHamburgerMenu />
                </span>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

              <ul className="    z-50 menu bg-base-200 text-base-content min-h-full w-80 p-4">
                
                <div onClick={()=>handleSmallNavButton(1)} className=" ">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button text-lg font-semibold">Study Destination</label>
                  </div>
                </div>

                <div onClick={()=>handleSmallNavButton(2)} className=" ">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button text-lg font-semibold">Services</label>
                  </div>
                </div>

                <div onClick={()=>handleSmallNavButton(3)} className=" ">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button text-lg font-semibold">Test Prep</label>
                  </div>
                </div>

                <div onClick={()=>handleSmallNavButton(4)} className=" ">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button text-lg font-semibold">About</label>
                  </div>
                </div>

               
                  

                <button className="bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl">
                  Log In
                </button>
              </ul>


            </div>
          </div>
        </div>

        {/* Small device navbar buttons */}
        {/* <div className=" flex lg:hidden">
          <details className="dropdown dropdown-left">
            <summary className="btn bg-transparent shadow-none text-2xl p-2">
              <GiHamburgerMenu />
            </summary>
            <ul className="   gap-2  menu dropdown-content bg-white rounded-box z-50 w-fit  px-5 shadow">
              <div className="flex justify-center items-center gap-1">
                
                  <button className="flex items-center  gap-1">
                    <p className="text-sm font-semibold">Study Destination</p>
                  </button>
                <SmallNavButton ind={1} />
              </div>

              <div className="flex justify-center items-center gap-1">
                <Link to={"/services"}>
                  <button className="flex items-center gap-1">
                    <p className="font-semibold">Services</p>
                  </button>
                </Link>
                <SmallNavButton ind={2} />
              </div>

              <div className="flex justify-center items-center gap-1">
                <button className="flex items-center gap-1">
                  <p className="font-semibold">Test Prep.</p>
                </button>
                <SmallNavButton ind={3} />
              </div>

              <div className="flex justify-center items-center gap-1">
                <Link to={"/about"}>
                  <button>
                    <p className="  font-semibold">About</p>
                  </button>
                </Link>
                <SmallNavButton ind={4} text="About Us" />
              </div>

              <button className="bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl">
                Log In
              </button>
            </ul>
          </details>
        </div> */}

        {/* Large device navbar buttons */}

        <div className="hidden items-center justify-between my-5 lg:flex gap-6  ">
          <div className="flex items-center gap-1">
            <NavButton text='Study Destination' ind={1} />
          </div>

          <div className="flex items-center gap-1">
            <Link to={"/services"}>
              <NavButton text='Services' ind={2} />
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <NavButton text='Test Prep.' ind={3} />
          </div>

          <div className="flex items-center gap-1">
            <Link to={"/about"}>

              <NavButton ind={4} text="About Us" />
            </Link>
          </div>

          <button className="bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl">
            Log In
          </button>
        </div>
      </div>

      {/* Navbar Item */}
      <div className=" bg-white absolute w-full    z-40 shadow-lg">
        {navIndex == 1 && (
          <div>
            <ul className="grid grid-cols-2 md:flex justify-between max-w-7xl mx-auto">
              <Link className={flagClass} to={"/UK"}><img className={flag} src={UK} /><li>Study in UK</li></Link>
              <Link className={flagClass}><img className={flag} src={USA} /><li></li><li>Study in USA</li></Link>
              <Link className={flagClass} to={"/Australia"}><img className={flag} src={Australia} /><li>Study in Australia</li></Link>
              <Link className={flagClass}><img className={flag} src={Canada} /><li>Study in Canada</li></Link>
              <Link className={flagClass} to={"/Germany"}><img className={flag} src={Germany} /><li>Study in Germany</li></Link>
              <Link className={flagClass}><img className={flag} src={NZ} /><li>Study in New Zealand</li></Link>
            </ul>
          </div>
        )}
        {navIndex == 2 && (
          <>
            <div className="flex flex-col  mx-20 my-10 md:grid  grid-cols-3  md:max-w-7xl lg:mx-auto ">
              <div className="col-span-2 my-10">
                <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                  FOR STUDENTS
                </h2>
                <div className="flex flex-col md:flex-row  justify-center md:justify-start gap-10">
                  <ul className="space-y-2 text-lg">
                    <li>Free Study Abroad Counselling</li>
                    <li>Student Visa</li>
                    <li>University Application Process</li>
                    <li>International Student Visa Guidance</li>
                  </ul>
                  <ul className="space-y-2 text-lg">
                    <li>University Scholarship Guidance</li>
                    <li>Study Abroad Destination Guide</li>
                    <li>Personality Assessment Test</li>
                    <li>Study Accommodation</li>
                  </ul>
                </div>
              </div>

              <div className="col-span-1 md:my-10">
                <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                  FOR PARTNERS
                </h2>
                <ul className="space-y-2 text-lg">
                  <li>Customized Solution</li>
                  <li>Instant Support</li>
                  <li>Commissions</li>
                  <li>Technological Support</li>
                </ul>
              </div>
            </div>
          </>
        )}
        {navIndex == 3 && (
          <div className="flex  justify-around py-10">
            <img className="w-5/12 lg:w-2/12" src={testPrep1} alt="img1" />
            <img className="w-5/12 lg:w-2/12" src={testPrep2} alt="img2" />
          </div>
        )}
        {navIndex == 4 && (
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4  max-w-7xl mx-10 space-y-2 lg:space-y-0 lg:mx-auto my-10">
            <ul className="col-span-1 space-y-4 text-lg ">
              <li className={iconStyle}>
                <BsGridFill />
                Who We Are
              </li>
              <li className={iconStyle}>
                <FaHeart />
                Our Partners
              </li>
              <li className={iconStyle}>
                <FaClock />
                Our Timeline
              </li>
              <li className={iconStyle}>
                <FaUserFriends />
                Our Leadership Team
              </li>
            </ul>
            <ul className="col-span-1 space-y-4 text-lg ">
              <li className={iconStyle}>
                <IoShieldCheckmarkSharp />
                Partner With Us
              </li>
              <li className={iconStyle}>
                <IoCheckmarkDoneCircleSharp />
                Award Recognitions
              </li>
              <div className={`${iconStyle}'flex gap-2 items-center'`}>
                <SiGooglesheets />
                <li>Careers</li>{" "}
                <span className="text-sm bg-green-500 text-white mx-2 p-1 rounded-sm">
                  Hiring
                </span>
              </div>
              <li>
                <Link className={iconStyle} to="/blogs">
                  <RiNewsFill />
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="col-span-1 space-y-4 text-lg ">
              <li>
                <Link className={iconStyle} to="/contact">
                  <BiSolidPhoneCall />
                  Contact Us
                </Link>
              </li>
              <li className={iconStyle}>
                <FaMicrophoneLines />
                News & Press
              </li>

              <li className={iconStyle}>
                <Link className={iconStyle} to="/events">
                  <BsCameraVideoFill />
                  Events & Webinars
                </Link>
              </li>
            </ul>
            <ul></ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
