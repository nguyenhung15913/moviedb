"use client"



import SearchBar from "@/components/search-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export default function TVShows() {
  const api_key = '9bd62ae862007998759f7d7a5df251bf'

  const [tvShows, setTvShows] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTV = async () => {
    try {
      setLoading(true); 
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }
      const moviesData = await response.json()
      setTvShows(moviesData.results)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching movies:', error)
      setError(error.message)
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchTV()
    }, [])
 

  // TV Show genres for the search bar
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Movies</h1>
          <p className="text-lg opacity-80">Discover the best Movies from around the world</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <SearchBar genres={genres} />
      </div>

      {/* TV Shows Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Popular TV Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tvShows.map((show) => (
            <Card key={show.id} className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="relative h-[200px]">
                <img src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}` || "/placeholder.svg"} alt={show.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded-md flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-yellow-400 font-bold">{Math.ceil(show.vote_average  * 10) / 10}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{show.overview}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
