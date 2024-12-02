'use client'
import Images from '@/assets/ImagesConst'
import Button from '@/Components/Buttons/page'
import Hero from '@/Components/Hero/page'
import Modal from '@/Components/Modals/Modal/page'
import Card from '@/Components/SimpleCard/Card'
import HeaderTitles from '@/Components/text/HeaderBookers'
import React, { useState } from 'react'

export default function Vacancies() { // Nomini katta harf bilan o'zgartirdik
    const [isOpen, setIsOpen] = useState(false);
    const [resume, setResume] = useState(false);

    const openModal = () => {
        setIsOpen(true); // Modalni ochish
    };

    const closeModal = () => {
        setIsOpen(false); // Modalni yopish
    };

    const openResumeModal = () => {
        setResume(true); // Resume Modalni ochish
    };

    const closeResumeModal = () => {
        setResume(false); // Resume Modalni yopish
    };

    const slideData = [
        {
            title: 'Компания Well Tech:  Вакансии',
            description: `Вы готовы нести  ответственность за свою работу и результаты, способствовать эффективному выполнению задач и достижению результатов?
                          Компания Well Tech открыта для реализации новых возможностей и расширять состав команды.  `,
            description2: `В команде мы поощряем активное взаимодействие и обмен идеями, совместно работать, находить наилучшие решения и быстро адаптироваться к изменениям.
.`,
            image: Images.vacanciesHero
        },
    ];

    return (
        <div className='container flex flex-col justify-start'>
            <Hero slides={slideData} />
            <HeaderTitles text='Вакансии' />
            <div className="md:w-[450px] my-7">
                <Card
                    title="Комьюнити-менеджер"
                    description="Комьюнити-менеджеры отвечают за создание, развитие, управление и общение с участниками сообщества."
                    buttonText="Подробнее"
                    onButtonClick={openModal}
                />
            </div>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}>
                <div className='w-full flex justify-start items-center flex-col'>
                    <div className='w-full mb-5'>
                        <p className='text-2xl font-bold '>Описание:</p>
                        <p>Менеджер по работе с агентами будет отвечать за взаимодействие с мастерами и салонами красоты, которые интегрируются в систему бронирования bookers. Основная задача – обеспечение успешной интеграции агентов, поддержка и развитие взаимоотношений с ними.</p>
                    </div>
                    <div className='w-full mb-5'>
                        <p className='text-2xl font-bold '>Требования:</p>
                        <ul typeof='square' className='list-disc ml-5'>
                            <li>Опыт работы в сфере продаж, клиентского сервиса или управления аккаунтами.</li>
                            <li>Понимание специфики работы в индустрии красоты.</li>
                            <li>Отличные коммуникативные навыки и способность устанавливать контакты.</li>
                            <li>Умение работать в команде и самостоятельно.</li>
                            <li>Стремление к достижению поставленных целей и ориентированность на результат.</li>
                            <li>Опыт проведения презентаций и обучения клиентов.</li>
                            <li>Высшее образование (предпочтительно в области маркетинга, менеджмента или смежных дисциплин).</li>
                            <li>Владение русским и узбекским языками (знание английского будет преимуществом).</li>
                            <li>Навыки работы с CRM-системами и базовое понимание IT-инструментов.</li>
                        </ul>
                    </div>
                    <div className='w-full mb-5'>
                        <p className='text-2xl font-bold '>Обязанности:</p>
                        <ul typeof='square' className='list-disc ml-5'>
                            <li >Поиск и привлечение новых мастеров и салонов красоты для интеграции в систему bookers.</li>
                            <li>Обеспечение качественной поддержки агентов на всех этапах интеграции.</li>
                            <li>Проведение обучающих сессий и тренингов по использованию платформы.</li>
                            <li>Консультирование агентов по вопросам работы с системой бронирования и решению возникающих проблем.</li>
                            <li>Анализ потребностей агентов и внесение предложений по улучшению платформы.</li>
                            <li>Постоянное взаимодействие с действующими агентами для поддержания долгосрочных отношений.</li>
                            <li>Мониторинг и анализ эффективности работы агентов в системе.</li>
                            <li>Подготовка отчетности по результатам работы с агентами.</li>
                        </ul>
                    </div>
                    <div className='w-full mb-5 '>
                        <p className='text-2xl font-bold '>Условия:</p>
                        <ul typeof='square' className='list-disc ml-5'>
                            <li>Работа в динамично развивающейся компании.</li>
                            <li>Возможность профессионального и карьерного роста.</li>
                            <li>Конкурентоспособная заработная плата.</li>
                            <li>Социальный пакет (медицинское страхование, оплачиваемый отпуск и т.д.).</li>
                            <li>Комфортный офис и дружный коллектив.</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <p>Если вы готовы стать частью нашей команды и помочь мастерам и салонам красоты эффективно интегрироваться в систему бронирования bookers, отправьте свое резюме и сопроводительное письмо кликнув на кнопку “Отправить резюме”</p>
                    </div>
                    <div className='w-30%'>
                        <Button title='Отправить резюме' onClick={() => {
                            openResumeModal();
                            closeModal();
                        }} />
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={resume}
                onClose={closeResumeModal}
            >
                <p>SALOM</p>
            </Modal>
        </div>
    );
}
