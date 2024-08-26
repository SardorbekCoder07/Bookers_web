"use client";
import axios from '../../services/api';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Hero from '@/Components/Hero/page';
import Images from '@/assets/ImagesConst';
import Button from '@/Components/Buttons/page';
import { attechment } from '@/services/Urls';

interface Master {
    attachmentId: string;
    profilePic: string;
    fullName: string;
    salonName: string;
    feedbackCount: number;
    reviews: number;
    street: string;
    district: string;
    clientCount: string;
}

interface ApiResponse {
    body: {
        object: Master[];
        totalCount: number;  // Assuming the API provides totalCount
    };
}

export default function BookingPage() {
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId");

    const [masters, setMasters] = useState<Master[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<number>(6);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const slideData = [
        {
            title: 'Услуги мастеров и салонов красоты: Барбершоп',
            description: '',
            image: Images.MastersHero,
        }
    ];

    const fetchMasters = async () => {
        try {
            const { data } = await axios.post<ApiResponse>(`/client/filter?page=0&size=${page}`, {
                categoryId: [categoryId],
                gender: true,
                nextToMe: 0,
                rating: 0,
                lat: 0,
                lng: 0,
            });

            if (data.body && data.body.object) {
                setMasters(data.body.object);
                setTotalCount(data.body.totalElements);
            } else {
                setError('No data found.');
            }
        } catch (error) {
            console.error('Failed to fetch masters', error);
            setError('Failed to fetch masters');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (categoryId) {
            fetchMasters();
        }
    }, [categoryId, page]);

    const hasMoreItems = masters.length < totalCount;

    return (
        <div className="container mx-auto p-4">
            <Hero slides={slideData} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {masters.map((master, index) => (
                    <div key={index} className="bg-[#B9B9C9] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src={master.attachmentId ? attechment + master.attachmentId : Images.NotfoundImg}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="flex items-center mt-4">
                            <img src={master.profilePic ? attechment + master.profilePic : Images.NotfoundImg} alt="profile" className="w-12 h-12 rounded-full mr-4" />
                            <div className='flex items-center gap-2'>
                                <h3 className="text-xl font-bold">{master.fullName}</h3> /
                                <p className="text-sm text-gray-500">{master.salonName}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="flex items-center text-red-500">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < master.feedbackCount ? 'text-red-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.977a1 1 0 00.95.69h4.17c.75 0 1.07.97.517 1.385l-3.375 2.453a1 1 0 00-.363 1.118l1.287 3.977c.25.772-.655 1.41-1.345.948L10 13.347l-3.375 2.453c-.69.463-1.595-.176-1.345-.948l1.287-3.977a1 1 0 00-.363-1.118L2.829 8.979c-.553-.414-.233-1.385.517-1.385h4.17a1 1 0 00.95-.69l1.286-3.977z" />
                                    </svg>
                                ))}

                            </div>
                            <p className="ml-2 text-sm text-gray-500">{master.clientCount} отзывов</p>
                        </div>
                        <div className="mt-4 flex gap-1 text-gray-500 text-sm">
                            <p>Местоположение: {master.street};</p>
                            <p>Ближайшая запись: {master.district}</p>
                        </div>
                        <div className="pt-5">
                            <Button title='Записаться' />
                        </div>
                    </div>
                ))}
            </div>
            {hasMoreItems ?
                <div className="text-center my-8">
                    <Button
                        title="Показать больше"
                        width='30%'
                        onClick={() => setPage((prevPage) => prevPage + 6)}
                    />
                </div>
                :
                <div className="text-center my-8">
                    <Button
                        title="Показать меньше"
                        width='30%'
                        onClick={() => setPage((prevPage) => prevPage - 6)}
                    />
                </div>

            }
        </div>
    );
}
