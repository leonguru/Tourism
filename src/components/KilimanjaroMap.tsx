import { kilimanjaroRoutes } from '@/data/kilimanjaro-routes'

export default function KilimanjaroMap() {
  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-kili-green/90 flex flex-col items-center justify-center text-white p-8">
        <h3 className="font-rubik text-3xl font-bold mb-4">
          Interactive Map Coming Soon
        </h3>
        <p className="text-center max-w-2xl mb-8">
          We're working on an interactive map feature that will show you detailed routes,
          camps, and waypoints for your Kilimanjaro adventure. Stay tuned!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {kilimanjaroRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
            >
              <h4 className="font-rubik font-bold text-xl mb-2">{route.name}</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Duration:</span> {route.duration}</p>
                <p><span className="font-semibold">Difficulty:</span> {route.difficulty}</p>
                <p><span className="font-semibold">Success Rate:</span> {route.success_rate}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 