import Images from '@/assets/ImagesConst';
import BookersBussines from '@/Components/cards/BookersBussines';
import DefText from '@/Components/DefText/DefText';
import Hero from '@/Components/Hero/page'
import HeaderTitles from '@/Components/text/HeaderBookers';
import React from 'react'

export default function partnership() {
  const slideData = [
    {
      title: 'Мы предлагаем взаимовыгодное сотрудничество',
      description: '',
      image: Images.Cloud
    }
  ];
  const modulesData = [
    [
      "Модуль управления клиентами",
      "Модуль мониторинга и аналитики",
      "Модуль планирования и расписания",
    ], [
      "Модуль маркетинга и продвижения",
      "Модуль управления персоналом",
      "Модуль комьюнити",
    ]]
  return (
    <div className='container'>
      <Hero slides={slideData} />
      <div className="lg:w-[50%]">
        <HeaderTitles text='Web-кабинет bookers: управляйте бизнес процессами своего салона красоты эффективно и выгодно' />
        <DefText text='Мы предлагаем взаимовыгодное партнерство владельцам салонов красоты с инструментами управления и мониторинга для обеспечения стабильного роста бизнеса. Вы можете интегрировать сразу несколько филиалов сети и в режиме онлайн управлять процессами с помощью адаптированного Web-кабинета bookers, разработанного под вашу бизнес-стратегию. bookers поможет создать эффективную воронку продаж и обрабатывать клиентов до сделки через модуль комьюнити.' />
        <DefText text='Web-кабинет bookers интегрирует ваш бизнес с модулями для повышения лояльности клиентов, увеличения доходов и анализа деятельности.' />
      </div>
      <div className="w-[90%] mb-10">
        <BookersBussines
          justify='start'
          justifyModules='start'
          logo={Images.PartnerIcon}
          title='Какую интеграцию предлагает BOOKERS бизнес-партнерам:'
          partnershipText='Станьте бизнес-партнером bookers и оцените преимущества системы управления и мониторинга. '
          modules={modulesData}
          button1Text='Условия партнерства'
          button2Text='Войти / Регистрация'
        />
      </div>
    </div>
  )
}
