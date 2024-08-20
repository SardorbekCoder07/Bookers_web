'use client';
import { useState } from 'react';
import { useFormStore, useModalOpenClose } from '@/helpers/state_management/store';
import Masters from '@/Components/Masters/Masters';
import Statistic from '@/Components/Statistic.tsx/Statistic';
import Partners from '@/Components/Partners/Partners';
import FeedbackModal from '@/Components/Modals/FeedbackModal/page';
import TimePicker from '@/Components/TimePicker/page';
import CustomDatePicker from '@/Components/DatePicker/page';
import SelectInput from '@/Components/SelectInput/page';
import TextArea from '@/Components/Textarea/page';
import TextInput from '@/Components/Input/page';
import HeaderTitles from '@/Components/text/HeaderBookers';
import Navbar from '@/Components/Navbar/page';
import { Line } from '@/Components/Line/page';
import HomeofferAll from '@/Components/HomeOffers/HomeofferAllBookers';
import HomeNews from '@/Components/HomeNews/page';
import Hero from '@/Components/Hero/page';
import Button from '@/Components/Buttons/page';
import BeautyServiceAll from '@/Components/BeautyService/BeautyServiceAllBookers';
import Modal from '@/Components/Modals/Modal/page';
import OTPModal from '@/Components/Modals/OTP Modal/page';
import Images from '@/assets/ImagesConst';

export default function Home() {
  const { name, setName, textAreaValue, setTextAreaValue, selectedDate, setSelectedDate } = useFormStore();
  const { isModalOpen, setIsModalOpen, isModalOpen1, setIsModalOpen1, isModalOpen2, setIsModalOpen2, success } = useModalOpenClose();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const openModal1 = () => {
    setIsModalOpen1(true);  
    setOtp(['', '', '', '']);
  };
  const closeModal1 = () => setIsModalOpen1(false);

  const handleOtpSubmit = (otp: string) => {
    console.log('Received OTP:', otp);
    console.log(selectedDate);
    openModal2();
    closeModal1();
  };
    const slideData = [
      {
          title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
          description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
          image: Images.heroFirst
      },
      {
          title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
          description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
          image: Images.heroFirst
      },
      {
          title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
          description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
          image: Images.heroFirst
      },
      {
          title: 'Система бронирования для мастеров, салонов красоты и их клиентов',
          description: 'Мы создаем систему взаимодействия между мастерами, бизнес-партнерами (салонами красоты) и клиентами, что является основной миссией данной системы бронирования. Платформа BOOKERS создает комфортные и выгодные условия для каждого клиента, предоставляя квалифицированные услуги мастеров.',
          image: Images.heroFirst
      },
  ];
  return (
    <main className="container mx-auto px-4">
      
      <Hero slides={slideData} />
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
              onClick={openModal}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Форма заявки</h2>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <TextInput
              label="Имя мастера или название салона*"
              id="first_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <SelectInput
              label="Тип мероприятия*"
              id="event_type"
              options={['Мастер-класс', 'Курс', 'Тренинг', 'Другое обучающее мероприятие']}
            />
          </div>
          <TextArea
            label="Название мероприятия*"
            id="message"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
            required
          />
          <div className="grid gap-6 md:grid-cols-2">
            <CustomDatePicker
              label="Дата проведения*"
              id="event_date"
              selectedDate={selectedDate}
              onChange={setSelectedDate}
              required
            />
            <TimePicker />
          </div>
          <TextArea
            label="Описание мероприятия*"
            id="message"
            value=""
            onChange={() => {}}
            required
          />
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <TextInput
              label="Контактная информация*"
              id="phone"
              value=""
              onChange={() => {}}
              required
              placeholder='+998 (_ _)'
            />
            <TextInput
              label="Место проведения*"
              id="place"
              value=""
              onChange={() => {}}
              required
            />
            <TextInput
              label="Дополнительная информация"
              id="additional_info"
              value=""
              onChange={() => {}}
              required
            />
            <TextInput
              label="Стоимость участия"
              id="cost"
              value=""
              onChange={() => {}}
              required
            />
          </div>
          <Button
            onClick={() => {
              openModal1();
              closeModal();
            }}
            title='Отправить заявку'
            customStyle='text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          />
        </form>
      </Modal>

      {/* OTP Modal */}
      <OTPModal
        isOpen={isModalOpen1}
        onClose={closeModal1}
        phoneNumber="+998 88 517 11 98"
        onSubmit={handleOtpSubmit}
      />

      <FeedbackModal isOpen={isModalOpen2} onClose={closeModal2} success={success} />
      <Line />
      <Masters />
      <Statistic />
      <Partners />
    </main>
  );
}
