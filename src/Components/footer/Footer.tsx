import { FaAppStoreIos, FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';
import { FaApple, FaAppStore, FaGooglePlay } from 'react-icons/fa6';
import Button from '../Buttons/page';

const Footer = () => {
    return (
        <footer className="bg-[#161621] py-5 p-5 lg:p-3 lg:py-6 text-white ">
            <div className="max-w-[1200px]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <h3 className="mb-4 font-bold">Документация</h3>
                    <ul className="space-y-2">
                        <li><Link href="/conditions" className="text-gray-400 hover:underline">Условия использования</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Публичное соглашение</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Лицензионным соглашением</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Политикой конфиденциальности</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-bold">Ссылки основных страниц</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:underline">Клиентам</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Мастерам</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Бизнес-партнерство</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Мастер-классы / Обучение / Тренинги</Link></li>
                        <li><Link href="/tariffs" className="text-gray-400 hover:underline">Пакеты для мастеров</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-bold">Вход / Регистрация</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:underline">Клиент</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Мастер</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:underline">Бизнес-партнер</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 font-bold">Контактные данные</h3>
                    <address className="not-italic text-gray-400">
                        Республика Узбекистан, город Ташкент,<br />
                        Алмазарский район СГМ Янги Себзор,<br />
                        Массив Себзар L17/18, дом 8, кв. 31<br />
                        <Link href="tel:+998773088888" className="block mt-2">+998 77 308-88-88</Link>
                        <Link href="mailto:info@welltech.uz" className="mt-2 flex items-center">
                            <AiOutlineMail className="mr-2" />info@welltech.uz
                        </Link>
                    </address>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-start gap-20 items-center border-t border-gray-700 pt-6 mt-8">
                <div className="mb-4 md:mb-0 justify-center flex flex-col items-center">
                    <Image src={Images.Logo} alt="Bookers Logo" width={40} className='ml-5' height={40} />
                    <p className="text-gray-400 ml-4">bookers</p>
                </div>
                <div className="flex flex-col gap-5 mb-4 md:mb-0">
                    <p>Мы в социальных сетях</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className=" hover:text-white border p-1 rounded-full"><FaFacebookF color='white'/></Link>
                        <Link href="#" className=" hover:text-white border p-1 rounded-full"><FaInstagram color='white'/></Link>
                        <Link href="#" className=" hover:text-white border p-1 rounded-full"><FaTelegramPlane  /></Link>
                        <Link href="#" className="hover:text-white border p-1 rounded-full"><FaYoutube /></Link>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button className='bg-white rounded-md p-4 py-1'>
                        <Link href="#" className="text-black flex items-center gap-2 " >
                            <FaApple size={25} />
                            <span className=''>
                                <span className='text-[10px]'>Download on the</span>
                                <br /> AppStore
                            </span>
                        </Link>
                    </button>
                    <button className='bg-white rounded-md p-4 py-1'>
                        <Link href="#" className="text-black flex items-center gap-2 " >
                            <FaGooglePlay size={25} />
                            <span className=''>
                                <span className='text-[10px]'>Download on the</span>
                                <br />  Google Play
                            </span>
                        </Link>
                    </button>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
