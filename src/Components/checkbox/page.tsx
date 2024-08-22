import React from 'react';

interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, checked, onChange, required = false }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="flex  justify-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="w-4 h-4 text-[#9C0B35] bg-[#B9B9C9] border-[#9C0B35] rounded focus:ring-[#9C0B35] focus:border-[#9C0B35] mt-1"
        required={required}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium w-[55%] text-[#4F4F4F] underline decoration-1">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
