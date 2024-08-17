import {create} from 'zustand';

interface TimeState {
    selectedHour: number | null;
    selectedMinute: number | null;
    setHour: (hour: number | null) => void;
    setMinute: (minute: number | null) => void;
}

export const useTimeStore = create<TimeState>((set) => ({
    selectedHour: null,
    selectedMinute: null,
    setHour: (hour) => set({ selectedHour: hour }),
    setMinute: (minute) => set({ selectedMinute: minute }),
}));
