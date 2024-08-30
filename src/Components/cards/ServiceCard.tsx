import { ServiceCardProps } from '@/types/cards';
import React from 'react';
import Button from '../Buttons/page';
import { attechment } from '@/services/Urls';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, imageUrl, onClick }) => {
    return (
        <div className="bg-[#B9B9C9] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-[#9C0B35] text-lg font-semibold mb-4">{price} сум</p>
                <img src={imageUrl ? attechment + imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX7ghSY75PvK5S-RvhkFxNz88MWEALSBDvA&s'} alt={title} className="w-full object-cover h-64 rounded-md mb-4" />
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <Button title='Продолжить' onClick={onClick}/>
            </div>
        </div>
    );
};

export default ServiceCard;
