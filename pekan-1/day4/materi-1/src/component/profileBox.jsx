import React from 'react';

const containerStyle = {
  border: '2px solid ', 
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: 'gray', 
  width: '320px',
  margin: '20px auto',
  boxShadow: '0 4px 12px rgba(155, 89, 182, 0.2)',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  textAlign: 'center'
};

const imageStyle = {
  width: '150px',      
  height: '150px',   
  borderRadius: '50%',  
  objectFit: 'cover',   
  border: '4px solid #ffffff', 
  marginBottom: '15px'   
};


const nameStyle = {
  color: '#06223eff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 8px 0'
};

const bioStyle = {
  color: '#000000ff',
  fontSize: '16px',
  fontStyle: 'italic'
};

const ProfileBox = () => {
  return (
    <div style={containerStyle}>
        <img src="https://i.pinimg.com/736x/55/f2/de/55f2de4a48a853ee4d673b38323283e7.jpg" alt="profile die" style={imageStyle} />
      <h2 style={nameStyle}>Budi Santoso</h2>
      <p style={bioStyle}>
        "Anak imut yang baik hati dan tidak sombong."
      </p>
    </div>
  );
};

export default ProfileBox;