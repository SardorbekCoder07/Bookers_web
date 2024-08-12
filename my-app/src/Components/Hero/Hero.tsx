'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';
import HeaderTitles from '../text/header_title';

// Define the data for the slides
const slideData = [
    {
        title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
        description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
        image: Images.heroFirst
    },
    {
        title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
        description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
        image: Images.heroFirst
    },
    {
        title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
        description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
        image: Images.heroFirst
    },
    {
        title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
        description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
        image: Images.heroFirst
    },
];

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen select-none w-full ">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                className="h-full"
            >
                {slideData.map((slide, index) => (
                    <SwiperSlide key={index} className="h-full flex items-center pt-20  justify-center">
                        <div className="flex flex-col lg:flex-row justify-between  items-center h-full p-4 lg:p-8">
                            <div className="w-full ml-4 text-white">
                                <HeaderTitles text={slide.title} />
                                <p className="text-gray-300 lg:text-lg text-[1.1rem]  mt-4">
                                    {slide.description}
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 lg:flex hidden justify-center mt-4 lg:mt-0">
                                <Image className="rounded-lg" src={slide.image} alt="Hero image" width={400} height={400} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
