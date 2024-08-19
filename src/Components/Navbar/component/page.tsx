'use client';
import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
    label: string;
    href?: string;
    items?: DropdownItem[];
}

interface DropdownProps {
    title: string;
    items: DropdownItem[];
    onClose: () => void; // Dropdown yopish funksiyasi
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (label: string) => {
        setActiveItem(label === activeItem ? null : label);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose(); // Dropdown yopiladi
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white  rounded-lg"
            >
                {title}
                <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 9l4 4 4-4"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-48 bg-[#B9B9C9] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 text-white">
                        {items.map((item, index) => (
                            <li key={index} className="relative">
                                <button
                                    onClick={() => item.items && handleItemClick(item.label)}
                                    className="block px-4 py-2 text-sm hover:bg-[#333] w-full text-left"
                                >
                                    {item.label}
                                    {item.items && (
                                        <svg
                                            className="w-4 h-4 float-right"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 9l4 4 4-4"
                                            />
                                        </svg>
                                    )}
                                </button>
                                {item.items && activeItem === item.label && (
                                    <div className="absolute top-0 left-full mt-1 w-48 bg-[#21212E] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <ul className="py-1 text-white">
                                            {item.items.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <a
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm hover:bg-[#333] w-full text-left"
                                                    >
                                                        {subItem.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
