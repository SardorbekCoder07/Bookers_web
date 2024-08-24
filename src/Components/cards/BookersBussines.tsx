import Image from 'next/image';
import React from 'react';
import { CiCircleCheck } from "react-icons/ci";

interface BookersBussinesProps {
    title: string;
    modules: string[][]; // Array of arrays, each sub-array represents a row
    logo?: string;
    partnershipText?: string;
    button1Text?: string;
    button2Text?: string;
    justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'; // For the title section
    justifyModules?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'; // For the modules section
}

const BookersBussines: React.FC<BookersBussinesProps> = ({
    title,
    modules,
    logo,
    partnershipText,
    button1Text,
    button2Text,
    justify = 'center', // Default value for the title section
    justifyModules = 'around', // Default value for the modules section
}) => {
    return (
        <div className="w-full min-h-full tracking-wider bg-[#D5D5E2] p-8 rounded-xl shadow-md border-2">
            <div className={`flex justify-${justify} w-full items-center mb-8`}>
                {logo && (
                    <Image src={logo} alt="Icon" className="w-[60px] h-auto mr-4" />
                )}
                <h2 className="text-2xl font-bold text-[#9C0B35]">
                    {title}
                </h2>
            </div>
            <div className={`flex w-full flex-wrap text-lg justify-${justifyModules}`}>
                {modules.map((row, rowIndex) => (
                    <ul key={rowIndex} className="list-disc list-inside mb-8 mr-8">
                        {row.map((module, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <div className="">
                                    {module && " " && <CiCircleCheck className="text-[#9C0B35] mr-5 text-3xl font-bold " />}
                                </div>
                                <span className="font-bold ">{module}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            {partnershipText && (
                <p className="mt-6 text-[#9C0B35] w-[60%] font-bold text-lg">
                    {partnershipText}
                </p>
            )}
            <div className="flex space-x-4 mt-6">
                {button1Text && (
                    <button className="bg-transparent border border-red-600 text-red-600 hover:text-red-700 py-2 px-10 rounded-full">
                        {button1Text}
                    </button>
                )}
                {button2Text && (
                    <button className="bg-[#9C0B35] text-white py-4 px-10 rounded-full hover:bg-red-700">
                        {button2Text}
                    </button>
                )}
            </div>
        </div>
    );
};

export default BookersBussines;
