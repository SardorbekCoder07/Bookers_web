import React from 'react'
import FreeaAndService from './component/freeAndStandart'
import Navbar from '@/components/Navbar/page'
import HeaderTitles from '@/components/text/HeaderBookers'

const Service = () => {
  return (
    <div>
      <Navbar backgrounColor='bg-[#161621]' />
      <section className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8 mt-44'>
        <div className='w-[50%]'>
          <HeaderTitles text='Выберите тариф и расширяйте свои возможности в приложении bookers' size='text-3xl' />
        </div>
        <div className='w-full flex flex-wrap'>
          <div className='w-[50%] '>
            <FreeaAndService/>
          </div>
          <div className='w-[50%] '>
            <FreeaAndService/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
