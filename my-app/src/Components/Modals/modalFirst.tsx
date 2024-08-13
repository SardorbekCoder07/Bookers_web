// components/Modal.tsx

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ transition: 'opacity 0.3s ease-in-out' }}
    >
      <div
        className={`bg-white rounded-lg p-6 max-w-sm w-full relative transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
