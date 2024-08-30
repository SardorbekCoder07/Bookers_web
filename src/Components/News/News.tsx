import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeaderTitles from '../text/HeaderBookers';
import Button from '../Buttons/page';

const newsData = [
    {
        id: 1,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'https://picsum.photos/500/300?random=1',
    },
    {
        id: 2,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'https://picsum.photos/500/300?random=2',
    },
    {
        id: 3,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'https://picsum.photos/500/300?random=3',
    },
    {
        id: 4,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'https://picsum.photos/500/300?random=4',
    },
    {
        id: 5,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'https://picsum.photos/500/300?random=5',
    },
    {
        id: 6,
        date: '18 июня 2024 г.',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since...',
        imageUrl: 'https://picsum.photos/500/300?random=6',
    },
];

export default function News() {
    return (
        <div className='p-4'>
            <HeaderTitles
                text='Новости bookers'
            />
            <div
                className="py-10 "
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div className="max-w-7xl mx-auto px-4 mb-10">
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
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {newsData.map((news) => (
                            <SwiperSlide key={news.id}>
                                <div className="rounded-lg overflow-hidden bg-[#B9B9C9] shadow-lg">
                                    <img src={news.imageUrl} alt={news.title} className="w-full h-50 object-cover" />
                                    <div className="p-6">
                                        <p className=" text-sm mb-2 flex items-center">
                                            <MdDateRange className="mr-2 text-[#9C0B35]" />
                                            <span className='text-[#000000]'>{news.date}</span>
                                        </p>
                                        <h3 className="text-lg font-bold text-[#000000] mb-4">{news.title}</h3>
                                        <p className="text-[#000000] text-sm mb-6">{news.description}</p>
                                        <span className=" text-[#9C0B35] py-2 px-4  transition-colors">
                                            Подробнее
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='mb-4 mt-4 flex justify-center'>
                    <Button
                        title='Все новости'
                        width=''
                    />
                </div>

            </div>
        </div>

    );
}
