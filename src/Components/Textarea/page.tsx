interface TextAreaProps {
    label: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
  }
  
  const TextArea: React.FC<TextAreaProps> = ({ label, id, value, onChange, required = false }) => {
    return (
      <div className="mb-6">
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-[#4F4F4F]">{label}</label>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          className="bg-[#B9B9C9] border text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5"
          required={required}
        />
      </div>
    );
  };
  
  export default TextArea;
  