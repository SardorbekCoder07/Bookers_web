import { useEffect, useState } from 'react';
import Button from '@/Components/Buttons/page';
import Modal from '../Modal/page';
import { toast } from 'sonner';
import { useOtpStore, useRegisterModalValue } from '@/helpers/state_management/store';

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  onSubmit: (otp: string) => void;
  resetCode: () => void;
  checkCode: () => void;
  code: string;
}

export default function OTPModal({ isOpen, onClose, phoneNumber, onSubmit, resetCode, checkCode, code }: OTPModalProps) {
  const { timeLeft, setTimeLeft, resetTimeLeft } = useOtpStore();
  const { setPhoneRegister } = useRegisterModalValue()
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [borderColor, setBorderColor] = useState<string>('border-gray-300');

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      if (timer) clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeLeft, setTimeLeft]);

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
    resetTimeLeft(); // Timerni qayta boshlash
    resetCode();
    setOtp(['', '', '', '']);
    setBorderColor('border-gray-300'); // Border rangini qayta o'zgartirish
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (String(code) === enteredOtp) {
      checkCode();
      onSubmit(enteredOtp);
      onClose(); // Kod to'g'ri bo'lsa modalni yopish
      setOtp(['', '', '', '']);
      setBorderColor('border-gray-300');
      setPhoneRegister('')
    } else {
      toast.error("Kiritilgan kod noto'g'ri!");
      setInterval(() => setBorderColor('border-red-500'), 100); // Input borderini qizil rangga o'zgartirish
    }
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
              className={`w-14 h-14 text-center border ${borderColor} rounded-md text-xl focus:outline-none focus:border-none`}
            />
          ))}
        </div>
        <p className='text-sm mb-3 text-[#4F4F4F]'>
          Kodni qayta jo'natish {timeLeft} sek
        </p>
        <Button
          title="Tasdiqlash" // Matnni yangilash
          customStyle="text-white bg-[#9C0B35] hover:bg-[#7a0a28] font-medium rounded-lg text-sm w-24 sm:w-auto px-5 py-2.5 text-center"
          onClick={handleSubmit}
        />
        {timeLeft === 0 && (<button
          onClick={handleResendCode}
          className="text-blue-500 hover:underline mt-2"
        >
          Kodni qayta jo'natish
        </button>)}
      </div>
    </Modal>
  );
}
