import Images from '@/assets/ImagesConst'
import Button from '@/Components/Buttons/page'
import BookersBussines from '@/Components/cards/BookersBussines'
import Hero from '@/Components/Hero/page'
import HeaderTitles from '@/Components/text/HeaderBookers'
import React from 'react'

export default function about() {
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
    "Создание выгодных условий для всех участников экосистемы"
  ], []];
  const modulesData2 = [["Инновации", "Качество", "Качество", "Качество", "Качество"], []]
  return (
    <div className='container'>
      <Hero slides={slideData} />
      <HeaderTitles
        text="Свидетельства и сертификатdbookers"
        size="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      />
      <div className="flex w-full h-full py-10 md:flex-nowrap flex-wrap justify-between gap-24">
        <div className="bg-gray-300 py-10  align-middle rounded-lg p-6 text-center shadow-lg">
          <p className="text-gray-800 text-2xl mb-10">Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных</p>
          <Button
            title="Подробнее"
            width="200px"
            outlineStyle={false}
            isDisabled={false}
            customStyle="my-custom-class"
          />
        </div>
        <div className="bg-gray-300 py-10  align-middle rounded-lg p-6  text-center shadow-lg">
          <p className="text-gray-800 text-2xl mb-10">Свидетельство о регистрации базы персональных данных в Государственном реестре баз персональных данных</p>
          <Button
            title="Подробнее"
            width="200px"
            outlineStyle={false}
            isDisabled={false}
            customStyle="my-custom-class"
          />
        </div>
      </div>
      <HeaderTitles
        text="Компания Well Tech:  Наша миссия и ценности"
        size="text-xl md:text-2xl mb-10 mt-20 lg:text-3xl xl:text-4xl"
      />
      <div className="flex flex-wrap gap-24">
        <div className="md:w-[60%]">
          <BookersBussines
            title="Наша миссия"
            modules={modulesData}
          // modules={modulesData}
          />
          </div>
        <div className="">
          <BookersBussines
            title="Какую интеграцию предлагает BOOKERS бизнес-партнерам:"
            modules={modulesData2}
          />
        </div>

      </div>
    </div>
  )
}
