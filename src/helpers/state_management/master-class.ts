import { MasterClassStoreTypes, TimeTypes } from '@/types/master-class';
import { create } from 'zustand';

export const useMasterClassStore = create<MasterClassStoreTypes>((set) => ({
    eventAddress: '',
    setEventAddress: (val: string) => set({ eventAddress: val }),
    eventDate: '',
    setEventDate: (val: string | string[]) => set({ eventDate: val }),
    eventDescription: '',
    setEventDescription: (val: string) => set({ eventDescription: val }),
    eventName: '',
    setEventName: (val: string) => set({ eventName: val }),
    eventPrice: '',
    setEventPrice: (val: string) => set({ eventPrice: val }),
    eventType: '',
    setEventType: (val: string) => set({ eventType: val }),
    masterName: '',
    setMasterName: (val: string) => set({ masterName: val }),
    additionalInformation: '',
    setAdditionalInformation: (val: string) => set({ additionalInformation: val }),
    contactInformation: '',
    setContactInformation: (val: string) => set({ contactInformation: val }),
    eventTime: {
        hour: 0,
        minute: 0
    },
    setEventTime: (val: TimeTypes) => set({ eventTime: val }),
}));
