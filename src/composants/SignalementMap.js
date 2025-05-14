import React, { useEffect, useState } from 'react';
import SignalementItem from './SignalementItem'; // Assurez-vous d'importer SignalementItem
import './styles.css'; // Assurez-vous que le CSS est importé

const SignalementMap = () => {
  const [signalements, setSignalements] = useState([]);

  useEffect(() => {
    const fetchSignalements = async () => {
      try {
        // Mock data pour tester
        const data = [
          { id: 1, latitude: 48.8566, longitude: 2.3522, description: "Problème de route" },
          { id: 2, latitude: 48.8584, longitude: 2.2945, description: "Trou dans le trottoir" },
          { id: 3, latitude: 48.8708, longitude: 2.3784, description: "Feu de signalisation cassé" }
        ];
        setSignalements(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des signalements:', error);
      }
    };

    fetchSignalements();
  }, []);

  return (
    <div className="container">
      <header>Signalements de la Ville</header>
      
      {signalements.length === 0 ? (
        <p className="no-signalement">Aucun signalement à afficher</p>
      ) : (
        <div className="signalement-list">
          {signalements.map((signalement) => (
            <SignalementItem key={signalement.id} signalement={signalement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SignalementMap;
