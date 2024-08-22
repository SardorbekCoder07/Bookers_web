import { useState } from 'react';
import Button from '@/Components/Buttons/page';
import Modal from '../Modal/page';

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  onSubmit: (otp: string) => void;
}

export default function OTPModal({ isOpen, onClose, phoneNumber, onSubmit }: OTPModalProps) {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState<number>(59); // Resend code time

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        (document.getElementById(`otp-${index + 1}`) as HTMLElement).focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      (document.getElementById(`otp-${index - 1}`) as HTMLElement).focus();
    }
  };

  const handleResendCode = () => {
    setTimeLeft(59); // Reset the timer
    // Add your resend OTP logic here
  };

  const handleSubmit = () => {
    onSubmit(otp.join(''));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Tasdiqlash kodi</h2>
        <p className='font-bold mb-2'>{phoneNumber}</p>
        <p className='text-sm mb-3 text-[#4F4F4F]'>
          Мы отправили вам SMS с кодом подтверждения.
        </p>
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:border-none"
            />
          ))}
        </div>
        <p className='text-sm mb-3 text-[#4F4F4F]'>
          Отправить код заново {timeLeft} сек
        </p>
        <Button
          title="Отправить отзыв"
          customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-24 sm:w-auto px-5 py-2.5 text-center"
          onClick={handleSubmit}
        />
      </div>
    </Modal>
  );
}
