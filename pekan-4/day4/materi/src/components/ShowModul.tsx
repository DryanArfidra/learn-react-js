import { useRef, type FC } from "react";
import type { ModalHandle } from "./modalHandle";
import Modal from "./modalHandle";

const ShowModal: FC = () => {
  const modalRef = useRef<ModalHandle | null>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-sky-200 p-6 relative overflow-hidden">
      {/* 🔹 Background efek bokeh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-sky-400/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* 🔹 Judul */}
      <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-blue-600 drop-shadow-md tracking-tight">
        ✨ useImperativeHandle: Kontrol Komponen Anak
      </h2>

      {/* 🔹 Tombol Aksi */}
      <div className="flex gap-5">
        <button
          onClick={handleOpenModal}
          className="px-7 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none"
        >
          🌟 Buka Modal
        </button>

        <button
          onClick={handleCloseModal}
          className="px-7 py-3 bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none"
        >
          ❌ Tutup Modal
        </button>
      </div>

      {/* 🔹 Modal */}
      <Modal ref={modalRef}>
        <div className="p-8 text-center bg-white/90 rounded-3xl shadow-2xl backdrop-blur-md border border-white/60 transform transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 mb-4 drop-shadow-sm">
            🌸 Selamat Datang di Modal 🌸
          </h3>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Ini contoh bagaimana{" "}
            <span className="font-semibold text-blue-600">
              useImperativeHandle
            </span>{" "}
            memungkinkan kita mengontrol komponen anak dari luar!
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Gunakan konsep ini untuk membuat UI interaktif seperti popup, alert,
            atau form dinamis — semua bisa dikontrol dari luar komponen. 🚀
          </p>

          <button
            onClick={handleCloseModal}
            className="px-8 py-2.5 bg-gradient-to-r from-sky-400 to-indigo-600 text-white rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Tutup Modal ✨
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ShowModal;
