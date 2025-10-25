// src/components/FocusInput.tsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.input
        ref={inputRef}
        type="text"
        placeholder="Klik tombol untuk fokus di sini"
        className="flex-1 px-4 py-2 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button
        onClick={handleFocusClick}
        className="px-6 py-2 bg-sky-500 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-600 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Fokus Input
      </motion.button>
    </div>
  );
};

export default FocusInput;