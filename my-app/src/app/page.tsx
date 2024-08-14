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
import TextInput from '@/components/Input/page';
import TextArea from '@/components/Textarea/page';
import { useFormStore } from '@/Store/store';

export default function Home() {
  const {name,setName}=useFormStore()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
            <TextInput
              label="Имя мастера или название салона*"
              id="first_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
            <TextInput
              label="Тип мероприятия*"
              id="last_name"
              value=""
              onChange={() => { }}
              required
            />
          </div>
          <TextArea
            label="Название мероприятия*"
            id="message"
            value=""
            onChange={() => { }}
            required
          />

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <TextInput
              label="Дата проведения*"
              id="company"
              value=""
              onChange={() => { }}
              required
            />
            <TextInput
              label="время проведения*"
              id="phone"
              value=""
              onChange={() => { }}
              required
            />
          </div>

          {/* <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-[#4F4F4F]">Описание мероприятия*</label>
            <textarea className="bg-[#B9B9C9] border  text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5  " required />
          </div> */}
          <TextArea
            label="Описание мероприятия*"
            id="message"
            value=""
            onChange={() => { }}
            required
          />

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <TextInput
              label="время проведения*"
              id="phone"
              value=""
              onChange={() => { }}
              required
            />
            <TextInput
              label="время проведения*"
              id="phone"
              value=""
              onChange={() => { }}
              required
            />
            <TextInput
              label="время проведения*"
              id="phone"
              value=""
              onChange={() => { }}
              required
            />
            <TextInput
              label="время проведения*"
              id="phone"
              value=""
              onChange={() => { }}
              required
            />
          </div>
          <Button title='Отправить заявку' customStyle='text-white bg-[#9C0B35] hover:bg-[#7a0a28]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center' />
        </form>
      </Modal>
    </main>
  );
}
