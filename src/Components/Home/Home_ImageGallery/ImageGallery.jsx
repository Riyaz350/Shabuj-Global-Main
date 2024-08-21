import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import data from './image.json'
console.log(data)




function App() {


  


  return (
    <div className="main flex flex-col items-center align overflow-hidden">
    <h1 className="text-white text-[67px] text-center font-[700] leading-[87px] p-[20px]">Image Gallery</h1>
    <Marquee pauseOnHover={true}  >
      {
        data.images.map((data, index) =>(
              <div key={index}
              onClick={()=>document.getElementById('my_modal_1').showModal()}
              className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] mr-[10px] cursor-pointer   p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s mt-[50px] ">
                    <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
                      <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
                      <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
                    </div>
                    <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data.url} alt="" />
          </div>
        ))
      }
    </Marquee>
    
    <Marquee pauseOnHover={true} direction="right"  >
      {
        data.images2.map((data, index) =>(
              <div  key={index}
              onClick={()=>document.getElementById('my_modal_1').showModal()}
              className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] mr-[10px] cursor-pointer   p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s mt-[50px] mb-[50px] ">
                    <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
                      <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
                      <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
                    </div>
                    <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data.url} alt="" />
          </div>
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