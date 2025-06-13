// src/utils/localStorageHelpers.js

const FAVORITES_KEY = 'favoriteEpisodes';
const SEEN_KEY = 'seenEpisodes';

// Favoritos
export const getFavorites = () =>
  JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');

export const toggleFavorite = (episodeId) => {
  const favorites = getFavorites();
  const updated = favorites.includes(episodeId)
    ? favorites.filter(id => id !== episodeId)
    : [...favorites, episodeId];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
};

// Vistos
export const getSeen = () =>
  JSON.parse(localStorage.getItem(SEEN_KEY) || '[]');

export const markAsSeen = (episodeId) => {
  const seen = getSeen();
  if (!seen.includes(episodeId)) {
    const updated = [...seen, episodeId];
    localStorage.setItem(SEEN_KEY, JSON.stringify(updated));
    return updated;
  }
  return seen;
};

export const unmarkSeen = (episodeId) => {
  const seen = getSeen();
  const updated = seen.filter(id => id !== episodeId);
  localStorage.setItem(SEEN_KEY, JSON.stringify(updated));
  return updated;
};
