'use client';

import MovieCarousel from "@/components/movie-carousel"
import SearchBar from "@/components/search-bar"
import TrendingMovies from "@/components/trending-movies"
import { useState, useEffect } from "react";

export default function Home() {

  const [movies, setMovies] = useState([])
  const [trendMovies, setTrendMovies] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api_key = '9bd62ae862007998759f7d7a5df251bf'

  const fetchMovies = async () => {
    try {
      setLoading(true); 
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }
      const moviesData = await response.json()
      setMovies(moviesData.results)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching movies:', error)
      setError(error.message)
      setLoading(false)
    }
  };

  const fetchTrendMovies = async () => {
    try {
      setLoading(true); 
      const response = await fetch(
       `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }
      const moviesData = await response.json()
      setTrendMovies(moviesData.results)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching movies:', error)
      setError(error.message)
      setLoading(false)
    }
  };



  useEffect(() => {
    fetchMovies()
    fetchTrendMovies()
  }, [])


  // Movie genres for the search bar
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

      {loading && <div className="container mx-auto px-4 py-8">Loading...</div>}
      {error && (
        <div className="container mx-auto px-4 py-8 text-red-500">
          Error: {error}
        </div>
      )}
      {/* Movie Carousel */}
      {!loading && !error && <MovieCarousel movies={movies || []} />}
     

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <SearchBar genres={genres} />
      </div>

      {/* Trending Movies */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>
        {!loading && !error && <TrendingMovies movies={trendMovies || []} />}
         
      </div>
    </main>
  )
}
