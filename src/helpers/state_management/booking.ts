import { create } from "zustand";
import { BookingStoreTypes, CategoryTypes, MasterFullInfoTypes, MasterServicesTypes } from "@/types/booking";

export const useBookingStore = create<BookingStoreTypes>((set) => ({
    categories: null,
    setCategories: (val: CategoryTypes[] | null) => set({ categories: val }),
    categoryId: '',
    setCategoryId: (val: string) => set({ categoryId: val }),
    serviceId: '',
    setServiceId: (val: string) => set({ serviceId: val }),
    times: null,
    setTimes: (val: string[] | null) => set({ times: val }),
    isLoading: false,
    setIsLoading: (val: boolean) => set({ isLoading: val }),
    isOpenModal: false,
    setIsOpenModal: (val: boolean) => set({ isOpenModal: val }),
    masterServices: null,
    setMasterServices: (val: MasterServicesTypes[] | null) => set({ masterServices: val }),
    masterData: null,
    setMasterData: (val: MasterFullInfoTypes | null) => set({ masterData: val }),
}))