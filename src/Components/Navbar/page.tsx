"use client";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Images from "@/assets/ImagesConst";
import Button from "../Buttons/page";
import LanguageSelect from "./Languageoption";
import Register from "../Register/page";
import Link from "next/link";
import axios from "../../services/api";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [dropdawn, setDropdawn] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string>("uz");
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
  };
  interface Category {
    id: number;
    name: string;
    message: string;
    attachmentId: string | null;
  }
  const toggleDropdawn = () => setDropdawn(!dropdawn);
  const [dataRote, setDataRote] = useState<Category[]>([]);
  const router = useRouter();

  const getCategory = async () => {
    try {
      const res = await axios.get("/category");
      setDataRote(res.data.body);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/booking?categoryId=${categoryId}`);
  };
  const getMe = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/user/me");
      setData(data.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setData(null);
    localStorage.clear();
  };

  console.log(data);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <nav className="bg-[#21212E] select-none text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto py-4 lg:py-6 px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="text-xl font-bold flex flex-col items-center gap-2"
                >
                  <Image src={Images.Logo} alt="Logo" />
                  <p className="text-sm font-light">Bookers</p>
                </Link>
              </div>
              <div className="hidden md:flex md:ml-10 md:space-x-4">
                <div className="relative">
                  <button
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="px-3 py-2 rounded-md text-md font-medium flex items-center group"
                  >
                    <div className="absolute w-2 h-2 rounded-full top-0 left-0 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping"></div>
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
                      className="origin-top-right group absolute left-0 mt-2 w-96 rounded-lg shadow-lg bg-[#B9B9C9] ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
                    >
                      <Link
                        href={"/"}
                        className="relative block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg"
                      >
                        <div className="absolute w-2 h-2 rounded-full top-0 left-0 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping"></div>
                        О продукте
                      </Link>
                      <div className="relative">
                        <Link href={"/about"}>
                          <button
                            onMouseEnter={() => setSubDropdownOpen(true)}
                            onMouseLeave={() => setSubDropdownOpen(false)}
                            className="w-full text-left px-4 py-2 text-md flex items-center hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg"
                          >
                            О компании <FaChevronRight className="ml-1" />
                          </button>
                        </Link>
                        <Link
                          href={"/security"}
                          className="relative block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg"
                        >
                          Стандартизация / Безопасность
                        </Link>
                        <Link
                          href={"/vacancies"}
                          className="relative block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg"
                        >
                          Вакансии
                        </Link>
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
                            className="absolute left-full py-3 top-0 mt-0 w-48 rounded-lg shadow-lg bg-[#B9B9C9] ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
                          >
                            <Link
                              href={"/about"}
                              className="block px-4 py-2 text-md hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg"
                            >
                              Нормативные права
                            </Link>
                            <Link
                              href={"/about"}
                              className="block px-4 py-2 text-md hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg"
                            >
                              Наша миссия
                            </Link>
                            <Link
                              href={"/about"}
                              className="block px-4 py-2 text-md hover:bg-[#B2B1C2] hover:text-[#9C0B35] font-semibold rounded-lg"
                            >
                              Команда
                            </Link>
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
                    <div className="absolute left-0 top-0 rounded-full w-2 h-2 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping"></div>
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
                      className="group origin-top-right absolute left-0 mt-2 w-96 rounded-lg shadow-lg bg-[#B9B9C9] ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
                    >
                      <div className="absolute w-2 h-2 rounded-full top-0 left-0 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping"></div>

                      {dataRote && dataRote.map((item) => (
                        <Link
                          key={item.id}
                          href={`/booking?categoryId=${item.id}`}
                          className="block px-4 py-2 text-md hover:bg-[#B2B1C2] font-semibold hover:text-[#9C0B35] rounded-lg"
                        >
                          {item.name}
                        </Link>
                      ))}


                    </div>
                  </Transition>
                </div>
                <Link
                  href={"/partnership"}
                  className=" relative px-3 py-2 rounded-md text-md font-medium flex items-center group"
                >
                  <div className="absolute left-0 top-0 rounded-full w-2 h-2 bg-[#9C0B35] hidden group-hover:block transition-all duration-200 animate-ping"></div>
                  Партнерство
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="hidden md:block">
                <LanguageSelect />
              </div>
              {data ? (
                <div className="flex gap-5 iyems-center">
                  <div
                    onClick={toggleDropdawn}
                    className="rounded-full text-lg font-bold border p-2 relative"
                  >
                    {data.firstName.slice(0, 1)} {data.firstName.slice(0, 1)}
                    {dropdawn && (
                      <div className="absolute top-14 bg-red-500 px-5 py-2 rounded right-2">
                        <button onClick={logout}>Выход</button>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex md:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                  >
                    {isOpen ? (
                      <AiOutlineClose size={24} />
                    ) : (
                      <AiOutlineMenu size={24} />
                    )}
                  </button>
                </div>
              ) : isLoading ? (
                <div
                  aria-label="Loading..."
                  role="status"
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="h-10 w-10 animate-spin stroke-gray-500"
                    viewBox="0 0 256 256"
                  >
                    <line
                      x1="128"
                      y1="32"
                      x2="128"
                      y2="64"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="60.1"
                      x2="173.3"
                      y2="82.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="224"
                      y1="128"
                      x2="192"
                      y2="128"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="195.9"
                      x2="173.3"
                      y2="173.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="128"
                      y1="224"
                      x2="128"
                      y2="192"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="195.9"
                      x2="82.7"
                      y2="173.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="32"
                      y1="128"
                      x2="64"
                      y2="128"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="60.1"
                      x2="82.7"
                      y2="82.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                  </svg>
                </div>
              ) : (
                <div>
                  <div className="hidden md:flex items-center gap-4 ">
                    <Button
                      onClick={() => setOpenRegisterModal(true)}
                      title="Войти / Регистрация"
                    ></Button>
                  </div>
                  <div className="flex md:hidden">
                    <Button
                      onClick={() => setOpenRegisterModal(true)}
                      customStyle="text-[0.8rem] px-2 py-1"
                      title="Войти / Регистрация"
                    />
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                    >
                      {isOpen ? (
                        <AiOutlineClose size={24} />
                      ) : (
                        <AiOutlineMenu size={24} />
                      )}
                    </button>
                  </div>
                </div>
              )}
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
                          <Link
                            href={"/"}
                            className="block px-4 py-2 text-md rounded-lg"
                          >
                            Нормативные права
                          </Link>
                          <Link
                            href={"/"}
                            className="block px-4 py-2 text-md rounded-lg"
                          >
                            Наша миссия
                          </Link>
                          <Link
                            href={"/"}
                            className="block px-4 py-2 text-md rounded-lg"
                          >
                            Команда
                          </Link>
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
                    <Link
                      href={"/booking/#Парикмахерские-услуги"}
                      className="block px-4 py-2 text-md rounded-lg"
                    >
                      Парикмахерские услуги
                    </Link>
                    <Link
                      href={"/"}
                      className="block px-4 py-2 text-md rounded-lg"
                    >
                      Ногтевой сервис
                    </Link>
                    <Link
                      href={"/"}
                      className="block px-4 py-2 text-md rounded-lg"
                    >
                      Ресницы и брови
                    </Link>
                    <Link
                      href={"/"}
                      className="block px-4 py-2 text-md rounded-lg"
                    >
                      Макияж
                    </Link>
                    <Link
                      href={"/"}
                      className="block px-4 py-2 text-md rounded-lg"
                    >
                      Эпиляция
                    </Link>
                    <Link
                      href={"/"}
                      className="block px-4 py-2 text-md rounded-lg"
                    >
                      Косметологические услуги
                    </Link>
                    <Link
                      href={"/"}
                      className="block px-4 py-2 text-md rounded-lg"
                    >
                      Боди-арт
                    </Link>
                  </div>
                </Transition>
              </div>
              <Link
                href={"/partnership "}
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Партнерство
              </Link>
              <div className="flex gap-5 px-3 py-2 rounded-md text-base font-medium">
                <Link
                  href={"/"}
                  className={`px-3 flex items-center gap-3  border border-[#B2B1C2] ${activeLanguage === "uz"
                    ? "bg-[#9C0B35] transition-all duration-200 border-none text-white"
                    : ""
                    }`}
                  onClick={() => handleLanguageChange("uz")}
                >
                  <Image
                    src={Images.UZB}
                    className="w-7 h-7"
                    alt="Uzbekistan flag"
                  />
                  <span>UZB</span>
                </Link>
                <Link
                  href={"/"}
                  className={`px-3 flex items-center gap-3 border border-[#B2B1C2] ${activeLanguage === "ru"
                    ? "bg-[#9C0B35] transition-all duration-200 border-none text-white"
                    : ""
                    }}`}
                  onClick={() => handleLanguageChange("ru")}
                >
                  <Image
                    src={Images.RUS}
                    className="w-7 h-7"
                    alt="Uzbekistan flag"
                  />
                  <span>РУС</span>
                </Link>
                <Link
                  href={"/"}
                  className={`px-3 flex items-center gap-3 py-1 border border-[#B2B1C2] ${activeLanguage === "en"
                    ? "bg-[#9C0B35] transition-all duration-200 border-none text-white"
                    : ""
                    }}`}
                  onClick={() => handleLanguageChange("en")}
                >
                  <Image
                    src={Images.ENG}
                    className="w-7 h-7"
                    alt="Uzbekistan flag"
                  />
                  <span>EN</span>
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
      <Register
        isOpen={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
        getMe={getMe}
      />
    </>
  );
};

export default Navbar;
