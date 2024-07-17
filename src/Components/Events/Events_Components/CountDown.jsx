

const CountDown = ({ date }) => {
    const counterStyle = 'bg-black font-bold text-white text-2xl  px-5 py-3'

    const now = new Date();

    // Extract date components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();

    // Extract time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Format date and time
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    const date1 = new Date(date)
    const date2 = new Date(formattedDate)
    const diff = date1 - date2
    const diffInH = Math.floor(diff / (1000 * 60 * 60))
    const daysRemaining = Math.floor(diffInH / 24)
    const hourRemaining = Math.floor(diffInH % 24)
    return (
        <div className='flex md:items-end items-center gap-5 flex-col md:flex-row mb-5'>
            <h2 className='text-4xl gochi-hand text-[#1D4ED8]'>Only</h2>
            <span className='grid grid-cols-2 w-fit'>
                <span className=''>
                    <h2 className='font-semibold'>Days</h2>
                    <p className={`rounded-l-lg ${counterStyle}`}>{daysRemaining}</p>
                </span>
                <span className=' '>
                    <h2 className='font-semibold '>Hours</h2>
                    <p className={`rounded-r-lg ${counterStyle}`}>{hourRemaining}</p>
                </span>
            </span>
            <h2 className='text-4xl gochi-hand text-[#1D4ED8]'>Days Remaining</h2>

        </div>
    );
};

export default CountDown;