import { useMasterClassStore } from "@/helpers/state_management/master-class";
import { useState } from "react";

interface TimePickerProps {
    label?: string;
}

interface TimeOption {
    id: number;
    name: number;
}

const TimePicker: React.FC<TimePickerProps> = ({ label = "Время проведения*" }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hoveredHour, setHoveredHour] = useState<number | null>(null);

    const { eventTime, setEventTime } = useMasterClassStore();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const hours: TimeOption[] = [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 },
        { id: 6, name: 6 },
    ];

    const minutes: TimeOption[] = [
        { id: 1, name: 0 },
        { id: 2, name: 5 },
        { id: 3, name: 10 },
        { id: 4, name: 15 },
        { id: 5, name: 30 },
        { id: 6, name: 45 },
    ];

    const getMinutesForHour = (hourId: number | null): TimeOption[] => {
        return minutes; // Hozircha barcha soatlar uchun barcha minutlar
    };

    const handleHourClick = (hour: TimeOption) => {
        const minuteToSet = eventTime.minute ? eventTime.minute : minutes[0].name; // Minut nomini saqlash
        setEventTime({ ...eventTime, hour: hour.name, minute: minuteToSet }); // Soat nomini saqlash
        setIsOpen(true);

        console.log("Selected Hour:", hour.name);
    };

    const handleMinuteClick = (minute: TimeOption) => {
        setEventTime({ ...eventTime, minute: minute.name }); // Minut nomini saqlash
        setIsOpen(false);

        console.log("Selected Minute:", minute.name);
    };

    const handleHourMouseEnter = (hourId: number) => {
        setHoveredHour(hourId);
    };

    const handleHourMouseLeave = () => {
        setHoveredHour(null);
    };

    return (
        <div className="relative w-full">
            <div className="mb-2">
                <label className="block text-sm font-medium text-[#4F4F4F] mb-2">
                    {label}
                </label>
                <div className="relative">
                    <input
                        type="text"
                        readOnly
                        value={
                            eventTime.hour && eventTime.minute
                                ? `${eventTime.hour} ч. ${eventTime.minute} мин.`
                                : "Выберите время"
                        }
                        onClick={toggleDropdown}
                        className="bg-[#B9B9C9] border text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5"
                    />
                    <button
                        onClick={toggleDropdown}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-900"
                    >
                        🕒
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="absolute bg-[#B9B9C9] right-0 rounded-2xl shadow-2xl shadow-[#2a2829] mt-1 w-[70%] z-10 p-4">
                    <div className="flex gap-3 justify-between">
                        <div className="w-1/2">
                            <span className="block text-sm font-medium text-gray-900 mb-2">
                                Часы
                            </span>
                            <ul className="overflow-y-auto">
                                {hours.map((hour) => (
                                    <li
                                        key={hour.id}
                                        onClick={() => handleHourClick(hour)}
                                        onMouseEnter={() => handleHourMouseEnter(hour.id)}
                                        onMouseLeave={handleHourMouseLeave}
                                        className={`cursor-pointer mt-2 px-4 py-2 hover:bg-[#9C0B35] text-center rounded-xl hover:text-white transition-colors duration-300 ${eventTime.hour === hour.name ? 'bg-[#9C0B35] text-white' : ''
                                            }`}
                                    >
                                        {hour.name} ч.
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <span className="block text-sm font-medium text-gray-900 mb-2">
                                Минуты
                            </span>
                            <ul className="overflow-y-auto">
                                {getMinutesForHour(eventTime.hour).map((minute) => (
                                    <li
                                        key={minute.id}
                                        onClick={() => handleMinuteClick(minute)}
                                        className={`cursor-pointer mt-2 px-4 py-2 hover:bg-[#9C0B35] text-center rounded-xl hover:text-white transition-colors duration-300 ${eventTime.minute === minute.name ? 'bg-[#9C0B35] text-white' : ''
                                            }`}
                                    >
                                        {minute.name} мин.
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimePicker;
