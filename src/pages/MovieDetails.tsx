import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>()

  return (
    <div>
      <h1>Movie Details Page</h1>
      <p>Movie ID: {movieId}</p>
      {/* Fetch movie details from an API using the movieId */}
    </div>
  )
}

export default MovieDetails
