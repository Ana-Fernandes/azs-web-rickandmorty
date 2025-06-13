import React from 'react';

const SearchBar = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Buscar episódio pelo nome..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: '8px 12px',
      width: '100%',
      maxWidth: '400px',
      fontSize: '16px',
      marginBottom: '20px',
      borderRadius: '8px',
      border: '1px solid #ccc'
    }}
  />
);

export default SearchBar;
