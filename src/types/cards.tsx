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