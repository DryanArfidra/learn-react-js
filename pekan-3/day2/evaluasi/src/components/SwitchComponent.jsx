import React from 'react';
import useToggle from '../hooks/useToggle';
import './SwitchComponent.css'; // Kita akan buat file CSS ini

function SwitchComponent() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={toggleIsOn} readOnly />
        <span className="slider"></span>
      </label>
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}

export default SwitchComponent;