
import FeaturedMovie from '../components/FeaturedMovie/FeaturedMovie'
import MovieCategory from '../components/MovieCategory/MovieCategory'
import { Link } from 'react-router-dom'

const Home = () => {
  const movieCategories = [
    { name: 'Trending', movies: [{ title: 'Movie 1', id: '1', image: '/https://www.movieposters.com/cdn/shop/files/scream.mpw.123570_480x.progressive.jpg?v=1709821180' }, { title: 'Movie 2', id: '2', image: 'https://www.movieposters.com/cdn/shop/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_480x.progressive.jpg?v=1707491191' }] },
    { name: 'Top Rated', movies: [{ title: 'Movie 3', id: '3', image: 'https://www.movieposters.com/products/deadpool-wolverine-mpw-142454' }, { title: 'Movie 4', id: '4', image: 'https://www.movieposters.com/products/taylor-swift-the-eras-tour-mpw-137571' }] }
  ]

  return (
    <>
      <FeaturedMovie />
      {movieCategories.map(category => (
        <MovieCategory key={category.name} category={category} />
      ))}
      {movieCategories.map(category => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          {category.movies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div>
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}

export default Home
