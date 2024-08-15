import { create } from 'zustand';

interface FormStore {
  name: string;
  selectEventValue: string;
  textAreaValue: string;
  selectedDate: Date | null;
  eventDate: string;
  eventTime: string;
  eventDescription: string;
  setName: (value: string) => void;
  setSelectEventValue: (value: string) => void;
  setTextAreaValue: (value: string) => void;
  setSelectedDate: (value: Date | null) => void;
  setEventDate: (value: string) => void;
  setEventTime: (value: string) => void;
  setEventDescription: (value: string) => void;
}

interface ModalOpenClose {
  isModalOpen: boolean;
  isModalOpen1: boolean;
  isModalOpen2: boolean;
  isModalOpen3: boolean;
  success: boolean;
  setSuccess: (value: boolean) => void;
  setIsModalOpen: (value: boolean) => void;
  setIsModalOpen1: (value: boolean) => void;
  setIsModalOpen2: (value: boolean) => void;
  setIsModalOpen3: (value: boolean) => void;
}

export const useModalOpenClose = create<ModalOpenClose>((set) => ({
  isModalOpen: false,
  isModalOpen1: false,
  isModalOpen2: false,
  isModalOpen3: false,
  success: true,
  setSuccess: (value: boolean) => set({ success: value }),
  setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
  setIsModalOpen1: (value: boolean) => set({ isModalOpen1: value }),
  setIsModalOpen2: (value: boolean) => set({ isModalOpen2: value }),
  setIsModalOpen3: (value: boolean) => set({ isModalOpen3: value }),
}))
export const useFormStore = create<FormStore>((set) => ({
  name: '',
  selectEventValue: '',
  textAreaValue: '',
  selectedDate: null,
  eventDate: '',
  eventTime: '',
  eventDescription: '',
  setName: (value: string) => set({ name: value }),
  setSelectEventValue: (value: string) => set({ selectEventValue: value }),
  setTextAreaValue: (value: string) => set({ textAreaValue: value }),
  setSelectedDate: (value: Date | null) => set({ selectedDate: value }),
  setEventDate: (value: string) => set({ eventDate: value }),
  setEventTime: (value: string) => set({ eventTime: value }),
  setEventDescription: (value: string) => set({ eventDescription: value }),
}));
