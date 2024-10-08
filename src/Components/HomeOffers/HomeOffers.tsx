import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from '../Buttons/page';

interface HomeOffersTypes {
    title: string;
    icon: React.ElementType; // Changed from any to a React component type
    data: HomeOffersCardData[];
}

interface HomeOffersCardData {
    text: string;
}

const HomeOffers: React.FC<HomeOffersTypes> = ({ title, icon: Icon, data }) => {
    const config = localStorage.getItem('token')
    return (
        <div className='h-max w-full lg:w-[30%] flex flex-col items-center justify-center p-6 rounded-2xl bg-[#B9B9C9] mb-6 lg:mb-0'>
            <div className='text-center flex flex-col items-center mb-5'>
                <Icon className='text-[70px] text-[#9C0B35]' />
                <p className='text-[#9C0B35] font-semibold text-xl px-5 lg:px-10 mt-2'>{title}</p>
            </div>
            <div className='text-left text-[#242424] space-y-4 mb-5'>
                {data.map((item, index) => (
                    <div key={index} className='flex items-center'>
                        <FaRegCircleCheck size={24} className='text-[#9C0B35] mr-3' />
                        <p className='flex-1'>{item.text}</p>
                    </div>
                ))}
            </div>
            {config ? (
                <Button outlineStyle title='Скачать приложение' customStyle='mb-3' />
            ) : (
                <>
                    <Button outlineStyle title='Скачать приложение' customStyle='mb-3' />
                    <Button title='Войти / Регистрация' />
                </>
            )
            }
        </div>
    );
}

export default HomeOffers;
