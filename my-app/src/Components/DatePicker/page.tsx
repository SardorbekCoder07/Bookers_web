// components/DatePicker.tsx

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiCalendar } from 'react-icons/hi'; // Ikonka uchun

interface DatePickerProps {
    label: string;
    id: string;
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
    required?: boolean;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ label, id, selectedDate, onChange, required = false }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClickIcon = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative mb-6">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <DatePicker
                id={id}
                selected={selectedDate}
                onChange={onChange}
                dateFormat="MMMM d, yyyy"
                open={isOpen}
                onClickOutside={() => setIsOpen(false)}
                onSelect={() => setIsOpen(false)}
                className="bg-[#B9B9C9] text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full pr-10"
                required={required}
                customInput={<CustomInput onClickIcon={handleClickIcon} value={selectedDate ? selectedDate.toDateString() : ''} />}
            />
            <span
                className="absolute right-3 top-1/2 transform translate-y-1 text-gray-500 cursor-pointer"
                onClick={handleClickIcon}
            >
                <HiCalendar size={20} />
            </span>
        </div>
    );
};

const CustomInput: React.FC<any> = ({ value, onClickIcon }) => (
    <button
        type="button"
        onClick={onClickIcon}
        className="w-full text-left bg-[#B9B9C9] border border-[#6B7280]  text-gray-900 text-sm rounded-lg  p-2.5 pr-10"
    >
        {value || 'Select a date'}
    </button>
);

export default CustomDatePicker;
