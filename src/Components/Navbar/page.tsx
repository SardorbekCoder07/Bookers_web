'use client';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#21212E] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto py-4 lg:py-6 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold flex flex-col items-center gap-2">
                <Image src={Images.Logo} alt="Logo" />
                <p className='text-sm font-light'>Bookers</p>
              </a>
            </div>
            <div className="hidden md:flex md:ml-10 md:space-x-4">
              <div className="relative">
                <button
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="px-3 py-2 rounded-md text-md font-medium flex items-center group"
                >
                  <div className='absolute w-2 h-2 rounded-full top-0 left-0 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping'></div>
                  Bookers <FaChevronDown className="ml-1" />
                </button>
                <Transition
                  show={dropdownOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="origin-top-right absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-[#B9B9C9] ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
                  >
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      О продукте
                    </a>
                    <div className="relative">
                      <button
                        onMouseEnter={() => setSubDropdownOpen(true)}
                        onMouseLeave={() => setSubDropdownOpen(false)}
                        className="w-full text-left px-4 py-2 text-md flex items-center hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg"
                      >
                        О компании <FaChevronRight className="ml-1" />
                      </button>
                      <Transition
                        show={subDropdownOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div
                          onMouseEnter={() => setSubDropdownOpen(true)}
                          onMouseLeave={() => setSubDropdownOpen(false)}
                          className="absolute left-full top-0 mt-0 w-48 rounded-lg shadow-lg bg-[#B9B9C9] ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
                        >
                          <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg">
                            Нормативные права
                          </a>
                          <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg">
                            Наша миссия
                          </a>
                          <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg">
                            Команда
                          </a>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </Transition>
              </div>
              <div className="relative">
                <button
                  onMouseEnter={() => setBookingDropdownOpen(true)}
                  onMouseLeave={() => setBookingDropdownOpen(false)}
                  className=" px-3 py-2 rounded-md text-md font-medium flex items-center group"
                >
                  <div className='absolute left-0 top-0 rounded-full w-2 h-2 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping'></div>
                  Бронирование <FaChevronDown className="ml-1" />
                </button>
                <Transition
                  show={bookingDropdownOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div
                    onMouseEnter={() => setBookingDropdownOpen(true)}
                    onMouseLeave={() => setBookingDropdownOpen(false)}
                    className="origin-top-right absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-[#B9B9C9] ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
                  >
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      Парикмахерские услуги
                    </a>
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      Ногтевой сервис
                    </a>
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      Ресницы и брови
                    </a>
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      Макияж
                    </a>
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      Эпиляция
                    </a>
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      Косметологические услуги
                    </a>
                    <a href="#" className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg">
                      Боди-арт
                    </a>
                  </div>
                </Transition>
              </div>
              <a href="#" className=' relative px-3 py-2 rounded-md text-md font-medium flex items-center group'>
                <div className='absolute left-0 top-0 rounded-full w-2 h-2 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping'></div>
                Партнерство
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-sm font-medium">
              Login
            </button>
            <button className="ml-4 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-sm font-medium">
              Language
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-[#21212E] text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center"
              >
                Bookers <FaChevronDown className="ml-1" />
              </button>
              <Transition
                show={dropdownOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="mt-2 ml-4 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700">
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    О продукте
                  </a>
                  <div className="relative">
                    <button
                      onClick={() => setSubDropdownOpen(!subDropdownOpen)}
                      className="w-full text-left px-4 py-2 text-md flex items-center rounded-lg"
                    >
                      О компании <FaChevronRight className="ml-1" />
                    </button>
                    <Transition
                      show={subDropdownOpen}
                      enter="transition ease-out duration-100 transform"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-75 transform"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className=" ml-4 rounded-lg bg-white  focus:outline-none text-gray-700">
                        <a href="#" className="block px-4 py-2 text-md rounded-lg">
                          Нормативные права
                        </a>
                        <a href="#" className="block px-4 py-2 text-md rounded-lg">
                          Наша миссия
                        </a>
                        <a href="#" className="block px-4 py-2 text-md rounded-lg">
                          Команда
                        </a>
                      </div>
                    </Transition>
                  </div>
                </div>
              </Transition>
            </div>
            <div className="relative">
              <button
                onClick={() => setBookingDropdownOpen(!bookingDropdownOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center"
              >
                Бронирование <FaChevronDown className="ml-1" />
              </button>
              <Transition
                show={bookingDropdownOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="mt-2 ml-4 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700">
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    Парикмахерские услуги
                  </a>
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    Ногтевой сервис
                  </a>
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    Ресницы и брови
                  </a>
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    Макияж
                  </a>
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    Эпиляция
                  </a>
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    Косметологические услуги
                  </a>
                  <a href="#" className="block px-4 py-2 text-md rounded-lg">
                    Боди-арт
                  </a>
                </div>
              </Transition>
            </div>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">
              Партнерство
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">
              Language
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
