import event_1 from '../../assets/register_1.jpeg';
import event_2 from '../../assets/register_2.png';
import event_3 from '../../assets/register_3.png';

const Registration_Events = () => {
    return (
        <div className="bg-white lg:w-[560px] md:w-[560px] w-auto p-10 rounded-3xl shadow-md shadow-zinc-200 space-y-10">
            <img className='rounded-3xl' src={event_1} alt="" />
            <img className='rounded-3xl' src={event_2} alt="" />
            <img className='rounded-3xl' src={event_3} alt="" />
        </div>
    );
};

export default Registration_Events;