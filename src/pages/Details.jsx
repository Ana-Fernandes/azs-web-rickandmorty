import React from 'react';
import { useParams, Link } from 'react-router-dom';
import EpisodeDetails from '../components/EpisodeDetails';

const Details = () => {
  const { id } = useParams();

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
      <Link to="/">← Voltar</Link>
      <EpisodeDetails id={id} />
    </div>
  );
};

export default Details;
