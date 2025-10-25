import { useState, type FC } from "react";
import { motion } from "framer-motion";
import { MouseTracker } from "./MouseTracker";

const HandleMouse: FC = () => {
  const [score, setScore] = useState(0);

  const handleClick = () => setScore((prev) => prev + 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#002b33] via-[#001f2b] to-[#003f3f] text-cyan-300 font-mono">
      <h2 className="text-4xl font-extrabold mb-2 drop-shadow-[0_0_15px_#00fff7] tracking-widest">
        🕹️ MOUSE TRACKER CONSOLE
      </h2>
      <p className="mb-6 text-sm text-green-300 opacity-80">
        Gerakkan mouse dan klik target untuk menambah skor!
      </p>

      <div className="relative w-[520px] h-[320px] bg-[#002b33]/70 border-2 border-green-400/50 rounded-2xl shadow-[0_0_25px_#00ffaa] overflow-hidden backdrop-blur-sm">
        <MouseTracker
          render={(mousePosition) => (
            <>
              <motion.div
                onClick={handleClick}
                className="absolute w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full cursor-crosshair shadow-[0_0_25px_#00ffcc]"
                animate={{
                  x: mousePosition.x - 16,
                  y: mousePosition.y - 16,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              <div className="absolute top-2 left-2 text-xs bg-black/60 border border-green-400/30 px-2 py-1 rounded-md font-mono text-green-300">
                x: {mousePosition.x} | y: {mousePosition.y}
              </div>

              <motion.div
                className="absolute w-12 h-12 bg-green-400/20 rounded-full blur-xl pointer-events-none"
                animate={{
                  x: mousePosition.x - 24,
                  y: mousePosition.y - 24,
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
              />
            </>
          )}
        />
      </div>

      <div className="mt-6 bg-gradient-to-r from-[#004F3F]/80 to-[#003F2F]/80 px-8 py-4 rounded-xl shadow-[0_0_25px_#00ffaa] border border-green-400/30 backdrop-blur-md">
        <p className="text-lg font-semibold text-green-300">
          💥 Skor: <span className="text-cyan-300">{score}</span>
        </p>
      </div>
    </div>
  );
};

export default HandleMouse;
