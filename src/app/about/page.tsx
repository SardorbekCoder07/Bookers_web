'use client'
import Images from '@/assets/ImagesConst'
import Button from '@/Components/Buttons/page'
import BookersBussines from '@/Components/cards/BookersBussines'
import DefText from '@/Components/DefText/DefText'
import Hero from '@/Components/Hero/page'
import Modal from '@/Components/Modals/Modal/page'
import HeaderTitles from '@/Components/text/HeaderBookers'
import Image from 'next/image'
import React, { useState } from 'react'

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true); // Modalni ochish
  };

  const closeModal = () => {
    setIsOpen(false); // Modalni yopish
  };
  const slideData = [
    {
      title: 'Компания Well Tech предлагает продукты программных обеспечений для создания автоматизации процессов и улучшения эффективности бизнес процессов',
      description: 'Компания Well Tech ведет свою деятельность в сфере информационных технологий и активно участвует в развитии IT-инфраструктуры нашей страны. За короткий срок своего существования наша компания реализовала ряд успешных проектов, включая bookers',
      image: Images.About
    },
  ]
  const modulesData = [[
    "Разработка передовых IT-решений и программного обеспечения",
    "Создание инновационных платформ для обеспечения комфорта и эффективности",
    "Повышение качества услуг в разных сферах деятельности",
    "Улучшение пользовательского опыта",
    "Создание выгодных условий для всех участников экосистемы",
    "",
  ], []];
  const modulesData2 = [
    ["Инновации",
      "Качество",
      "Безопасность",
      "Клиентоориентированность",
      "Партнерство",
      "Партнерство",
      "Партнерство",
      "Устойчивое развитие"
    ], []]
  const modulesData3 = [
    [
      "Сотрудничество",
      "Доверие и уважение",
      "Прозрачность и открытость",
    ], [
      "Обучение и развитие",
      "Гибкость и адаптивность",
      "Ответственность и самоорганизация",
    ]]
  return (

    <div className='container'>
      <Hero slides={slideData} />
      <HeaderTitles
        text="Свидетельства и сертификатdbookers"
        size="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      />
      <div className="flex w-full h-full py-10 md:flex-nowrap flex-wrap justify-between gap-24">
        <div className="bg-gray-300 py-10  align-middle rounded-lg p-6 text-center shadow-lg">
          <p className="text-gray-800 text-xl mb-10">Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных</p>
          <Button
            title="Подробнее"
            width="200px"
            outlineStyle={false}
            isDisabled={false}
            customStyle="my-custom-class"
            onClick={openModal}
          />
        </div>
        <div className="bg-gray-300 py-10  align-middle rounded-lg p-6  text-center shadow-lg">
          <p className="text-gray-800 text-xl mb-10">Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных</p>
          <Button
            title="Подробнее"
            width="200px"
            outlineStyle={false}
            isDisabled={false}
            customStyle="my-custom-class"
            onClick={openModal}
          />
        </div>
      </div>
      <HeaderTitles
        text="Компания Well Tech:  Наша миссия и ценности"
        size="text-xl md:text-2xl mb-10 mt-20 lg:text-3xl xl:text-4xl"
      />
      <div className="flex md:flex-nowrap flex-wrap mb-20 gap-24">
        <div className="md:w-[60%] h-full">
          <BookersBussines
            title="Наша миссия"
            modules={modulesData}
          />
        </div>
        <div className="w-[60%]">
          <BookersBussines
            title="Наша миссия"
            modules={modulesData2}
          />
        </div>

      </div>
      <HeaderTitles
        text="Компания Well Tech:  Наша команда"
        size="text-xl md:text-2xl mb-10 mt-20 lg:text-3xl xl:text-4xl"
      />
      <div className="md:w-[60%]">
        <DefText
          text='Well Tech объединяет талантливых разработчиков, дизайнеров, проектных менеджеров, маркетологов и аналитиков и квалифицированных специалистов своего направления. Каждый из нас вносит уникальный вклад в создание  IT-решений и ведение успешных проектов.'
        />
      </div>
      <div className="">
        <BookersBussines
          title="Наша миссия"
          modules={modulesData3}
        />
      </div>
      <div className="my-16 md:w-[50%]">
        <DefText
          text='Благодаря слаженной работе нашей команды, мы успешно реализовали множество проектов, которые получили высокую оценку от наших клиентов и пользователей. Мы гордимся нашими достижениями и продолжаем стремиться к новым высотам, улучшая качество наших продуктов и услуг.'
        />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}>
        <div className='w-full flex justify-center items-center'>
          <Image className="w-[50%]" src={Images.Certificate} alt='Certificate' />
        </div>
      </Modal>
    </div>
  )
}
