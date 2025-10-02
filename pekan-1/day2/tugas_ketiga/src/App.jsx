import React, { useState } from 'react';

function SimpleConditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [messageCount, setMessageCount] = useState(3);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Contoh Conditional Rendering</h2>
      
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
        <h3>Status Login (Ternary Operator)</h3>
        
        {isLoggedIn ? (
          <div>
            <p style={{ color: 'green' }}>✓ Anda sudah login</p>
            <button onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p style={{ color: 'red' }}>✗ Silakan login dulu</p>
            <button onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          </div>
        )}
      </div>
      
      <div style={{ padding: '10px', border: '1px solid #ddd' }}>
        <h3>Notifikasi Pesan (Logical AND)</h3>
        
        {messageCount > 0 && (
          <div style={{ backgroundColor: '#ffeb3b', padding: '10px' }}>
            📬 Anda punya {messageCount} pesan baru!
          </div>
        )}
        
        <button 
          onClick={() => setMessageCount(messageCount - 1)}
          disabled={messageCount === 0}
        >
          Baca satu pesan
        </button>
      </div>
    </div>
  );
}

export default SimpleConditional;