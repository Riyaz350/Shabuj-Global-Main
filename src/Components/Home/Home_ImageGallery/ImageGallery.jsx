import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import data from './image.json'

import { motion } from "framer-motion"
function App() {


  return (
    <div style={{ background: 'linear-gradient(93deg, rgba(40,109,202,1) 0%, rgba(0,18,182,1) 100%)' }} className="main flex flex-col items-center align pb-10 overflow-hidden z-50">
      <h1 className="text-white text-4xl lg:text-[67px] text-center font-[700] leading-[87px] p-[20px]">Image Gallery</h1>
      <Marquee pauseOnHover={true}     >
        {
          data.slice(0, 25).map((data) => (
            <div  className="" key={data.id}>


              <motion.div initial={{ }} transition={{ duration: .2, delay: .1 }}
                onClick={() => { document.getElementById(data.id).showModal() }}
                className="w-[300px]  h-[350px] rounded-[20px] mr-2 cursor-pointer   bg-white bg-opacity-30   grayscale hover:filter-none relative   group   mt-[50px] ">
                <div style={{ background: 'linear-gradient(93deg, rgba(37,180,186,1) 0%, rgba(222,243,135,1) 100%)' }} className="hidden absolute  bottom-0 special p-[10px]  rounded-b-[15px] group-hover:block">
                  <h1 className="text-white font-[500] text-[18px] leading-7">{data.title}</h1>
                  <h1 className="text-white font-[400] text-[14px] leading-[21px]">{data.description}</h1>
                </div>
                <img className="w-full h-[350px] rounded-[16px] object-cover" src={data?.url} alt="" />
              </motion.div>


              <dialog id={data.id} className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn outline-none btn-xs btn-circle text-xs text-blue-600 absolute z-10 right-2 top-2">✕</button>
                  </form>
                  <div className='relative'>
                    <img src={data.url} className='w-[380px] h-auto' alt="" />
                    <div className='modal-bg pb-3'>
                      <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>{data.title}</h2>
                      <p className='poppins-regular text-[14px] pl-4 text-white'>{data.description}</p>
                    </div>

                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))
        }
      </Marquee>

      <Marquee pauseOnHover={true} direction="right"   >
        {
          data.slice(26, 57).map((data) => (
            <div  className="" key={data.id}>


              <motion.div initial={{ }}   transition={{ duration: .2, delay: .1 }}
                onClick={() => { document.getElementById(data.id).showModal() }}
                className="w-[300px]  h-[350px] rounded-[20px] mr-2 cursor-pointer   bg-white bg-opacity-30   grayscale hover:filter-none relative   group   mt-[50px] ">
                <div style={{ background: 'linear-gradient(93deg, rgba(37,180,186,1) 0%, rgba(222,243,135,1) 100%)' }} className="hidden absolute  bottom-0 special p-[10px]  rounded-b-[15px] group-hover:block">
                  <h1 className="text-white font-[500] text-[18px] leading-7">{data.title}</h1>
                  <h1 className="text-white font-[400] text-[14px] leading-[21px]">{data.description}</h1>
                </div>
                <img className="w-full h-[350px] rounded-[16px] object-cover" src={data?.url} alt="" />
              </motion.div>


              <dialog id={data.id} className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn outline-none btn-xs btn-circle text-xs text-blue-600 absolute z-10 right-2 top-2">✕</button>
                  </form>
                  <div className='relative'>
                    <img src={data.url} className='w-[380px] h-auto' alt="" />
                    <div className='modal-bg pb-3'>
                      <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>{data.title}</h2>
                      <p className='poppins-regular text-[14px] pl-4 text-white'>{data.description}</p>
                    </div>

                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))
        }
      </Marquee>



    </div>
  )
}

export default App