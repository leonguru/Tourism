import KilimanjaroMap from '@/components/KilimanjaroMap'
import { kilimanjaroRoutes } from '@/data/kilimanjaro-routes'

export default function HikingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-kili-green text-white py-16">
        <div className="container-width px-4">
          <h1 className="font-rubik text-4xl md:text-5xl font-bold mb-4">
            Kilimanjaro Hiking Routes
          </h1>
          <p className="text-lg max-w-3xl">
            Explore the different paths to the summit of Mount Kilimanjaro. Each route offers
            unique landscapes, challenges, and experiences. Choose the one that best suits
            your experience level and preferences.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-8">
        <div className="container-width px-4">
          <KilimanjaroMap />
        </div>
      </section>

      {/* Routes Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-width px-4">
          <h2 className="font-rubik text-3xl font-bold text-kili-green mb-8">
            Compare Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kilimanjaroRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="font-rubik text-xl font-bold text-kili-green mb-2">
                    {route.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">{route.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold block">Duration</span>
                        {route.duration}
                      </div>
                      <div>
                        <span className="font-semibold block">Difficulty</span>
                        {route.difficulty}
                      </div>
                      <div>
                        <span className="font-semibold block">Success Rate</span>
                        {route.success_rate}%
                      </div>
                      <div>
                        <span className="font-semibold block">Price Range</span>
                        ${route.price_range.min}-${route.price_range.max}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Highlights</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {route.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href={`/trips/${route.id}`}
                      className="btn-primary inline-block w-full text-center"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-kili-gold py-16">
        <div className="container-width px-4 text-center">
          <h2 className="font-rubik text-3xl font-bold text-kili-green mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us to plan your Kilimanjaro climb. Our experienced guides will help you
            choose the best route and prepare for your journey.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
} 