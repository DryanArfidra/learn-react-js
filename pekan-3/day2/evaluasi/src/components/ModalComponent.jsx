import React from 'react';
import useToggle from '../hooks/useToggle';
import './ModalComponent.css'; // Kita akan buat file CSS ini

function ModalComponent() {
  const [isModalOpen, toggleModal] = useToggle(false);

  return (
    <div>
      <button onClick={toggleModal}>Buka Modal</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Ini adalah Modal</h2>
            <p>Konten modal ada di sini.</p>
            <button onClick={toggleModal}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;