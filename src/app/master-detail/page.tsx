"use client";

import HeaderTitles from "@/Components/text/HeaderBookers";
import { IoIosArrowBack } from "react-icons/io";
import profeleImg from '@/assets/images/png/User image.png'
import InfoCard from "@/Components/master-detail/InfoCard";
import '../../app/globals.css'
import ServiceCard from "@/Components/cards/ServiceCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useBookingStore } from "@/helpers/state_management/booking";
import { useEffect, useState } from "react";
import { getCategories, getMasterFreeTimes, getMasterFullData, getMasterServiceData, getMasterServiceDataByCategoryId, getUser, orderSave } from "@/helpers/logic_functions/booking";
import { attechment } from "@/services/Urls";
import moment from 'moment'
import { Skeleton } from "antd";
import OrderModal from "@/Components/Modals/OrderModal/page";
import FeedbackModal from "@/Components/Modals/FeedbackModal/page";
import OTPModal from "@/Components/Modals/OTP Modal/page";
import { Check_Number, checkCode } from "@/helpers/logical/api";

export default function MasterDetailPage() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const masterId = searchParams.get("masterId");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [userData, setUserData] = useState<any>({});
  const [activeTime, setActiveTime] = useState<string | null>(null);
  const [timeLoading, setTimeLoading] = useState<boolean>(false);
  const [isOpenFeeadbekModal, setIsOpenFeeadbekModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isOpenOtpModal, setIsOPenOtpModal] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const { categories, setCategories, masterServices, setMasterServices, masterData, setMasterData, categoryId, setCategoryId, isLoading, setIsLoading, isOpenModal, setIsOpenModal, times, setTimes, serviceId, setServiceId } = useBookingStore();
  const token = localStorage.getItem('token')

  useEffect(() => {
    getCategories(setCategories)
    getUser(setUserData)
  }, []);

  useEffect(() => {
    getMasterFullData(masterId, setMasterData)
  }, [masterId])

  useEffect(() => {
    categoryId ? getMasterServiceDataByCategoryId(masterId, categoryId, setMasterServices, setIsLoading) : getMasterServiceData(masterId, setMasterServices, setIsLoading)
  }, [masterId, categoryId])

  const toggleModal = () => {
    setCategoryId('');
    setActiveTime(null)
    setIsOpenModal(!isOpenModal)
  }
  const toggleFeeadbekModal = () => setIsOpenFeeadbekModal(!isOpenFeeadbekModal)
  const toggleOtpModal = () => setIsOPenOtpModal(!isOpenOtpModal)
  const formattedDate = selectedDate && moment(selectedDate).format('YYYY-MM-DD');

  useEffect(() => {
    getMasterFreeTimes(masterId, formattedDate, setTimes, setTimeLoading)
  }, [masterId, selectedDate])

  const orderPayload = {
    serviceIds: [serviceId],
    date: formattedDate,
    timeHour: activeTime?.slice(0, 2),
    timeMin: activeTime?.slice(3, 5),
    clientId: userData.id,
    comment: ''
  }

  const handleSaveOrder = () => {
    orderSave(orderPayload, setSuccess, toggleFeeadbekModal)

  }

  return (
    <div className="container mx-auto p-4 mt-[10%]">
      <div className="flex w-[54.5%] justify-between items-center">
        <div onClick={() => router.back()} className="flex px-3 py-2 gap-1 cursor-pointer float-start border-white border-2 justify-center rounded-lg items-center">
          <IoIosArrowBack className="text-white text-lg" />
          <p className="text-white">Назад</p>
        </div>
        <div className="text-center">
          <HeaderTitles text="Услуги " />
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <div className="w-[70%]">
          <InfoCard
            avatarUrl={masterData?.attachmentId ? attechment + masterData?.attachmentId : 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'}
            masterName={masterData?.fullName ? masterData?.fullName : 'Мастер не настроил имя'}
            salonLocation={masterData ? `${masterData.district}, ${masterData.street}, ${masterData?.house}` : ''}
            salonName={masterData?.salonName ? masterData?.salonName : 'Мастер не настроил салон'}
            clients={masterData?.clientCount ? masterData?.clientCount : 0}
            gender={masterData?.masterSpecialization ? masterData?.masterSpecialization : 'Мастер не настроил специализация'}
            nextOrder={masterData?.nextEntryDate ? moment(masterData?.nextEntryDate).format('dddd') : 'Мастер не настроил бронь'}
            orders={masterData?.orderCount ? masterData?.orderCount : 0}
            phoneNumber={masterData?.phone ? masterData?.phone : 'Мастер не настроил номер телефона'}
            starsCount={masterData?.feedbackCount ? masterData?.feedbackCount : 0}
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-white text-xl font-semibold">Услуги {masterData?.fullName}</p>
        <div className="flex gap-3 flex-wrap mt-3">
          <div
            onClick={() => setCategoryId('')}
            className={`border-2 cursor-pointer px-5 py-2 rounded-md ${categoryId !== '' ? 'border-white bg-transparent text-white' : 'border-[#B9B9C9] bg-[#B9B9C9] text-black'
              }`}
          >
            <p className={categoryId !== '' ? 'text-white' : 'text-black'}>Все</p>
          </div>
          {categories && categories.map((item, index) => (
            <div
              onClick={() => setCategoryId(item.id)}
              key={index}
              className={`border-2 cursor-pointer px-5 py-2 rounded-md ${categoryId === item.id ? 'border-[#B9B9C9] bg-[#B9B9C9] text-black ' : 'border-white'
                }`}
            >
              <p className={categoryId === item.id ? 'text-black' : 'text-white'}>{item.name}</p>
            </div>
          ))}
        </div>
        {isLoading ? <div><Skeleton /><Skeleton /><Skeleton /></div> : masterServices && masterServices.length !== 0 ?
          <div className="grid grid-cols-3 gap-3 mt-3">
            {masterServices.map((item, index) => (
              <ServiceCard
                key={index}
                imageUrl={item.attachmentId}
                title={item.name}
                price={item.price}
                description={item.description}
                onClick={() => {
                  if (token) {
                    toggleModal()
                    setServiceId(item.id)
                  }
                  else {
                    toggleFeeadbekModal()
                    setSuccess(false)
                  }
                }}
              />
            ))}
          </div>
          :
          <div className="flex justify-center items-center h-60">
            <p className="text-2xl text-white">Услуги недоступны</p>
          </div>
        }
      </div>
      <OrderModal
        isOpen={isOpenModal}
        onClose={toggleModal}
        times={times}
        setActiveTime={setActiveTime}
        setSelectedDate={setSelectedDate}
        activeTime={activeTime}
        loading={timeLoading}
        onClick={() => {
          toggleOtpModal()
          toggleModal()
          Check_Number(masterData ? masterData.phone : '', setCode)
        }}
      />
      <FeedbackModal isOpen={isOpenFeeadbekModal} onClose={toggleFeeadbekModal} success={success} />
      <OTPModal
        isOpen={isOpenOtpModal}
        onClose={toggleOtpModal}
        checkCode={() => checkCode(masterData ? masterData.phone : '', code)}
        code={code}
        onSubmit={handleSaveOrder}
        phoneNumber={'+998945867898'}
        resetCode={() => { }}
        // checkCode={() => { }}
      />
    </div>
  );
}