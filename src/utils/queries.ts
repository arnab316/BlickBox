import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      title
      description
      genre
      posterUrl
      releaseYear
      rating
    }
  }
`;
