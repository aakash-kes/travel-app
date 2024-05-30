// src/App.js
import React, { useState } from 'react';
import Popup from './Popup';
import './App.css';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={togglePopup}>Show Popup</button>
      </header>
      <Popup
        isOpen={isPopupOpen}
        message="This is a responsive popup message!"
        onClose={togglePopup}
      />
    </div>
  );
}

export default App;
