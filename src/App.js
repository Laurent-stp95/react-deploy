import React, { useState } from 'react';
import './App.css';
import Description from './components/Description';
import UrlInput from './components/UrlInput';
import ButtonContainer from './components/ButtonContainer';
import Output from './components/Output';

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');
  const [error, setError] = useState('');

  const convertUrl = () => {
    setError('');
    setEmbedUrl('');

    if (!youtubeUrl) {
      setError('Saisissez une URL, le champ est vide');
      return;
    }

    // Vérification du format de l'URL YouTube
    const urlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|live\/|v=|.+\/)?([^&?\s\/]+)/;
    if (!urlPattern.test(youtubeUrl)) {
      setError("URL invalide. Assurez-vous qu'il s'agit d'une URL YouTube correcte.");
      return;
    }

    const videoIdMatch = youtubeUrl.match(/(?:live\/|v=|youtu\.be\/|embed\/|watch\?v=)([^&?\s\/]+)/);
    if (videoIdMatch) {
      const videoId = videoIdMatch[1];
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
    } else {
      setError("URL invalide. Assurez-vous qu'il s'agit d'une URL YouTube correcte.");
    }
  };

  const clearOutput = () => {
    setYoutubeUrl('');
    setEmbedUrl('');
    setError('');
  };

  return (
    <div className="container">
      <h1>Formatteur d'URL YouTube à intégrer</h1>
      <Description />
      <UrlInput youtubeUrl={youtubeUrl} setYoutubeUrl={setYoutubeUrl} />
      <ButtonContainer convertUrl={convertUrl} clearOutput={clearOutput} youtubeUrl={youtubeUrl} />
      {error && <div className="error">{error}</div>}
      {embedUrl && <Output embedUrl={embedUrl} />}
    </div>
  );
}

export default App;
