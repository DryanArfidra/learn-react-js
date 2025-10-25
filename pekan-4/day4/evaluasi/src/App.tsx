import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

// Import komponen
import FocusInput from './components/FocusInput';
import PortalModal from './components/PortalModal';
import MouseTracker from './components/MouseTracker';
import UserProfile from './components/UserProfile';
import withLoading from './hocs/withLoading';

// Bungkus UserProfile dengan HOC
const UserProfileWithLoading = withLoading(UserProfile);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // Sedikit lebih lama untuk menikmati animasi loading
    return () => clearTimeout(timer);
  }, []);

  // Variabel animasi untuk container utama
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2 // Anak-anak akan muncul dengan jeda 0.2 detik
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 md:p-8">
      <motion.div
        className="w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <header className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-slate-100"
            variants={itemVariants}
          >
            Evaluasi Harian - Hari ke-22
          </motion.h1>
          <motion.p 
            className="text-slate-400 mt-2"
            variants={itemVariants}
          >
            React, TypeScript, Tailwind CSS & Framer Motion
          </motion.p>
        </header>

        <main className="space-y-8">
          {/* 1. Demo useRef */}
          <motion.section variants={itemVariants} className="bg-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">1. useRef untuk Fokus Input</h2>
            <FocusInput />
          </motion.section>

          {/* 2. Demo Portal Modal */}
          <motion.section variants={itemVariants} className="bg-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">2. Portal Modal</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-sky-500 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-600 transition-colors duration-200"
            >
              Buka Modal
            </button>
            <AnimatePresence>
            <PortalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
               <h3 className="text-2xl font-bold text-slate-100 mb-4">Panduan Lengkap Portal Modal</h3>
              <p className="text-slate-300 mb-4">
                React Portal adalah fitur yang sangat kuat yang memungkinkan kita untuk merender komponen di luar hierarki DOM induknya. Ini sangat berguna untuk elemen-elemen UI yang perlu "melampaui" kontainer mereka, seperti modal, tooltip, atau dropdown.
              </p>
              <p className="text-slate-300 mb-4">
                Mengapa menggunakan Portal? Salah satu alasan utamanya adalah untuk mengatasi masalah <code className="bg-slate-700 px-1 py-0.5 rounded text-sky-400">z-index</code> dan <code className="bg-slate-700 px-1 py-0.5 rounded text-sky-400">overflow</code>. Tanpa portal, modal yang berada di dalam sebuah <code className="bg-slate-700 px-1 py-0.5 rounded text-sky-400">div</code> dengan <code className="bg-slate-700 px-1 py-0.5 rounded text-sky-400">overflow: hidden</code> akan terpotong.
              </p>
              <h4 className="text-lg font-semibold text-slate-100 mt-6 mb-2">Manfaat Utama:</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                <li><strong className="text-slate-200">Independensi Z-Index:</strong> Modal di-render di level teratas DOM, sehingga tidak akan tertutup oleh elemen lain.</li>
                <li><strong className="text-slate-200">Aksesibilitas yang Lebih Baik:</strong> Memudahkan manajemen fokus untuk screen reader.</li>
                <li><strong className="text-slate-200">Pohon Komponen yang Bersih:</strong> Logika modal tetap berada di komponen induk, meskipun render-nya di tempat lain.</li>
              </ul>
              <p className="text-slate-300">
                Dengan demikian, Portal memberikan solusi yang elegan dan robust untuk menciptakan pengalaman pengguna yang mulus tanpa terkendala oleh struktur DOM yang kompleks.
              </p>
            </PortalModal>
            </AnimatePresence>
          </motion.section>

          {/* 3. Demo HOC */}
          <motion.section variants={itemVariants} className="bg-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">3. Custom HOC (withLoading)</h2>
            <UserProfileWithLoading isLoading={isLoading} name="Ahmad Santri" email="ahmad@santri.com" />
          </motion.section>

          {/* 4. Demo Render Props */}
          <motion.section variants={itemVariants} className="bg-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">4. Render Props Pattern (MouseTracker)</h2>
          <div className="relative bg-slate-700 rounded-lg p-4 h-32 overflow-hidden">
              <MouseTracker
                render={({ x, y }) => (
                  <p className="text-slate-200 font-mono text-sm">
                    Posisi Mouse: X={x}, Y={y}
                  </p>
                )}
              />
          </div>
          </motion.section>
        </main>
      </motion.div>
    </div>
  );
}

export default App;