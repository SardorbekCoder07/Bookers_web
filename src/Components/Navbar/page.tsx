'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';
import Register from '../Register/page';

interface NavbarProps {
    backgroundColor: string;
}

const Navbar: React.FC<NavbarProps> = ({ backgroundColor }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleRegistration = () => {
        setIsRegistrationOpen(!isRegistrationOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 ${backgroundColor}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={Images.Logo} className="h-14 w-14" alt="Bookers Logo" />
                    </a>
                </div>
                <div className="flex md:order-2 space-x-3 rtl:space-x-reverse mr-5 md:mr-0">
                    <button onClick={toggleRegistration} type="button" className="text-white bg-[#9C0B35] hover:bg-[#9C0B30] font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-105 transition-all duration-100">
                        Войти / Регистрация
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20"
                        onClick={closeMenu}
                    />
                )}

                <div
                    ref={menuRef}
                    className={`fixed top-0 left-0 h-full bg-[#21212E] z-30 w-64 p-8 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
                >
                    <button
                        type="button"
                        onClick={closeMenu}
                        className="absolute top-4 right-4 text-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <ul className="flex flex-col space-y-4 mt-8 font-medium">
                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center py-2 px-3 text-white rounded focus:outline-none"
                            >
                                Bookers
                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div className={`transition-transform duration-300 ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} absolute left-0 top-full w-48 bg-[#B9B9B9] rounded-lg shadow-lg mt-2 origin-top-right`}>
                                <ul className="py-2">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            О продукте
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            О компании
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            Стандартизация / Безопасность
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            Вакансии
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                            >
                                Бронирование
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                            >
                                Партнерство
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li className="relative group md:hover:bg-transparent">
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-[#fff] md:p-0 transition-all duration-250 hover:text-[#9C0A35]"
                                aria-current="page"
                            >
                                Bookers
                                <svg
                                    className="w-4 h-4 inline ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </a>
                            <div className="absolute left-0 top-full w-48 bg-[#B9B9C9] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible md:group-hover:block transition-opacity duration-300">
                                <ul className="py-2">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            О продукте
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            О компании
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            Стандартизация / Безопасность
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#B2B1C2]">
                                            Вакансии
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-[#fff] md:p-0 transition-all duration-250 hover:text-[#9C0A35]"
                            >
                                Бронирование
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-[#fff] md:p-0 transition-all duration-250 hover:text-[#9C0A35]"
                            >
                                Партнерство
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Register isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
        </nav>
    );
};

export default Navbar;
