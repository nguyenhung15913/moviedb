// TV Show Service
// --------------
// This file contains functions to fetch TV show data from the API

import { API_BASE_URL, API_KEY, API_PARAMS } from "./api-config"

// API #9: Fetch Popular TV Shows
// This function gets a list of popular TV shows
export async function getPopularTVShows(page = 1) {
  try {
    // Replace this with your actual API endpoint for popular TV shows
    const response = await fetch(
      `${API_BASE_URL}/tv/popular?api_key=${API_KEY}&language=${API_PARAMS.language}&page=${page}`,
    )

    if (!response.ok) {
      throw new Error("Failed to fetch popular TV shows")
    }

    const data = await response.json()
    return data.results // Most APIs return results in an array
  } catch (error) {
    console.error("Error fetching popular TV shows:", error)
    return [] // Return empty array on error
  }
}

// API #10: Fetch TV Show Details
// This function gets detailed information about a specific TV show
export async function getTVShowDetails(tvId) {
  try {
    // Replace this with your actual API endpoint for TV show details
    const response = await fetch(`${API_BASE_URL}/tv/${tvId}?api_key=${API_KEY}&language=${API_PARAMS.language}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch details for TV show ID: ${tvId}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching TV show details for ID ${tvId}:`, error)
    return null
  }
}

// API #11: Search TV Shows
// This function searches for TV shows based on a query
export async function searchTVShows(query, page = 1) {
  try {
    // Replace this with your actual API endpoint for searching TV shows
    const response = await fetch(
      `${API_BASE_URL}/search/tv?api_key=${API_KEY}&language=${API_PARAMS.language}&query=${encodeURIComponent(query)}&page=${page}&include_adult=${API_PARAMS.include_adult}`,
    )

    if (!response.ok) {
      throw new Error("Failed to search TV shows")
    }

    return await response.json()
  } catch (error) {
    console.error("Error searching TV shows:", error)
    return { results: [], total_pages: 0, total_results: 0 }
  }
}

// API #12: Get TV Shows by Genre
// This function gets TV shows filtered by a specific genre
export async function getTVShowsByGenre(genreId, page = 1) {
  try {
    // Replace this with your actual API endpoint for getting TV shows by genre
    const response = await fetch(
      `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=${API_PARAMS.language}&with_genres=${genreId}&page=${page}&include_adult=${API_PARAMS.include_adult}`,
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch TV shows for genre ID: ${genreId}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching TV shows for genre ID ${genreId}:`, error)
    return { results: [], total_pages: 0, total_results: 0 }
  }
}

// API #13: Get TV Show Genres List
// This function gets the list of all available TV show genres
export async function getTVGenres() {
  try {
    // Replace this with your actual API endpoint for getting TV show genres
    const response = await fetch(`${API_BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=${API_PARAMS.language}`)

    if (!response.ok) {
      throw new Error("Failed to fetch TV show genres")
    }

    const data = await response.json()
    return data.genres // Most APIs return genres as an array of objects with id and name
  } catch (error) {
    console.error("Error fetching TV show genres:", error)
    return [] // Return empty array on error
  }
}
