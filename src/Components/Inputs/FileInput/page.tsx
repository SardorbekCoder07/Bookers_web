import Images from '@/assets/ImagesConst';
import { useFileStore } from '@/helpers/state_management/store';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

interface FileInputProps {
    label: string;
    onFileChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ label, onFileChange }) => {
    const {selectedFile,setSelectedFile}=useFileStore();
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
        onFileChange(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        onFileChange(null);
    };

    return (
        <div className="flex flex-col items-start">
            <label className="text-gray-700 mb-2">{label}</label>
            <div className="relative flex items-center px-4 py-2 border-2 border-[#9C0B35] rounded-full text-[#9C0B35] bg-[#B9B9C9]">
                <Image src={Images.fileDownload} alt='file download' className="w-5 h-5 mr-2" />
                {selectedFile ? (
                    <div className="flex items-center justify-between w-full">
                        <span className="text-sm truncate">{selectedFile.name}</span>
                        <button
                            onClick={handleRemoveFile}
                            className="ml-4 text-gray-500text-red-600 transition-colors duration-300"
                        >
                            <MdOutlineCancel className='text-2xl text-[#9C0B35]' />
                        </button>
                    </div>
                ) : (
                    <>
                        <span className="text-sm">Выбрать фото</span>
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default FileInput;
