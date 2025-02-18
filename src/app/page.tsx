import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-kili-green sm:text-5xl md:text-6xl">
            Welcome to Kilimanjaro Adventures
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Explore the majestic Mount Kilimanjaro with our expert guides.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-6 py-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-kili-green">Coming Soon</h2>
                <p className="mt-4 text-lg text-gray-600">
                  We're working on bringing you an amazing experience to plan your
                  Kilimanjaro adventure. Stay tuned!
                </p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <div className="text-sm text-center">
                <a
                  href="mailto:info@kilimanjaro-adventures.com"
                  className="font-medium text-kili-green hover:text-kili-gold transition-colors"
                >
                  Contact us for early access →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Expert Guides',
                description: 'Experienced local guides with extensive knowledge of Kilimanjaro.'
              },
              {
                title: 'Multiple Routes',
                description: 'Choose from various routes to suit your experience level.'
              },
              {
                title: 'Safe Adventures',
                description: 'Safety-first approach with modern equipment and procedures.'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white overflow-hidden shadow rounded-lg px-6 py-8"
              >
                <h3 className="text-lg font-medium text-kili-green">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 