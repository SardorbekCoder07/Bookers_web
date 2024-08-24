import Images from '@/assets/ImagesConst'
import Hero from '@/Components/Hero/page'
import Card from '@/Components/SimpleCard/Card'
import HeaderTitles from '@/Components/text/HeaderBookers'
import React from 'react'

export default function vacancies() {
    const slideData = [
        {
            title: 'Компания Well Tech:  Вакансии',
            description: `Вы готовы нести  ответственность за свою работу и результаты, способствовать эффективному выполнению задач и достижению результатов?
                          Компания Well Tech открыта для реализации новых возможностей и расширять состав команды.  `,
            description2: `В команде мы поощряем активное взаимодействие и обмен идеями, совместно работать, находить наилучшие решения и быстро адаптироваться к изменениям.
.`,
            image: Images.vacanciesHero
        },
    ]
    return (
        <div className='container flex flex-col justify-start'>
            <Hero slides={slideData} />
            <HeaderTitles text='Вакансии'/>
            <div className="md:w-[450px] my-7">
                <Card
                    title="Комьюнити-менеджер"
                    description="Комьюнити-менеджеры отвечают за создание, развитие, управление и общение с участниками сообщества."
                    buttonText="Подробнее"
                    onButtonClick={''}
                />
            </div>
        </div>
    )
}
