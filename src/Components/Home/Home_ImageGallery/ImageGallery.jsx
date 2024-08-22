import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import data from './image.json'
import { motion } from "framer-motion"

function App() {






  return (
    <div className="main flex flex-col items-center align overflow-hidden">
      <h1 className="text-black text-[67px] text-center font-[700] leading-[87px] p-[20px]">Image Gallery</h1>

      <Marquee pauseOnHover={true} autoFill={true} >
        {
          data.map((data, index) => (
            <motion.div initial={{width:'172px'}} whileHover={{width:'368px'}} transition={{duration:.3, }} key={index}
              onClick={() => document.getElementById('my_modal_1').showModal()}
              className="img1 w-[172px] hover:w-[368px] h-[350px]   rounded-[20px] mr-[10px] cursor-pointer   bg-white bg-opacity-30   grayscale hover:filter-none relative overflow-hidden group   mt-[50px] ">
              <div style={{ background: 'linear-gradient(93deg, rgba(37,180,186,1) 0%, rgba(222,243,135,1) 100%)' }} className="hidden absolute  bottom-0 special p-[10px]  rounded-b-[15px] group-hover:block">
                <h1 className="text-white font-[500] text-[18px] leading-7">{data.title}</h1>
                <h1 className="text-white font-[400] text-[14px] leading-[21px]">{data.description}</h1>
              </div>
              <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data?.url} alt="" />
            </motion.div>
          ))
        }
      </Marquee>

      <Marquee pauseOnHover={true} direction="right" autoFill={true}  >
        {
          data.map((data, index) => (
            <motion.div initial={{width:'172px'}} whileHover={{width:'368px'}} transition={{duration:.3, }} key={index}
              onClick={() => document.getElementById('my_modal_1').showModal()}
              className="img1 w-[172px] hover:w-[368px] h-[350px]   rounded-[20px] mr-[10px] cursor-pointer   bg-white bg-opacity-30   grayscale hover:filter-none relative overflow-hidden group   mt-[50px] ">
              <div style={{ background: 'linear-gradient(93deg, rgba(37,180,186,1) 0%, rgba(222,243,135,1) 100%)' }} className="hidden absolute  bottom-0 special p-[10px]  rounded-b-[15px] group-hover:block">
                <h1 className="text-white font-[500] text-[18px] leading-7">{data.title}</h1>
                <h1 className="text-white font-[400] text-[14px] leading-[21px]">{data.description}</h1>
              </div>
              <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data?.url} alt="" />
            </motion.div>
          ))
        }
      </Marquee>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>






    </div>
  )
}

export default App