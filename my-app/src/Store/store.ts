import { create } from 'zustand';

interface FormStore {
  name: string;
  eventType: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventDescription: string;
  setName: (value: string) => void;
  setEventType: (value: string) => void;
  setEventName: (value: string) => void;
  setEventDate: (value: string) => void;
  setEventTime: (value: string) => void;
  setEventDescription: (value: string) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  name: '',
  eventType: '',
  eventName: '',
  eventDate: '',
  eventTime: '',
  eventDescription: '',
  setName: (value: string) => set({ name: value }),
  setEventType: (value: string) => set({ eventType: value }),
  setEventName: (value: string) => set({ eventName: value }),
  setEventDate: (value: string) => set({ eventDate: value }),
  setEventTime: (value: string) => set({ eventTime: value }),
  setEventDescription: (value: string) => set({ eventDescription: value }),
}));
