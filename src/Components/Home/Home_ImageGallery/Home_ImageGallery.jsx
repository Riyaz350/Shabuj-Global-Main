import './Home_ImageGallery.css'
import img1 from "../../../assets/gallery/1.jpg"
import img2 from "../../../assets/gallery/2.jpg"
import img3 from "../../../assets/gallery/3.jpg"
import img4 from "../../../assets/gallery/8.jpg"
import img5 from "../../../assets/gallery/5.jpg"
import img6 from "../../../assets/gallery/9.jpg"
import img7 from "../../../assets/gallery/14.jpg"
import img8 from "../../../assets/gallery/16.jpg"
import img9 from "../../../assets/gallery/university open day.jpg"
import img10 from "../../../assets/gallery/1.jpg"
import img11 from "../../../assets/gallery/11.jpg"
import img12 from "../../../assets/gallery/13.jpg"
import img13 from "../../../assets/gallery/15.jpg"
import img14 from "../../../assets/gallery/14.jpg"
const Home_ImageGallery = () => {
    return (
        <div className='gallery-bg lg:pb-[132px] pb-[52px]'>
            <div>
                <h2 className='poppins-bold  text-4xl lg:text-[67px] lg:leading-[130%] leading-none lg:tracking-tight tracking-normal text-white text-center lg:pt-[78px] pt-[56px] lg:pb-[88px] pb-[67px]'>Image Gallery</h2>
            </div>
            <div className='flex gallery-one overflow-hidden lg:mb-[44px] mb-4'>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img1} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img1} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img2} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img2} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img3} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img3} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img4} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img4} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img5} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img5} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img6} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img6} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img7} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img7} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className='flex gallery-two overflow-hidden'>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img8} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img8} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Enter the Realm of Academic Brilliance!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Prepare to embark on a life-changing adventure at our premier Education Expo, where boundless opportunities await!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img9} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img9} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Step into a World of Academic Excellence!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Get ready to embark on a transformative journey at our exclusive Education Expo, where endless possibilities await you!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img10} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img10} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Explore Your Path at the<br></br> International Education Fair</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are excited to inform you that numerous prestigious universities have recently visited our offices, providing invaluable insights.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img11} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img11} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Folks of Dhaka!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Don't let this opportunity slip away, grab it and make it count! Meet Ms. Neeta Tyagi from Queen's University Belfast one of the top-ranking and Russel group Universities in UK.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img12} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img12} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Announcement!</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>We are delighted to invite you to a special event on 17th January 2024, from 12:00 pm to 02:00 pm at the Shabuj Global Education Chittagong Branch. Meet the University of Portsmouth representative, Mr. Md. Nuruzzaman.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img13} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img13} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Multi-Destination Education Fair in INDIA</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Ready to turn your doubts into dreams? Join us at the Multi-destination Education Fair 2023! ✨ Here's a unique opportunity for you to clear all your doubts with university experts!</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src={img14} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                                </form>
                                <div className='relative'>
                                    <img src={img14} className='w-[380px] h-auto' alt="" />
                                    <div className='modal-bg pb-3'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Exciting Catch-Up Session for Sylhet's future students !</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Join us on October 30th 2023, from 10:30 am to 2:00 pm as The University College Birmingham hosts a special session to help you secure admission in 2024.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home_ImageGallery;