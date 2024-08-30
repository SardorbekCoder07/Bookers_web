import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const newsData = [
    {
        id: 1,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'path_to_image1.jpg',
    },
    {
        id: 2,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'https://picsum.photos/500/300',
    },
    {
        id: 3,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'path_to_image3.jpg',
    },
];

export default function News() {
    return (
        <div className="bg-gray-900 py-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {newsData.map(news => (
                    <SwiperSlide key={news.id}>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <p className="text-red-400 text-sm mb-2 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h4m-2 0v10m4 0h4M6 3v1M3 6h1M21 6h1M6 21v1M3 18h1M21 18h1M18 3v1m-3 15h4m-2 0V7M4 7h4m-2 0v10m4 0h4m-2 0V7m4 0h4m-2 0v10" />
                                    </svg>
                                    {news.date}
                                </p>
                                <h3 className="text-lg font-semibold text-white mb-4">{news.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{news.description}</p>
                                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
