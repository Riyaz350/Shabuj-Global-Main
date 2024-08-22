

const Home_SingleImage = ({item}) => {
    
    return (
        <div>
            <img src={item?.url} alt="" className='lg:h-[368px] h-[187px] border border-white p-2 rounded-2xl gallery-image' onClick={() => document.getElementById('my_modal_1').showModal()} />
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-md btn-circle text-lg text-blue-600 absolute z-10 right-2 top-2">✕</button>
                    </form>
                    <div className='relative'>
                        <img src={item?.url} className='w-[380px] h-auto' alt="" />
                        <div className='modal-bg pb-3'>
                            <h2 className='poppins-medium text-[18px] pt-4 pl-4 text-white'>{item?.title}</h2>
                            <p className='poppins-regular text-[14px] pl-4 text-white'>{item?.description}</p>
                        </div>

                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Home_SingleImage;