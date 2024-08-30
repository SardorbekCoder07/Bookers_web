import { Calendar, Skeleton } from 'antd';
import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import moment from 'moment';
import 'moment/locale/ru';
import Button from '@/Components/Buttons/page';
import { LiaTimesSolid } from "react-icons/lia";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onClick: () => void;
    setSelectedDate: (val: Date | null) => void;
    setActiveTime: (val: string | null) => void
    activeTime: string | null;
    loading: boolean;
    times: string[] | null
}

const OrderModal: React.FC<ModalProps> = ({ isOpen, onClose, setActiveTime, setSelectedDate, activeTime, times, onClick, loading }) => {

    const disablePastDates = (current: any) => {
        return current && current < moment().startOf('day');
    };

    // Sanani tanlash funksiyasi
    const handleDateSelect = (date: any) => {
        setSelectedDate(date.toDate()); // Tanlangan sanani holatga saqlash
        setActiveTime(null)
    };

    // Sanani yil-oy-kun formatida qaytarish

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ transition: 'opacity 0.3s ease-in-out' }}
        >
            <div
                className={`bg-[#B9B9C9] rounded-lg p-6 max-w-4xl w-full relative transition-transform duration-300 overflow-y-auto ${isOpen ? 'scale-100' : 'scale-95'}`}
                style={{ transition: 'transform 0.3s ease-in-out', maxHeight: '90vh' }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    <MdOutlineCancel className='text-2xl text-[#9C0B35]' />
                </button>
                <div className="flex flex-col items-center">
                    <h2 className='text-2xl font-bold mb-4'>Записаться</h2>
                    <h2 className='text-2xl mb-4'>Сегодня {moment().format('dddd, D MMMM')}</h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                        {/* Kalendar qismi */}
                        <div className="lg:w-1/2 flex justify-center">
                            <Calendar
                                fullscreen={false}
                                disabledDate={disablePastDates} // O'tib ketgan kunlarni o'chirish
                                onSelect={handleDateSelect} // Tanlangan sanani olish
                            />
                        </div>
                        {/* Bo'sh vaqt tugmalari */}
                        <div className="lg:w-1/2 flex flex-col justify-center items-center">
                            <h2 className="text-lg text-start font-bold mb-2">Свободное время</h2>
                            {loading ? <Skeleton /> : times ?
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {times.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setActiveTime(time)}
                                            className={`py-2 px-4 rounded-md transition-colors duration-300 ${activeTime === time ? 'bg-[#9C0B35] text-white' : 'bg-white text-gray-800 hover:bg-[#9C0B35] hover:text-white'}`}
                                        >
                                            {time.slice(0, 5)}
                                        </button>
                                    ))}
                                </div> :
                                <div className='flex flex-col justify-center items-center'>
                                    <LiaTimesSolid size={100} className='text-[#9C0B35]' />
                                    <p>У Мастера сегодня нет свободного времени</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button title='Записаться' isDisabled={activeTime ? false : true} onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;