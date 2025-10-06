import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [tahunMasuk, setTahunMasuk] = useState(0);

  return(
    <>
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <div>
          <label htmlFor="name">Nama</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
         <div>
          <label htmlFor="jurusan">Jurusan</label>
          <input id="jurusan" type="text"  value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
        </div>
         <div>
          <label htmlFor="tahunmasuk">Tahun Masuk</label>
          <input id="tahunmasuk" type="text"  value={tahunMasuk} onChange={(e) => setTahunMasuk(e.target.value)}/>
        </div>
        <hr />
        <div>Nama: {name}</div>
        <div>Jurusan: {jurusan}</div>
        <div>Tahun Masuk: {tahunMasuk}</div>
      </div>
    </>
  )
}
export default App;
