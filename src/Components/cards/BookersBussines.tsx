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
}

const BookersBussines: React.FC<BookersBussinesProps> = ({
    title,
    modules,
    logo,
    partnershipText,
    button1Text,
    button2Text
}) => {
    return (
        <div className="w-full min-h-full tracking-wider bg-[#D5D5E2] p-6 rounded-xl shadow-md border-2">
            <div className="flex justify-center w-full items-center mb-8">
                {logo && (
                    <Image src={logo} alt="Icon" className="w-12 h-12 mr-4" />
                )}
                <h2 className="text-2xl font-bold text-[#9C0B35]">
                    {title}
                </h2>
            </div>
            <div className="flex w-full flex-wrap text-lg justify-around">
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
                <p className="mt-6 text-[#9C0B35] font-bold text-lg">
                    {partnershipText}
                </p>
            )}
            <div className="flex space-x-4 mt-6">
                {button1Text && (
                    <button className="bg-white border border-red-600 text-red-600 py-2 px-4 rounded-full hover:bg-gray-100">
                        {button1Text}
                    </button>
                )}
                {button2Text && (
                    <button className="bg-[#9C0B35] text-white py-2 px-4 rounded-full hover:bg-red-700">
                        {button2Text}
                    </button>
                )}
            </div>
        </div>
    );
};

export default BookersBussines;

// import Image from 'next/image';
// import React from 'react';
// import { CiCircleCheck } from "react-icons/ci";

// interface BookersBussinesProps {
//     title: string;
//     modules: string[][]; // Array of arrays, each sub-array represents a row
//     logo?: string;
//     partnershipText?: string;
//     button1Text?: string;
//     button2Text?: string;
// }

// const BookersBussines: React.FC<BookersBussinesProps> = ({
//     title,
//     modules,
//     logo,
//     partnershipText,
//     button1Text,
//     button2Text
// }) => {
//     return (
//         <div className="w-full min-h-full tracking-wider bg-[#B9B9C9] p-6 rounded-xl shadow-md">
//             <div className="flex justify-center w-full  items-center mb-8">
//                 {logo && (
//                     <Image src={logo} alt="Icon" className="w-12 h-12 mr-4" />
//                 )}
//                 <h2 className="text-2xl font-bold text-[#9C0B35] sm:w-[50%] md:w-[60%] lg:w-[70%]">
//                     {title}
//                 </h2>
//             </div>
            // <div className="flex w-full flex-wrap justify-start">
            //     {modules.map((row, rowIndex) => (
            //         <ul key={rowIndex} className="list-disc list-inside mb-8 mr-8">
            //             {row.map((module, index) => (
            //                 <li key={index} className="flex items-center mb-2">
            //                     <div className="">
            //                     {module && " " && <CiCircleCheck className="text-[#9C0B35] mr-5 text-3xl font-bold " />}
            //                     </div>
            //                     <span className="font-bold ">{module}</span>
            //                 </li>
            //             ))}
            //         </ul>
            //     ))}
            // </div>
//             {partnershipText && (
//                 <p className="mb-6 text-[#9C0B35] font-bold sm:w-[60%] md:w-[70%] lg:w-[80%] text-xl">
//                     {partnershipText}
//                 </p>
//             )}
//             <div className="flex space-x-4">
//                 {button1Text && (
//                     <button className="bg-white border border-red-600 text-red-600 py-3 px-6 rounded-3xl hover:bg-gray-100">
//                         {button1Text}
//                     </button>
//                 )}
//                 {button2Text && (
//                     <button className="bg-[#9C0B35] text-white py-3 px-6 rounded-3xl hover:bg-red-700">
//                         {button2Text}
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BookersBussines;
