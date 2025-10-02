import React from 'react';

function SapaanPengguna() {
  const nama = "Andi";
  const waktu = "pagi";
  const harga = 10000;
  const diskon = 20;
  
  const sapaan = (waktu) => {
    return "Selamat " + waktu;
  };
  
  const hargaDiskon = harga - (harga * diskon / 100);
  
  return (
    <div>
      <h1>menggunakan JavaScript expressoin didalam JSX</h1>
      
      <p>Halo, {nama}!</p>
      
      <p>{sapaan(waktu)}</p>
      
      <p>Nama huruf besar: {nama.toUpperCase()}</p>
      <p>Nama huruf kecil: {nama.toLowerCase()}</p>
      
      <p>Harga asli: Rp {harga}</p>
      <p>Diskon: {diskon}%</p>
      <p>Harga setelah diskon: Rp {hargaDiskon}</p>
      
      <p>2 + 2 = {2 + 2}</p>
      <p>10 * 5 = {10 * 5}</p>
      
      <p>
        Status: {diskon > 10 ? "Diskon besar" : "Diskon kecil"}
      </p>
    </div>
  );
}

export default SapaanPengguna;