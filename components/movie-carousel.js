"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function MovieCarousel({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [movies.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
  }

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Carousel slides */}
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}` || "/placeholder.svg"} alt={movie.title} className="w-full h-full object-cover" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">{movie.description}</p>
                <div className="flex space-x-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium">
                    Watch Now
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
