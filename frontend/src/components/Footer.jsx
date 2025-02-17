export default function Footer() {
  const aboutLinks = [
    { text: "ABOUT US", url: "#" },
    { text: "WE ARE HIRING", url: "#" },
    { text: "THRILLOPHILIA REVIEWS", url: "#" },
    { text: "TERMS & CONDITIONS", url: "#" },
    { text: "PRIVACY POLICIES", url: "#" },
    { text: "COPYRIGHT POLICIES", url: "#" },
    { text: "SUPPORT", url: "#" },
    { text: "BEWARE OF FRAUDS", url: "#", isWarning: true },
  ]

  const destinations = [
    {
      name: "BALI",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "DUBAI",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "SINGAPORE",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "THAILAND",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "ANDAMAN",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "INDIA",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "LADAKH",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "HONGKONG",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
    {
      name: "SRILANKA",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t5-7XZ6MUbUmrGNDuiFFUewn5SKTq0TRb.png",
    },
  ]

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Thrillophilia */}
          <div>
            <h3 className="text-gray-600 font-medium mb-4">ABOUT GlobeTreker</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.url}
                    className={`text-sm ${link.isWarning ? "text-red-500" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Suppliers */}
          <div>
            <h3 className="text-gray-600 font-medium mb-4">FOR SUPPLIERS</h3>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              LIST YOUR ACTIVITIES
            </a>
          </div>

          {/* For Brands */}
          <div>
            <h3 className="text-gray-600 font-medium mb-4">FOR BRANDS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                  PARTNER WITH US
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                  DESTINATION MARKETING
                </a>
              </li>
            </ul>
          </div>

          {/* Travel Destinations */}
          <div>
            <h3 className="text-gray-600 font-medium mb-4">TRAVEL DESTINATIONS</h3>
            <div className="grid grid-cols-3 gap-2">
              {destinations.map((destination) => (
                <a key={destination.name} href="#" className="relative group overflow-hidden rounded-lg">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{destination.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="Dubai4.jpg"
              alt="Thrillophilia"
              className="h-8"
            />

            {/* Social Links */}
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                >
                  <span className="sr-only">{social}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">© 2025 GlobeTreker All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

