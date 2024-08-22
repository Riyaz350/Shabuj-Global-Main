import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import data from './image.json'
import { motion } from "framer-motion"

function App() {

const [modal, setModal] = useState({})
console.log(Object.keys(modal).length)

  return (
    <div className="main flex flex-col items-center align overflow-hidden">
      <h1 className="text-black text-[67px] text-center font-[700] leading-[87px] p-[20px]">Image Gallery</h1>

      <Marquee pauseOnHover={true} autoFill={true} >
        {
          data.map((data, index) => (
            <motion.div initial={{ width: '172px' }} whileHover={{ width: '368px' }} transition={{ duration: .3, }} key={data.id}
              onClick={() => {
                setModal(data.id)
                document.getElementById('my_modal_5').showModal()}}
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
            <motion.div initial={{ width: '172px' }} whileHover={{ width: '368px' }} transition={{ duration: .3, }} key={data.id}
              onClick={() => {
                setModal(data)
                document.getElementById('my_modal_5').showModal()}}
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

      {Object.keys(modal).length &&  <dialog id={modal.id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
          </form>
          <div className='relative'>
            <img src={modal.url} className='w-[380px] h-auto' alt="" />
            <div className='modal-bg pb-3'>
              <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
              <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
            </div>

          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>}






    </div>
  )
}

export default App