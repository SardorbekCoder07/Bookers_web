import React from 'react';
import Modal from '../Modals/Modal/page';
import TextInput from '../Input/page';
import Button from '../Buttons/page';

interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
    return (
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
                        title="Отправить отзыв"
                        customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full mt-4" // Full width for button and margin top
                    />
                </div>
            </div>
        </Modal>
    );
};

export default Register;
