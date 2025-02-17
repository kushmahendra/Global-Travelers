import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import DubaiTourCard from "./DubaiTourCard"


export default function DubaiTour() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const tours = [
    {
      images: [
        "Dubai1.jpg",
        "Dubai4.jpg",
        "/placeholder.svg?height=300&width=400",
      ],
      title: "Dubai Highlights | Skyline And Sandscapes",
      duration: "5 days & 4 nights",
      rating: 4.9,
      ratingCount: "1.6k",
      location: "Dubai",
      price: 45000,
      originalPrice: 74002,
      savings: 29002,
    },
    {
      images: [
        "Dubai2.jpg",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      title: "Escape To Dubai | Flights Inclusive Deal",
      duration: "5 days & 4 nights",
      rating: 5.0,
      ratingCount: "1.2k",
      location: "Dubai",
      price: 68550,
      originalPrice: 124761,
      savings: 56211,
    },
    {
      images: [
        "Dubai3.jpg",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      title: "Discovering Dubai | A Journey To The Golden Emirates",
      duration: "7 days & 6 nights",
      rating: 4.9,
      ratingCount: "1.6k",
      location: "Dubai",
      price: 86000,
      originalPrice: 111836,
      savings: 25836,
    },
  ]


  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index]
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      })
    }
  }

  const nextCard = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % tours.length
      scrollToCard(next)
      return next
    })
  }

  const prevCard = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + tours.length) % tours.length
      scrollToCard(next)
      return next
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">

       <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Tours In Dubai</h2>
            <div className="flex items-center gap-4">
              <button onClick={prevCard} className="p-2 rounded-full hover:bg-gray-100" aria-label="Previous tour">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextCard} className="p-2 rounded-full hover:bg-gray-100" aria-label="Next tour">
                <ChevronRight className="w-6 h-6" />
              </button>
              <a href="#" className="text-orange-500 hover:underline">
                View All
              </a>
            </div>
          </div>
    
          <div
            ref={carouselRef}
            className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(33.333%-16px)] gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {tours.map((tour, index) => (
              <div key={index} className="snap-start">
                <DubaiTourCard {...tour} />
              </div>
            ))}
          </div>
        </div>
        <div className='my-8 text-center'>
   <button className='py-2 px-12  border rounded-lg text-orange-800 border-orange-600'>Load More Products</button>
   </div>
    </main>
  )
}

