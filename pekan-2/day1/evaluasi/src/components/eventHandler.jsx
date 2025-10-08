import { useState } from "react";

function EventHandler() {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Tombol diklik');
    };

    const handleMouseEnter = () => {
        alert('Mouse berada di atas tombol.');
    };

     const handleMouseLeave = () => {
        alert('Mouse telah meninggalkan tombol.');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid white', borderRadius: '8px'}}>
            <h2>1. Event Handler sederhana</h2>
            <button
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            Arahkan & Klik saya
            </button>
            {message && <P style={{marginTop: '10px', fontStyle: 'italic'}}>{message}</P>}
        </div>
    )
};

export default EventHandler;