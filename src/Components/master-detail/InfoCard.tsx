import { MasterInfoCardProps } from '@/types/cards';
import { Rate } from 'antd';
import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Button from '../Buttons/page';

const InfoCard: React.FC<MasterInfoCardProps> = ({
    avatarUrl,
    gender,
    clients,
    masterName,
    nextOrder,
    orders,
    salonName,
    phoneNumber,
    salonLocation,
    starsCount
}) => {
    return (
        <div className='w-full bg-[#B9B9C9] rounded-xl p-5'>
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <Image style={{ objectFit: 'cover' }} src={avatarUrl} alt={``} width={100} height={100} />
                    </div>
                    <div>
                        <div className="text-2xl text-black font-semibold">{masterName} / {salonName}</div>
                        <p className="text-lg text-black">{gender}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex items-center">
                        <Rate value={starsCount} className='text-[#9C0B35] text-3xl' disabled />
                    </div>
                    <div className="ml-2 text-lg text-gray-700">{orders} заказа, {clients} клиентов</div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className="mt-2 flex gap-4 items-center text-sm text-black">
                    <FaMapMarkerAlt className="text-[#9C0B35] text-2xl" />
                    <span className='text-lg'>{salonLocation}</span>
                </div>
                <div className="mt-1 flex gap-4 items-center text-sm text-black">
                    <FaPhoneAlt className="text-[#9C0B35] text-2xl" />
                    <span className='text-lg'>{phoneNumber}</span>
                </div>
            </div>
            <div>
                <p className="mt-2 text-lg font-bold text-black">Ближайшая запись: {nextOrder}</p>
            </div>
            <div className='flex justify-center items-center '>
                <div className='w-[30%]'>
                    <Button title='Написать сообщение' />
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
