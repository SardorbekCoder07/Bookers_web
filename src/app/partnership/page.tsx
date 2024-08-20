import Images from '@/assets/ImagesConst';
import Hero from '@/Components/Hero/page'
import React from 'react'

export default function partnership() {
  const slideData = [
    {
        title: 'Мы предлагаем взаимовыгодное сотрудничество',
        description: '',
        image: Images.Cloud
    }
];
  return (
    <div className='container'>
       <Hero slides={slideData} />
    </div>
  )
}
