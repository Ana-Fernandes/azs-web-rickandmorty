import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODE_DETAILS } from '../graphql/queries';
import { EpisodeContext } from '../context/EpisodeContext';

const EpisodeDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id },
  });

  const { favorites, toggleFavorite, watched, toggleWatched } = useContext(EpisodeContext);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  const episode = data.episode;

  return (
    <div>
      <h2>{episode.episode} - {episode.name}</h2>
      <p><strong>Data:</strong> {episode.air_date}</p>
      <button onClick={() => toggleFavorite(episode.id)} style={{ marginRight: '0.5rem' }}>
        {favorites.includes(episode.id) ? 'Desfavoritar' : 'Favoritar'}
      </button>
      <button onClick={() => toggleWatched(episode.id)}>
        {watched.includes(episode.id) ? 'Marcar como não visto' : 'Marcar como visto'}
      </button>

      <h3>Personagens:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {episode.characters.map(char => (
          <div key={char.id} style={{ border: '1px solid #ccc', padding: '0.5rem', width: '150px', borderRadius: '4px' }}>
            <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h4>{char.name}</h4>
            <p><strong>Espécie:</strong> {char.species}</p>
            <p><strong>Status:</strong> {char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetails;