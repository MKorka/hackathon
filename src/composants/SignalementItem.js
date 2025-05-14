import React from 'react';
import './styles.css';

const SignalementItem = ({ signalement }) => {
  if (!signalement) {
    return <div className="signalement-item">Données manquantes</div>;
  }

  const { description, latitude, longitude } = signalement;

  return (
    <div className="signalement-item">
      <h3>{description || "Aucune description"}</h3>
      <p>Lieu : {latitude}, {longitude}</p>
      <button>Voir Détails</button>
    </div>
  );
};

export default SignalementItem;
