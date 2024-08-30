import { create } from "zustand";
import { BookingStoreTypes, CategoryTypes, MasterServicesTypes } from "@/types/booking";

export const useBookingStore = create<BookingStoreTypes>((set) => ({
    categories: null,
    setCategories: (val: CategoryTypes[] | null) => set({ categories: val }),
    masterServices: null,
    setMasterServices: (val: MasterServicesTypes[] | null) => set({ masterServices: val }),
}))