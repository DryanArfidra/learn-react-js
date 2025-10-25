// src/components/PortalModal.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PortalModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // AnimatePresence di App.tsx akan menangani animasi keluarnya.
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    // Container utama untuk modal dan overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay / Latar Belakang */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Konten Modal */}
      {/* PERHATIKAN TAMBAHAN `z-10` DI SINI */}
      <motion.div
         className="relative bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full border border-slate-600 z-10 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children}
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-slate-700 text-slate-200 font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-200"
        >
          Tutup
        </button>
      </motion.div>
    </div>,
    document.getElementById('portal-root')!
  );
};

export default PortalModal;