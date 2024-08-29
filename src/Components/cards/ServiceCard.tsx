import { ServiceCardProps } from '@/types/cards';
import Image from 'next/image';
import React from 'react';
import Button from '../Buttons/page';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, imageUrl }) => {
    return (
        <div className="bg-[#B9B9C9] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-[#9C0B35] text-lg font-semibold mb-4">{price} сум</p>
                <Image src={imageUrl} alt={title} className="w-full object-cover h-64 rounded-md mb-4" />
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <Button title='Продолжить'/>
                {/* <button className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition duration-200">
                    Продолжить
                </button> */}
            </div>
        </div>
    );
};

export default ServiceCard;
