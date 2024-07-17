import './Home_ImageGallery.css'

const Home_ImageGallery = () => {
    return (
        <div className='gallery-bg lg:pb-[132px] pb-[52px]'>
            <div>
                <h2 className='poppins-bold lg:text-[67px] text-[28px] lg:leading-[130%] leading-none lg:tracking-tight tracking-normal text-white text-center lg:pt-[78px] pt-[56px] lg:pb-[88px] pb-[67px]'>Image Gallery</h2>
            </div>
            <div className='flex gallery-one overflow-hidden lg:mb-[44px] mb-4'>
                <div className='flex gap-5 gallery-items pl-2.5 pr-2.5'>
                    <div className='image-gallery relative'>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <div className='absolute display-block bottom-0 gallery-image hidden border border-white rounded-2xl p-2'>
                            <div className='w-full h-full'>
                                <img src="./assets/gallery1.png" className='w-full h-full object-cover rounded-2xl' alt="" />
                                <div className='absolute modal-bg bottom-2 left-2 right-2 h-[100px] rounded-b-2xl'>
                                    <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Event Name</h2>
                                    <p className='poppins-regular text-[14px] pl-4 text-white'>Short description of the event, may be add date, location and other information.</p>
                                </div>
                            </div>
                        </div>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div className='image-gallery relative'>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <div className='absolute display-block bottom-0 gallery-image hidden border border-white rounded-2xl p-2'>
                            <div className='w-full h-full'>
                                <img src="./assets/gallery2.png" className='w-full h-full object-cover rounded-2xl' alt="" />
                                <div className='absolute modal-bg bottom-2 left-2 right-2 h-[100px] rounded-b-2xl'>
                                    <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Event Name</h2>
                                    <p className='poppins-regular text-[14px] pl-4 text-white'>Short description of the event, may be add date, location and other information.</p>
                                </div>
                            </div>
                        </div>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4 text-white'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
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
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
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
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
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
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery8.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery1.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery9.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_2').showModal()} />
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery2.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery10.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_3').showModal()} />
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery3.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery11.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_4').showModal()} />
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery4.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery12.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_5').showModal()} />
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery5.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery13.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_6').showModal()} />
                        <dialog id="my_modal_6" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery6.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
                                    </div>

                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <div>
                        <img src="./assets/gallery14.png" alt="" className='lg:w-[172px] w-[83px] lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_7').showModal()} />
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <div className='relative'>
                                    <img src="./assets/gallery7.png" className='w-full' alt="" />
                                    <div className='absolute modal-bg bottom-0 h-[100px]'>
                                        <h2 className='poppins-medium text-[18px] pt-4 pl-4'>Event Name</h2>
                                        <p className='poppins-regular text-[14px] pl-4'>Short description of the event, may be add date, location and other information.</p>
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