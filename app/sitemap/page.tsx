import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Home, Truck, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SitemapPage() {
  // Use current date as fallback
  const gitDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // Florida cities (based on actual pages)
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
    'atlanta', 'augusta', 'columbus', 'macon', 'savannah', 'athens',
    'sandy-springs', 'roswell', 'albany', 'johns-creek', 'warner-robins',
    'alpharetta', 'marietta', 'valdosta', 'smyrna', 'brookhaven',
    'stonecrest', 'south-fulton', 'dunwoody', 'gainesville'
  ]

  // Alabama cities
  const alabamaCities = [
    'birmingham', 'montgomery', 'huntsville', 'mobile', 'tuscaloosa',
    'auburn', 'hoover', 'madison', 'decatur', 'dothan'
  ]

  // North Carolina cities
  const northCarolinaCities = [
    'charlotte', 'raleigh', 'greensboro', 'cary', 'high-point',
    'greenville', 'rock-hill'
  ]

  // South Carolina cities
  const southCarolinaCities = [
    'charleston', 'columbia', 'north-charleston', 'mount-pleasant'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sitemap of T&E Movers
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Complete directory of our moving services and locations
          </p>
          <p className="text-sm text-gray-500">
            Last updated: {gitDate}
          </p>
        </div>

        {/* Main Pages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <Home className="h-8 w-8 text-blue-600" />
              <span>**Main Pages**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/" className="block" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Home Page
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Local Moving Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <MapPin className="h-8 w-8 text-green-600" />
              <span>**Local Moving Services**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/l/jacksonville-movers" className="block" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Jacksonville Local Movers
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Long Distance Moving Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <Truck className="h-8 w-8 text-red-600" />
              <span>**Long Distance Moving Services**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/ld/jacksonville-interstate-movers" className="block" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start">
                  <Truck className="mr-2 h-4 w-4" />
                  Interstate Moving
                </Button>
              </Link>
              <Link href="/ld/jacksonville-cross-country-movers" className="block" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="mr-2 h-4 w-4" />
                  Cross-Country Moving
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Jacksonville to Florida Cities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <MapPin className="h-8 w-8 text-orange-600" />
              <span>**Jacksonville to Florida Cities**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {floridaCities.map((city) => (
                <Link key={city} href={`/ld/jacksonville-to-${city}-movers`} className="block" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Jacksonville to {city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ')}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Jacksonville to Georgia Cities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <MapPin className="h-8 w-8 text-purple-600" />
              <span>**Jacksonville to Georgia Cities**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {georgiaCities.map((city) => (
                <Link key={city} href={`/ld/jacksonville-to-${city}-movers`} className="block" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Jacksonville to {city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ')}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Jacksonville to Alabama Cities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <span>**Jacksonville to Alabama Cities**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {alabamaCities.map((city) => (
                <Link key={city} href={`/ld/jacksonville-to-${city}-movers`} className="block" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Jacksonville to {city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ')}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Jacksonville to North Carolina Cities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <MapPin className="h-8 w-8 text-teal-600" />
              <span>**Jacksonville to North Carolina Cities**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {northCarolinaCities.map((city) => (
                <Link key={city} href={`/ld/jacksonville-to-${city}-movers`} className="block" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Jacksonville to {city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ')}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Jacksonville to South Carolina Cities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <MapPin className="h-8 w-8 text-cyan-600" />
              <span>**Jacksonville to South Carolina Cities**</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {southCarolinaCities.map((city) => (
                <Link key={city} href={`/ld/jacksonville-to-${city}-movers`} className="block" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Jacksonville to {city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ')}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help finding the right moving service?
          </p>
          <Link href="/">
            <Button className="bg-red-500 hover:bg-red-600">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
