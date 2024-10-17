import React, { useState } from 'react';
import './UrlInput.css';

function UrlInput({ youtubeUrl, setYoutubeUrl }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      value={youtubeUrl}
      onChange={(e) => setYoutubeUrl(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder="Collez l'URL YouTube ici"
      className={`url-input ${isFocused ? 'focused' : 'default'}`}
    />
  );
}

export default UrlInput;
