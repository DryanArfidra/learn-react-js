import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan telah dikirim!");
  };

  return (
    <div className="max-w-lg mx-auto my-16 p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Hubungi Kami
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Punya pertanyaan atau ingin bekerja sama? Kirim pesanmu di bawah ini.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Nama</label>
          <input
            type="text"
            placeholder="Masukkan nama kamu"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Masukkan email kamu"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Pesan</label>
          <textarea
            placeholder="Tulis pesanmu..."
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default Contact;
