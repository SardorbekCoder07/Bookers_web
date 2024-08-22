'use client'
import React, { useState } from 'react';
import Modal from '../Modals/Modal/page';
import TextInput from '../Input/page';
import Button from '../Buttons/page';
import OTPModal from '../Modals/OTP Modal/page';
import SelectInput from '../SelectInput/page';
import { useRegisterModalValue } from '@/helpers/state_management/store';
import FileInput from '../FileInput/page';
import Checkbox from '../checkbox/page';
import { IoCloudDoneOutline } from 'react-icons/io5';
import Images from '@/assets/ImagesConst';
import Image from 'next/image';

interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
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
        setSelectedCheckbox
    } = useRegisterModalValue();

    const [showOTPModal, setShowOTPModal] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const [registerFeedbackModal, setRegisterFeedbakcMOdal] = useState(false)
    const [otp, setOtp] = useState(['', '', '', '']);

    const openOTPModal = () => {
        onClose();
        setShowOTPModal(true);
        setOtp(['', '', '', '']);
    };

    const handleOtpSubmit = (otp: string) => {
        console.log('Received OTP:', otp);
        closeOTPModal();
    };

    const closeOTPModal = () => setShowOTPModal(false);
    const openRegisterModal = () => setRegisterModalOpen(true);
    const closeRegisterModal = () => setRegisterModalOpen(false);
    const openRegisterFeedbackModal = () => setRegisterFeedbakcMOdal(true)
    const closeRegisterFeedbackModal = () => setRegisterFeedbakcMOdal(false)



    const handleCheckboxChange = (checked: boolean) => {
        setSelectedCheckbox(checked);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                    <h2 className="text-2xl font-extrabold mb-4 text-center">Регистрация / Вход</h2>
                    <div className="flex flex-col w-full max-w-xs mx-auto">
                        <TextInput
                            label="Номер телефона*"
                            id="phone"
                            value=""
                            onChange={() => { }}
                            required
                            placeholder="+998 (_ _)"
                        />
                        <Button
                            onClick={openOTPModal}
                            title="Продолжить"
                            customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full mt-4" // Full width for button and margin top
                        />
                    </div>
                </div>
            </Modal>

            <OTPModal
                isOpen={showOTPModal}
                onClose={closeOTPModal}
                phoneNumber="+998 88 517 11 98"
                onSubmit={() => {
                    handleOtpSubmit(otp.join(''));
                    openRegisterModal();
                }}
            />
            <Modal isOpen={registerModalOpen} onClose={closeRegisterModal}>
                <h2 className="text-2xl text-center font-bold mb-4">Форма заявки</h2>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <SelectInput
                        label="Mavzuni tanlang"
                        id="event-type"
                        options={['Мастер', 'Клиент', 'Партнёр']}
                        value={selectedOption}
                        onChange={setSelectedOption}
                    />
                </div>
                <h2 className='text-center text-2xl font-bold mb-4'>Форма регистрации мастера</h2>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <TextInput
                        label="Имя*"
                        id="place"
                        value={enteredName}
                        onChange={(e) => { setEnteredName(e.target.value) }}
                        required
                    />
                    <TextInput
                        label="Фамилия*"
                        id="phone"
                        value={enteredSurname}
                        onChange={(e) => { setEnteredSurname(e.target.value) }}
                        required
                    />
                    <TextInput
                        label="Nickname"
                        id="additional_info"
                        value={enteredNickname}
                        onChange={(e) => { setEnteredNickname(e.target.value) }}
                        required
                    />
                    <FileInput
                        label="Фото"
                        onFileChange={() => { }}
                    />
                </div>
                <Checkbox
                    label="Я соглашаюсь с условиями публичной оферты, пользовательского соглашения и политикой конфиденцциальности."
                    id="consent"
                    checked={selectedChekbox}
                    onChange={handleCheckboxChange}
                    required
                />
                <Button
                    onClick={() => {
                        openRegisterFeedbackModal()
                        closeRegisterModal()
                    }}
                    title='Отправить'
                    customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-24 mt-4" // w-24 butonni kengligini 24 ta grid birligiga moslashadi
                />
            </Modal>
            <Modal
                isOpen={registerFeedbackModal}
                onClose={closeRegisterFeedbackModal}
            >
                <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                    <Image src={Images.DoneRingSvg} alt='img' className='w-20 mb-5' />
                    <h2 className="text-2xl font-bold mb-4">Спасибо за регистрацию !</h2>
                    <p className='text-sm mb-3 text-[#111]'>
                        Личный кабинет веб сайта находится на стадии разработки
                    </p>
                    <p className='text-sm mb-3 text-[#111] w-[55%] text-center'>

                        Полный доступ к личному кабинету
                        Вы можете получить в мобильном приложении Bookers
                    </p>
                    <h2 className='text-2xl font-bold mb-4 w-[55%] text-center'>
                        Мы уведомим вас о готовности веб кабинета
                        в ближайшее время
                    </h2>
                    <Button
                        onClick={closeRegisterFeedbackModal}
                        title='Ок'
                        customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-24 mt-4" // w-24 butonni kengligini 24 ta grid birligiga moslashadi
                    />
                </div>
            </Modal>
        </>
    );
};

export default Register;
