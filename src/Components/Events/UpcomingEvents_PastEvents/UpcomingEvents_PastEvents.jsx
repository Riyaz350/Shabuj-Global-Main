import './UpcomingEvents_PastEvents.css'

const UpcomingEvents_PastEvents = () => {
    return (
        <div className="max-w-[1152px] mx-auto pt-[78px] bg-[#FAFAFA] pb-10">
            <div className="mx-auto text-center lg:w-[875px] px-8">
                <h2 className="poppins-semibold text-[56px] text-[#000000] leading-[72.8px] -tracking-[0.01em]">Past Events</h2>
                <p className="poppins-regular text-base pb-[71px] text-[#000000]">Our core belief is to ensure that our students receive comprehensive education and guidance at every stage of their study abroad journey. Presented below are a few of our previous international educational events.</p>
            </div>
            <div className='lg:px-0 md:px-[200px] px-8'>
                <div className="flex gap-6 mb-[71px] lg:flex-row flex-col">
                    <div className="bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg">
                        <div>
                            <img src="./assets/pastevent1.png" alt="" className="rounded-lg" />
                        </div>
                        <div className='p-5'> 
                            <h2 className='poppins-medium text-[18px] text-[#000000] pt-[18px]'>Multi-Destination Education<br></br> Expo - Dhaka</h2>
                            <div className='flex items-center gap-[10px] pt-[16px]'>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6481 15.5681C13.7115 16.5047 11.7528 18.4634 10.405 19.8112C9.62396 20.5922 8.35889 20.5926 7.57784 19.8116C6.25355 18.4873 4.3328 16.5666 3.33436 15.5681C0.210162 12.4439 0.210162 7.3786 3.33436 4.2544C6.45855 1.13021 11.5239 1.13021 14.6481 4.2544C17.7723 7.3786 17.7723 12.4439 14.6481 15.5681Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 9.91125C11.9912 11.5681 10.6481 12.9113 8.99121 12.9113C7.33436 12.9113 5.99121 11.5681 5.99121 9.91125C5.99121 8.2544 7.33436 6.91125 8.99121 6.91125C10.6481 6.91125 11.9912 8.2544 11.9912 9.91125Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px]'>The Peninsula Chittagong</p>
                            </div>
                            <div className='flex items-center pt-1 pb-4'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.9912 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.99121 10.6613H20.9912" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]'>18 th May, 2024</p>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.47293" cy="2.91129" r="2.48172" fill="#F25025" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px]'>10:00 am - 05:00 pm</p>
                            </div>
                            <button className='poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-[96px] bg-[#FFFFFF] border border-[#E1E1E1]'>View Event Details</button>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg">
                        <div>
                            <img src="./assets/pastevent2.png" alt="" className="rounded-lg" />
                        </div>
                        <div className='p-5'> 
                            <h2 className='poppins-medium text-[18px] text-[#000000] pt-[18px]'>Multi-Destination Education<br></br> Expo - Dhaka</h2>
                            <div className='flex items-center gap-[10px] pt-[16px]'>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6481 15.5681C13.7115 16.5047 11.7528 18.4634 10.405 19.8112C9.62396 20.5922 8.35889 20.5926 7.57784 19.8116C6.25355 18.4873 4.3328 16.5666 3.33436 15.5681C0.210162 12.4439 0.210162 7.3786 3.33436 4.2544C6.45855 1.13021 11.5239 1.13021 14.6481 4.2544C17.7723 7.3786 17.7723 12.4439 14.6481 15.5681Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 9.91125C11.9912 11.5681 10.6481 12.9113 8.99121 12.9113C7.33436 12.9113 5.99121 11.5681 5.99121 9.91125C5.99121 8.2544 7.33436 6.91125 8.99121 6.91125C10.6481 6.91125 11.9912 8.2544 11.9912 9.91125Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px]'>The Peninsula Chittagong</p>
                            </div>
                            <div className='flex items-center pt-1 pb-4'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.9912 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.99121 10.6613H20.9912" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]'>18 th May, 2024</p>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.47293" cy="2.91129" r="2.48172" fill="#F25025" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px]'>10:00 am - 05:00 pm</p>
                            </div>
                            <button className='poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-[96px] bg-[#FFFFFF] border border-[#E1E1E1]'>View Event Details</button>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg">
                        <div>
                            <img src="./assets/pastevent3.png" alt="" className="rounded-lg" />
                        </div>
                        <div className='p-5'> 
                            <h2 className='poppins-medium text-[18px] text-[#000000] pt-[18px]'>Multi-Destination Education<br></br> Expo - Dhaka</h2>
                            <div className='flex items-center gap-[10px] pt-[16px]'>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6481 15.5681C13.7115 16.5047 11.7528 18.4634 10.405 19.8112C9.62396 20.5922 8.35889 20.5926 7.57784 19.8116C6.25355 18.4873 4.3328 16.5666 3.33436 15.5681C0.210162 12.4439 0.210162 7.3786 3.33436 4.2544C6.45855 1.13021 11.5239 1.13021 14.6481 4.2544C17.7723 7.3786 17.7723 12.4439 14.6481 15.5681Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 9.91125C11.9912 11.5681 10.6481 12.9113 8.99121 12.9113C7.33436 12.9113 5.99121 11.5681 5.99121 9.91125C5.99121 8.2544 7.33436 6.91125 8.99121 6.91125C10.6481 6.91125 11.9912 8.2544 11.9912 9.91125Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px]'>The Peninsula Chittagong</p>
                            </div>
                            <div className='flex items-center pt-1 pb-4'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.9912 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.99121 10.6613H20.9912" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]'>18 th May, 2024</p>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.47293" cy="2.91129" r="2.48172" fill="#F25025" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px]'>10:00 am - 05:00 pm</p>
                            </div>
                            <button className='poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-[96px] bg-[#FFFFFF] border border-[#E1E1E1]'>View Event Details</button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 lg:flex-row flex-col">
                    <div className="bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg">
                        <div>
                            <img src="./assets/pastevent4.png" alt="" className="rounded-lg" />
                        </div>
                        <div className='p-5'> 
                            <h2 className='poppins-medium text-[18px] text-[#000000] pt-[18px]'>Multi-Destination Education<br></br> Expo - Dhaka</h2>
                            <div className='flex items-center gap-[10px] pt-[16px]'>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6481 15.5681C13.7115 16.5047 11.7528 18.4634 10.405 19.8112C9.62396 20.5922 8.35889 20.5926 7.57784 19.8116C6.25355 18.4873 4.3328 16.5666 3.33436 15.5681C0.210162 12.4439 0.210162 7.3786 3.33436 4.2544C6.45855 1.13021 11.5239 1.13021 14.6481 4.2544C17.7723 7.3786 17.7723 12.4439 14.6481 15.5681Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 9.91125C11.9912 11.5681 10.6481 12.9113 8.99121 12.9113C7.33436 12.9113 5.99121 11.5681 5.99121 9.91125C5.99121 8.2544 7.33436 6.91125 8.99121 6.91125C10.6481 6.91125 11.9912 8.2544 11.9912 9.91125Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px]'>The Peninsula Chittagong</p>
                            </div>
                            <div className='flex items-center pt-1 pb-4'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.9912 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.99121 10.6613H20.9912" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]'>18 th May, 2024</p>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.47293" cy="2.91129" r="2.48172" fill="#F25025" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px]'>10:00 am - 05:00 pm</p>
                            </div>
                            <button className='poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-[96px] bg-[#FFFFFF] border border-[#E1E1E1]'>View Event Details</button>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg">
                        <div>
                            <img src="./assets/pastevent5.png" alt="" className="rounded-lg" />
                        </div>
                        <div className='p-5'> 
                            <h2 className='poppins-medium text-[18px] text-[#000000] pt-[18px]'>Multi-Destination Education<br></br> Expo - Dhaka</h2>
                            <div className='flex items-center gap-[10px] pt-[16px]'>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6481 15.5681C13.7115 16.5047 11.7528 18.4634 10.405 19.8112C9.62396 20.5922 8.35889 20.5926 7.57784 19.8116C6.25355 18.4873 4.3328 16.5666 3.33436 15.5681C0.210162 12.4439 0.210162 7.3786 3.33436 4.2544C6.45855 1.13021 11.5239 1.13021 14.6481 4.2544C17.7723 7.3786 17.7723 12.4439 14.6481 15.5681Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 9.91125C11.9912 11.5681 10.6481 12.9113 8.99121 12.9113C7.33436 12.9113 5.99121 11.5681 5.99121 9.91125C5.99121 8.2544 7.33436 6.91125 8.99121 6.91125C10.6481 6.91125 11.9912 8.2544 11.9912 9.91125Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px]'>The Peninsula Chittagong</p>
                            </div>
                            <div className='flex items-center pt-1 pb-4'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.9912 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.99121 10.6613H20.9912" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]'>18 th May, 2024</p>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.47293" cy="2.91129" r="2.48172" fill="#F25025" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px]'>10:00 am - 05:00 pm</p>
                            </div>
                            <button className='poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-[96px] bg-[#FFFFFF] border border-[#E1E1E1]'>View Event Details</button>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg">
                        <div>
                            <img src="./assets/pastevent6.png" alt="" className="rounded-lg" />
                        </div>
                        <div className='p-5'> 
                            <h2 className='poppins-medium text-[18px] text-[#000000] pt-[18px]'>Multi-Destination Education<br></br> Expo - Dhaka</h2>
                            <div className='flex items-center gap-[10px] pt-[16px]'>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6481 15.5681C13.7115 16.5047 11.7528 18.4634 10.405 19.8112C9.62396 20.5922 8.35889 20.5926 7.57784 19.8116C6.25355 18.4873 4.3328 16.5666 3.33436 15.5681C0.210162 12.4439 0.210162 7.3786 3.33436 4.2544C6.45855 1.13021 11.5239 1.13021 14.6481 4.2544C17.7723 7.3786 17.7723 12.4439 14.6481 15.5681Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 9.91125C11.9912 11.5681 10.6481 12.9113 8.99121 12.9113C7.33436 12.9113 5.99121 11.5681 5.99121 9.91125C5.99121 8.2544 7.33436 6.91125 8.99121 6.91125C10.6481 6.91125 11.9912 8.2544 11.9912 9.91125Z" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px]'>The Peninsula Chittagong</p>
                            </div>
                            <div className='flex items-center pt-1 pb-4'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.9912 4.16125V7.16125" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.99121 10.6613H20.9912" stroke="#F25025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 14.9012V14.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.9912 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.99121 18.9012V18.9112" stroke="#F25025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]'>18 th May, 2024</p>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.47293" cy="2.91129" r="2.48172" fill="#F25025" />
                                </svg>
                                <p className='text-[#F25025] poppins-regular text-[14px] pl-[5px]'>10:00 am - 05:00 pm</p>
                            </div>
                            <button className='poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-[96px] bg-[#FFFFFF] border border-[#E1E1E1]'>View Event Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents_PastEvents;