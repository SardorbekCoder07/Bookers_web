import React from 'react';
import { IoCloudDoneOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import Button from '../../Buttons/page';
import Modal from '../Modal/page';
import Image from 'next/image';
import Images from '@/assets/ImagesConst';

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    success: boolean; // true => Successful feedback, false => Error feedback
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, success }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col justify-center items-center">
                {success ? (
                    <>
                        <Image src={Images.DoneRingSvg} alt='img' className='w-20 mb-5' />
                        <h2 className="text-2xl font-bold mb-4">Отзыв принят</h2>
                        <p className='text-sm mb-3 text-[#4F4F4F]'>
                            Спасибо что помогаете улучшить наш сервис
                        </p>
                    </>
                ) : (
                    <>
                        <MdErrorOutline className="text-[70px] text-[#9C0B35]" />
                        <h2 className="text-2xl font-bold mb-4 mt-4">Вы не можете оставить отзыв</h2>
                        <p className='text-sm mb-3 text-[#4F4F4F]'>
                            Что бы оставить отзыв, необходимо пройти регистрацию клиента
                        </p>
                        <div>
                            <Button title='Зарегистрироваться' customStyle='ext-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center' />
                        </div>

                    </>
                )}
            </div>
        </Modal>
    );
};

export default FeedbackModal;
