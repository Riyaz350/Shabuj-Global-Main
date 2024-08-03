import logo from "../assets/logo.svg";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
const Navbar = () => {
  return (
    <nav className="bg-[#F0F8FF] p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Shabuj Global Education" className="h-10" />
          <div className="ml-2">
            <h1 className="text-xl font-extrabold text-blue-900">
              SHABUJ GLOBAL EDUCATION
            </h1>
            <p className="text-sm text-gray-600 text-center">
              Worldwide University Admission
            </p>
          </div>
        </div>
        <div className="flex space-x-6 items-center text-black text-lg">
          <div className="relative group">
            <button className="flex items-center text-gray-700 font-medium ">
              Study Destination
              <ChevronDownIcon className="w-5 h-5 ml-1 group-hover:hidden" />
              <ChevronUpIcon className="w-5 h-5 ml-1 hidden group-hover:block" />
            </button>
            <div className="absolute hidden z-10 group-hover:block bg-white shadow-lg mt-2 py-2 w-48">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Destination 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Destination 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-gray-700 font-medium ">
              Services
              <ChevronDownIcon className="w-5 h-5 ml-1 group-hover:hidden" />
              <ChevronUpIcon className="w-5 h-5 ml-1 hidden group-hover:block" />
            </button>
            <div className="absolute hidden z-10 group-hover:block bg-white shadow-lg mt-2 py-2 w-48">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Service 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Service 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-gray-700 font-medium ">
              Test Prep.
              <ChevronDownIcon className="w-5 h-5 ml-1 group-hover:hidden" />
              <ChevronUpIcon className="w-5 h-5 ml-1 hidden group-hover:block" />
            </button>
            <div className="absolute hidden z-10 group-hover:block bg-white shadow-lg mt-2 py-2 w-48">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Test Prep 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Test Prep 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-gray-700 font-medium ">
              About Us
              <ChevronDownIcon className="w-5 h-5 ml-1 group-hover:hidden" />
              <ChevronUpIcon className="w-5 h-5 ml-1 hidden group-hover:block" />
            </button>
            <div className="absolute hidden z-10 group-hover:block bg-white shadow-lg mt-2 py-2 w-48">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                About Us 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                About Us 2
              </a>
            </div>
          </div>
          <div className="relative flex items-center">
            <button className="absolute bg-[#BFDBFE] text-[#333] font-bold px-6 py-3 rounded-[16px] flex items-center group hover:text-white hover:bg-blue-700 transition-all duration-300">
              Login
              <ArrowRightIcon className="w-5 h-5 ml-2 hidden group-hover:block" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
