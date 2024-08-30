import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { Autoplay, Pagination } from 'swiper/modules';
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
    {
        id: 3,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'path_to_image3.jpg',
    },
    {
        id: 3,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'path_to_image3.jpg',
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
        <div className="py-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {newsData.map(news => (
                    <SwiperSlide key={news.id}>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <p className="text-red-400 text-sm mb-2 flex items-center">
                                    <MdDateRange/>
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
