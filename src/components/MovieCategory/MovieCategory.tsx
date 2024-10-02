import { ScrollArea } from "../ui/scroll-area"

interface MovieCategoryProps {
  category: {
    name: string
    movies: {
      title: string
      image: string
    }[]
  }
}

const MovieCategory = ({ category }: MovieCategoryProps) => (
  <section className="py-8">
    <h3 className="text-2xl font-semibold mb-4 px-8">{category.name}</h3>
    <ScrollArea className="whitespace-nowrap">
      <div className="flex space-x-4 pb-4 px-8">
        {category.movies.map((movie) => (
          <div key={movie.title} className="flex-none">
            <img src={movie.image} alt={movie.title} className="rounded-md w-[150px] h-[200px] object-cover" />
          </div>
        ))}
      </div>
    </ScrollArea>
  </section>
)

export default MovieCategory
