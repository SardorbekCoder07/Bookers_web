import axios from "axios";
import { config } from "../const/token";
import { category, master_full_info, master_services, master_services_by_categoryId } from "@/services/Urls";
import { CategoryTypes, MasterServicesTypes } from "@/types/booking";

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

export const getMasterFullData = async (id: string, setMasterData: (val: any) => void) => {
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

export const getMasterServiceData = async (id: string | null, setServiceData: (val: MasterServicesTypes[]) => void) => {
    try {
        const { data } = await axios.get(`${master_services}/${id}`, config);
        if (data.success) {
            setServiceData(data.body)
        }
    } catch (error) {
        console.log(error);
    } finally {
    }
}

export const getMasterServiceDataByCategoryId = async (masterId: string, categoryId: string, setServiceData: (val: any) => void) => {
    try {
        const { data } = await axios.get(`${master_services_by_categoryId}/${masterId}/${categoryId}`, config);
        if (data.success) {
            setServiceData(data.body)
        }
    } catch (error) {
        console.log(error);
    } finally {
    }
}