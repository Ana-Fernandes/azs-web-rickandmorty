 import React, { useState, useEffect } from 'react';
import {
  getFavorites,
  toggleFavorite,
  getSeen,
  markAsSeen,
} from '../utils/localStorageHelpers';

import episodeImages from '../assets/episodeImages';
import '../EpisodeCard.css'; 
const EpisodeCard = ({ episode }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSeen, setIsSeen] = useState(false);
  const imageUrl = episodeImages[episode.episode] || `https://via.placeholder.com/400x200?text=${encodeURIComponent(episode.name)}`;

  useEffect(() => {
    setIsFavorite(getFavorites().includes(episode.id));
    setIsSeen(getSeen().includes(episode.id));
  }, [episode.id]);

  const handleToggleFavorite = () => {
    const updated = toggleFavorite(episode.id);
    setIsFavorite(updated.includes(episode.id));
  };

  const handleWatchEpisode = () => {
    const updated = markAsSeen(episode.id);
    setIsSeen(updated.includes(episode.id));
    alert(`🎬 Episódio visto: ${episode.name}`);
  };

  return (
    <div className="episode-card">
      <img src={imageUrl} alt={episode.name} className="episode-image" />
      <div className="episode-info">
        <p><strong>{episode.episode}</strong></p>
        <p>{episode.name}</p>
        <p>{episode.air_date}</p>
        <p>{episode.characters.length} personagem(ns)</p>

        <div className="episode-actions">
          <button className={`action-btn ${isFavorite ? 'active' : ''}`} onClick={handleToggleFavorite}>
            {isFavorite ? '💖' : '🤍'}
          </button>

          <button className="action-btn" onClick={handleWatchEpisode}>
            🎬 Assistir
          </button>

          {isSeen && <span style={{ color: '#90ee90', fontSize: '0.9rem', marginTop: '8px' }}>✔️ Marcado como visto</span>}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;

