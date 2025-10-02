import React from 'react';

function ProfileCard({ name, photo, age, hobbies }) {
  const cardStyle = {
    maxWidth: '350px',
    margin: '1rem',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  };

  const photoStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto 1rem',
    border: '3px solid #e0e0e0'
  };

  const nameStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  const ageStyle = {
    textAlign: 'center',
    color: '#666',
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    fontWeight: '500'
  };

  const hobbiesContainerStyle = {
    borderTop: '1px solid #eee',
    paddingTop: '1rem'
  };

  const hobbiesTitleStyle = {
    color: '#555',
    marginBottom: '0.75rem',
    fontSize: '1.1rem'
  };

  const hobbiesListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const hobbyItemStyle = {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem'
  };

  return (
    <div style={cardStyle}>
      <img 
        src={photo} 
        alt={`Foto profil ${name}`}
        style={photoStyle}
      />
      
      <h2 style={nameStyle}>{name}</h2>
      
      <p style={ageStyle}>Umur: {age} tahun</p>
      
      <div style={hobbiesContainerStyle}>
        <h3 style={hobbiesTitleStyle}>Hobi:</h3>
        <ul style={hobbiesListStyle}>
          {hobbies.map((hobby, index) => (
            <li key={index} style={hobbyItemStyle}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const profiles = [
    {
      name: "Renji Kurozawa",
      photo: "https://i.pinimg.com/736x/71/68/65/716865fb858791afce54f8727a7ac4ef.jpg",
      age: 28,
      hobbies: ["Bermain Gitar", "Fotografi", "Traveling", "Memasak"]
    },
    {
      name: "Hikari Aozora",
      photo: "https://i.pinimg.com/736x/3f/80/09/3f8009184dc41321ceccc7f586ee74a9.jpg",
      age: 24,
      hobbies: ["Menari", "Menggambar", "Berenang", "Membaca Novel"]
    },
    {
      name: "Miyu Hanazaki",
      photo: "https://i.pinimg.com/1200x/00/6d/db/006ddb552a57571387e8a1c486ceaf9f.jpg",
      age: 32,
      hobbies: ["Bermain Catur", "Hiking", "Menulis Blog", "Olahraga"]
    },
    {
      name: "Tsubasa Arakawa",
      photo: "https://i.pinimg.com/736x/3b/c7/8e/3bc78e19bf2d83e62b67750ee84cf5dd.jpg",
      age: 26,
      hobbies: ["Bermain Piano", "Berkebun", "futsal", "Menonton Film"]
    },
    {
      name: "Ame Yukihara",
      photo: "https://i.pinimg.com/736x/37/55/a2/3755a22a197070f60ba71d3edf3ded57.jpg",
      age: 30,
      hobbies: ["menari", "Main Game", "Koleksi Antik", "Memelihara Kucing"]
    }
  ];

  return (
    <div className="App">
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '2rem',
        fontSize: '2rem'
      }}>
        Daftar Profil Pengguna
      </h1>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {profiles.map((profile, index) => (
          <ProfileCard 
            key={index}
            name={profile.name}
            photo={profile.photo}
            age={profile.age}
            hobbies={profile.hobbies}
          />
        ))}
      </div>
    </div>
  );
}

export default App;