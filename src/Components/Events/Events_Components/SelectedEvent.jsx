import { useEffect, useState } from "react";
import { FaChevronDown, FaRegCalendarDays } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import Tablet from '../../assets/Tablet.png'
import { motion } from "framer-motion"
import CountDown from "./CountDown";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import bg from '../../assets/Blue Background.png'

 
const SelectedEvent = () => {
    const [tik, setTik] = useState(false)
    const [width, setWidth] = useState(null)
    console.log(width)
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    const inputClass = ` rounded-sm  md:rounded-md w-full  outline-none placeholder:text-xs  placeholder:text-[8px]   ${width >= 1024 & width <= 1300 ? 'placeholder:text-[10px]   px-2 text-[10px]' : width > 1300 ? 'text-base placeholder:text-base px-2 py-1' : 'text-[8px] md:text-base pl-[2px] md:p-2 '}`
    const inputClass2 = `bg-gray-100 text-center flex items-center  px-1 md:p-2 text-gray-400 text-[8px] md:text-[12px] ${width >= 1024 & width <= 1300 ? 'placeholder:text-[10px]   px-2 text-[10px]' : width > 1300 ? 'text-base placeholder:text-base px-2 py-1' : 'text-[8px] md:text-base md:p-2 '}`



    return (
        <div>
            <div style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', }} className='relative bg-[#F5F5F5] min-h-screen'>
                <div className="flex flex-col lg:grid grid-cols-5     mx-auto rounded-b-2xl">
                    <div className={`${width >= 1024 && width <= 1300 ? 'lg:pl-20 pl-10' : 'lg:pl-32 pl-10'} col-span-2 flex flex-col relative   pt-20 `}>
                        <div className="  ">
                            <button className="text-white bg-[#ff3b30] p-2 rounded-lg text-xs mb-5">Free Entry</button>
                            <h1 className="text-4xl font-semibold text-[#00399F]">International Education Fair - Chattogram</h1>
                            <p className="my-5 font-semibold text-2xl">International Education Fair - Chattogram</p>
                            <p>Attend Shabuj Global Education International Education Fair - Chattogram and apply for September 2024 and January 2024 intakes.</p>
                            <ul className='text-[#F25025] space-y-5 my-5'>
                                <li className='flex items-center  gap-2'><HiOutlineLocationMarker />The Peninsula Chittagong</li>
                                <li className='flex items-center justify-between '><span className='flex'><span className='flex items-center gap-2'><FaRegCalendarDays />22nd July, 2024 </span><span className='flex items-center gap-2'><GoDotFill />10:00 am - 05:00 pm</span></span> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-3 relative lg:mt-20">
                        <div className="w-fit mx-auto">
                            <CountDown date= '2024-07-22 10:00' />
                        </div>
                        <div className="lg:absolute top-0 overflow-hidden ">
                            <div className="flex flex-col justify-center items-center relative ">
                                <motion.div initial={{ y: '-200px' }} animate={{ y: 0 }} transition={{ duration: 1 }} className={`${width >= 1024 & width <= 1300 ? 'mt-5 ' : width <= 1500 ? 'lg:w-2/6' : 'lg:w-1/4'} w-1/3  md:w-2/5  z-10   absolute `}>
                                    <form className=' w-full z-10 -mt-10 flex flex-col gap-1 md:gap-2 text-xs lg:text-base'>
                                        <input className={inputClass} type="text" placeholder='Name' />

                                        <div className='flex'>
                                            <input className={`${inputClass} rounded-r-none lg:rounded-r-none `} type="text" placeholder='Email' />
                                            <p className={`${inputClass2} rounded-r-sm md:rounded-r-md  text-[8px] `}>.com</p>
                                        </div>

                                        <div className='flex gap-2'>
                                            <p className={`${inputClass2} rounded-sm md:rounded-md  `}>+880</p>
                                            <input className={`${inputClass}  `} type="text" placeholder='Mobile Number' />
                                        </div>

                                        <div className='space-y-2'>
                                            <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Destination <span><FaChevronDown /></span></p>
                                            <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Year <span><FaChevronDown /></span></p>
                                            <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Intake <span><FaChevronDown /></span></p>
                                        </div>

                                        <div className='flex items-center gap-2 bg-transparent text-[8px] md:text-base'>
                                            <p onClick={() => { setTik(!tik) }}><MdDone className={tik ? 'text-white bg-[#3560ff]' : 'text-transparent bg-white'} /></p>
                                            <p className={`${width >= 1024 & width <= 1300 ? '  text-[10px]' : width > 1300 ? 'text-base' : 'text:sm md:text-base'} text-white`}>By clicking you agree to our <span className='text-[#0d7ddc]'> Privacy Policy</span> and <span className='text-[#0d7ddc]'>Terms & Conditions</span></p>
                                        </div>

                                        <button className='bg-[#3b82f6] text-white font-bold p-1 lg:p-2 rounded-3xl text-[8px] md:text-base '>SUBMIT</button>
                                    </ form>
                                </motion.div>
                                <motion.img initial={{ y: '200px' }} animate={{ y: '0px' }} transition={{ duration: 1 }} className={`${width <= 1500 ? 'w-full lg:mt-10' : 'w-3/4'} z-0    `} src={Tablet} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SelectedEvent;