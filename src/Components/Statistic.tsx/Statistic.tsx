"use client";
import React, { useState, useEffect } from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";

import HeaderTitles from '../text/HeaderBookers';
import { Line } from '../Line/page';
import axios from '../../services/api';
import { Anybody } from 'next/font/google';

export default function Statistic() {
    const [statisticsData, setStatisticsData] = useState({
        masterCount: 0,
        clientCount: 0,
        locationCount: 0,
        completedOrderCount: 0,
    });
    const [statistics, setStatistics] = useState({
        masterCount: 0,
        clientCount: 0,
        locationCount: 0,
        completedOrderCount: 0,
    });

    const getStatistics = async () => {
        try {
            const res = await axios.get('/dashboard/website/statistic');
            setStatisticsData(res.data.body);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStatistics();
    }, []);

    useEffect(() => {
        if (Object.values(statisticsData).some(value => value > 0)) {
            const animateValue = (start: number, end : number, duration : number, key: number | string) => {
                if (start === end) {
                    setStatistics(prevStats => ({
                        ...prevStats,
                        [key]: end
                    }));
                } else {
                    let startValue = start;
                    const increment = end > start ? 1 : -1;
                    const stepTime = Math.abs(Math.floor(duration / (end - start)));

                    const counter = setInterval(() => {
                        startValue += increment;
                        setStatistics(prevStats => ({
                            ...prevStats,
                            [key]: startValue
                        }));

                        if (startValue === end) {
                            clearInterval(counter);
                        }
                    }, stepTime);
                }
            };

            animateValue(0, statisticsData?.masterCount, 2000, 'masterCount');
            animateValue(0, statisticsData?.clientCount, 2000, 'clientCount');
            animateValue(0, statisticsData?.locationCount, 2000, 'locationCount');
            animateValue(0, statisticsData?.completedOrderCount, 2000, 'completedOrderCount');
        }
    }, [statisticsData]);

    const statisticsArray = [
        {
            id: 1,
            icon: <PiStudentDuotone />,
            value: statistics?.masterCount,
            title: "Количество мастеров"
        },
        {
            id: 2,
            icon: <PiUsersThreeBold />,
            value: statistics?.clientCount,
            title: "Количество клиентов"
        },
        {
            id: 3,
            icon: <MdLocationPin />,
            value: statistics?.locationCount,
            title: "Количество локаций"
        },
        {
            id: 4,
            icon: <MdDoneOutline />,
            value: statistics?.completedOrderCount,
            title: "Количество завершенных заказов"
        },
    ];

    return (
        <div className='mb-10'>
            <Line />
            <HeaderTitles
                text="Статистика bookers"
                size="text-xl md:text-2xl mb-10 lg:text-3xl xl:text-4xl"
            />
            <div className='flex gap-2 lg:justify-between justify-center  flex-wrap'>
                {statisticsArray.map(stat => (
                    <div className='text-white text-2xl w-80 bg-[#9C0B35] rounded-xl px-4 py-8 flex justify-center gap-5 items-center' key={stat.id}>
                        <div className='text-7xl'>{stat.icon}</div>
                        <div>
                            <p className='text-4xl'>{stat.value}</p>
                            <p className='w-full text-2xl'>{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
