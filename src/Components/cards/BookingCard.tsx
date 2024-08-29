import Image from 'next/image';
import { FC } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BookingCardProps } from '@/types/cards';
import Button from '@/Components/Buttons/page';
import { Rate } from 'antd';


const BookingCard: FC<BookingCardProps> = ({
    imageUrl,
    profileImgUrl,
    masterName,
    salonName,
    masterRole,
    ordersCount,
    starsCount,
    clientsCount,
    address,
    nextBooking,
}) => {
    return (
        <div className="bg-[#B9B9C9] shadow-lg rounded-xl p-4 w-full">
            {/* Hairdresser Image */}
            <div className="relative h-96 w-full rounded-xl overflow-hidden">
                <Image src={imageUrl} alt={`${masterName} at work`} className='object-cover' layout="fill" objectFit="cover" />
            </div>

            {/* Master Info */}
            <div className="mt-4 flex gap-4 items-center">
                <div className=" rounded-full overflow-hidden">
                    {/* Example profile image */}
                    <Image src={profileImgUrl} className='object-cover w-16 h-16' alt="Profile Picture" width={40} height={40} />
                </div>
                <div className="flex-1">
                    <div className="text-xl font-bold">{masterName} / {salonName}</div>
                    <p className="text-sm text-gray-500">{masterRole}</p>
                </div>
            </div>

            {/* Rating and Orders */}
            <div className="mt-2 flex justify-between items-center text-red-500">
                <Rate className='text-[#9C0A35]' disabled value={starsCount} />
                <p className="ml-2 text-gray-600">
                    {ordersCount} заказа, {clientsCount} клиентов
                </p>
            </div>

            {/* Address */}
            <div className="mt-2 flex items-center text-gray-600">
                <FaMapMarkerAlt className="h-4 w-4" />
                <p className="ml-2">{address}</p>
            </div>

            {/* Next Booking Info */}
            <p className="mt-4 text-gray-600">Ближайшая запись: {nextBooking}</p>

            {/* Booking Button */}
            {/* </> */}
            <div className="pt-5">
                <Button title='Записаться' />
            </div>
        </div>
    );
};

export default BookingCard;
