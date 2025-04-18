"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Film } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold">MovieFlix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/tv-shows" className="text-white hover:text-red-500 transition-colors">
              TV Shows
            </Link>
            <Link href="/movies" className="text-white hover:text-red-500 transition-colors">
              Movies
            </Link>
            {/* <Link href="#" className="text-white hover:text-red-500 transition-colors">
              New & Popular
            </Link> */}
            <Link href="#" className="text-white hover:text-red-500 transition-colors">
              My List
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tv-shows"
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link
              href="#"
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              href="#"
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              New & Popular
            </Link>
            <Link
              href="#"
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              My List
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
