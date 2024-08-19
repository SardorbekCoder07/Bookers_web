import React from 'react';
import Modal from '../Modals/Modal/page';
import TextInput from '../Input/page';
import Button from '../Buttons/page';
import OTPModal from '../Modals/OTP Modal/page';

interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
    const [showOTPModal, setShowOTPModal] = React.useState(false);
    const [otp, setOtp] = React.useState(['', '', '', '']);
    
    const openOTPModal = () => {
        // Modalni yopamiz
        onClose();
        // OTP Modalni ochamiz
        setShowOTPModal(true);
        setOtp(['', '', '', '']);
    };
    
    const handleOtpSubmit = (otp: string) => {
        console.log('Received OTP:', otp);
        closeOTPModal();
    };
    
    const closeOTPModal = () => setShowOTPModal(false);

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
                            title="Отправить отзыв"
                            customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full mt-4" // Full width for button and margin top
                        />
                    </div>
                </div>
            </Modal>
            <OTPModal
                isOpen={showOTPModal}
                onClose={closeOTPModal}
                phoneNumber="+998 88 517 11 98"
                onSubmit={handleOtpSubmit}
            />
        </>
    );
};

export default Register;
