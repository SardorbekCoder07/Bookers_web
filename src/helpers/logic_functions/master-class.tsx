import { add_master_class } from "@/services/Urls"
import axios from "axios"
import { config } from "../const/token"
import { toast } from "sonner";

export const addMasterClass = async (payload: any, toggleModal: () => void, setSuccess: (val: boolean) => void, openFeedBackModal: () => void) => {
    if (config) setSuccess(true)
    else setSuccess(false)
    try {
        const { data } = await axios.post(add_master_class, payload);
        if (data.success) {
            toggleModal()
            openFeedBackModal( )
            toast.success('Zo\'rrrrrrrrr')
        }
    } catch (error) {
        console.log(error);
        toast.error('Yommonn')
    } finally {

    }
}