import { useState } from 'react';
import { useFormStore } from '@/Store/store';

interface SelectInputProps {
  label: string;
  id: string;
  options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, id, options }) => {
  const { selectEventValue, setSelectEventValue } = useFormStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: string) => {
    setSelectEventValue(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={toggleDropdown}
        className="w-full bg-[#B9B9C9] border border-[#6B7280] text-gray-900 text-left rounded-md px-4 py-2 shadow-sm  focus:ring-[#9C0B35] focus:border-[#9C0B35] flex justify-between items-center"
      >
        <span>{selectEventValue || 'Выберите тип мероприятия'}</span>
        <svg
          className={`w-5 h-5 text-[#000] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          className={`absolute z-10 mt-1 w-full bg-[#B9B9C9]  rounded-md shadow-2xl shadow-[#2a2829] max-h-60 overflow-y-auto transition-all duration-300 ease-out transform origin-top ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-4 py-2 hover:bg-[#9C0B35] hover:text-white transition-colors duration-500"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
