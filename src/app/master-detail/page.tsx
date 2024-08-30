"use client";

import HeaderTitles from "@/Components/text/HeaderBookers";
import { IoIosArrowBack } from "react-icons/io";
import profeleImg from '@/assets/images/png/User image.png'
import InfoCard from "@/Components/master-detail/InfoCard";
import '../../app/globals.css'
import ServiceCard from "@/Components/cards/ServiceCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useBookingStore } from "@/helpers/state_management/booking";
import { useEffect } from "react";
import { getCategories, getMasterServiceData } from "@/helpers/logic_functions/booking";
import { attechment } from "@/services/Urls";

export default function MasterDetailPage() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const masterId = searchParams.get("masterId");
  const { categories, setCategories, masterServices, setMasterServices } = useBookingStore()

  useEffect(() => {
    getCategories(setCategories)
  }, []);

  useEffect(() => {
    getMasterServiceData(masterId, setMasterServices)
  }, [masterId])

  console.log('services', masterServices);

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
            avatarUrl={profeleImg}
            masterName="Натали"
            salonLocation="Мирабадский р-н, ул. Нурафшон, 32"
            salonName="Beauty Wave"
            clients={4}
            gender="Jenskiy"
            nextOrder="Sunday"
            orders={52}
            phoneNumber="+998 77 308-88-88"
            starsCount={34}
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-white text-xl font-semibold">Услуги Натали</p>
        <div className="flex gap-3 flex-wrap mt-3">
          <div className="border-2 cursor-pointer border-[#B9B9C9] bg-[#B9B9C9] px-5 py-2 rounded-md">
            <p className="text-black">Все</p>
          </div>
          {categories && categories.map((item, index) => (
            <div key={index} className="border-2 cursor-pointer border-white px-5 py-2 rounded-md">
              <p className="text-white">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {masterServices && masterServices.map((item, index) => (
            <ServiceCard
              key={index}
              imageUrl={item.attachmentId}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}