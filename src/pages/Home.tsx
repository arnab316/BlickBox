import React, { useEffect, } from 'react';
import FeaturedMovie from '../components/FeaturedMovie/FeaturedMovie'
import MovieCategory from '../components/MovieCategory/MovieCategory'
import { Link } from 'react-router-dom'
import { fetchMovies } from  '../utils/movieSlice';
import { RootState, AppDispatch } from '../utils/appStore'
import { useSelector, useDispatch } from 'react-redux';
interface Movie {
  title: string;
  id: string;
  image: string;
  genre: string[];
}

interface MovieCategory {
  name: string;
  movies: {
    _id: string; 
    title: string;
    image: string;
  }[];
}
const Home:React.FC = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div className='pt-20 pl-20'>{error}</div>;
  }
// Categorize movies by genre
const movieCategories = movies.reduce<Record<string, MovieCategory>>((acc, movie) => {

  const genres = Array.isArray(movie.genre) ? movie.genre : movie.genre.split(', ');
  genres.forEach((genre) => {
    if (!acc[genre]) {
      acc[genre] = { name: genre, movies: [] };
    }
    acc[genre].movies.push({
      _id: movie._id,
      title: movie.title,
      image: movie.posterUrl 
    });
  });

  return acc;
}, {} );


return (
  <>
    <FeaturedMovie />
    {Object.values(movieCategories).map((category) => (
        // Render MovieCategory component and pass category data
        <MovieCategory key={category?.name} category={category} />
      ))}
        
  
  </>
);
};

export default Home;
