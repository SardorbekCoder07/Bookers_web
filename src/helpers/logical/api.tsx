import { check_code, login_Url, register_Master_URL, register_page, userCheckingNumber } from "@/services/Urls";
import axios from "axios";
import { toast } from "sonner";

export const Check_Number = async (phoneNumber: string, setStatus: (value: boolean) => void, setCode: (value: any) => void) => {
    const data = {
        phoneNumber: phoneNumber
    }
    let status: boolean | null = null;
    await axios.post(userCheckingNumber, data)
        .then(res => {
            status = res.data.success
            setStatus(res.data.success)
        })
        .catch(err => {
            if (err.response.data.success === false) toast.error(err.response.data.message)
        })

    if (status === true || status === false) {
        await axios.post(`${register_page}sendCode?purpose=${status}`, data)
            .then(res => {
                setCode(res.data.body)
                toast.success(res.data.body)
            })
            .catch(err => {
                toast.error(err.data.body)
            })
    }

}

export const authLogin = async (phoneNumber: string, code: string) => {
    const data = {
        phone: phoneNumber,
        code: code
    }
    if (phoneNumber) {
        await axios.post(login_Url, data)
            .then(res => {
                if (res?.data?.success) {
                    localStorage.setItem('token', `Bearer ${res.data.body}`)
                    localStorage.setItem('role', res.data.message)
                    toast.success('Muvaffaqqiyatli kirdingiz')
                }
            })
            .catch(err => {
                toast.error('Siz noto‘g‘ri kiritdingiz')
            })
    }
}

export const checkCode = async (phoneNumber: string, code: string) => {
    const data = { phoneNumber }
    if (phoneNumber) {
        await axios.post(`${check_code}?code=${code}`, data)
            .then(res => {
                if (res?.data?.success) {
                    toast.success('Kod to‘g‘ri')
                }
            })
            .catch(err => {
                toast.error('Siz noto‘g‘ri kiritdingiz')
            })
    }
}


export const register_Master_Function = async (firstName: string, lastName: string, phoneNumber: string, nickname: string, img: any) => {
    const formData = new FormData();
    const url = `${register_Master_URL}?firstName=${firstName}&lastName=${lastName}${nickname ? `&nickname=${nickname}` : ''}&phoneNumber=${phoneNumber}&ROLE=ROLE_MASTER&lang=uz`;
    formData.append("image", img ? img : null);
    await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data', } })
        .then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)
                localStorage.setItem('token', `Bearer ${res.data.body}`)
            }else{
                console.log(res.data.message);
                
                toast.error("Hammasi yahshi buladi")
            }
        })
        .catch((err) => {
            console.log(err);
            
            toast.error(err.data.message)
        })  
}