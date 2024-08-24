import Images from '@/assets/ImagesConst'
import Hero from '@/Components/Hero/page'
import React from 'react'

export default function security() {
    const slideData = [
        {
            title: 'Стандартизация и Безопасность',
            description: `Вы готовы нести  ответственность за свою работу и результаты, способствовать эффективному выполнению задач и достижению результатов?
                           Компания Well Tech открыта для реализации новых возможностей и расширять состав команды.  `,
            description2: `В команде мы поощряем активное взаимодействие и обмен идеями, совместно работать, находить наилучшие решения и быстро адаптироваться к изменениям.`,
            image: Images.Cloud1
        },
    ]
    return (
        <div className='container'>
            <Hero slides={slideData} />
            security
        </div>
    )
}
