
// import { ButtonTypes } from '@/types/button/button';
import React from 'react';

interface ButtonTypes {
    title: string;
    onClick?: () => void;
    outlineStyle?: boolean;
    isDisabled?: boolean;
    icon?: any;
    customStyle?: string
}
const Button: React.FC<ButtonTypes> = ({ title, onClick, isDisabled = false, outlineStyle, icon, customStyle }) => {
    return (
        <button onClick={onClick} disabled={isDisabled} className={`${outlineStyle ? `bg-transparent text-[#9C0B35] border-[1px] border-[#9C0B35] rounded-3xl py-2 px-7 w-[100%] active:opacity-[.7] ${customStyle}` : `bg-[#9C0B35] text-white border-[1px] border-[#9C0B35] rounded-3xl py-2 px-7 w-[100%] active:opacity-[.9] ${customStyle}`}`}>{title}</button>
    )
}

export default Button