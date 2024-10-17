import React from 'react';
import { FaExchangeAlt, FaTrashAlt } from 'react-icons/fa'; // Import des icônes
import './ButtonContainer.css';

function ButtonContainer({ convertUrl, clearOutput, youtubeUrl }) {
  return (
    <div className="button-container">
      <button className="convert-button" onClick={convertUrl}>
        <FaExchangeAlt /> Convertir en Embed URL
      </button>
      <button className="clear-button" onClick={clearOutput} disabled={!youtubeUrl || youtubeUrl.trim() === ''}>
        <FaTrashAlt /> Effacer
      </button>
    </div>
  );
}

export default ButtonContainer;
