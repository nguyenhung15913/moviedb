import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TrendingMovies({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          className="bg-gray-900 border-gray-800 overflow-hidden transition-transform hover:scale-105"
        >
          <div className="relative">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}` || "/placeholder.svg"} alt={movie.title} className="w-full h-[250px] object-cover" />
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded-md flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm font-bold text-yellow-400 ">{Math.ceil(movie.vote_average  * 10) / 10}</span>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-center">{movie.title ? movie.title : movie.name}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
