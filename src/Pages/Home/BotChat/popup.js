// src/Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
