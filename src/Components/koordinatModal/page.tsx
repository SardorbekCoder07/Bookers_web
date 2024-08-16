import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const KoordinatModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [activeTime, setActiveTime] = useState<string | null>(null);

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
                    <h2 className='text-2xl font-bold mb-4'>Координатларни танланг</h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                        {/* Kalendar qismi */}
                        <div className="lg:w-1/2 flex justify-center">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                inline
                                calendarClassName="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
                                dayClassName={(date) =>
                                    date.getDate() === selectedDate?.getDate() &&
                                        date.getMonth() === selectedDate?.getMonth() &&
                                        date.getFullYear() === selectedDate?.getFullYear()
                                        ? 'bg-[#9C0B35] text-white rounded-full'
                                        : 'text-gray-800'
                                }
                            />
                        </div>
                        {/* Bo'sh vaqt tugmalari */}
                        <div className="lg:w-1/2 flex flex-col justify-center items-center">
                            <h2 className="text-lg font-bold mb-2">Сегодня четверг, 23 февраля</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30"].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setActiveTime(time)}
                                        className={`py-2 px-4 rounded-md transition-colors duration-300 ${activeTime === time ? 'bg-[#9C0B35] text-white' : 'bg-white text-gray-800 hover:bg-[#9C0B35] hover:text-white'}`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={onClose}
                            className="bg-[#9C0B35] text-white py-2 px-4 rounded-md hover:bg-[#7a072a] transition"
                        >
                            Записаться
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KoordinatModal;
