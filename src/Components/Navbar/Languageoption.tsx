import React, { useState } from 'react';
interface LanguageOption {
  value: string;
  label: string;
}

const languages: LanguageOption[] = [
  { value: 'uz', label: 'Uzbek' },
  { value: 'ru', label: 'Russian' },
  { value: 'en', label: 'English' },
];

const LanguageSelect: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(languages[0].value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setSelectedLanguage(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="w-full bg-transparent text-white border border-[#B2B1C2] rounded-lg shadow-md focus:outline-none  flex justify-between items-center gap-2 px-3 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {languages.find((lang) => lang.value === selectedLanguage)?.label}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-[#B9B9C9] text-black   rounded-lg shadow-lg transition-transform duration-300 transform scale-100 origin-top">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleChange(lang.value)}
              className="block w-full px-4 py-2 text-left hover:bg-[#B2B1C2] hover:text-[#9C0B35]  rounded-lg focus:outline-none"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;