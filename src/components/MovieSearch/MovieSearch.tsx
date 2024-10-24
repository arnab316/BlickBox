import { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../../utils/searchSlice';
import { RootState} from '../../utils/appStore'
import { debounce } from 'lodash';
import {fallback} from "../../assets";
interface Movie {
  title: string
  image: string,
  posterUrl: string
}

 function MovieSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const { results, loading, error } = useSelector((state: RootState) => state.search) // Select from store
  console.log('Results in component:', results);
  console.log(results.length+ "test")
  if (Array.isArray(results)) {
    console.log('Number of results:', results.length);
  } else {
    console.log('Results is not an array:', results);
  }
  //Debounce timeout
  const debouncedSearch = useRef(
    debounce((query: string) => {
      if (query.length > 2) {
        console.log('Dispatching search for:', query); 
        dispatch(searchMovies(query));
      }
    }, 300) //the delay as needed
  ).current;
  useEffect(() => {
    // Clean up the debounce function on component unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    if (!isOpen) setIsOpen(true) 
  }

  return (
    <div className="relative" ref={searchRef}>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search movies</span>
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg overflow-hidden z-50">
          <div className="flex items-center p-2">
            <Input
              type="search"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-grow"
            />
          </div>
          {loading && <p className="p-2">Loading...</p>}
          {error && <p className="p-2 text-red-500">Error: {error}</p>}
          {results?.length > 0 ? ( // Ensure you're checking for length correctly
            <div className="max-h-96 overflow-y-auto p-2">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Search Results:</h3>
              <div className="grid grid-cols-2 gap-4">
                {results.map((movie: Movie) => (
                  <div key={movie.title} className="text-center">
            <img src={`http://localhost:4002${movie.posterUrl}`} alt={movie.title} className="rounded-md w-full h-[100px] object-cover"
            onError={(e)=>{
              e.currentTarget.src = fallback;
              e.currentTarget.onerror = null;
            }}
            />
                    <p className="mt-1 text-sm truncate text-gray-600">{movie.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="p-2">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
  
}


export default MovieSearch;