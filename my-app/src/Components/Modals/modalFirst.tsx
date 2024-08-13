// components/Modal.tsx
'use client';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">Modal content goes here...</p>
        <button
          onClick={onClose}
          className="bg-[#9C0B35] text-white px-4 py-2 rounded-lg hover:bg-[#7a0a28] active:bg-[#5c073b]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
