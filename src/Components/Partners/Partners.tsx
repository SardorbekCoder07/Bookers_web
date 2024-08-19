import React, { useState } from 'react';
import HeaderTitles from '../text/HeaderBookers';
import { Line } from '../Line/page';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Images from '@/assets/ImagesConst';
import Image from 'next/image';

export default function Partners() {
    const [partners] = useState([
        { src: Images.Oson, alt: 'Oson' },
        { src: Images.Uzumbank, alt: 'Uzumbank' },
        { src: Images.Sello, alt: 'Sello' },
        { src: Images.Click, alt: 'Click' },
        { src: Images.Payme, alt: 'Payme' },
        { src: Images.Oson, alt: 'Oson' },
        { src: Images.Uzumbank, alt: 'Uzumbank' },
        { src: Images.Sello, alt: 'Sello' },
        { src: Images.Click, alt: 'Click' },
        { src: Images.Payme, alt: 'Payme' }
    ]);

    return (
        <div className=' select-none'>
            <Line />
            <HeaderTitles
                text="Бизнес-партнеры мобильного приложения bookers"
                size="text-xl md:text-2xl mb-10 lg:text-3xl xl:text-4xl"
            />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
            >
                {partners && partners.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-5 md:p-10">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="responsive"
                                width={50}
                                height={50}
                                className=""
                                objectFit="contain"
                                objectPosition="center"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
