import { StaticImageData } from "next/image";

export interface BookingCardProps {
    imageUrl: StaticImageData;
    profileImgUrl: StaticImageData;
    masterName: string;
    salonName: string;
    masterRole: string;
    ordersCount: number;
    clientsCount: number;
    address: string;
    nextBooking: string;
    starsCount: number
}

export interface MasterInfoCardProps {
    masterName: string;
    gender: string;
    salonLocation: string;
    salonName: string;
    phoneNumber: string;
    starsCount: number;
    orders: number;
    clients: number;
    nextOrder: string;
    avatarUrl: StaticImageData;
}

export interface ServiceCardProps  {
    title: string;
    price: string;
    description: string;
    imageUrl: StaticImageData;
};