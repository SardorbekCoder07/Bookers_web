import { useTimeStore } from "@/helpers/state_management/TimeState";
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
    const [hoveredHour, setHoveredHour] = useState<number | null>(null);

    const { selectedHour, selectedMinute, setHour, setMinute } = useTimeStore();

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

    const getMinutesForHour = (hourId: number | null) => {
        // Agar soat tanlanmagan bo'lsa, barcha minutlarni ko'rsat
        return hourId ? minutes : minutes;
    };

    const handleHourClick = (hour: TimeOption) => {
        setHour(hour.id);
        // Agar soat tanlansa, minutlarni tanlash uchun to'g'ri minutni sozlash
        if (!selectedMinute) {
            setMinute(minutes[0].id);
        }
        setIsOpen(true); // Dropdown ochiq qoladi

        // Konsolga chiqarish
        console.log("Selected Hour:", hour.name);
        console.log("Selected Minute:", minutes.find(m => m.id === selectedMinute)?.name || "0 мин.");
    };

    const handleMinuteClick = (minute: TimeOption) => {
        setMinute(minute.id);
        setIsOpen(false); // Minut tanlangandan so'ng dropdown yopiladi

        // Konsolga chiqarish
        console.log("Selected Hour:", hours.find(h => h.id === selectedHour)?.name || "0 ч.");
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
                            selectedHour && selectedMinute
                                ? `${hours.find(h => h.id === selectedHour)?.name || '0 ч.'} ${minutes.find(m => m.id === selectedMinute)?.name || '0 мин.'}`
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
                                        className={`cursor-pointer mt-2 px-4 py-2 hover:bg-[#9C0B35] text-center rounded-xl hover:text-white transition-colors duration-300 ${selectedHour === hour.id ? 'bg-[#9C0B35] text-white' : ''}`}
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
                                {getMinutesForHour(selectedHour).map((minute) => (
                                    <li
                                        key={minute.id}
                                        onClick={() => handleMinuteClick(minute)}
                                        className={`cursor-pointer mt-2 px-4 py-2 hover:bg-[#9C0B35] text-center rounded-xl hover:text-white transition-colors duration-300 ${selectedMinute === minute.id ? 'bg-[#9C0B35] text-white' : ''}`}
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
