// components/PricingTable.tsx
import React from 'react';

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
  return (
    <div className="flex justify-center items-center min-h-screen  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pricingOptions.map((option, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className={`bg-gradient-to-r ${index === 0 ? 'from-pink-500 to-red-500' : 'from-pink-600 to-red-600'} p-4 rounded-t-lg text-center`}>
              <h2 className="text-xl font-semibold">{option.title}</h2>
              <p className="text-2xl mt-2">{option.price}</p>
            </div>
            <ul className="mt-4 space-y-3 text-left">
              {option.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="bg-gray-700 p-2 rounded-md">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md">
              {option.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
