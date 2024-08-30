"use client";
import axios from '../../services/api';
import { useRouter, useSearchParams } from 'next/navigation';
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
        totalCount: number;
    };
}
interface Category {
    id: number;
    name: string;
    message: string;
    attachmentId: string | null;
}

export default function BookingPage() {
    const searchParams = useSearchParams();
    const initialCategoryId = searchParams.get("categoryId");

    const [masters, setMasters] = useState<Master[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<number>(6);
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

    const fetchMasters = async () => {
        try {
            const { data } = await axios.post<ApiResponse>(`/client/filter?page=0&size=${page}`, {
                categoryId: categoryId ? [categoryId] : [],
                gender: true,
                nextToMe: 0,
                rating: 0,
                lat: 0,
                lng: 0,
            });

            if (data.body && data.body.object) {
                setMasters(data.body.object);
                setTotalCount(data.body.totalCount);
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

    const getCategory = async () => {
        try {
            const res = await axios.get("/category");
            setData(res.data.body);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    const router = useRouter();
    const handleButtonClick = (masterId: string) => {
        router.push(`/master-detail?masterId=${masterId}`);
    };

    useEffect(() => {
        getCategory();
    }, []);

    useEffect(() => {
        if (categoryId) {
            fetchMasters();
        }
    }, [categoryId, page]);

    const hasMoreItems = masters.length < totalCount;

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(e.target.value);
        setPage(6); // Reset page count when category changes
    };

    return (
        <div className="container mx-auto p-4">
            <Hero slides={slideData} />
            <div className="my-4">
                <select
                    value={categoryId || ""}
                    onChange={handleCategoryChange}
                    className="p-2 border bg-transparent text-gray-300 border-gray-300 rounded"
                > 
                    <option value="" disabled>Выберите категорию</option>
                    {data.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name} 
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {masters.map((master, index) => (
                    <div key={index} className="bg-[#B9B9C9] flex flex-col rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <img
                            src={master.attachmentId ? attechment + master.attachmentId : Images.NotfoundImg}
                            className="max-w-[100%] max-h-[50%] h-48 object-cover rounded-lg"
                        />
                        <div className="flex items-center mt-4">
                            <img src={master.profilePic ? attechment + master.profilePic : Images.NotfoundImg} alt="profile" className="w-12 h-12 rounded-full mr-4 object-cover" />
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
                            <Button
                                title='Записаться'
                                onClick={() => handleButtonClick(master.id)} // Pass the master's ID
                            />
                        </div>
                    </div>
                ))}
            </div>
            {hasMoreItems &&
                <div className="text-center my-8">
                    <Button
                        title="Показать больше"
                        width='30%'
                        isDisabled={!hasMoreItems}
                        onClick={() => setPage((prevPage) => prevPage + 6)}
                    />
                </div>
            }
        </div>
    );
}
