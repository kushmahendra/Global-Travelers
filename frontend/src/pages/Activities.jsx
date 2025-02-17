import React from 'react';
import { Star, Award } from 'lucide-react';

function Activities() {
  const activities = [
    {
      id: 1,
      title: 'Museum Of The Future',
      image: 'Dubai1.jpg',
      description: 'The Museum of Future, Dubai is a new era museum themed on modern technology. As the nam',
      tags: ['Top Seller', 'Futuristic Museum', 'Innovative Design', 'Technology Hub', 'Interactive Exhibits'],
      rating: 4.7,
      reviews: '(9121)',
      duration: '1 Hour',
      originalPrice: 'INR 6,501',
      currentPrice: 'INR 3,561',
      ticketTitle: 'Museum Of The Future Tickets, Dubai',
      actionButton: 'Send Enquiry'
    },
    {
      id: 2,
      title: 'Burj Khalifa',
      image: 'Dubai2.jpg',
      description: 'Burj Khalifa, also known as the Burj Dubai is one of the largest skyscrapers in the world with a he',
      tags: ['Tallest skyscraper in the World', 'Iconic Skyscraper', 'Panoramic Views', 'Architectural Marvel', 'Sky-High Experience'],
      rating: 4.7,
      reviews: '(13421)',
      duration: '1 Hour - 2 Hours',
      originalPrice: 'INR 4,565',
      currentPrice: 'INR 3,609',
      ticketTitle: 'Burj Khalifa Tickets At The Top 124th 125th Floor',
      actionButton: 'Book Now'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Activities In Dubai</h1>
      
      <div className="space-y-8">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="h-64 w-full object-cover"
                />
              </div>
              
              <div className="p-6 md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-gray-500" />
                  <h2 className="text-2xl font-bold text-gray-900">{activity.title}</h2>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-4">{activity.description}</p>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={activity.image}
                      alt={activity.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div>
                      <div className="text-gray-500">{activity.duration}</div>
                      <div className="font-medium">{activity.ticketTitle}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-green-500">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="ml-1">{activity.rating}</span>
                      </div>
                      <span className="text-gray-500">{activity.reviews}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <span className="line-through text-gray-400 text-sm">
                          {activity.originalPrice}
                        </span>
                        <div className="font-bold text-gray-900">
                          {activity.currentPrice}
                        </div>
                      </div>
                      <button 
                        className={`px-4 py-2 rounded-lg font-medium ${
                          activity.actionButton === 'Book Now' 
                            ? 'bg-orange-500 text-white' 
                            : 'border-2 border-orange-500 text-orange-500'
                        }`}
                      >
                        {activity.actionButton}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
   <div className='my-8 text-center'>
   <button className='py-2 px-12  border rounded-lg text-orange-800 border-orange-600'>Load More Attractions</button>
   </div>
    </div>
    </>
  );
}

export default Activities;