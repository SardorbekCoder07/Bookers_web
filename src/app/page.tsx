'use client';
import { useState } from 'react';
import { useFormStore, useModalOpenClose } from '@/helpers/state_management/store';
import Masters from '@/Components/Masters/Masters';
import Statistic from '@/Components/Statistic.tsx/Statistic';
import Partners from '@/Components/Partners/Partners';
import FeedbackModal from '@/Components/FeedbackModal/page';
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
import Modal from '@/Components/Modals/page';

export default function Home() {
  const { name, setName, textAreaValue, setTextAreaValue, selectedDate, setSelectedDate } = useFormStore()
  const { isModalOpen, setIsModalOpen, isModalOpen1, setIsModalOpen1, isModalOpen2, setIsModalOpen2, isModalOpen3, setIsModalOpen3, success, setSuccess } = useModalOpenClose()
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);
  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);


  const openModal1 = () => {
    setIsModalOpen1(true);
    setOtp(['', '', '', '']);
  };
  const closeModal1 = () => setIsModalOpen1(false);

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        (document.getElementById(`otp-${index + 1}`) as HTMLElement).focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      (document.getElementById(`otp-${index - 1}`) as HTMLElement).focus();
    }
  };

  return (
    <main className="container mx-auto px-4">
      <Navbar backgrounColor="bg-[#21212E]" />
      <Hero />
      <Line />
      <HomeofferAll/>
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
              onChange={(e) => {
                setName(e.target.value);
              }}
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
            onChange={(e) => {
              setTextAreaValue(e.target.value);
            }}
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
              onChange={() => { }}
              required
              placeholder='+998 (_ _)'
            />
            <TextInput
              label="Место проведения*"
              id="phone"
              value=""
              onChange={() => { }}
              required
            />
            <TextInput
              label="Дополнительная информация"
              id="phone"
              value=""
              onChange={() => { }}
              required
            />
            <TextInput
              label="Стоимость участия"
              id="phone"
              value=""
              onChange={() => { }}
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

      {/* Second Modal with OTP Input */}
      <Modal isOpen={isModalOpen1} onClose={closeModal1}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Tasdiqlash kodi</h2>
          <p className='font-bold mb-2'>+99 888 517 11 98</p>
          <p className='text-sm mb-3 text-[#4F4F4F]'>
            Мы отправили вам SMS с кодом подтверждения.
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:border-none"
              />
            ))}
          </div>
          <p className='text-sm mb-3 text-[#4F4F4F]'>
            Отправить код заново 59 сек
          </p>
          <Button
            title="Отправить отзыв"
            customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={() => {
              console.log('OTP:', otp.join(''));
              openModal2();
              closeModal1();
              setSuccess(false);
            }}
          />
        </div>
      </Modal>
      <FeedbackModal isOpen={isModalOpen2} onClose={closeModal2} success={success} />
      {/* <KoordinatModal isOpen={isModalOpen2} onClose={closeModal2} /> */}
      <Line/>
      <Masters/>
      <Statistic/>
      <Partners/>
    </main>
    
  );
}
