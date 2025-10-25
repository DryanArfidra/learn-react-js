// src/components/MouseTracker.tsx
import React, { useState, useEffect, useRef } from 'react'; // 1. Impor useRef
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: MousePosition) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  // 2. Buat ref untuk menampung elemen container
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // 3. Gunakan ref.current untuk mengakses elemen DOM secara langsung
      // Ini aman karena kita sudah memeriksa apakah ref.current ada
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    // 4. Tambahkan event listener ke elemen yang di-ref
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mousemove', handleMouseMove);
    }

    // 5. Cleanup: pastikan untuk menghapus listener
    return () => {
      if (containerElement) {
        containerElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []); // Dependency array kosong karena ref bersifat stabil

  return (
    // 6. Hubungkan ref ke elemen div utama
    <div ref={containerRef} className="relative w-full h-full">
      {/* Pointer yang mengikuti mouse */}
      <motion.div
        className="absolute w-5 h-5 bg-sky-400 rounded-full shadow-lg shadow-sky-500/50"
        style={{ left: position.x - 10, top: position.y - 10 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Render prop untuk konten lain */}
      {render(position)}
    </div>
  );
};

export default MouseTracker;