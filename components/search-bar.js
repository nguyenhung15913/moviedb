"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBar({ genres }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm, "in genre:", selectedGenre)
    // Here you would typically handle the search functionality
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for movies or TV shows..."
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="md:w-48">
          <select
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium">
          Search
        </button>
      </form>
    </div>
  )
}
