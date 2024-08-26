'use client';
import React from 'react';

interface ButtonTypes {
    title: string;
    onClick?: () => void;
    outlineStyle?: boolean;
    isDisabled?: boolean;
    icon?: any;
    customStyle?: string;
    width?: string; 
}

const Button: React.FC<ButtonTypes> = ({ title, onClick, isDisabled = false, outlineStyle, icon, customStyle, width = '100%' }) => {
    return (
        <button
            onClick={isDisabled ? undefined : onClick} // Prevents click event if disabled
            disabled={isDisabled}
            className={`${outlineStyle ? `bg-transparent text-[#9C0B35] border-[1px] border-[#9C0B35] rounded-3xl py-2 px-7
                      ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'active:opacity-[.7]'} 
                      ${customStyle}`
                :
                `bg-[#9C0B35] text-white border-[1px] border-[#9C0B35] rounded-3xl py-2 px-7
                        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'active:opacity-[.9] active:scale-105 transition-all duration-100'}
                        ${customStyle}`}`}
            style={{ width }}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {title}
        </button>
    )
}

export default Button;
