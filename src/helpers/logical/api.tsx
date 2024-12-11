import {
  check_code,
  login_Url,
  register_Client_URL,
  register_Master_URL,
  register_page,
  userCheckingNumber,
} from "@/services/Urls";
import axios from "axios";
import { toast } from "sonner";


export const Check_Number = async (
  phoneNumber: string,
  setCode: (value: any) => void,
  setStatus?: (value: boolean) => void,
) => {
  const data = {
    phoneNumber: phoneNumber,
  };
  let status: boolean | null = null;
  await axios
    .post(userCheckingNumber, data)
    .then((res) => {
      status = res.data.success;
      setStatus&&setStatus(res.data.success);
    })
    .catch((err) => {
      if (err.response.data.success === false)
        toast.error(err.response.data.message);
    });

  if (status === true || status === false) {
    await axios
      .post(`${register_page}sendCode?purpose=${status}`, data)
      .then((res) => {
        setCode(res.data.body);
        toast.success(res.data.body);
      })
      .catch((err) => {
        toast.error(err.data.body);
      });
  }
};

export const authLogin = async (
  phoneNumber: string,
  code: string,
  getMe: any
) => {
  const data = {
    phone: phoneNumber,
    code: code,
  };
  if (phoneNumber) {
    await axios
      .post(`${login_Url}?ROLE=CLIENT`, data)
      .then((res) => {
        if (res?.data?.success) {
          localStorage.setItem("token", `Bearer ${res.data.body}`);
          localStorage.setItem("role", res.data.message);
          toast.success("Muvaffaqqiyatli kirdingiz");
          getMe()
        }
      })
      .catch((err) => {
        toast.error("Siz noto‘g‘ri kiritdingiz");
      });
  }
};

export const checkCode = async (phoneNumber: string, code: string) => {
  const data = { phoneNumber };
  if (phoneNumber) {
    await axios
      .post(`${check_code}?code=${code}`, data)
      .then((res) => {
        if (res?.data?.success) {
          toast.success("Kod to‘g‘ri");
        }
      })
      .catch((err) => {
        toast.error("Siz noto‘g‘ri kiritdingiz");
      });
  }
};

export const register_Master_Function = async (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  nickname: string,
  img: any
) => {
  const formData = new FormData();

  // Check if phoneNumber starts with '+', replace it with '%2B'
  const formattedPhoneNumber = phoneNumber.startsWith("+")
    ? phoneNumber.replace("+", "%2B")
    : phoneNumber;

  const url = `${register_Master_URL}?firstName=${firstName}&lastName=${lastName}${
    nickname ? `&nickname=${nickname}` : ""
  }&phoneNumber=${formattedPhoneNumber}&ROLE=ROLE_MASTER&lang=uz`;

  formData.append("image", img ? img : null);
  console.log(url);
  console.log(formData);
  console.log(formattedPhoneNumber);

  await axios
    .post(url, formData, { headers: { "Content-Type": "multipart/form-data" } })
    .then((res) => {
      if (res.data.success) {
        localStorage.setItem("token", `Bearer ${res.data.body}`);
        toast.success(res.data.message);

      } else {
        console.log(res.data.message);
        toast.error("Hammasi yahshi buladi");
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.data.message);
    });
};

export const register_Client_Function = async (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  img: any
) => {
  const formData = new FormData();
  formData.append("image", img ? img : null);

  const fromatNumber = phoneNumber.startsWith("+")
    ? phoneNumber.replace("+", "%2B")
    : phoneNumber;
  const url = `${register_Client_URL}?firstName=${firstName}&lastName=${lastName}&lang=uz&phoneNumber=${fromatNumber}`;
  await axios.post(url, formData, { headers: { "Content-Type": "multipart/form-data" } })
    .then((res) => {
      if (res.data.success) {
        localStorage.setItem("token", `Bearer ${res.data.body}`);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    });
};
