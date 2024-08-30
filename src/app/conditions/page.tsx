'use client'; 
import HeaderTitles from '@/Components/text/HeaderBookers';
import React, { useState } from 'react';

const contentData = {
    usage: `Публичный договор — по гражданскому законодательству договор, заключённый коммерческой организацией (либо другим лицом, осуществляющим предпринимательскую деятельность) и устанавливающий её обязанности по продаже товаров, выполнению работ или оказанию услуг, которые такая организация по характеру своей деятельности должна осуществлять в отношении каждого, кто к ней обратится (розничная торговля, перевозка транспортом общего пользования, обязательные виды страхования, услуги связи, энергоснабжение, медицинское, гостиничное обслуживание) и не требует нотариального заверения.
Публичный договор регулирует взаимоотношения между коммерческой организацией и массовым потребителем. Одной из его особенностей является отсутствие принципа свободы договора в отношении коммерческой организации: не допускается отказ коммерческой организации от заключения публичного договора при наличии возможности предоставить потребителю необходимые ему товары или услуги. Не допускается оказывать предпочтение одним потребителям перед другими, цены на товары и услуги должны быть одинаковыми для всех (за исключением льгот). Одна и та же коммерческая организация может совершать сделки как в рамках публичных, так и обычных договоров.`,
    publicAgreement: `Публичный договор — по гражданскому законодательству договор, заключённый коммерческой организацией (либо другим лицом, осуществляющим предпринимательскую деятельность) и устанавливающий её обязанности по продаже товаров, выполнению работ или оказанию услуг, которые такая организация по характеру своей деятельности должна осуществлять в отношении каждого, кто к ней обратится (розничная торговля, перевозка транспортом общего пользования, обязательные виды страхования, услуги связи, энергоснабжение, медицинское, гостиничное обслуживание) и не требует нотариального заверения.
Публичный договор регулирует взаимоотношения между коммерческой организацией и массовым потребителем. Одной из его особенностей является отсутствие принципа свободы договора в отношении коммерческой организации: не допускается отказ коммерческой организации от заключения публичного договора при наличии возможности предоставить потребителю необходимые ему товары или услуги.`,
    licenseAgreement: "Лицензионное соглашение — это договор, который используется для...",
    privacyPolicy: "Политика конфиденциальности — это документ, который используется для...",
};

const TermsOfUse = () => {
    const [activeTab, setActiveTab] = useState('usage');
    const [content, setContent] = useState(contentData.usage);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setContent(contentData[tab]);
    };

    const renderHeaderTitle = () => {
        switch (activeTab) {
            case 'usage':
                return <HeaderTitles text='Условия использования' />;
            case 'publicAgreement':
                return <HeaderTitles text='Публичное соглашение' />;
            case 'licenseAgreement':
                return <HeaderTitles text='Лицензионное соглашение' />;
            case 'privacyPolicy':
                return <HeaderTitles text='Политика конфиденциальности' />;
            default:
                return null;
        }
    };

    return (
        <div className='mt-20'>
            <div className='mb-10 mt-20 p-3'>
                <div className="min-h-screen text-white p-8">
                    <div className='mb-10'>
                        {renderHeaderTitle()}
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-2/4 sm:w-full md:w-2/4 mb-8 lg:mb-0">
                            <ul className="space-y-4">
                                <li>
                                    <button
                                        onClick={() => handleTabClick('usage')}
                                        className={`${
                                            activeTab === 'usage' ? 'bg-[#9C0B35]' : ''
                                        } text-white py-2 px-4 rounded-3xl w-full text-center`}
                                    >
                                        Условия использования
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTabClick('publicAgreement')}
                                        className={`${
                                            activeTab === 'publicAgreement' ? 'bg-[#9C0B35]' : ''
                                        } text-white py-2 px-4 rounded-3xl w-full text-center `}
                                    >
                                        Публичное соглашение
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTabClick('licenseAgreement')}
                                        className={`${
                                            activeTab === 'licenseAgreement' ? 'bg-[#9C0B35]' : ''
                                        } text-white py-2 px-4 rounded-3xl w-full text-center`}
                                    >
                                        Лицензионное соглашение
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTabClick('privacyPolicy')}
                                        className={`${
                                            activeTab === 'privacyPolicy' ? 'bg-[#9C0B35]' : ''
                                        } text-white py-2 px-4 rounded-3xl w-full text-center `}
                                    >
                                        Политика конфиденциальности
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-3/4 lg:pl-8">
                            <div className="p-6">
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsOfUse;
