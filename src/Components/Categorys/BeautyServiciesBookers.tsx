import React from "react";

interface BeautyServiceProps {
    img: string | React.ReactElement;
    title: string;
    description: string;
    onClick: () => void; // Define onClick prop
}

const BeautyService: React.FC<BeautyServiceProps> = ({ img, title, description, onClick }) => {
    return (
        <div className="w-auto  cursor-pointer  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" onClick={onClick}>
            <div className="flex justify-center items-center mb-5">
                <div className='w-16 h-16 text-2xl text-white rounded-full p-4 bg-[#9C0B35] flex justify-center items-center'>
                    {typeof img === "string" ? (
                        <img src={img} alt="" className="w-full h-full object-contain" />
                    ) : (
                        img
                    )}
                </div>
            </div>
            <h3 className="text-xl font-bold text-white opacity-80 mb-3 text-center truncate">{title}</h3>
            <p className="text-base text-gray-400 text-center">{description}</p>
        </div>
    );
};

export default BeautyService;
