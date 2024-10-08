import { FaChevronDown } from 'react-icons/fa6';
import { MdDone } from "react-icons/md";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"



const ContactUs_Components = () => {
    const [tik, setTik] = useState(false)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    const inputClass = `  md:rounded-md w-full  outline-none placeholder:text-xs  placeholder:text-[8px]   ${width >= 1024 & width <= 1300 ? 'placeholder:text-[10px]   px-2 text-[10px]' : width > 1300 ? 'text-base placeholder:text-base px-2 py-1' : 'text-[8px] md:text-base pl-[2px] md:p-2 placeholder:text-[7px]'}`
    const inputClass2 = `bg-gray-100 text-center flex items-center  px-1 md:p-2 text-gray-400 text-[8px] md:text-[12px] ${width >= 1024 & width <= 1300 ? 'placeholder:text-[10px]   px-2 text-[10px]' : width > 1300 ? 'text-base placeholder:text-base px-2 py-1' : 'text-[6px] md:text-base md:p-2 '}`
    return (
        <div className='relative'>
            <div className="flex flex-col lg:grid xl:grid-cols-5 grid-cols-8 overflow-hidden bg-[#F5F5F5] rounded-b-2xl">
                <div className="lg:py-0 py-10 col-span-3 xl:col-span-2 flex flex-col items-center justify-center pb-0 sm:px-0 px-5 ">
                    <div>
                        <h1 className="text-7xl font-bold">We’d love <br /> to hear <br /> from you!</h1>
                        <p className="my-10">Interested in studying abroad with Shabuj <br /> Global Education?
                            Enter your details and <br /> {`we'll`} call you back when it suits you.</p>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-5 flex flex-col justify-center items-center relative">
                    <motion.div initial={{ y: '-200px' }} animate={{ y: 0 }} transition={{ duration: 1 }} className={`${width >= 1024 & width <= 1300 && 'mt-5'} w-1/3 md:w-2/5   z-10 lg:w-[40%]  absolute `}>
                        <form className=' w-full z-10 -mt-10 flex flex-col gap-1 md:gap-2 text-xs lg:text-base'>
                            <input className={inputClass} type="text" placeholder='Name' />

                            <div className='flex'>
                                <input className={`  md:rounded-l-md w-full  outline-none placeholder:text-xs  placeholder:text-[8px]   ${width >= 1024 & width <= 1300 ? 'placeholder:text-[10px]   px-2 text-[10px]' : width > 1300 ? 'text-base placeholder:text-base px-2 py-1' : 'text-[8px] md:text-base pl-[2px] md:p-2 placeholder:text-[7px]'}`} type="text" placeholder='Email' />
                                <p className={`${inputClass2}   text-[8px] `}>.com</p>
                            </div>

                            <div className='flex gap-2'>
                                <p className={`${inputClass2} `}>+880</p>
                                <input className={`${inputClass}  `} type="text" placeholder='Mobile Number' />
                            </div>

                            <div className='space-y-2'>
                                <select className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Destination <span><FaChevronDown /></span>
                                    <option value defaultChecked>
                                        Preferred Study Destination
                                    </option>
                                    <option value="UK">UK</option>
                                    <option value="USA">USA</option>
                                    <option value="Australia">Australia</option>
                                </select>
                                <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Year <span><FaChevronDown /></span></p>
                                <p className={`bg-white flex items-center justify-between pl-2  ${inputClass}`}>Preferred Study Intake <span><FaChevronDown /></span></p>
                            </div>

                            <div className='sm:flex hidden items-start mt-3 gap-2 bg-transparent text-[8px] md:text-base '>
                                <p onClick={() => { setTik(!tik) }}><MdDone className={tik ? 'text-white bg-[#3560ff]' : 'text-transparent bg-white'} /></p>
                                <p className={`${width >= 1024 & width <= 1300 ? '  text-[10px]' : width > 1300 ? 'text-base' : 'text:sm md:text-base'} text-white`}>By clicking you agree to our <span className='text-[#0d7ddc]'> Privacy Policy</span> and <span className='text-[#0d7ddc]'>Terms & Conditions</span></p>
                            </div>

                            <button className='bg-[#3b82f6] py-2 mt-3 text-white font-bold p-1 lg:p-2 rounded-3xl text-[8px] md:text-base '>SUBMIT</button>
                        </ form>
                    </motion.div>
                    <motion.img initial={{ y: '200px' }} animate={{ y: '0px' }} transition={{ duration: 1 }} className={` z-0  lg:mt-10`} src='https://i.ibb.co.com/GPjnBCB/Tablet.png' alt="" />
                </div>
            </div>


        </div>
    );
};

export default ContactUs_Components;