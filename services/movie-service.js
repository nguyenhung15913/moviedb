// Movie Service
// ------------
// This file contains functions to fetch movie data from the API

import { API_BASE_URL, API_KEY, API_PARAMS } from "./api-config"

// API #4: Fetch Trending Movies
// This function gets a list of trending movies
export async function getTrendingMovies() {
  try {
    // Replace this with your actual API endpoint for trending movies
    const response = await fetch(
      `${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=${API_PARAMS.language}`,
    )

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies")
    }

    const data = await response.json()
    return data.results // Most APIs return results in an array
  } catch (error) {
    console.error("Error fetching trending movies:", error)
    return [] // Return empty array on error
  }
}

// API #5: Fetch Movie Details
// This function gets detailed information about a specific movie
export async function getMovieDetails(movieId) {
  try {
    // Replace this with your actual API endpoint for movie details
    const response = await fetch(`${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${API_PARAMS.language}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch details for movie ID: ${movieId}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching movie details for ID ${movieId}:`, error)
    return null
  }
}

// API #6: Search Movies
// This function searches for movies based on a query
export async function searchMovies(query, page = 1) {
  try {
    // Replace this with your actual API endpoint for searching movies
    const response = await fetch(
      `${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=${API_PARAMS.language}&query=${encodeURIComponent(query)}&page=${page}&include_adult=${API_PARAMS.include_adult}`,
    )

    if (!response.ok) {
      throw new Error("Failed to search movies")
    }

    return await response.json()
  } catch (error) {
    console.error("Error searching movies:", error)
    return { results: [], total_pages: 0, total_results: 0 }
  }
}

// API #7: Get Movies by Genre
// This function gets movies filtered by a specific genre
export async function getMoviesByGenre(genreId, page = 1) {
  try {
    // Replace this with your actual API endpoint for getting movies by genre
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=${API_PARAMS.language}&with_genres=${genreId}&page=${page}&include_adult=${API_PARAMS.include_adult}`,
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch movies for genre ID: ${genreId}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching movies for genre ID ${genreId}:`, error)
    return { results: [], total_pages: 0, total_results: 0 }
  }
}

// API #8: Get Movie Genres List
// This function gets the list of all available movie genres
export async function getMovieGenres() {
  try {
    // Replace this with your actual API endpoint for getting movie genres
    const response = await fetch(`${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${API_PARAMS.language}`)

    if (!response.ok) {
      throw new Error("Failed to fetch movie genres")
    }

    const data = await response.json()
    return data.genres // Most APIs return genres as an array of objects with id and name
  } catch (error) {
    console.error("Error fetching movie genres:", error)
    return [] // Return empty array on error
  }
}
