import Images from '@/assets/ImagesConst';
import Hero from '@/Components/Hero/page';
import React from 'react';

export default function Page() {
    const slideData = [
        {
            title: 'Услуги мастеров и салонов красоты: Барбершоп',
            description: '',
            image: Images.MastersHero 
        }
    ];

    return (
        <div className='container'>
            <Hero slides={slideData} />
        </div>
    );
}
