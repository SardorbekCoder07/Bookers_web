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
