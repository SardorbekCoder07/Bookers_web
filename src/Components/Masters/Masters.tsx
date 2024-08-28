import React, { useState } from 'react';
import { CiImageOff } from "react-icons/ci";
import HeaderTitles from '../text/HeaderBookers';
import Button from '../Buttons/page';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Modal from '../Modals/Modal/page';
import PhoneInput from '../Inputs/PhoneInput/page';
import TextInput from '../Inputs/TextInput/page';
import { useModalOpenClose } from '@/helpers/state_management/store';
import TextArea from '../Textarea/page';
import Checkbox from '../checkbox/page';
import FileInput from '../Inputs/FileInput/page';

interface Testimonial {
    id: number;
    image: string;
    name: string;
    company: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        image: '',
        name: 'Анастасия Дан',
        company: 'Beauty Wave',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    },
    {
        id: 2,
        image: '',
        name: 'Роман Левел',
        company: 'Tamo Style',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    },
    {
        id: 3,
        image: '',
        name: 'Алекс Саккетт',
        company: 'Lotus SPA',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    },
    {
        id: 4,
        image: '',
        name: 'Алекс Саккетт',
        company: 'Lotus SPA',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    },
    {
        id: 5,
        image: '',
        name: 'Алекс Саккетт',
        company: 'Lotus SPA',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    },
    {
        id: 6,
        image: '',
        name: 'Алекс Саккетт',
        company: 'Lotus SPA',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    },
    {
        id: 7,
        image: '',
        name: 'Алекс Саккетт',
        company: 'Lotus SPA',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    },
];

interface TestimonialCardProps {
    image: string;
    name: string;
    company: string;
    text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, company, text }) => {
    const { setIsModalOpen, } = useModalOpenClose();
    const openModal = () => setIsModalOpen(true);
    return (

        <div className="max-w-sm mb-14 flex flex-wrap  font-semibold bg-[#B9B9C9] p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
                {image ? (
                    <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
                ) : (
                    <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-400 mr-4">
                        <CiImageOff className="w-6 h-6 text-white" />
                    </div>
                )}
            </div>
            <p className="text-black mb-5">{text}</p>

            <div className="relative pt-4">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-[#FB7CA1] to-[#9C0B35]"></div>
                <p className="font-semibold">
                    {name} / <span className="text-[#9C0B35]">{company}</span>
                </p>
            </div>

        </div>
    );
};

const Testimonials: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCheckbox(event.target.checked);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic
        if (selectedCheckbox) {
            // Proceed with form submission
        } else {
            alert('You must agree to the terms.');
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
        if (file) {
            console.log('Selected file:', file);
        }
    };
    return (
        <div className="flex flex-col mb-5 gap-2">
            <HeaderTitles
                text="Ознакомьтесь с отзывами клиентов касательно услуг мастеров и салонов красоты перед бронированием"
                size="text-xl w-[80%] my-10 md:text-2xl lg:text-3xl xl:text-4xl"
            />
            <div className=" hidden md:flex gap-5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >

                    {testimonials.map((testimonial) => (
                        <SwiperSlide>
                            <TestimonialCard
                                key={testimonial.id}
                                image={testimonial.image}
                                name={testimonial.name}
                                company={testimonial.company}
                                text={testimonial.text}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className='md:hidden flex justify-center flex-wrap'>
                {testimonials && testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        image={testimonial.image}
                        name={testimonial.name}
                        company={testimonial.company}
                        text={testimonial.text}
                    />
                ))}


            </div>
            <div className="w-full flex justify-center items-center">
                <div className="">
                    <Button title='Оставить отзыв' onClick={openModal} />
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className='p-6 font-bold text-xl text-center mb-5'>
                    Заполните форму заявки для оформления отзыва и обеспечения видимости в мобильном приложении и на сайте bookers отправьте заявку
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <PhoneInput
                        label="Контактная информация*"
                        id="phone"
                        value=""
                        onChange={() => { }}
                        required
                        placeholder='+998 (_ _)'
                    />
                    <TextInput
                        label="Место проведения*"
                        id="place"
                        value=""
                        onChange={() => { }}
                        required
                    />
                    <TextInput
                        label="Дополнительная информация"
                        id="additional_info"
                        value=""
                        onChange={() => { }}
                        required
                    />
                    <TextInput
                        label="Стоимость участия"
                        id="cost"
                        value=""
                        onChange={() => { }}
                        required
                    />

                </div>
                <TextArea
                    label="Описание мероприятия*"
                    id="message"
                    value=""
                    onChange={() => { }}
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
                        checked={selectedCheckbox}
                        onChange={handleCheckboxChange}
                        required
                    />
                </div>
                <div className=" w-full flex justify-center items-center mt-4">
                    <Button title="Оставить отзыв" width='' />
                </div>
            </Modal>
        </div>
    );
};

export default Testimonials;
