import { Play, Info } from 'lucide-react'
import { Button } from "../ui/button"
import {featureImage} from '../../assets'
const featuredMovieData = {
    title: 'The Grand Adventure',
    description: 'A thrilling journey of discovery and excitement.',
    image: featureImage
  }
const FeaturedMovie = () => (
  <section className="relative h-[70vh] flex items-center">
    {/* Use the featured movie image from dummy data */}
    <img src={featuredMovieData.image} alt={featuredMovieData.title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 p-8 max-w-2xl">
         {/* Use the featured movie title from dummy data */}
      <h2 className="text-5xl font-bold mb-4">{featuredMovieData.title}</h2>
      {/* Use the featured movie description from dummy data */}
      <p className="text-lg mb-6">{featuredMovieData.description}</p>
      <div className="flex space-x-4">
        <Button><Play className="mr-2 h-4 w-4" /> Play</Button>
        <Button variant="outline"><Info className="mr-2 h-4 w-4" /> More Info</Button>
      </div>
    </div>
  </section>
)

export default FeaturedMovie
