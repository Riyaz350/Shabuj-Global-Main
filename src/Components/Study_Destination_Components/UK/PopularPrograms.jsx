import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';


const PopularPrograms = () => {
    const texts = ["Hello, World!", "Welcome to the Animation!", "Enjoy your stay!"];
    const [index, setIndex] = useState(0);

    const props = useSpring({
        from: { transform: 'translateY(100%)', opacity: 0 },
        to: { transform: 'translateY(0%)', opacity: 1 },
        config: { duration: 1000 },
        reset: true,
        onRest: () => {
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
            }, 1000);
        },
    });

    const vanishProps = useSpring({
        from: { opacity: 1 },
        to: { opacity: 0 },
        delay: 2000,
        config: { duration: 1000 },
    });
    return (
        <div className="relative h-screen flex flex-col items-center justify-center">
            <animated.div style={{ ...props, ...vanishProps }} className="text-2xl font-bold">
                {texts[index]}
            </animated.div>
        </div>
    );
};

export default PopularPrograms;