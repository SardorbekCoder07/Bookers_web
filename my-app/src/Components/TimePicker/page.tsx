import { useState } from "react";

interface TimePickerProps {
    label?: string;
}

interface TimeOption {
    id: number;
    name: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ label = "Время проведения*" }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedHour, setSelectedHour] = useState<TimeOption | null>(null);
    const [selectedMinute, setSelectedMinute] = useState<TimeOption | null>(null);
    const [hoveredHour, setHoveredHour] = useState<number | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const hours: TimeOption[] = [
        { id: 1, name: "1 ч." },
        { id: 2, name: "2 ч." },
        { id: 3, name: "3 ч." },
        { id: 4, name: "4 ч." },
        { id: 5, name: "5 ч." },
        { id: 6, name: "6 ч." },
    ];

    const minutes: TimeOption[] = [
        { id: 1, name: "0 мин." },
        { id: 2, name: "5 мин." },
        { id: 3, name: "10 мин." },
        { id: 4, name: "15 мин." },
        { id: 5, name: "30 мин." },
        { id: 6, name: "45 мин." },
    ];

    const getMinutesForHour = (hourId: number) => {
        return minutes.filter(minute => minute.id === hourId);
    };

    const handleHourClick = (hour: TimeOption) => {
        setSelectedHour(hour);
        const matchingMinutes = getMinutesForHour(hour.id);
        if (matchingMinutes.length > 0) {
            setSelectedMinute(matchingMinutes[0]);
        }
        if (selectedMinute) {
            setIsOpen(false);
        }
    };

    const handleMinuteClick = (minute: TimeOption) => {
        setSelectedMinute(minute);
        if (selectedHour) {
            setIsOpen(false);
        }
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
                            selectedHour && selectedMinute
                                ? `${selectedHour.name} ${selectedMinute.name}`
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
                <div className="absolute bg-[#B9B9C9] border rounded-lg right-0 shadow-md mt-1 w-[70%] z-10 p-4">
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
                                        className={`cursor-pointer mt-2 px-4 py-2 hover:bg-[#9C0B35] text-center rounded-xl hover:text-white transition-colors duration-300 ${selectedHour?.id === hour.id ? 'bg-[#9C0B35] text-white' : ''}`}
                                    >
                                        {hour.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <span className="block text-sm font-medium text-gray-900 mb-2">
                                Минуты
                            </span>
                            <ul className="overflow-y-auto">
                                {minutes.map((minute) => (
                                    <li
                                        key={minute.id}
                                        onClick={() => handleMinuteClick(minute)}
                                        className={`cursor-pointer mt-2 px-4 py-2 hover:bg-[#9C0B35] text-center rounded-xl hover:text-white transition-colors duration-300 ${selectedMinute?.id === minute.id || (hoveredHour !== null && minute.id === hoveredHour) ? 'bg-[#9C0B35] text-white' : ''}`}
                                    >
                                        {minute.name}
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