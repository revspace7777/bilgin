import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Site Map | T&E Moving',
  description: 'Navigate all T&E Moving services and pages.'
}

const pages = {
  'Base Local Moving Templates': [
    { name: 'Local Movers', path: '/local-movers', description: 'Professional local moving services' },
    { name: 'Door to Door Movers', path: '/door-to-door-movers', description: 'Complete door to door service' },
    { name: 'Local Moving Companies', path: '/moving-company', description: 'Professional moving company services' },
    { name: 'Local Moving and Storage', path: '/local-moves', description: 'Moving and storage solutions' },
    { name: 'Affordable Local Movers', path: '/local-movers-near-me', description: 'Budget-friendly moving services' },
  ],
  'Specialized Moving Services': [
    { name: 'Apartment Movers', path: '/apartment-movers', description: 'Apartment and condo moving' },
    { name: 'In Town Movers', path: '/in-town-movers', description: 'In-town moving services' },
    { name: 'Residential Movers', path: '/residential-movers', description: 'Residential moving specialists' },
    { name: 'House Movers', path: '/house-movers', description: 'House moving services' },
  ],
  'Location-Specific Pages': [
    { name: 'Jacksonville Movers', path: '/jacksonville-movers', description: 'Jacksonville moving services' },
    { name: 'Ponte Vedra Beach Movers', path: '/ponte-vedra-movers', description: 'Ponte Vedra Beach moving services' },
    { name: 'Jacksonville Beach Movers', path: '/jacksonville-beach-movers', description: 'Jacksonville Beach moving services' },
    { name: 'Orange Park Movers', path: '/orange-park-movers', description: 'Orange Park moving services' },
    { name: 'St. Augustine Movers', path: '/st-augustine-movers', description: 'St. Augustine moving services' },
    { name: 'Atlantic Beach Movers', path: '/atlantic-beach-movers', description: 'Atlantic Beach moving services' },
    { name: 'Fleming Island Movers', path: '/fleming-island-movers', description: 'Fleming Island moving services' },
    { name: 'Green Cove Springs Movers', path: '/green-cove-springs-movers', description: 'Green Cove Springs moving services' },
  ],
  'Service Categories': [
    { name: 'Long Distance Moves', path: '/long-distance-moves', description: 'Long distance moving services' },
    { name: 'Moving Help', path: '/moving-help', description: 'Moving tips and resources' },
  ]
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">T&E Moving Site Map</h1>
          <p className="text-xl text-gray-600">Navigate all our comprehensive moving services and pages</p>
        </div>

        <div className="grid gap-8">
          {Object.entries(pages).map(([category, pageList]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pageList.map((page) => (
                  <Link
                    key={page.path}
                    href={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900">{page.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{page.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{page.path}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Site Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {Object.values(pages).flat().length}
              </div>
              <div className="text-sm text-blue-700">Total Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {Object.keys(pages).length}
              </div>
              <div className="text-sm text-blue-700">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {pages['Base Local Moving Templates'].length}
              </div>
              <div className="text-sm text-blue-700">Base Templates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {pages['Location-Specific Pages'].length}
              </div>
              <div className="text-sm text-blue-700">Location Pages</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-900 mb-4">Recent Updates</h2>
          <div className="text-sm text-green-700 space-y-2">
            <p>✅ <strong>Base Templates:</strong> Created 5 comprehensive base templates for local moving services</p>
            <p>✅ <strong>Content Expansion:</strong> Added detailed content, testimonials, and FAQs to all pages</p>
            <p>✅ <strong>SEO Optimization:</strong> Updated metadata and keywords for better search visibility</p>
            <p>✅ <strong>Modular Design:</strong> Implemented consistent component structure across all pages</p>
          </div>
        </div>
      </div>
    </div>
  )
} 