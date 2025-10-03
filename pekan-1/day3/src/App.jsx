import Greeting from "./component/greeting";
import ProductCard from "./component/productCard"
import Card from "./component/card";
import Comment from "./component/comment";
function App() {
  const commentData = {
    author: {
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    text: 'Ini adalah komentar pertama saya. Komposisi komponen di React itu keren!',
  };

  const anotherCommentData = {
    author: {
      name: 'Bob Williams',
      avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    },
    text: 'Saya setuju! Ini membuat kode jadi lebih rapi dan mudah dipelihara.',
  };

  return (
  <div>
    <Greeting nama= 'Arman Cell' /> 
      <h1 style={{textAlign: 'center'}}>-Daftar Produk-</h1>
      
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <ProductCard 
        productName="Laptop XYZ" price={15000000} stock={10} isAvailable={true} />

      
      <ProductCard productName="Mouse Wireless" price={250000} />
      
      <ProductCard productName="Keyboard Mechanical" price={800000} stock={0} isAvailable={false} 
      />
     </div>
     <div style={{ padding: '20px' }}>
      <h1>Contoh Penggunaan Komponen Card</h1>

      <Card>
        <h2>Kartu Profil</h2>
        <p>
          Ini adalah contoh kartu yang hanya berisi teks. Komponen Card sangat fleksibel
          dan bisa membungkus konten apa saja yang Anda butuhkan.
        </p>
      </Card>

      <Card>
        <img 
          src="https://i.pinimg.com/736x/69/21/1d/69211d83e9e88cf9f730ba713ddafcbe.jpg" 
          alt="Gambar Contoh" 
          style={{ width: '100%', borderRadius: '4px', marginBottom: '10px' }}
        />
        <h3>Gambar Pemandangan</h3>
        <p>Card ini menunjukkan bahwa kita bisa menampilkan gambar di dalamnya.</p>
      </Card>

      <Card>
        <h4>Formulir Aksi</h4>
        <p>Card ini berisi sebuah tombol untuk interaksi pengguna.</p>
        <button 
          style={{ 
            padding: '10px 15px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Klik Saya
        </button>
      </Card>

    </div>
     <div className="App">
      <h1>Halaman Komentar</h1>
      
      <Comment 
        author={commentData.author} 
        text={commentData.text} 
      />

      <Comment 
        author={anotherCommentData.author} 
        text={anotherCommentData.text} 
      />

    </div>
    </div>
  );
}

export default App;
 