import Images from '@/assets/ImagesConst';
import Image from 'next/image';
import React from 'react';
import { CiCircleCheck } from "react-icons/ci";

const modulesData = [
    "Модуль управления клиентами",
    "Модуль маркетинга и продвижения",
    "Модуль мониторинга и аналитики",
];

const BookersBussines: React.FC = () => {
    return (
        <div className="w-full bg-[#B9B9C9] p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-8">
                <Image src={Images.Logo} alt="Icon" className="w-12 h-12 mr-4" />
                <h2 className="text-2xl font-bold text-[#9C0B35] sm:w-[50%] md:w-[60%] lg:w-[70%]">
                    Какую интеграцию предлагает BOOKERS бизнес-партнерам:
                </h2>
            </div>
            <div className="flex justify-start">
                <ul className="list-disc list-inside mb-8 mr-8">
                    {modulesData.map((module, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <CiCircleCheck className="text-[#9C0B35] mr-2 text-3xl font-bold" />
                            <span className="font-bold">{module}</span>
                        </li>
                    ))}
                </ul>
                <ul className="list-disc list-inside mb-8 mr-8">
                    {modulesData.map((module, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <CiCircleCheck className="text-[#9C0B35] mr-2 text-3xl font-bold" />
                            <span className="font-bold">{module}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="mb-6 text-[#9C0B35] font-bold sm:w-[60%] md:w-[70%] lg:w-[80%] text-xl">
                Станьте бизнес-партнером bookers и оцените преимущества системы управления и мониторинга.
            </p>
            <div className="flex space-x-4">
                <button className="bg-white border border-red-600 text-red-600 py-3 px-6 rounded-3xl hover:bg-gray-100">
                    Условия партнерства
                </button>
                <button className="bg-[#9C0B35] text-white py-3 px-6 rounded-3xl hover:bg-red-700">
                    Войти / Регистрация
                </button>
            </div>
        </div>
    );
};

export default BookersBussines;
