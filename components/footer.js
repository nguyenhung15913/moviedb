import Link from "next/link"
import { Film, Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Film className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-white">MovieFlix</span>
          </div>

          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tv-shows" className="hover:text-white transition-colors">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  New & Popular
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  My List
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Genres</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Action
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Comedy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Drama
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Horror
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sci-Fi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Corporate Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} MovieFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
