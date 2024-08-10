'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';
import HeaderTitle from '../text/header-title';

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
                <SwiperSlide className="h-full flex items-center justify-center">
                    <div className="flex flex-col ml-4  lg:flex-row justify-between items-center h-full p-4 lg:p-8">
                        <div className="w-full lg:w-1/2 m-0 text-white">
                            <HeaderTitle text="Система бронирования для мастеров, салонов красоты и их клиентов" />
                            <p className="text-gray-300 text-lg mt-4">
                                Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами,
                                что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и
                                выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                            <Image className="rounded-lg" src={Images.heroFirst} alt="Hero image" width={400} height={400} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="h-full flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row justify-between items-center h-full p-4 lg:p-8">
                        <div className="w-full lg:w-1/2 ml-4   text-white">
                            <HeaderTitle text="Система бронир m-0ования для мастеров, салонов красоты и их клиентов" />
                            <p className="text-gray-300 text-lg mt-4">
                                Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами,
                                что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и
                                выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                            <Image className="rounded-lg" src={Images.heroFirst} alt="Hero image" width={400} height={400} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-full flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row justify-between items-center h-full p-4 lg:p-8">
                        <div className="w-full lg:w-1/2 ml-4  text-white">
                            <HeaderTitle text="Система бронир m-0ования для мастеров, салонов красоты и их клиентов" />
                            <p className="text-gray-300 text-lg mt-4">
                                Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами,
                                что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и
                                выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                            <Image className="rounded-lg" src={Images.heroFirst} alt="Hero image" width={400} height={400} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-full flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row justify-between items-center h-full p-4 lg:p-8">
                        <div className="w-full lg:w-1/2 ml-4  text-white">
                            <HeaderTitle text="Система бронир m-0ования для мастеров, салонов красоты и их клиентов" />
                            <p className="text-gray-300 text-lg mt-4">
                                Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами,
                                что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и
                                выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                            <Image className="rounded-lg" src={Images.heroFirst} alt="Hero image" width={400} height={400} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-full flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row justify-between items-center h-full p-4 lg:p-8">
                        <div className="w-full lg:w-1/2 ml-4  text-white">
                            <HeaderTitle text="Система бронир m-0ования для мастеров, салонов красоты и их клиентов" />
                            <p className="text-gray-300 text-lg mt-4">
                                Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами,
                                что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и
                                выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                            <Image className="rounded-lg" src={Images.heroFirst} alt="Hero image" width={400} height={400} />
                        </div>
                    </div>
                </SwiperSlide>
                {/* Qo'shimcha slaydlar uchun yana SwiperSlide komponentini qo'shishingiz mumkin */}
            </Swiper>
        </div>
    );
};

export default Hero;
