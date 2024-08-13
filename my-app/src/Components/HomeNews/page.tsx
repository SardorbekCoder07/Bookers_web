import React from 'react';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';

const HomeNews: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className='w-[370px]'>
            <div className=' flex flex-col gap-5'>
                <div>
                    <Image src={Images.ImageRectangle} alt='News card image' />
                </div>
                <div>
                    <p className='text-base text-gray-400 w-[80%]'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeNews;
