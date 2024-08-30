"use client"
import React, { useState, useEffect } from 'react';
import axios from '../../services/api';
import { useRouter, useSearchParams } from 'next/navigation';
import Hero from '@/Components/Hero/page';
import Images from '@/assets/ImagesConst';
import Button from '@/Components/Buttons/page';
import { attechment } from '@/services/Urls';
import { CiFileOff, CiImageOff, CiLocationOn, CiUser } from 'react-icons/ci';
import { MdNotificationsPaused } from 'react-icons/md';

interface Master {
    id: number | string;
    attachmentId: string;
    mainPhoto: string;
    fullName: string;
    salonName: string;
    feedbackCount: number;
    reviews: number;
    street: string;
    district: string;
    clientCount: string;
    nextEntryDate?: string;
}

interface ApiResponse {
    body: {
        object: Master[];
        totalCount: number;
    };
}

interface Category {
    id: number;
    name: string;
    message: string;
    totalPage: string | number;
    body: any
    attachmentId: string | null;
}

export default function BookingPage() {
    const searchParams = useSearchParams();
    const initialCategoryId = searchParams.get("categoryId");

    const [masters, setMasters] = useState<Master[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<number>(1); // Initialize page as 1
    const [pageSize] = useState<number>(6); // Define page size
    const [totalCount, setTotalCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<Category[]>([]);
    const [categoryId, setCategoryId] = useState<string | null>(initialCategoryId);

    const slideData = [
        {
            title: 'Услуги мастеров и салонов красоты: Барбершоп',
            description: '',
            image: Images.MastersHero,
        }
    ];

    const fetchMasters = async (isLoadMore: boolean = false) => {
        try {
            const { data } = await axios.post<ApiResponse>(`/client/filter?page=${page}&size=${pageSize}`, {
                categoryId: categoryId ? [categoryId] : [],
                gender: true,
                nextToMe: 0,
                rating: 0,
                lat: 0,
                lng: 0,
            });

            if (data.body && data.body.object.length > 0) {
                setMasters((prevMasters) => isLoadMore ? [...prevMasters, ...data.body.object] : data.body.object);
                setTotalCount(data.body.totalPage);
            } else if (!isLoadMore) {
                setMasters([]);
            }
        } catch (error) {
            console.error('Failed to fetch masters', error);
            setError('Failed to fetch masters');
        } finally {
            setLoading(false);
        }
    };

    const getCategory = async () => {
        try {
            const res = await axios.get("/category");
            setData(res.data.body);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const router = useRouter();

    const handleButtonClick = (masterId: any) => {
        router.push(`/master-detail?masterId=${masterId}`);
    };

    useEffect(() => {
        getCategory();
    }, []);

    useEffect(() => {
        if (categoryId) {
            fetchMasters();
        }
    }, [categoryId]);

    const hasMoreItems = totalCount > 1

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(e.target.value);
        setPage(1); 
    };

    const handleShowMore = () => {
        setPage((prevPage) => prevPage + 1);
        fetchMasters(true);
    };

    return (
        <div className="container mx-auto p-4 px-20">
            <Hero slides={slideData} />
            <div className="my-4">
                <select
                    value={categoryId || ""}
                    onChange={handleCategoryChange}
                    className="p-2 border bg-transparent text-gray-300 border-gray-300 rounded"
                >
                    {data.length > 0 ? data.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    )) : <>category not found</>}
                </select>
            </div>
            {masters.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
                    {masters.map((master, index) => (
                        <div key={index} className="bg-[#B9B9C9] flex gap-4 flex-col rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                            {master.attachmentId ? (
                                <img
                                    src={attechment + master.attachmentId}
                                    className="max-w-[100%] max-h-[300px] object-cover rounded-lg"
                                />
                            ) : <CiImageOff size={300} />}
                            <div className="flex items-center mt-4">
                                {master.mainPhoto ? (
                                    <img src={attechment + master.mainPhoto} alt="profile" className="w-12 h-12 rounded-full mr-4 object-cover" />
                                ) : (
                                    <div className='border rounded-full border-black p-1 mr-2'>
                                        <CiUser size={40} />
                                    </div>
                                )}
                                <div className='flex items-center gap-2'>
                                    <h3 className="text-xl font-bold">{master.fullName}</h3> /
                                    <p className="text-sm text-gray-500">{master.salonName}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center text-red-500">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg key={i} className={`w-4 h-4 ${i < master.feedbackCount ? 'text-red-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.977a1 1 0 00.95.69h4.17c.75 0 1.07.97.517 1.385l-3.375 2.453a1 1 0 00-.363 1.118l1.287 3.977c.25.772-.655 1.41-1.345.948L10 13.347l-3.375 2.453c-.69.463-1.595-.176-1.345-.948l1.287-3.977a1 1 0 00-.363-1.118L2.829 8.979c-.553-.414-.233-1.385.517-1.385h4.17a1 1 0 00.95-.69l1.286-3.977z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="ml-2 text-sm text-gray-500">{master.clientCount} отзывов</p>
                            </div>
                            <div className="mt-4 flex gap-2 text-gray-500 text-sm">
                                <CiLocationOn color='darkred' size={20} />
                                <p>Местоположение: <span className='font-semibold uppercase'>{master.street}; </span></p>
                                <p>Ближайшая запись: <span className='font-semibold uppercase'>{master.district}</span></p>
                            </div>
                            <div className="font-semibold">
                                Ближайшая запись: {master.nextEntryDate || 'Не указан'}
                            </div>
                            <div className="pt-5">
                                <Button
                                    title='Записаться'
                                    onClick={() => handleButtonClick(master.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center flex-col text-white my-2 items-center">
                    <CiFileOff size={200} color='white' />
                    <h1 className='font-semibold flex flex-col items-center text-xl'>
                        Пожалуйста, выберите категорию
                        <p> (или другую категорию)</p>
                    </h1>
                </div>
            )}
            {hasMoreItems && (
                <div className="text-center my-8">
                    <Button
                        title="Показать больше"
                        width='30%'
                        onClick={handleShowMore}
                    />
                </div>
            )}

        </div>
    );
}
