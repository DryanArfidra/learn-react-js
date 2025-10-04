import React from 'react';
import ProfileBox from './component/profileBox'; 
import Button from './component/tombol/button';
import './component/app.css'
import AlertBox from './component/AlertBox';
import ResponsiveBox from './component/Responsivebox';
function App() {
   const handleDefaultClick = () => {
    alert('Tombol Default diklik!');
  };

  const handlePrimaryClick = () => {
    alert('Tombol Primary diklik!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          textAlign: 'center',
          fontSize: '50px',
          color: 'navy',
          fontStyle: 'oblique',
          background: 'gray',
          padding: '20px',
          marginLeft: '150px',
          marginRight: '150px'
          }}>Profil Pengguna</h1>
        <ProfileBox />
        <ProfileBox /> 
      </header>
      <div className="kartu-profil">
      <h2 className="nama">Budi Santoso</h2>
      <p className="deskripsi">Gamers Delta Force</p>
      <button className="tombol-profil">
        Hubungi Saya
      </button>
    </div>
     <div className="container">
      <h1>Demo CSS Modules</h1>
      <p>Komponen Button dengan dua gaya berbeda:</p>
      
      <div className="button-group">
        <Button onClick={handleDefaultClick}>
          Tombol Default
        </Button>

        <Button variant="primary" onClick={handlePrimaryClick}>
          Tombol Primary
        </Button>
      </div>
    </div>
     <div style={{ width: "400px", margin: "30px auto", fontFamily: "Arial" }}>
      <h2>Contoh AlertBox dengan Dynamic Styling</h2>

      {/* Alert success */}
      <AlertBox type="success" message="Berhasil menyimpan data!" />

      {/* Alert warning */}
      <AlertBox type="warning" message="Periksa kembali input Anda." />

      {/* Alert error */}
      <AlertBox type="error" message="Terjadi kesalahan saat mengirim data!" />
    </div>
     <div>
      <ResponsiveBox />
    </div>
    </div>
    
  );
}

export default App;