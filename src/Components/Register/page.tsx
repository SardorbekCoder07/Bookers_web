"use client";
import React, { useState } from "react";
import Modal from "../Modals/Modal/page";
import TextInput from "../Inputs/TextInput/page";
import Button from "../Buttons/page";
import OTPModal from "../Modals/OTP Modal/page";
import SelectInput from "../Inputs/SelectInput/page";
import {
  useFileStore,
  useRegisterModalValue,
} from "@/helpers/state_management/store";
import FileInput from "../Inputs/FileInput/page";
import Checkbox from "../checkbox/page";
import Images from "@/assets/ImagesConst";
import Image from "next/image";
import PhoneInput from "../Inputs/PhoneInput/page";
import { toast } from "sonner";
import {
  authLogin,
  Check_Number,
  checkCode,
  register_Client_Function,
  register_Master_Function,
} from "@/helpers/logical/api";
import { get } from "http";

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
  getMe: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, onClose, getMe }) => {
  const {
    selectedOption,
    setSelectedOption,
    enteredName,
    enteredNickname,
    enteredSurname,
    setEnteredName,
    setEnteredNickname,
    setEnteredSurname,
    selectedChekbox,
    setSelectedCheckbox,
    phoneRegister,
    setPhoneRegister,
    code,
    setCode,
  } = useRegisterModalValue();
  const { selectedFile } = useFileStore();
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [registerFeedbackModal, setRegisterFeedbakcMOdal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [status, setStatus] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const openOTPModal = () => {
    if (!phoneRegister) {
      toast.warning("Telefon raqamini kiriting.");
      return;
    } else {
      Check_Number(phoneRegister, setStatus, setCode);
    }
    onClose();
    setShowOTPModal(true);
    setOtp(["", "", "", ""]);
  };

  const handleOtpSubmit = () => {
    if (otp.length === 4) {
      if (status === true) {
        openRegisterModal();
      }
    } else {
      toast.warning("SMS kodni to'liq kiriting");
    }
    setCode("");
  };

  const closeOTPModal = () => {
    setShowOTPModal(false);
  };
  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);
  const openRegisterFeedbackModal = () => setRegisterFeedbakcMOdal(true);
  const closeRegisterFeedbackModal = () => setRegisterFeedbakcMOdal(false);

  const handleCheckboxChange = (checked: boolean) => {
    setSelectedCheckbox(checked);
  };

  const handleSubmit = async () => {

    if (!enteredName || !enteredSurname || !selectedChekbox) {
      toast.warning(
        "Barcha majburiy maydonlarni to‘ldiring va shartnoma bilan rozi bo‘ling."
      );
      return;
    }
    if (selectedOption === "Мастер") {
      await register_Master_Function(
        enteredName,
        enteredSurname,
        phoneRegister,
        enteredNickname,
        selectedFile
      );
    } else if (selectedOption === "Клиент") {
      await register_Client_Function(
        enteredName,
        enteredSurname,
        phoneRegister,
        selectedFile
      );
    }
    setSelectedOption("");
    setEnteredName("");
    setEnteredNickname("");
    setEnteredSurname("");
    setPhoneRegister("");
    handleCheckboxChange(false);
    openRegisterFeedbackModal();
    closeRegisterModal();
    getMe();
  };

  const validatePhoneNumber = (phone: string) => {
    const isValid = /^\+998\d{9}$/.test(phone);
    setIsButtonDisabled(!isValid || phone.length !== 13);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneRegister(value);
    validatePhoneNumber(value);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl font-extrabold mb-4 text-center">
            Регистрация / Вход
          </h2>
          <div className="flex flex-col w-full max-w-xs mx-auto">
            <PhoneInput
              label="Номер телефона*"
              id="phone"
              value={phoneRegister.replace(/[^0-9+]/g, "")}
              onChange={handlePhoneChange}
              required
              placeholder="+998 _ _ _ _ _ _ _ _ _"
              type="text"
            />
            <Button
              onClick={() => {
                // Telefon raqami validatsiyadan o‘tgan bo‘lsa davom eting
                if (!isButtonDisabled) {
                  openOTPModal();
                }
              }}
              title="Продолжить"
              customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full mt-4"
              isDisabled={isButtonDisabled}
            />
          </div>
        </div>
      </Modal>

      <OTPModal
        isOpen={showOTPModal}
        onClose={closeOTPModal}
        phoneNumber={phoneRegister}
        onSubmit={handleOtpSubmit}
        code={code}
        resetCode={() => Check_Number(phoneRegister, setStatus, setCode)}
        checkCode={() => {
          status
            ? checkCode(phoneRegister, code)
            : authLogin(phoneRegister, code, getMe,);
          
        }}
      />
      <Modal isOpen={registerModalOpen} onClose={closeRegisterModal}>
        <h2 className="text-2xl text-center font-bold mb-4">Форма заявки</h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <SelectInput
            label="Mavzuni tanlang"
            id="event-type"
            options={[
              { name: "Мастер", value: "Мастер" },
              { name: "Клиент", value: "Клиент" },
              { name: "Партнёр", value: "Партнёр" },
            ]}
            value={selectedOption}
            onChange={setSelectedOption}
          />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4">
          Форма регистрации мастера
        </h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {selectedOption === "Мастер" && (
            <>
              <TextInput
                label="Имя*"
                id="place"
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
                required
                type="text"
              />
              <TextInput
                label="Фамилия*"
                id="phone"
                value={enteredSurname}
                onChange={(e) => setEnteredSurname(e.target.value)}
                required
                type="text"
              />
              <TextInput
                label="Nickname"
                id="additional_info"
                value={enteredNickname}
                onChange={(e) => setEnteredNickname(e.target.value)}
                required
                type="text"
              />
              <FileInput label="Фото" onFileChange={() => { }} />
            </>
          )}
          {selectedOption === "Клиент" && (
            <>
              <TextInput
                label="Имя*"
                id="place"
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
                required
              />
              <TextInput
                label="Фамилия*"
                id="phone"
                value={enteredSurname}
                onChange={(e) => setEnteredSurname(e.target.value)}
                required
              />
              <FileInput label="Фото" onFileChange={() => { }} />
            </>
          )}
        </div>
        <Checkbox
          label="Я соглашаюсь с условиями публичной оферты, пользовательского соглашения и политикой конфиденцциальности."
          id="consent"
          checked={selectedChekbox}
          onChange={handleCheckboxChange}
          required
        />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-[15rem] justify-center items-center">
            <Button
              onClick={() => {
                handleSubmit();
              }}
              title="Отправить"
              customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full mt-4"
            />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={registerFeedbackModal}
        onClose={closeRegisterFeedbackModal}
      >
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
          <Image src={Images.DoneRingSvg} alt="img" className="w-20 mb-5" />
          <h2 className="text-2xl font-bold mb-4">Спасибо за регистрацию!</h2>
          <p className="text-sm mb-3 text-[#111]">
            Личный кабинет веб сайта находится на стадии разработки.
          </p>
          <p className="text-sm mb-3 text-[#111] w-[55%] text-center">
            Полный доступ к личному кабинету Вы можете получить в мобильном
            приложении Bookers.
          </p>
          <h2 className="text-2xl font-bold mb-4 w-[55%] text-center">
            Мы уведомим вас о готовности веб кабинета в ближайшее время.
          </h2>
          <div className="flex flex-col w-[15rem] justify-center items-center">
            <Button
              onClick={closeRegisterFeedbackModal}
              title="Скачать приложение"
              customStyle="bg-[#9C0B35] hover:bg-[#7a0a28] text-[#9C0B35] hover:text-white font-medium rounded-2xl text-sm w-full mt-4"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Register;
