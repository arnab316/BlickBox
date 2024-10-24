import { ScrollArea } from "../ui/scroll-area"
import {fallback} from '../../assets'
interface MovieCategoryProps {
  category: {
    name: string
    movies: {
      _id: string
      title: string
      image: string
    }[]
  }
}

const MovieCategory = ({ category }: MovieCategoryProps) => {
  // console.log("Movie category:", category);
  return (
  <section className="py-8">
    <h3 className="text-2xl font-semibold mb-4 px-8">{category.name}</h3>
    <ScrollArea className="whitespace-nowrap">
      <div className="flex space-x-4 pb-4 px-8">
        {category.movies.map((movie) => (
          <div key={movie._id} className="flex-none">
            <img src={`http://localhost:4002${movie.image}`} alt={movie.title} 
            className="rounded-md w-[150px] h-[200px] object-cover" 
            onError={(e)=> { e.currentTarget.src = fallback; }}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  </section>
)
}
export default MovieCategory
