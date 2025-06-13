import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        next
      }
      results {
        id
        name
        episode
        air_date
        characters {
          id
        }
      }
    }
  }
`;