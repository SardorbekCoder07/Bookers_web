export interface MasterClassStoreTypes {
    masterName: string;
    setMasterName: (val: string) => void;
    eventType: string;
    setEventType: (val: string) => void;
    eventName: string;
    setEventName: (val: string) => void;
    eventDate: string | string[];
    setEventDate: (val: string | string[]) => void;
    eventDescription: string;
    setEventDescription: (val: string) => void;
    contactInformation: string;
    setContactInformation: (val: string) => void;
    additionalInformation: string;
    setAdditionalInformation: (val: string) => void;
    eventAddress: string;
    setEventAddress: (val: string) => void;
    eventPrice: string;
    setEventPrice: (val: string) => void;
    eventTime: TimeTypes
    setEventTime: (val: TimeTypes) => void;
}

export interface TimeTypes {
    hour: number;
    minute: number;
}