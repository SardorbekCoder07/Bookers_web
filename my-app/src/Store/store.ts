import { create } from 'zustand';

interface FormStore {
  name: string;
  selectEventValue: string;
  textAreaValue: string;
  eventDate: string;
  eventTime: string;
  eventDescription: string;
  setName: (value: string) => void;
  setSelectEventValue: (value: string) => void;
  setTextAreaValue: (value: string) => void;
  setEventDate: (value: string) => void;
  setEventTime: (value: string) => void;
  setEventDescription: (value: string) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  name: '',
  selectEventValue: '',
  textAreaValue: '',
  eventDate: '',
  eventTime: '',
  eventDescription: '',
  setName: (value: string) => set({ name: value }),
  setSelectEventValue: (value: string) => set({ selectEventValue: value }),
  setTextAreaValue: (value: string) => set({ textAreaValue: value }),
  setEventDate: (value: string) => set({ eventDate: value }),
  setEventTime: (value: string) => set({ eventTime: value }),
  setEventDescription: (value: string) => set({ eventDescription: value }),
}));
