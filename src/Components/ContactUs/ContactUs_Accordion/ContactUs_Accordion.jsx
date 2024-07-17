
import { useRef } from 'react';
import './ContactUs_Accordion.css'



const ContactUs_Accordion = () => {
    const accordion = useRef(null);

    const handleClick = (evt) => {
        accordion.current.querySelectorAll('input').forEach(input => {
            if (input !== evt.target) input.checked = false;
        });
    }


    return (
        <div className='max-w-[1152px] mx-auto pt-[83px] pb-[73px]' ref={accordion}>
            <div className='flex lg:flex-row flex-col lg:mx-4 md:mx-12 mx-8'>
                <div className='lg:w-[25%] w-full pb-8'>
                    <div className="poppins-semibold text-[28px] pl-4">United Kingdom</div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">London (Head Office)</div>
                        <div className="collapse-content text-sm">
                            <p>1st Floor,94A Whitechapel High Street,London E1 7RA,United Kingdom.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[25%] w-full pb-8'>
                    <div className="poppins-semibold text-[28px] pl-4">Bangladesh</div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Dhaka (South Aisan Regional Head Office)</div>
                        <div className="collapse-content text-sm">
                            <p>Nagar Lutfun Homes,House No 11,Road No 17,Block D,Banani,Dhaka.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Chattogram</div>
                        <div className="collapse-content text-sm">
                            <p>R.I. Tower(level 3),23/A MM Ali Road,Golpahar moor,Chattogram.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Sylhet</div>
                        <div className="collapse-content text-sm">
                            <p>3rd Floor,Symphony Heights,Baruth Khana,East Zindabazar,Sylhet.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[16%] w-full pb-8'>
                    <div className="poppins-semibold text-[28px] pl-4">India</div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Kochin</div>
                        <div className="collapse-content text-sm">
                            <p>Shabuj Global Kochin,<br></br>
                                Door Number: 303,<br></br>
                                3rd Floor,Cityscape,<br></br>
                                South Kalamasery,<br></br>
                                Kochi-Kerala,682033
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Kannur</div>
                        <div className="collapse-content text-sm">
                            <p>R.I. Tower(level 3),23/A MM Ali Road,Golpahar moor,Chattogram.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[16%] w-full pb-8'>
                    <div className="poppins-semibold text-[28px] pl-4">Nigeria</div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Abuja</div>
                        <div className="collapse-content text-sm">
                            <p>No. 9 Senangal<br></br>
                                Crescent, Wuse Zone<br></br>
                                5,Abuja,Nigeria.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Lagos</div>
                        <div className="collapse-content text-sm">
                            <p>57,Bode Thomas<br></br>
                                Street,Surulere.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[18%] w-full pb-8'>
                    <div className="poppins-semibold text-[28px] pl-4">Middle East</div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" disabled />
                        <div className="collapse-title text-lg poppins-medium">Saudi Arabia</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" disabled/>
                        <div className="collapse-title text-lg poppins-medium">UAE</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" disabled />
                        <div className="collapse-title text-lg poppins-medium">Qatar</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs_Accordion;