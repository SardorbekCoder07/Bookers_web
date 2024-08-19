"use client";
import React, { useState } from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";

import HeaderTitles from '../text/HeaderBookers';
import { Line } from '../Line/page';

export default function Statistic() {
    const [statistics, setStatistics] = useState([
        {
            id: 1,
            icon: <PiStudentDuotone />,
            Statistic: "500",
            title: "Количество мастеров"
        },
        {
            id: 1,
            icon: <PiUsersThreeBold />,
            Statistic: "1002",
            title: "Количество клиентов"
        },
        {
            id: 1,
            icon: <MdLocationPin />,
            Statistic: "500",
            title: "Количество мастеров"
        },
        {
            id: 1,
            icon: <MdDoneOutline />,
            Statistic: "500",
            title: "Количество мастеров"
        },
    ]);

    return (
        <div className='mb-10'>
            <Line/>
            <HeaderTitles
                text="Статистика bookers"
                size="text-xl md:text-2xl mb-10 lg:text-3xl xl:text-4xl"
            />
            <div className='flex gap-2 lg:justify-between justify-center  flex-wrap'>
                {statistics.map(stat => (
                    <div className='text-white text-2xl w-80 bg-[#9C0B35] rounded-xl  px-4 py-8 flex justify-center gap-5 items-center' key={stat.id}>
                        <div className='text-7xl'>{stat.icon}</div>
                        <div className="">
                            <p>{stat.Statistic}</p>
                            <p className='w-full text-2xl'>{stat.title}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
