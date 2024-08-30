import axios from "axios";
import { config } from "../const/token";
import { BASE_URL, category, master_free_times, master_full_info, master_services, master_services_by_categoryId, order_save } from "@/services/Urls";
import { CategoryTypes, MasterFullInfoTypes, MasterServicesTypes } from "@/types/booking";
import { toast } from "sonner";

export const getCategories = async (setMasterData: (val: CategoryTypes[]) => void) => {
    try {
        const { data } = await axios.get(category);
        if (data.success) {
            setMasterData(data.body)
        }
    } catch (error) {
        console.log(error);
    } finally {
    }
}

export const getMasterFullData = async (id: string | null, setMasterData: (val: MasterFullInfoTypes) => void) => {
    try {
        const { data } = await axios.get(`${master_full_info}/${id}`, config);
        if (data.success) {
            setMasterData(data.body)
        }
    } catch (error) {
        console.log(error);
    } finally {
    }
}

export const getMasterServiceData = async (id: string | null, setServiceData: (val: MasterServicesTypes[] | null) => void, setIsLoading: (val: boolean) => void) => {
    setIsLoading(true)
    try {
        const { data } = await axios.get(`${master_services}/${id}`, config);
        if (data.success) {
            setServiceData(data.body)
        } else setServiceData(null)
    } catch (error) {
        console.log(error);
        setServiceData(null)
    } finally {
        setIsLoading(false)
    }
}

export const getMasterServiceDataByCategoryId = async (masterId: string | null, categoryId: string, setServiceData: (val: MasterServicesTypes[] | null) => void, setIsLoading: (val: boolean) => void) => {
    setIsLoading(true)
    try {
        const { data } = await axios.get(`${master_services_by_categoryId}/${masterId}/${categoryId}`, config);
        if (data.success) {
            setServiceData(data.body)
        } else setServiceData(null)
    } catch (error) {
        console.log(error);
        setServiceData(null)
    } finally {
        setIsLoading(false)
    }
}

export const getMasterFreeTimes = async (masterId: string | null, date: string | null, setTimesData: (val: string[] | null) => void, setIsLoading: (val: boolean) => void) => {
    setIsLoading(true)
    try {
        const { data } = await axios.get(`${master_free_times}?date=${date}&masterId=${masterId}`, config);
        if (data.success) {
            setTimesData(data.body)
        } else setTimesData(null)
    } catch (error) {
        console.log(error);
        setTimesData(null)
    } finally {
        setIsLoading(false)
    }
}

export const orderSave = async (payload: any, setSuccess: (val: boolean) => void, toggleFeeadbekModal: () => void) => {
    // setIsLoading(true)
    try {
        const { data } = await axios.post(`${order_save}?status=OTHER`, payload, config);
        if (data.success) {
            toast.success('Заказ успешно выполнен');
            setSuccess(true)
            toggleFeeadbekModal()
        }
    } catch (error: any) {
        setSuccess(false)
        toggleFeeadbekModal()
        console.log(error);
        toast.error(error.response.dara.message)
    } finally {
        // setIsLoading(false)
    }
}

export const getUser = async (setUserData: (val: any) => void) => {
    try {
        const { data } = await axios.get(`${BASE_URL}user/me`);
        if (data.success) {
            setUserData(data.body);
        }
    } catch (error) {
        console.log(error);
    }
};