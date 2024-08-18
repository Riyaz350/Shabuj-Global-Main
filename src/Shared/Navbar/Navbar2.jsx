import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import UK from "../../assets/Flags/UK Flag.svg";
import USA from "../../assets/Flags/USA Flag.svg";
import Australia from "../../assets/Flags/Australia Flag.svg";
import Germany from "../../assets/Flags/Germany Flag.svg";
import Canada from "../../assets/Flags/Canada Flag.svg";
import NZ from "../../assets/Flags/Newzealand Flag.svg";
import UAE from "../../assets/Flags/UAE.jpg";
import Georgia from "../../assets/Flags/Georgia.png";
import Finland from "../../assets/Flags/Finland.png";
import Cyprus from "../../assets/Flags/Cyprus.png";
import Switzerland from "../../assets/Flags/Switzerland.png";
import France from "../../assets/Flags/France.png";
import WestIndies from "../../assets/Flags/West-Indies.jpg";

import testPrep1 from "../../assets/Navbar/Test Prep/IELTS Logo.svg";
import testPrep2 from "../../assets/Navbar/Test Prep/SELT Logo.png";
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
import { FcAbout } from "react-icons/fc";

const Navbar2 = () => {
  const [navButton, setNavButton] = useState(0);
  const [navIndex, setNavIndex] = useState(0);
  const iconStyle =
    "flex bg-gray-200 lg:bg-white px-5 gap-2 items-center hover:text-blue-500";
  const flagClass =
    "flex w-10/12 mx-auto flex-1 md:max-w-[14.28%] flex-col justify-center item-center text-center my-2 lg:mt-10";
  const flag = "w-3/4 mx-auto rounded-lg ";

  const enterNavButton = (index) => {
    setNavButton(index);
  };
  const leaveNavButton = () => {
    setNavButton(0);
  };
  const [width, setWidth] = useState(null);
  console.log(width)
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const NavButton = ({ ind, text }) => {
    return (
      <div className={` cursor-pointer  `}>
        <div
          className="flex items-center gap-2"
          onMouseEnter={() => enterNavButton(ind)}
        >
          <button className="flex items-center gap-1">
            <p
              className={`   bg-white  lg:bg-[#F0F8FF] font-semibold`}
            >
              {text}
            </p>
          </button>
          <span
            className={` ${navButton == ind && "rotate-180 transition ease-in-out delay-450"
              }`}
          >
            <FaChevronUp />
          </span>
        </div>
      </div>
    );
  };

  const handleNavButton = (index) => {
    navButton == 0 ? setNavButton(index) : setNavButton(0);
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
    <div
      onMouseLeave={() => leaveNavButton()}
      className="relative bg-[#F0F8FF]  "
    >
      <div className="px-3  lg:px-14 gap-10 flex flex-row items-center    justify-between py-10  lg:py-5">
        <Link to={"/"}>
          <img
            className="h-[30px] w-[200px] lg:mx-0 md:h-[40px] md:w-[250px] lg:h-[50px] lg:w-[350px]"
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
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="z-50 menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div>
                  <Link to="/" className="pl-5 text-xl font-medium">
                    Home
                  </Link>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Study Destination
                  </div>
                  <div className="collapse-content">
                    <ul className="grid grid-cols-2 lg:flex justify-between max-w-7xl mx-auto">
                      <Link className={flagClass} to={"/UK"}>
                        <img
                          htmlFor="my-drawer-4"
                          className={`${flag}`}
                          src={UK}
                        />
                        <li>Study in UK</li>
                      </Link>
                      <Link className={flagClass} to={"/USA"}>
                        <img className={flag} src={USA} />
                        <li></li>
                        <li>Study in USA</li>
                      </Link>
                      <Link className={flagClass} to={"/Australia"}>
                        <img className={flag} src={Australia} />
                        <li>Study in Australia</li>
                      </Link>
                      <Link className={flagClass} to={"/Canada"}>
                        <img className={flag} src={Canada} />
                        <li>Study in Canada</li>
                      </Link>
                      <Link className={flagClass} to={"/Germany"}>
                        <img className={flag} src={Germany} />
                        <li>Study in Germany</li>
                      </Link>
                      <Link className={flagClass} to={"/New-Zealand"}>
                        <img className={flag} src={NZ} />
                        <li>Study in New Zealand</li>
                      </Link>
                      <Link className={flagClass} to={"/UAE"}>
                        <img className={flag} src={UAE} />
                        <li>Study in UAE</li>
                      </Link>
                      <Link className={flagClass} to="/Georgia">
                        <img className={flag} src={Georgia} />
                        <li>Study in Georgia</li>
                      </Link>
                      <Link className={flagClass} to={"/Finland"}>
                        <img className={flag} src={Finland} />
                        <li>Study in Finland</li>
                      </Link>
                      <Link className={flagClass} to={"/Cyprus"}>
                        <img className={flag} src={Cyprus} />
                        <li>Study in Cyprus</li>
                      </Link>
                      <Link className={flagClass} to={"/Switzerland"}>
                        <img className={flag} src={Switzerland} />
                        <li>Study in Switzerland</li>
                      </Link>
                      <Link className={flagClass} to={"/France"}>
                        <img className={flag} src={France} />
                        <li>Study in France</li>
                      </Link>
                      <Link className={flagClass} to={"/West-Indies"}>
                        <img className={flag} src={WestIndies} />
                        <li>Study in West-Indies</li>
                      </Link>
                      <Link className={flagClass}>
                        <button>Rest of the World</button>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    Services
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col          ">
                      <div className="col-span-2 ">
                        <Link
                          className="text-lg underline text-blue-600 pl-2"
                          to="/services"
                        >
                          Services
                        </Link>
                        <h2 className="my-5 text-xl font-medium border-b-2   border-[#f85424]">
                          FOR STUDENTS
                        </h2>
                        <div className="flex flex-col md:flex-row  justify-center md:justify-start gap-10">
                          <ul className="space-y-2 text-lg">
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Free Study Abroad Counselling</li></Link>
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Student Visa</li></Link>
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>University Application Process</li></Link>
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>International Student Visa Guidance</li></Link>
                          </ul>
                          <ul className="space-y-2 text-lg">
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>University Scholarship Guidance</li></Link>
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Study Abroad Destination Guide</li></Link>
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Personality Assessment Test</li></Link>
                            <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Study Accommodation</li></Link>
                          </ul>
                        </div>
                      </div>

                      <div className="col-span-1 md:my-10">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          CHANNEL PARTNERS
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                        </ul>
                      </div>

                      <div className="col-span-1 md:my-10">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          PARTNER INSTITUTION
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                        </ul>
                      </div>

                      <div className="col-span-1 md:my-10">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          GOVERNMENT INSTITUTIONS
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                        </ul>
                      </div>

                      <div className="col-span-1 md:my-10">
                        <h2 className="my-5 text-xl font-medium border-b-2 w-fit border-[#f85424]">
                          BUSINESS
                        </h2>
                        <ul className="space-y-2 text-lg">
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                          <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    Test Prep.
                  </div>
                  <div className="collapse-content">
                    <div className="flex  justify-around py-10">
                      <img
                        className="w-5/12 lg:w-2/12"
                        src={testPrep1}
                        alt="img1"
                      />
                      <img
                        className="w-5/12 lg:w-2/12"
                        src={testPrep2}
                        alt="img2"
                      />
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    About Us
                  </div>
                  <div className="collapse-content">
                    <div className="     ">
                      <ul className=" text-lg ">
                        <Link
                          className="text-lg underline text-blue-600 pl-2"
                          to="/about"
                        >
                          About Us
                        </Link>

                        <Link to={"/comingSoon"}>
                          <li className={iconStyle}>
                            <BsGridFill />
                            Who We Are
                          </li>
                        </Link>
                        <Link to={"/comingSoon"}>
                          <li className={iconStyle}>
                            <FaHeart />
                            Our Partners
                          </li>
                        </Link>
                        <Link to={"/comingSoon"}>
                          <li className={iconStyle}>
                            <FaClock />
                            Our Timeline
                          </li>
                        </Link>
                        <Link to={"/comingSoon"}>
                          <li className={iconStyle}>
                            <FaUserFriends />
                            Our Leadership Team
                          </li>
                        </Link>
                      </ul>
                      <ul className="col-span-1 space-y-4 text-lg ">
                        <Link to={"/comingSoon"}>
                          <li className={iconStyle}>
                            <IoShieldCheckmarkSharp />
                            Partner With Us
                          </li>
                        </Link>
                        <Link to={"/comingSoon"}>
                          <li className={`pb-5 ${iconStyle}`}>
                            <IoCheckmarkDoneCircleSharp />
                            Award Recognitions
                          </li>
                        </Link>
                        <div
                          className={`${iconStyle} flex gap-2 items-center justify-center py-5 my-4`}
                        >
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
                        <Link to={"/comingSoon"}>
                          <li className={`pb-5 ${iconStyle}`}>
                            <FaMicrophoneLines />
                            News & Press
                          </li>
                        </Link>

                        <li className={iconStyle}>
                          <Link className={iconStyle} to="/events">
                            <BsCameraVideoFill />
                            Events & Webinars
                          </Link>
                        </li>
                      </ul>
                      <ul></ul>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to="/registration" className={`  pl-5 text-xl font-medium`}>
                    Registration
                  </Link>
                </div>

                <button className="bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl">
                  Log In
                </button>
              </ul>
            </div>
          </div>
        </div>

        {/* Large device navbar buttons */}

        <div className={`  hidden items-center   my-5 lg:flex flex-wrap justify-end gap-3`}>
          <div className={` flex items-center gap-1`}>
            <Link
              className={` bg-white  lg:bg-[#F0F8FF] font-semibold`}
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <NavButton text="Study Destination" ind={1} />
          </div>

          <div className="flex items-center gap-1">
            <Link to={"/services"}>
              <NavButton text="Services" ind={2} />
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <NavButton text="Test Prep." ind={3} />
          </div>

          <div className="flex items-center  gap-1">
            <Link to={"/about"}>
              <NavButton ind={4} text="About Us" />
            </Link>
          </div>
          <div className={`${width >= 1244 ? "text-base" : "text-sm"
            } flex items-center justify-end gap-1`}>
            <Link
              className={`  bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl`}
              to="/registration"
            >
              Registration
            </Link>
            <button className={`  bg-[#BFDBFE] col-span-2  font-bold px-5 py-2 rounded-2xl`}>
              Log In
            </button>
          </div>

        </div>
      </div>

      {/* Navbar Item */}
      <div className=" bg-white absolute w-full z-40 shadow-lg">
        {navIndex == 1 && (
          <div className="md:px-10">
            <ul className="grid grid-cols-2 md:flex justify-between max-w-7xl mx-auto">
              <Link className={flagClass} to={"/UK"}>
                <img className={flag} src={UK} />
                <li>Study in UK</li>
              </Link>
              <Link className={flagClass} to={"/USA"}>
                <img className={flag} src={USA} />
                <li></li>
                <li>Study in USA</li>
              </Link>
              <Link className={flagClass} to={"/Australia"}>
                <img className={flag} src={Australia} />
                <li>Study in Australia</li>
              </Link>
              <Link className={flagClass} to="/Canada">
                <img className={flag} src={Canada} />
                <li>Study in Canada</li>
              </Link>
              <Link className={flagClass} to={"/Germany"}>
                <img className={flag} src={Germany} />
                <li>Study in Germany</li>
              </Link>
              <Link className={flagClass} to={"/New-Zealand"}>
                <img className={flag} src={NZ} />
                <li>Study in New Zealand</li>
              </Link>
              <Link className={flagClass} to={"/UAE"}>
                <img className={flag} src={UAE} />
                <li>Study in UAE</li>
              </Link>
            </ul>
            <ul className="grid grid-cols-2 md:flex justify-between max-w-7xl mx-auto mb-10">
              <Link className={flagClass} to="/Georgia">
                <img className={flag} src={Georgia} />
                <li></li>
                <li>Study in Georgia</li>
              </Link>
              <Link className={flagClass} to={"/Finland"}>
                <img className={flag} src={Finland} />
                <li>Study in Finland</li>
              </Link>
              <Link className={flagClass} to="/Cyprus">
                <img className={flag} src={Cyprus} />
                <li>Study in Cyprus</li>
              </Link>
              <Link className={flagClass} to={"/Switzerland"}>
                <img className={flag} src={Switzerland} />
                <li>Study in Switzerland</li>
              </Link>
              <Link className={flagClass} to="/France">
                <img className={flag} src={France} />
                <li>Study in France</li>
              </Link>
              <Link
                className={flagClass}
                to={"/West-Indies"}
              >
                <img className={flag} src={WestIndies} />
                <li>Study in West-Indies</li>
              </Link>
              <Link
                className={flagClass}
              >
                <button className="px-4 py-2 bg-blue-700 text-white rounded-md">
                  Rest of the Countries
                </button>
              </Link>
            </ul>
          </div>
        )}
        {navIndex == 2 && (
          <>
            <div className={`${width <= 1450 ? 'grid-cols-4' : 'grid-cols-5'}  flex flex-col  mx-10  md:grid md:mx-auto   md:max-w-[1800px]`}>
              <div className="col-span-1 md:my-10 my-5">

                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  FOR STUDENTS
                </h2>
                <div className="flex flex-col md:flex-row  justify-center md:justify-start gap-10">
                  <ul className="space-y-2 text-base">
                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Free Study Abroad Counselling</li></Link>
                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Student Visa</li></Link>
                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>University Application Process</li></Link>
                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>International Student Visa Guidance</li></Link>

                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>University Scholarship Guidance</li></Link>
                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Study Abroad Destination Guide</li></Link>
                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Personality Assessment Test</li></Link>
                    <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Study Accommodation</li></Link>
                  </ul>
                </div>
              </div>

              <div className="col-span-1   md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  CHANNEL PARTNERS
                </h2>
                <ul className="space-y-2 text-base">
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                </ul>
              </div>

              <div className="col-span-1 md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  PARTNER INSTITUTION
                </h2>
                <ul className="space-y-2 text-base">
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                </ul>
              </div>

              <div className="col-span-1 md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  GOVERNMENT INSTITUTIONS
                </h2>
                <ul className="space-y-2 text-base">
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                </ul>
              </div>

              <div className="col-span-1 md:my-10">
                <h2 className="my-5 text-lg font-medium border-b-2 w-fit border-[#f85424]">
                  BUSINESS
                </h2>
                <ul className="space-y-2 text-base">
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Customized Solution</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Instant Support</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Commissions</li></Link>
                  <Link className="hover:text-blue-600" to={"/comingSoon"}><li>Technological Support</li></Link>
                </ul>
              </div>
            </div>
            <Link
              className="text-2xl flex justify-end bg-blue-600 text-white  w-fit ml-auto m-20 mt-0 p-2 rounded-lg "
              to="/services"
            >
              Services
            </Link>
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
              <Link to="/comingSoon" className={iconStyle}>
                <BsGridFill />
                Who We Are
              </Link>
              <Link to="/comingSoon" className={iconStyle}>
                <FaHeart />
                Our Partners
              </Link>
              <Link to="/comingSoon" className={iconStyle}>
                <FaClock />
                Our Timeline
              </Link>
              <Link to="/comingSoon" className={iconStyle}>
                <FaUserFriends />
                Our Leadership Team
              </Link>
            </ul>
            <ul className="col-span-1 space-y-4 text-lg ">
              <Link to="/comingSoon" className={iconStyle}>
                <IoShieldCheckmarkSharp />
                Partner With Us
              </Link>
              <Link to="/comingSoon" className={iconStyle}>
                <IoCheckmarkDoneCircleSharp />
                Award Recognitions
              </Link>
              <Link
                to="/comingSoon"
                className={`${iconStyle} hover:text-blue-500 flex gap-2 items-center`}
              >
                <SiGooglesheets />
                <li>Careers</li>
                <span className="text-sm bg-green-500 text-white mx-2 p-1 rounded-sm">
                  Hiring
                </span>
              </Link>
              <Link className={` ${iconStyle}`} to="/blogs">
                <RiNewsFill />
                Blog
              </Link>
            </ul>
            <ul className="col-span-1 space-y-4 text-lg ">
              <Link className={iconStyle} to="/contact">
                <BiSolidPhoneCall />
                Contact Us
              </Link>
              <Link className={iconStyle} to="/comingSoon">
                <FaMicrophoneLines />
                News & Press
              </Link>

              <Link className={iconStyle} to="/events">
                <BsCameraVideoFill />
                Events & Webinars
              </Link>
              <Link
                className={`${iconStyle} `}
                to="/about"
              >
                <FcAbout />
                About Us
              </Link>
            </ul>
            <ul></ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;