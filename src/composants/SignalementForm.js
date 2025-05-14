import React, { useState } from 'react';
import './styles.css';

const SignalementForm = () => {
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`✅ Signalement envoyé !\n\n📍 Latitude : ${latitude}\n📍 Longitude : ${longitude}\n📝 Description : ${description}`);

    // Réinitialisation des champs
    setDescription('');
    setLatitude('');
    setLongitude('');
  };

  return (
    <form className="signalement-form" onSubmit={handleSubmit}>
      <h2>🛑 Nouveau Signalement</h2>

      <input
        type="text"
        placeholder="Description du problème"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        required
      />

      <button type="submit">📨 Signaler</button>
    </form>
  );
};

export default SignalementForm;
