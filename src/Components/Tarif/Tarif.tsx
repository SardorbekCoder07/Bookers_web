"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons
import Button from '../Buttons/page';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
  buttonLabel: string;
}

const pricingOptions: PricingOption[] = [
  {
    title: 'FREE',
    price: '0 сум',
    features: [
      'Настройка услуг',
      'График работы',
      'Прайс-листы',
      'Галерея',
      'Онлайн-запись',
      'Настройка услуг',
      'Приём заявок',
      'Уведомление о новых заявках',
      'Умный поиск по базе клиентов',
      'Аналитика деятельности',
      'Всё основное',
      'Ежедневный отчёт по заявкам',
    ],
    buttonLabel: 'Оформить подписку',
  },
  {
    title: 'STANDART',
    price: '63 900 сум',
    features: [
      'Настройка услуг',
      'График работы',
      'Прайс-листы',
      'Галерея',
      'Онлайн-запись',
      'Управление сотрудниками',
      'Контроль финансов',
      'Резерв VIP кабинета',
      'Анализ прибыли',
      'Аналитика услуг',
      'Всё основное + Ежедневный отчёт по заявкам',
      'Модуль звонков',
      'Контроль переписки клиентов',
      'Рассылки',
    ],
    buttonLabel: 'Оформить подписку',
  },
];

const PricingTable: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<{ [key: number]: number | null }>({});

  const toggleFeatureAccordion = (optionIndex: number, featureIndex: number) => {
    setActiveFeatureIndex(prevState => ({
      ...prevState,
      [optionIndex]: prevState[optionIndex] === featureIndex ? null : featureIndex,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pricingOptions.map((option, optionIndex) => (
          <div key={optionIndex} className="rounded-lg shadow-lg bg-[#B9B9C9]">
            <div
              className={`bg-gradient-to-r ${optionIndex === 0 ? 'from-pink-500 to-red-500' : 'from-pink-600 to-red-600'
                } p-4 rounded-t-lg text-center`}
            >
              <h2 className="text-xl font-semibold">{option.title}</h2>
              <p className="text-2xl mt-2">{option.price}</p>
            </div>

            <div className="text-center p-3 ">
              <ul className="mt-4 space-y-3 text-left">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <div
                      className="bg-[#21212E] py-2 px-1 text-center rounded-md cursor-pointer flex justify-between items-center"
                      onClick={() => toggleFeatureAccordion(optionIndex, featureIndex)}
                    >
                      <span>{feature}</span>
                      {/* Show icon based on accordion state */}
                      {activeFeatureIndex[optionIndex] === featureIndex ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                    {activeFeatureIndex[optionIndex] === featureIndex && (
                      <div className="mt-2 p-2 bg-white text-black rounded-md">
                      <p className="font-bold mb-2">Bu yerda ma&apos;lumot bor</p> {/* Custom message */}
                      <p className="font-bold mb-2">Bu yerda ma&apos;lumot bor</p> {/* Custom message */}
                    </div>                    
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 flex justify-center mb-2">
              <Button
                title="Оформить подписку"
                width=""
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
