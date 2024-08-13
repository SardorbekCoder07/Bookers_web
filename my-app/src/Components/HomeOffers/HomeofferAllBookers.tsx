import React from 'react';
import { BsGift } from 'react-icons/bs';
import { PiHandCoinsLight } from 'react-icons/pi';
import { TbVectorBezier2 } from 'react-icons/tb';
import HomeOffers from './HomeOffers';

export default function HomeofferAll() {
    const FirstCard = [
        { text: 'Быстрое и удобное бронирование' },
        { text: 'Гарантированные онлайн-записи' },
        { text: 'Большой выбор мастеров' },
        { text: 'Детальная информация о профилях мастеров и отзывы клиентов' },
        { text: 'Интеграция с календарем и напоминания' },
        { text: 'Программы лояльности и бонусы' },
    ];

    const SecondCard = [
        { text: 'Возможность настраивать услуги по полу, категориям, специализациям и процедурам' },
        { text: 'Управление графиком работы' },
        { text: 'Онлайн бронирование' },
        { text: 'Активация времени для VIP клиентов' },
        { text: 'Настройка приема онлайн оплаты и и предоплаты' },
        { text: 'Учет расходов мастера' },
        { text: 'Создать записи на месяц вперед и другие' },
    ];

    const ThirdCard = [
        { text: 'Модуль управления клиентами' },
        { text: 'Модуль мониторинга и аналитики' },
        { text: 'Модуль планирования и расписания' },
        { text: 'Модуль маркетинга и продвижения' },
        { text: 'Модуль управления персоналом' },
        { text: 'Модуль комьюнити' },
    ];

    return (
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <HomeOffers icon={BsGift} data={FirstCard} title='Что предлагает BOOKERS клиентам услуг красоты?' />
            <HomeOffers icon={PiHandCoinsLight} data={SecondCard} title='Что предлагает BOOKERS мастерам?' />
            <HomeOffers icon={TbVectorBezier2} data={ThirdCard} title='Какую интеграцию предлагает BOOKERS бизнес-партнерам?' />
        </div>
    );
}
