import { FaCheck } from "react-icons/fa6";

const QuickFacts = () => {
    const facts = [
        "The UK undertakes 5% of the world’s scientific research and produces 14% of the world’s most frequently cited papers",
        "14 of the best student cities in the world are in The UK (QS Best Student Cities 2023)",
        "UK offers 131 universities of international repute to study from",
        "UK welcomes over 400,000 students every year",
        "12 of world’s top 100 universities are in The UK (QS World Rankings 2023)",
        "Admission without IELTS possible"
    ];

    return (
        <div className="py-10 max-w-screen-2xl mx-auto">
            <p className="text-center text-4xl font-bold mb-20">Quick Facts</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {facts.map((fact, index) => (
                    <div key={index} className="flex gap-3 text-xl font-normal items-start">
                        <FaCheck className="text-white bg-blue-500 p-[6px] rounded-full flex-shrink-0" style={{ width: '25px', height: '25px' }} />
                        <span>{fact}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickFacts;
