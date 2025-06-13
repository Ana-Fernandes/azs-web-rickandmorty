import React, { useState, useEffect } from 'react'; 
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../graphql/queries';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({ search }) => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  const { loading, error, data, refetch, fetchMore } = useQuery(GET_EPISODES, {
    variables: { page: 1, filter: { name: '' } },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data?.episodes?.results) {
      setEpisodes(data.episodes.results);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
    refetch({ page: 1, filter: { name: search } });
  }, [search, refetch]);

  const loadMore = () => {
    if (!data?.episodes?.info?.next) return;

    fetchMore({
      variables: { page: data.episodes.info.next, filter: { name: search } },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const combinedResults = [
          ...prev.episodes.results,
          ...fetchMoreResult.episodes.results,
        ];

        setEpisodes(combinedResults);

        return {
          episodes: {
            ...fetchMoreResult.episodes,
            results: combinedResults,
          },
        };
      },
    });

    setPage(data.episodes.info.next);
  };

  if (loading && episodes.length === 0) return <p>🔄 Carregando...</p>;
  if (error) return <p>❌ Erro: {error.message}</p>;

  return (
    <div>
      <div className="episode-list">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      {data?.episodes?.info?.next && (
        <button
          onClick={loadMore}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Carregar mais
        </button>
      )}
    </div>
  );
};

export default EpisodeList;
