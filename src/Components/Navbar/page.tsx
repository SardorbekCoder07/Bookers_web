'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';
import Dropdown from './component/page';

interface NavbarProps {
    backgroundColor: string;
}

const Navbar: React.FC<NavbarProps> = ({ backgroundColor }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
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
                    <button type="button" className="text-white bg-[#9C0B35] hover:bg-[#9C0B30] font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-105 transition-all duration-100">
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
                            <Dropdown
                                title="Bookers"
                                items={[
                                    { label: 'О продукте', href: '#' },
                                    { label: 'О компании', href: '#' },
                                    { label: 'Стандартизация / Безопасность', href: '#' },
                                    { label: 'Вакансии', href: '#' },
                                ]}
                                onClose={closeMenu}
                            />
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
                        <Dropdown
                            title="Dropdown button"
                            items={[
                                {
                                    label: 'Dashboard',
                                    href: '#',
                                    items: [
                                        { label: 'Overview', href: '#' },
                                        { label: 'My downloads', href: '#' },
                                        { label: 'Billing', href: '#' },
                                        { label: 'Rewards', href: '#' },
                                    ],
                                },
                                { label: 'Earnings', href: '#' },
                                { label: 'Sign out', href: '#' },
                            ]}
                            onClose={closeMenu}
                        />
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
        </nav>
    );
};

export default Navbar;
