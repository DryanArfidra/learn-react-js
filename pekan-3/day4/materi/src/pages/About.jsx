import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-lg text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Tentang Kami
      </h1>
      <p className="mb-4 leading-relaxed">
        Selamat datang di{" "}
        <span className="font-semibold text-blue-500">Website Kami</span>! Kami
        berfokus menghadirkan solusi digital yang sederhana, modern, dan
        bermanfaat bagi semua orang.
      </p>
      <p className="mb-4 leading-relaxed">
        Kami percaya bahwa teknologi harus mempermudah kehidupan, bukan
        sebaliknya. Karena itu, kami terus berinovasi untuk menciptakan
        pengalaman pengguna yang menyenangkan dan bermanfaat.
      </p>
      <p className="leading-relaxed">
        Terima kasih telah mengunjungi halaman ini — semoga apa yang kami buat
        bisa memberi nilai tambah untuk kamu! 💙
      </p>
    </div>
  );
};

export default About;
