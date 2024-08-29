import React, { useState } from 'react';
import axios from 'axios';
import { CiImageOff } from "react-icons/ci";
import HeaderTitles from '../text/HeaderBookers';
import Button from '../Buttons/page';
import Modal from '../Modals/Modal/page';
import PhoneInput from '../Inputs/PhoneInput/page';
import TextInput from '../Inputs/TextInput/page';
import TextArea from '../Textarea/page';
import Checkbox from '../checkbox/page';
import FileInput from '../Inputs/FileInput/page';
import LocationSelect from './Location';
import { submitFeedback } from '@/helpers/otziv/otziv';

const Testimonials: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // State variables for form inputs
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [masterOrSalonId] = useState('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    const [feedback, setFeedback] = useState('');
    const [agree, setAgree] = useState(false);
    const [districtId, setDistrictId] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleFileChange = (file: File) => {
        setSelectedFile(file);
    };

    const handleCheckboxChange = (checked: boolean) => {
        setAgree(checked);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Prepare form data
        const formData = {
            clientName,
            email,
            phoneNumber,
            masterOrSalonId,
            feedback,
            attachmentId: selectedFile ? 'some-attachment-id' : undefined, // Replace with actual logic to get attachment ID
            master: true, // Assuming 'master' is always true
            agree
        };

        // Log the form data
        console.log('Form Data:', formData);

        try {
            await submitFeedback(formData);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className="flex flex-col mb-5 gap-2">
            <HeaderTitles
                text="Ознакомьтесь с отзывами клиентов касательно услуг мастеров и салонов красоты перед бронированием"
                size="text-xl w-[80%] my-10 md:text-2xl lg:text-3xl xl:text-4xl"
            />
            <div className="w-full flex justify-center items-center">
                <Button title='Оставить отзыв' onClick={openModal} />
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className='p-6 font-bold text-xl text-center mb-5'>
                    Заполните форму заявки для оформления отзыва и обеспечения видимости в мобильном приложении и на сайте bookers отправьте заявку
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <TextInput
                            label="Имя клиента*"
                            id="clientName"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            required
                        />
                        <TextInput
                            label="Электронная почта"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <PhoneInput
                            label="Телефон*"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            placeholder='+998 (_ _)'
                        />
                        <LocationSelect
                            setDistrictId={setDistrictId}
                            city={city}
                            setCity={setCity}
                        />
                    </div>
                    <TextArea
                        label="Описание мероприятия*"
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                    <div className='mb-4'>
                        <FileInput
                            label="Прикрепить ваши фото"
                            onFileChange={handleFileChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <Checkbox
                            label="Я соглашаюсь с условиями публичной оферты, пользовательского соглашения и политикой конфиденциальности."
                            id="consent"
                            checked={agree}
                            onChange={(e) => handleCheckboxChange(e.target.checked)}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center mt-4">
                        <Button title="Оставить отзыв" width='' />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Testimonials;
