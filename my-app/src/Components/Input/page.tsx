interface TextInputProps {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
    placeholder?:string
  }
  
  const TextInput: React.FC<TextInputProps> = ({ label, id, value, onChange, type = "text", required = false,placeholder }) => {
    return (
      <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-[#4F4F4F]">{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="bg-[#B9B9C9] border text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5"
          required={required}
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default TextInput;
  