export interface BookingStoreTypes {
    categories: CategoryTypes[] | null;
    setCategories: (val: CategoryTypes[] | null) => void;
    categoryId: string;
    setCategoryId: (val: string) => void;
    serviceId: string;
    setServiceId: (val: string) => void;
    times: string[] | null;
    setTimes: (val: string[] | null) => void;
    isLoading: boolean;
    setIsLoading: (val: boolean) => void;
    isOpenModal: boolean;
    setIsOpenModal: (val: boolean) => void;
    masterServices: MasterServicesTypes[] | null;
    setMasterServices: (val: MasterServicesTypes[] | null) => void;
    masterData: MasterFullInfoTypes | null;
    setMasterData: (val: MasterFullInfoTypes | null) => void;
}

export interface CategoryTypes {
    id: string,
    name: string,
    categoryFatherId: string | null,
    categoryFatherName: string | null,
    attachmentId: string,
    statusCategory: string,
    message: string | null,
    isNew: boolean
}

export interface MasterServicesTypes {
    id: string,
    category: CategoryTypes
    categoryId: string,
    name: string,
    genderId: number[],
    genderNames: string[]
    price: number,
    serviceTime: number,
    description: string,
    attachmentId: string | null,
    paymentPercent: number,
    paymentPrice: number,
    message: string | null,
    serviceStatus: string,
    active: boolean
}

export interface MasterFullInfoTypes {
    id: string,
    fullName: string,
    phone: string,
    salonName: string,
    masterSpecialization: string | null,
    mainPhoto: string | null,
    feedbackCount: number,
    orderCount: number,
    clientCount: number,
    lat: number,
    lng: number,
    district: string,
    street: string,
    house: string,
    attachmentId: string,
    nextEntryDate: string | null
}