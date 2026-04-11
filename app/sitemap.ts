import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://temovingandstorage.com'
  const currentDate = new Date().toISOString()

  // All local moving service cities
  const localMovingCities = [
    'jacksonville',
    'ponte-vedra', 
    'st-augustine',
    'neptune-beach',
    'atlantic-beach',
    'jacksonville-beach',
    'st-johns',
    'duval-county',
    'nassau-county',
    'clay-county',
    'amelia-island',
    'fernandina-beach',
    'green-cove-springs',
    'middleburg',
    'fleming-island',
    'orange-park',
    'st-johns-county',
    'nocatee'
  ]

  // Florida cities for long distance moves
  const floridaCities = [
    'orlando', 'miami', 'miami-beach', 'miami-gardens', 'tampa', 'fort-lauderdale', 
    'clearwater', 'fort-myers', 'gainesville', 'daytona-beach', 'kissimmee', 
    'lakeland', 'palm-bay', 'palm-coast', 'port-orange', 'titusville', 'melbourne',
    'sarasota', 'bradenton', 'winter-haven', 'apopka', 'clermont', 'ocoee',
    'coral-springs', 'pompano-beach', 'deerfield-beach', 'boca-raton',
    'delray-beach', 'boynton-beach', 'jupiter', 'fort-pierce', 'coconut-creek',
    'davie', 'deltona', 'doral', 'hialeah', 'hollywood', 'homestead',
    'largo', 'lauderhill', 'margate', 'miramar', 'north-miami', 'north-port',
    'ocala', 'pembroke-pines', 'pensacola', 'pinellas-park', 'plantation',
    'sanford', 'st-cloud', 'tallahassee', 'tamarac', 'wellington', 'weston'
  ]

  // Georgia cities
  const georgiaCities = [
    'atlanta-ga', 'augusta-ga', 'columbus-ga', 'macon-ga', 'savannah-ga', 'athens-ga',
    'sandy-springs-ga', 'roswell-ga', 'albany-ga', 'johns-creek-ga', 'warner-robins-ga',
    'alpharetta-ga', 'marietta-ga', 'valdosta-ga', 'smyrna-ga', 'brookhaven-ga',
    'stonecrest-ga', 'south-fulton-ga', 'dunwoody-ga', 'gainesville-ga'
  ]

  // Alabama cities
  const alabamaCities = [
    'birmingham-al', 'montgomery-al', 'huntsville-al', 'mobile-al', 'tuscaloosa-al',
    'auburn-al', 'hoover-al', 'madison-al', 'decatur-al', 'dothan-al'
  ]

  // North Carolina cities
  const northCarolinaCities = [
    'charlotte', 'raleigh', 'greensboro', 'cary', 'high-point', 'greenville-nc', 'rock-hill'
  ]

  // South Carolina cities
  const southCarolinaCities = [
    'charleston', 'columbia', 'north-charleston', 'mount-pleasant'
  ]

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]

  // Local moving pages
  const localMovingPages = localMovingCities.map(city => ({
    url: `${baseUrl}/l/${city}-movers`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.64,
  }))

  // Long distance moving pages (Jacksonville to various cities)
  const longDistancePages = [
    ...floridaCities.map(city => ({
      url: `${baseUrl}/ld/jacksonville-to-${city}-movers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    })),
    ...georgiaCities.map(city => ({
      url: `${baseUrl}/ld/jacksonville-to-${city}-movers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    })),
    ...alabamaCities.map(city => ({
      url: `${baseUrl}/ld/jacksonville-to-${city}-movers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    })),
    ...northCarolinaCities.map(city => ({
      url: `${baseUrl}/ld/jacksonville-to-${city}-movers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    })),
    ...southCarolinaCities.map(city => ({
      url: `${baseUrl}/ld/jacksonville-to-${city}-movers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    }))
  ]

  return [
    ...mainPages,
    ...localMovingPages,
    ...longDistancePages,
  ]
}
