'use client';

import { useState } from 'react';
import BeautyServiceAll from "@/components/BeautyService/BeautyServiceAllBookers";
import Button from "@/components/Buttons/page";
import Hero from "@/components/Hero/page";
import HomeNews from "@/components/HomeNews/page";
import HomeofferAll from "@/components/HomeOffers/HomeofferAllBookers";
import { Line } from "@/components/Line/page";
import Navbar from "@/components/Navbar/page";
import HeaderTitles from "@/components/text/HeaderBookers";
import Modal from "@/components/Modals/modalFirst";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formani submit qilish uchun kerakli logika bu yerda bo'ladi
    console.log('Form submitted:', formData);
    closeModal();
  };

  return (
    <main className="container mx-auto px-4">
      <Navbar backgrounColor="bg-[#21212E]" />
      <Hero />
      <Line />
      <HomeofferAll />
      <Line />
      <BeautyServiceAll />
      <Line />
      <div className="py-8 px-4">
        <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mb-6">
          <HeaderTitles
            text="Продвигайте свои мастер-классы, тренинги и обучения на платформах bookers"
            size="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          />
        </div>
        <p className="text-[#B9B9C9] text-base md:text-lg lg:text-xl xl:text-2xl w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mb-4">
          Мы предлагаем мастерам внедрение кросс-маркетинговых проектов в рамках программы “Мастер класс”. Данная программа предназначена для мастеров, которые проводят мастер-классы, тренинги и обучения по своей специальности.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mb-6">
          Какую пользу вы получите с участием в программе “Мастер классы”
        </p>
        <div className="flex flex-wrap gap-8 md:gap-10 items-center py-10">
          <HomeNews title='Повышение лояльности аудитории — создание условий для укрепления связи с текущими клиентами и привлечения новых.' />
          <HomeNews title='Увеличение узнаваемости бренда — активное продвижение вашего бренда через различные каналы, чтобы сделать его более известным и популярным.' />
          <HomeNews title='Сбор целевой аудитории — привлечение и удержание клиентов, которые действительно заинтересованы в ваших услугах и продуктах.' />
          <HomeNews title='Мониторинг интереса — постоянный анализ и отслеживание предпочтений и интересов аудитории для более точного удовлетворения их потребностей.' />
          <HomeNews title='Создание эффективного канала продвижения — разработка и внедрение стратегий, которые обеспечат максимальную эффективность в продвижении ваших услуг и продуктов.' />
        </div>
        <div className='bg-[#B9B9C9] flex flex-col md:flex-row justify-between p-5 md:p-10 items-center rounded-2xl my-5 hover:shadow-lg'>
          <div className='w-full md:w-2/3'>
            <p className='text-lg md:text-2xl font-bold text-[#9C0B35]'>
              Для создания объявления и обеспечения видимости мероприятия в мобильном приложении и на сайте BOOKERS отправьте заявку.
            </p>
          </div>
          <div className='w-full md:w-[20%] mt-4 md:mt-0'>
            <Button
              title='Отправить заявку'
              customStyle='bg-[#9C0B35] text-white rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-[#7a0a28] active:bg-[#5c073b]'
              onClick={openModal} // Modalni ochish
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Отправить заявку</h2>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имя мастера или название салона*</label>
              <input type="text" id="first_name" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="John" required />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Тип мероприятия*</label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="Doe" required />
            </div>
            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
              <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="Flowbite" required />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
              <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
            </div>
            <div>
              <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
              <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="flowbite.com" required />
            </div>
            <div>
              <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
              <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="john.doe@company.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="•••••••••" required />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5 " placeholder="•••••••••" required />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#9C0B35] " required />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-[#9C0B35] hover:underline dark:text-[#9C0B35]">terms and conditions</a>.</label>
          </div>
          <button type="submit" onClick={handleSubmit} className="text-white bg-[#9C0B35] hover:bg-[#7a0a28] focus:ring-4 focus:outline-none focus:ring-[#9C0B35] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
        </form>
      </Modal>
    </main>
  );
}
