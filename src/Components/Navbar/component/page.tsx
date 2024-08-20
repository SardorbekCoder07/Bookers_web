'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
    label: string;
    href?: string;
    items?: DropdownItem[];
}

interface DropdownProps {
    title: string;
    items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
    const [isMainOpen, setIsMainOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleMainEnter = () => setIsMainOpen(true);
    const handleMainLeave = () => setIsMainOpen(false);

    const handleSubEnter = (label: string) => setActiveItem(label);
    const handleSubLeave = () => setActiveItem(null);

    return (
        <div
            className="relative w-full h-full"
            onMouseEnter={handleMainEnter}
            onMouseLeave={handleMainLeave}
        >
            <button
                className="flex items-center px-2 pb-2  text-sm font-medium text-white rounded-lg"
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

            {isMainOpen && (
                <div className="absolute w-48 bg-[#B9B9C9] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 text-white">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="relative"
                                onMouseEnter={() => handleSubEnter(item.label)}
                                onMouseLeave={handleSubLeave}
                            >
                                <button
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
                                                    <Link
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm hover:bg-[#333] w-full text-left"
                                                    >
                                                        {subItem.label}
                                                    </Link>
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
