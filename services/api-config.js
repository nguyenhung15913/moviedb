// API Configuration File
// ----------------------
// This file contains all the configuration for the movie API
// Replace the placeholders with your actual API information when you get it

// API #1: Base Configuration
// Most movie APIs require a base URL and an API key
export const API_BASE_URL = "https://api.example.com" // Replace with your API's base URL
export const API_KEY = "your_api_key_here" // Replace with your API key

// API #2: Common API Parameters
// These are common parameters that might be needed for API requests
export const API_PARAMS = {
  language: "en-US",
  region: "US",
  include_adult: false,
}

// API #3: Image Configuration
// Many movie APIs provide different image sizes
export const IMAGE_BASE_URL = "https://image.example.com" // Replace with the image base URL
export const IMAGE_SIZES = {
  poster: {
    small: "w185",
    medium: "w342",
    large: "w500",
  },
  backdrop: {
    small: "w300",
    medium: "w780",
    large: "w1280",
  },
  profile: "w185",
}

// Helper function to construct full image URL
export const getImageUrl = (path, size = "medium", type = "poster") => {
  if (!path) return null
  const imageSize = type === "backdrop" ? IMAGE_SIZES.backdrop[size] : IMAGE_SIZES.poster[size]
  return `${IMAGE_BASE_URL}/${imageSize}${path}`
}

// Example: For The Movie Database (TMDB), you would use:
// export const API_BASE_URL = "https://api.themoviedb.org/3";
// export const API_KEY = "your_tmdb_api_key";
// export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
