import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DubaiTourCard({
  images,
  title,
  duration,
  rating,
  ratingCount,
  price,
  originalPrice,
  savings,
  location,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showControls, setShowControls] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="relative h-[200px] sm:h-[250px] lg:h-[300px]"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <img src={images[currentImageIndex] || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />

        {/* Image carousel controls */}
        {showControls && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}

        {/* Image dots indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-sm text-gray-600">{duration}</div>
          <div className="flex items-center">
            <span className="text-green-500">★</span>
            <span className="ml-1">{rating}</span>
            <span className="text-gray-500 text-sm ml-1">({ratingCount})</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">{title}</h3>

        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">{location}</span>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold">INR {price.toLocaleString()}</span>
            <span className="text-gray-500 line-through text-sm">INR {originalPrice.toLocaleString()}</span>
            <span className="text-green-600 text-sm">SAVE INR {savings.toLocaleString()}</span>
          </div>

          <div className="flex gap-2">
            <button className="p-2 border border-orange-500 rounded-lg">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
            <button className="flex-grow bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

