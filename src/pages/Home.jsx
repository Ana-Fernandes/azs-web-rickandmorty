import React, { useState } from 'react';
import EpisodeList from '../components/EpisodeList';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>📺 Episódios Rick and Morty</h1>
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar episódio ou temporada..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />

      {/* Lista recebe o search */}
      <EpisodeList search={search} />
    </div>
  );
};

export default Home;
