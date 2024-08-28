import PricingTable from '@/Components/Tarif/Tarif';
import HeaderTitles from '@/Components/text/HeaderBookers';
import React from 'react';

const Tarif = () => {
    return (
        <div className='mb-10 mt-40'>
            <div className='mt-20 w-full md:w-[60%] mb-4 mx-auto text-center'>
                <HeaderTitles
                    text='Выберите тариф и расширяйте свои возможности в приложении bookers'
                />
            </div>
            <div className='p-3'>
            <PricingTable/>
            </div>   
        </div>
    );
}

export default Tarif;
