import { Search, ChevronDown } from "lucide-react"
import { useState } from "react"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-full mx-auto  sm:px-2 lg:px-6 xl:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <img
              src=""
              alt="Thrillophilia"
              className="h-8 w-auto"
            />
          </div> */}
          <div>
            <h1>GlobeTrekker</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAz0lEQVRIie2WQQ6CMBREn8ZEV56EhJ0n8BQmnoOVN/EmbFh5E9QF0Z0xxg2lLWlpKdAF87c0IZ03Q0uHwtSBNbAHauAGXIEjsAJyKVgBpw7wE9gBM2uNGrgHwFdg7giPLXgxBHwHlo7vwQs+CzusEtZwE7cR4Lp9X4AlkAPzdhw8K9TaoNbGZPVhwlkbsJRwFhs89vsZBY4Jl0Ar0GpsuPQFl0ZgY8I3gVYjwDfgItBqSPgCnIW6DQFXwEmo21/gxAKcWIBjC3BiAU4G/Xn9AHqFplMv9ckhAAAAAElFTkSuQmCC"
                  alt="Indian flag"
                  className="h-4 w-4 mr-1"
                />
                <span className="text-sm font-medium">INR ₹</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      USD $
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      EUR €
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      GBP £
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            {/* <a href="/login" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Login
            </a> */}
            < NavLink  className="text-gray-700 hover:text-gray-900 text-sm font-medium" to='/login'>Login</NavLink >
          </div>
        </div>
      </div>
    </nav>
  )
}