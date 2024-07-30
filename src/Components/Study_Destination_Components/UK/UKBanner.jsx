import { useState } from 'react';
import png from '../../../assets/UK/UK-Hero-Hover-1.png'
import bgWhite from '../../../assets/UK/UK-Hero-Hover-BG-1.png'
import bgBlue from '../../../assets/UK/UK-Hero-Hover-BG-2.png'
const UKBanner = () => {
    const [bgHover, setBgHover] = useState(0)
    return (
        <div className='  ' onMouseEnter={() => setBgHover(1)} onMouseLeave={() => setBgHover(0)}>
            <div className='relative w-full mx-auto flex flex-col items-center justify-center '>
                <div>
                    {bgHover == 1 ?
                        <img className='w-full rounded-3xl' src={bgBlue} alt="" /> :
                        <img className='w-full rounded-3xl' src={bgWhite} alt="" />
                    }
                </div>
                <div className='  absolute bottom-0   max-w-7xl mx-auto'  >
                    <img className='rounded-3xl ' src={png} alt="" />
                </div>
            </div>
        </div>

        // style={{ background: `${bgHover == 1 ? `url(${bgBlue})` : `url(${bgWhite})`}`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    );
};

export default UKBanner;