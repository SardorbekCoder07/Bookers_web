import { create } from 'zustand';

interface FormStore {
  name: string;
  selectEventValue: string;
  textAreaValue: string;
  selectedDate: Date | null;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  setName: (value: string) => void;
  setSelectEventValue: (value: string) => void;
  setTextAreaValue: (value: string) => void;
  setSelectedDate: (value: Date | null) => void;
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
interface RegisterModalValue{
  selectedOption: string;
  enteredName: string;
  enteredSurname: string;
  enteredNickname:string;
  selectedChekbox: boolean;
  setSelectedCheckbox:(value:boolean)=>void
  setEnteredName: (value: string) => void;
  setEnteredSurname: (value: string) => void;
  setEnteredNickname: (value: string) => void;
  setSelectedOption: (value: string) => void;
}

export const useRegisterModalValue = create<RegisterModalValue>((set) => ({
  selectedOption: '',
  enteredName: '',
  enteredSurname: '',
  enteredNickname: '',
  selectedChekbox: false,
  setSelectedCheckbox:(value:boolean)=>set({selectedChekbox:value}),
  setEnteredName: (value: string) => set({ enteredName: value }),
  setEnteredSurname: (value: string) => set({ enteredSurname: value }),
  setEnteredNickname: (value: string) => set({ enteredNickname: value }),
  setSelectedOption: (value: string) => set({ selectedOption: value }),
}))
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
  selectedOption: '',
  setSelectedOption: (value: string) => set({ selectedOption: value }),
  setName: (value: string) => set({ name: value }),
  setSelectEventValue: (value: string) => set({ selectEventValue: value }),
  setTextAreaValue: (value: string) => set({ textAreaValue: value }),
  setSelectedDate: (value: Date | null) => set({ selectedDate: value }),
}));

