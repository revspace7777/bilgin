import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
  Quote,
  Award,
  Calendar,
  Package,
  Home,
  Building,
  Zap,
  FileText,
  Wrench,
  ThumbsUp,
  Lock,
  Boxes,
  Heart,
  DollarSign,
  MapPinIcon,
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function MovingCompaniesInFernandinaBeach() {
  const checkZipCode = () => {
    const startingZip = document.getElementById('startingZip')?.value;
    const destinationZip = document.getElementById('destinationZip')?.value;
    const resultDiv = document.getElementById('zipResult');
    const successDiv = document.getElementById('zipSuccess');
    const errorDiv = document.getElementById('zipError');
    
    // Fernandina Beach DMA region zip codes
    const fernandina beachDMACodes = [
      // Duval County
      '32202', '32204', '32205', '32206', '32207', '32208', '32209', '32210',
      '32211', '32212', '32216', '32217', '32218', '32219', '32220', '32221',
      '32222', '32223', '32224', '32225', '32226', '32227', '32228', '32233',
      '32234', '32244', '32246', '32250', '32254', '32256', '32257', '32258',
      '32277',
      // St. Johns County
      '32080', '32081', '32082', '32084', '32086', '32092', '32095',
      // Clay County
      '32003', '32065', '32068', '32073',
      // Nassau County
      '32034', '32035', '32038', '32046', '32058', '32091',
      // Baker County
      '32026', '32025', '32011', '32009', '32030', '32033', '32034', '32035',
      '32038', '32046', '32058', '32091'
    ];
    
    if (startingZip && destinationZip) {
      if (resultDiv) resultDiv.classList.remove('hidden');
      
      // Check if starting zip is in Fernandina Beach DMA
      if (fernandina beachDMACodes.includes(startingZip)) {
        if (successDiv) successDiv.classList.remove('hidden');
        if (errorDiv) errorDiv.classList.add('hidden');
      } else {
        if (successDiv) successDiv.classList.add('hidden');
        if (errorDiv) errorDiv.classList.remove('hidden');
      }
    } else {
      alert('Please enter both zip codes.');
    }
  };

  return (
    <div className="min-h-screen bg-white relative">    <div className="min-h-screen bg-white relative">      <div className="min-h-screen bg-white relative">      <div className="min-h-screen bg-white relative">      <div className="min-h-screen bg-white relative">      <div className="min-h-screen bg-white relative">    <div className="min-h-screen bg-white relative">
      {/* Floating Quote Button */}
      <FloatingQuoteButton />

      {/* Quote Form Slideout */}
      <QuoteFormSlideout />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo-main.png" alt="T&E Movers - Fernandina Beach Movers" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Fernandina Beach Movers</h1>
              <p className="text-sm text-gray-600">Moving Companies In Fernandina Beach</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <span className="font-semibold">(904) 997-1884</span>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 quote-trigger">Get Free Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium animate-pulse">
                  🏆 #1 Rated Fernandina Beach Moving Company
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Fernandina Beach's <span className="text-red-400">Premier Local Movers</span> Since 1998
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Your trusted neighbors for seamless local moves throughout Fernandina Beach and surrounding areas, and
                  surrounding areas. We've successfully completed over 15,000 local moves with a 99.8% customer
                  satisfaction rate.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg quote-trigger">
                  Get Your Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (904) 997-1884
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">25+</div>
                  <div className="text-sm text-blue-100">Years serving Fernandina Beach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">15K+</div>
                  <div className="text-sm text-blue-100">Local Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">99.8%</div>
                  <div className="text-sm text-blue-100">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/truck-fleet.png"
                alt="T&E Movers Fernandina Beach Fleet - Professional Moving Services"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-6 w-6 text-blue-500" />
                  <div>
                    <div className="font-semibold">Based in Fernandina Beach</div>
                    <div className="text-sm text-gray-600">Serving all local areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm font-medium">BBB A+ Rated</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-2 text-green-500" />
              <p className="text-sm font-medium">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm font-medium">5-Star Reviews</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-medium">Family Owned</p>
            </div>
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 mx-auto mb-2 text-purple-500" />
              <p className="text-sm font-medium">Local Experts</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-2 text-orange-500" />
              <p className="text-sm font-medium">Same-Day Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Hero */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Local Moves Starting at Just <span className="text-red-500">$397</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Perfect for apartments, small homes, and local relocations within 50 miles of Fernandina Beach. No hidden
              fees, no fuel charges, and a price-lock guarantee!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-red-500 to-blue-600 text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">$397</div>
                    <div className="text-blue-100 text-lg">Starting Price</div>
                    <div className="text-sm text-blue-200 mt-2">Perfect for 1-2 bedroom moves</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span className="text-sm">No fuel charges</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span className="text-sm">Price-lock guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span className="text-sm">Professional wrapping included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span className="text-sm">Furniture setup included</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 w-full quote-trigger">
                      Get Exact Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-blue-200 mt-2">Free estimates • No obligations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why 15,000+ Fernandina Beach Families Choose T&E Movers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're not just another moving company. We're your Fernandina Beach neighbors who understand the local area
              like no one else. Here's what makes us different:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Fernandina Beach Experts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood, traffic pattern, and building restriction in Fernandina Beach. From Riverside
                  to Mandarin, Nocatee to St. Johns - we navigate like locals because we are locals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">No Hidden Fees Promise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  What we quote is what you pay. No fuel charges, no surprise fees, no last-minute add-ons. Our
                  transparent pricing includes everything you need for a successful move.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-xl text-center">Same-Day Service Available</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Need to move today? We offer same-day and next-day local moving services for those unexpected
                  situations. Call us and we'll make it happen.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The T&E Local Moving Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Price-Lock Guarantee</h4>
                      <p className="text-gray-600">Your quote is your final price. No surprise charges, ever.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">On-Time Arrival Promise</h4>
                      <p className="text-gray-600">We arrive when scheduled, or your move is 25% off.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Zero Damage Guarantee</h4>
                      <p className="text-gray-600">
                        We guarantee zero damage to your belongings or we fix/replace at no cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/facility-overview.png"
                  alt="T&E Movers Fernandina Beach Team - Local Moving Experts"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <!-- Local Area Expertise Section -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters in Fernandina Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving in Fernandina Beach requires more than just a truck and movers. It requires deep local knowledge that only comes from years of experience in the area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Local Fernandina Beach Moving Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team knows Fernandina Beach like the back of our hands. From traffic patterns during peak moving seasons to building restrictions and parking regulations, we navigate the local challenges that out-of-town movers simply can't anticipate.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Local Traffic</div>
                    <div className="text-sm text-gray-600">Know the best routes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Building Rules</div>
                    <div className="text-sm text-gray-600">Access restrictions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers Fernandina Beach Team - Local Moving Experts"
                width=500
                height=300
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Neighborhood Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood in Fernandina Beach, from quiet residential streets to busy commercial districts. This knowledge helps us plan the most efficient moving routes and anticipate potential challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Timing Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding Fernandina Beach's traffic patterns, school schedules, and seasonal variations helps us schedule moves at optimal times, ensuring minimal disruption to your day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Regulations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From parking permits to building access requirements, we're familiar with all the local regulations that can affect your move in Fernandina Beach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* 
      <!-- Local Area Expertise Section -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters in Fernandina Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving in Fernandina Beach requires more than just a truck and movers. It requires deep local knowledge that only comes from years of experience in the area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Local Fernandina Beach Moving Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team knows Fernandina Beach like the back of our hands. From traffic patterns during peak moving seasons to building restrictions and parking regulations, we navigate the local challenges that out-of-town movers simply can't anticipate.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Local Traffic</div>
                    <div className="text-sm text-gray-600">Know the best routes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Building Rules</div>
                    <div className="text-sm text-gray-600">Access restrictions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers Fernandina Beach Team - Local Moving Experts"
                width=500
                height=300
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Neighborhood Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood in Fernandina Beach, from quiet residential streets to busy commercial districts. This knowledge helps us plan the most efficient moving routes and anticipate potential challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Timing Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding Fernandina Beach's traffic patterns, school schedules, and seasonal variations helps us schedule moves at optimal times, ensuring minimal disruption to your day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Regulations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From parking permits to building access requirements, we're familiar with all the local regulations that can affect your move in Fernandina Beach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* 
      <!-- Local Area Expertise Section -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters in Fernandina Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving in Fernandina Beach requires more than just a truck and movers. It requires deep local knowledge that only comes from years of experience in the area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Local Fernandina Beach Moving Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team knows Fernandina Beach like the back of our hands. From traffic patterns during peak moving seasons to building restrictions and parking regulations, we navigate the local challenges that out-of-town movers simply can't anticipate.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Local Traffic</div>
                    <div className="text-sm text-gray-600">Know the best routes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Building Rules</div>
                    <div className="text-sm text-gray-600">Access restrictions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers Fernandina Beach Team - Local Moving Experts"
                width=500
                height=300
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Neighborhood Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood in Fernandina Beach, from quiet residential streets to busy commercial districts. This knowledge helps us plan the most efficient moving routes and anticipate potential challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Timing Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding Fernandina Beach's traffic patterns, school schedules, and seasonal variations helps us schedule moves at optimal times, ensuring minimal disruption to your day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Regulations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From parking permits to building access requirements, we're familiar with all the local regulations that can affect your move in Fernandina Beach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* 
      <!-- Local Area Expertise Section -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters in Fernandina Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving in Fernandina Beach requires more than just a truck and movers. It requires deep local knowledge that only comes from years of experience in the area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Local Fernandina Beach Moving Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team knows Fernandina Beach like the back of our hands. From traffic patterns during peak moving seasons to building restrictions and parking regulations, we navigate the local challenges that out-of-town movers simply can't anticipate.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Local Traffic</div>
                    <div className="text-sm text-gray-600">Know the best routes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Building Rules</div>
                    <div className="text-sm text-gray-600">Access restrictions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers Fernandina Beach Team - Local Moving Experts"
                width=500
                height=300
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Neighborhood Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood in Fernandina Beach, from quiet residential streets to busy commercial districts. This knowledge helps us plan the most efficient moving routes and anticipate potential challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Timing Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding Fernandina Beach's traffic patterns, school schedules, and seasonal variations helps us schedule moves at optimal times, ensuring minimal disruption to your day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Regulations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From parking permits to building access requirements, we're familiar with all the local regulations that can affect your move in Fernandina Beach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* 
      <!-- Local Area Expertise Section -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters in Fernandina Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving in Fernandina Beach requires more than just a truck and movers. It requires deep local knowledge that only comes from years of experience in the area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Local Fernandina Beach Moving Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team knows Fernandina Beach like the back of our hands. From traffic patterns during peak moving seasons to building restrictions and parking regulations, we navigate the local challenges that out-of-town movers simply can't anticipate.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Local Traffic</div>
                    <div className="text-sm text-gray-600">Know the best routes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Building Rules</div>
                    <div className="text-sm text-gray-600">Access restrictions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers Fernandina Beach Team - Local Moving Experts"
                width=500
                height=300
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Neighborhood Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood in Fernandina Beach, from quiet residential streets to busy commercial districts. This knowledge helps us plan the most efficient moving routes and anticipate potential challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Timing Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding Fernandina Beach's traffic patterns, school schedules, and seasonal variations helps us schedule moves at optimal times, ensuring minimal disruption to your day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Regulations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From parking permits to building access requirements, we're familiar with all the local regulations that can affect your move in Fernandina Beach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* 
      <!-- Local Area Expertise Section -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters in Fernandina Beach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving in Fernandina Beach requires more than just a truck and movers. It requires deep local knowledge that only comes from years of experience in the area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Local Fernandina Beach Moving Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team knows Fernandina Beach like the back of our hands. From traffic patterns during peak moving seasons to building restrictions and parking regulations, we navigate the local challenges that out-of-town movers simply can't anticipate.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Local Traffic</div>
                    <div className="text-sm text-gray-600">Know the best routes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Building Rules</div>
                    <div className="text-sm text-gray-600">Access restrictions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers Fernandina Beach Team - Local Moving Experts"
                width=500
                height=300
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Neighborhood Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood in Fernandina Beach, from quiet residential streets to busy commercial districts. This knowledge helps us plan the most efficient moving routes and anticipate potential challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Timing Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Understanding Fernandina Beach's traffic patterns, school schedules, and seasonal variations helps us schedule moves at optimal times, ensuring minimal disruption to your day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Regulations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  From parking permits to building access requirements, we're familiar with all the local regulations that can affect your move in Fernandina Beach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* 
      <!-- Service Areas -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Serving All of Fernandina Beach & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From Fernandina Beach to the surrounding communities, from St. Johns County to Clay County - we know every
              neighborhood and provide expert local moving services throughout Northeast Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <Card key="Fernandina Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Fernandina Beach</span>
              </div>
            </Card>
            <Card key="Fernandina Beach Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Fernandina Beach Beach</span>
              </div>
            </Card>
            <Card key="Atlantic Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Atlantic Beach</span>
              </div>
            </Card>
            <Card key="Neptune Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Neptune Beach</span>
              </div>
            </Card>
            <Card key="Ponte Vedra Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Ponte Vedra Beach</span>
              </div>
            </Card>
            <Card key="St. Augustine" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">St. Augustine</span>
              </div>
            </Card>
            <Card key="Orange Park" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Orange Park</span>
              </div>
            </Card>
            <Card key="Fleming Island" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Fleming Island</span>
              </div>
            </Card>
            <Card key="Middleburg" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Middleburg</span>
              </div>
            </Card>
            <Card key="Green Cove Springs" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Green Cove Springs</span>
              </div>
            </Card>
            <Card key="Amelia Island" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Amelia Island</span>
              </div>
            </Card>
            <Card key="Nocatee" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Nocatee</span>
              </div>
            </Card>
            <Card key="St. Johns County" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">St. Johns County</span>
              </div>
            </Card>
            <Card key="Mandarin" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Mandarin</span>
              </div>
            </Card>
            <Card key="Riverside" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Riverside</span>
              </div>
            </Card>
          </div>

          <!-- Zip Code Checker -->
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Check If We Serve Your Area</h3>
              <p className="text-gray-600 mb-6">
                Enter your starting and destination zip codes to see if we can help with your move.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Starting Zip Code</label>
                  <input 
                    type="text" 
                    id="startingZip" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 32250"
                    maxLength="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination Zip Code</label>
                  <input 
                    type="text" 
                    id="destinationZip" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                    placeholder="e.g., 32082"
                    maxLength="5"
                  />
                </div>
              </div>
              
              <Button 
                onClick={checkZipCode} 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg mb-4"
              >
                Check Service Area
              </Button>
              
              <div id="zipResult" className="hidden">
                <div id="zipSuccess" className="hidden">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      <span className="text-green-800 font-semibold">Great news! We serve your area.</span>
                    </div>
                    <p className="text-green-700 mt-2">Get your free quote today!</p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg quote-trigger">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div id="zipError" className="hidden">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Shield className="h-6 w-6 text-red-500 mr-2" />
                      <span className="text-red-800 font-semibold">We don't currently serve this area.</span>
                    </div>
                    <p className="text-red-700 mt-2">Please contact us to discuss options or check back later as we expand our service area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* Comprehensive Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Complete Local Moving Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From studio apartments to large homes, from residential to commercial - we handle every type of local move
              with the same level of care and professionalism.
            </p>
          </div>

          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="residential" className="text-sm">
                Residential
              </TabsTrigger>
              <TabsTrigger value="commercial" className="text-sm">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="specialty" className="text-sm">
                Specialty
              </TabsTrigger>
              <TabsTrigger value="additional" className="text-sm">
                Additional
              </TabsTrigger>
            </TabsList>

            <TabsContent value="residential" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Home className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Apartment Moves</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Specialized in apartment and condo moves throughout Fernandina Beach's many complexes.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• High-rise building expertise</li>
                      <li>• Elevator reservations handled</li>
                      <li>• Tight space navigation</li>
                      <li>• Student housing specialists</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Building className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>House Moves</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Full-service house moving from small starter homes to large family estates.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Complete packing services</li>
                      <li>• Furniture disassembly/assembly</li>
                      <li>• Appliance disconnection/connection</li>
                      <li>• Garage and attic cleanouts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Heart className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Senior Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Compassionate moving services for seniors transitioning to new living situations.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Patient, caring approach</li>
                      <li>• Downsizing assistance</li>
                      <li>• Assisted living transitions</li>
                      <li>• Family coordination</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Building className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Office Relocations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Minimize downtime with our efficient office moving services.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• After-hours moving available</li>
                      <li>• IT equipment specialists</li>
                      <li>• Furniture disassembly/assembly</li>
                      <li>• Minimal business disruption</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Package className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle>Retail & Restaurant</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Specialized moving for retail stores and restaurants.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Equipment moving</li>
                      <li>• Inventory handling</li>
                      <li>• Fixture installation</li>
                      <li>• Quick turnaround times</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Medical Offices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Careful handling of sensitive medical equipment and records.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• HIPAA compliance</li>
                      <li>• Medical equipment expertise</li>
                      <li>• Secure document handling</li>
                      <li>• Minimal patient disruption</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Package className="h-12 w-12 text-red-500 mb-4" />
                    <CardTitle>Piano Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Expert piano moving with specialized equipment and techniques.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All piano types</li>
                      <li>• Specialized equipment</li>
                      <li>• Stair navigation</li>
                      <li>• Climate considerations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Gun Safe Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Safe and secure moving of gun safes and heavy security equipment.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Heavy lifting equipment</li>
                      <li>• Secure handling</li>
                      <li>• Stair navigation</li>
                      <li>• Placement assistance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Boxes className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Antiques & Art</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">White-glove service for valuable antiques and artwork.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custom packing</li>
                      <li>• Climate control</li>
                      <li>• Insurance coordination</li>
                      <li>• Museum-quality care</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="additional" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Package className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Packing Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Professional packing and unpacking services.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Full-service packing</li>
                      <li>• Partial packing</li>
                      <li>• Unpacking services</li>
                      <li>• Packing supplies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Lock className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle>Storage Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Secure storage for any timeline needs.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Climate-controlled facility</li>
                      <li>• Short & long-term options</li>
                      <li>• Vehicle storage</li>
                      <li>• 24/7 security</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Wrench className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Junk Removal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Decluttering and junk removal services.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Furniture removal</li>
                      <li>• Appliance disposal</li>
                      <li>• Eco-friendly disposal</li>
                      <li>• Same-day service</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Fernandina Beach Moving Stories</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here are detailed stories from Fernandina Beach families and businesses who
              trusted us with their local moves.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 1 week ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "T&E Moving and storage help us move into our new home today. These guys are very friendly,
                  professional, and productive. They knew exactly how to navigate our narrow Fernandina Beach Beach streets
                  and got everything moved in record time. Thank you for your great service!!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AB
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ahmet Birdal</div>
                    <div className="text-sm text-gray-600">Riverside → Fernandina Beach Beach</div>
                    <div className="text-xs text-gray-500">3-Bedroom House Move</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 2 weeks ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Really nice movers and really fast and good price 10/10. They moved our entire apartment from
                  downtown Fernandina Beach to Nocatee in just 4 hours. The team was incredibly careful with our furniture
                  and even helped us set everything up in our new place."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    DB
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Demir Bilgin</div>
                    <div className="text-sm text-gray-600">Downtown Fernandina Beach → Nocatee</div>
                    <div className="text-xs text-gray-500">2-Bedroom Apartment Move</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 3 weeks ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "They were on time and professional. Thank you. They moved some light fixtures for my company from our
                  old Orange Park location to our new Fernandina Beach office. Even though it was a small job, they treated
                  us like their most important customer."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    CB
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Crystal Blackburn</div>
                    <div className="text-sm text-gray-600">Orange Park → Fernandina Beach</div>
                    <div className="text-xs text-gray-500">Commercial Move</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
              Read More Fernandina Beach Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Every Local Moving Question Answered</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We've been Fernandina Beach's local moving experts for 25 years. Here are the answers to every question you
              might have about local moving in Fernandina Beach and surrounding areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing & Scheduling</h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="pricing-1" className="bg-gray-50 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How much does a local move in Fernandina Beach cost?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Our local moves start at just $397 for small apartments and 1-2 bedroom homes. Here's our
                      transparent pricing structure:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-green-600">Studio/1-Bedroom Apartment:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Starting at $397</li>
                          <li>• Typically 2-4 hours</li>
                          <li>• Perfect for students and young professionals</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-blue-600">2-3 Bedroom Home:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• $597-$897 range</li>
                          <li>• 4-6 hours typically</li>
                          <li>• Includes furniture wrapping and setup</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-600">4+ Bedroom Home:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• $997+ depending on size</li>
                          <li>• Full-day service</li>
                          <li>• May require multiple trucks</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4 font-semibold text-gray-800">
                      Remember: No fuel charges, no hidden fees, and your quote is your final price!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-2" className="bg-gray-50 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    Do you really have no hidden fees or fuel charges?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We're proud to be one of the few Fernandina Beach moving companies with truly transparent pricing.
                      Here's what's included in every quote:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-green-600">Always Included at No Extra Cost:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Professional furniture wrapping and padding</li>
                          <li>• All moving equipment (dollies, straps, blankets)</li>
                          <li>• Fuel and transportation costs</li>
                          <li>• Basic furniture disassembly and reassembly</li>
                          <li>• Furniture placement in your new home</li>
                          <li>• Basic liability coverage</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-orange-600">Optional Services (Clearly Priced):</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Full packing services</li>
                          <li>• Additional insurance coverage</li>
                          <li>• Storage services</li>
                          <li>• Junk removal</li>
                          <li>• Cleaning services</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4 bg-green-50 p-3 rounded-lg">
                      <strong>Our Promise:</strong> The price we quote is the price you pay. If we discover additional
                      work during your move, we'll discuss it with you first and get your approval before proceeding.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-3" className="bg-gray-50 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    Can I get same-day or next-day moving service?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Yes! We understand that life doesn't always go according to plan. We offer flexible scheduling
                      including same-day and next-day service:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-blue-600">Same-Day Service:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Available for emergency situations</li>
                          <li>• Call before 10 AM for best availability</li>
                          <li>• Small premium may apply ($50-100)</li>
                          <li>• Perfect for sudden lease changes or job relocations</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-green-600">Next-Day Service:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Usually available with 24-hour notice</li>
                          <li>• No additional fees</li>
                          <li>• Full service availability</li>
                          <li>• Great for last-minute moves</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-600">Advance Booking (Recommended):</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Best rates and full availability</li>
                          <li>• Guaranteed time slots</li>
                          <li>• More time for planning and preparation</li>
                          <li>• Book 1-2 weeks ahead for peak times</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service & Logistics</h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="service-1" className="bg-gray-50 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    What areas do you serve for local moves?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We serve all of Fernandina Beach and the greater Northeast Florida region. Our local moving service
                      area includes:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-blue-600">Fernandina Beach Proper:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Downtown Fernandina Beach</li>
                          <li>• Riverside/Avondale</li>
                          <li>• Mandarin</li>
                          <li>• Westside</li>
                          <li>• Northside</li>
                          <li>• Southside</li>
                          <li>• Arlington</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-green-600">Beach Communities:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Fernandina Beach Beach</li>
                          <li>• Atlantic Beach</li>
                          <li>• Neptune Beach</li>
                          <li>• Ponte Vedra Beach</li>
                          <li>• Fernandina Beach</li>
                          <li>• Amelia Island</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-600">Surrounding Areas:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• St. Augustine</li>
                          <li>• Orange Park</li>
                          <li>• Fleming Island</li>
                          <li>• Middleburg</li>
                          <li>• Green Cove Springs</li>
                          <li>• Nocatee</li>
                          <li>• St. Johns County</li>
                          <li>• Clay County</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4 bg-blue-50 p-3 rounded-lg">
                      <strong>Not sure if we serve your area?</strong> Give us a call! We often serve areas not listed
                      here, and we're always expanding our service area.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="service-2" className="bg-gray-50 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How long does a typical local move take?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Move duration depends on several factors, but here are typical timeframes for Fernandina Beach local
                      moves:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-green-600">Studio/1-Bedroom Apartment:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• 2-4 hours total</li>
                          <li>• 1-2 hours packing/loading</li>
                          <li>• 30-60 minutes travel time</li>
                          <li>• 1-2 hours unloading/setup</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-blue-600">2-3 Bedroom House:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• 4-6 hours total</li>
                          <li>• 2-3 hours packing/loading</li>
                          <li>• 30-60 minutes travel time</li>
                          <li>• 2-3 hours unloading/setup</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-600">4+ Bedroom House:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• 6-8+ hours (full day)</li>
                          <li>• May require multiple trips</li>
                          <li>• Additional time for large items</li>
                          <li>• Complex furniture assembly</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
                      <strong>Factors that can affect timing:</strong>
                      <ul className="mt-2 space-y-1 ml-4">
                        <li>• Stairs or elevators</li>
                        <li>• Distance between locations</li>
                        <li>• Amount of packing needed</li>
                        <li>• Special items (pianos, safes, etc.)</li>
                        <li>• Weather conditions</li>
                        <li>• Parking availability</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="service-3" className="bg-gray-50 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    Do you provide packing services and supplies?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Yes! We offer comprehensive packing services and high-quality supplies. You can choose the level
                      of service that fits your needs and budget:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-blue-600">Full-Service Packing:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• We pack everything for you</li>
                          <li>• Professional packing materials included</li>
                          <li>• Fragile item specialists</li>
                          <li>• Unpacking services available</li>
                          <li>• Perfect for busy professionals</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-green-600">Partial Packing:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• We pack fragile/valuable items only</li>
                          <li>• You pack clothes and personal items</li>
                          <li>• Great middle-ground option</li>
                          <li>• Saves money while ensuring safety</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-600">Packing Supplies Only:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• High-quality boxes and materials</li>
                          <li>• Delivered to your door</li>
                          <li>• Bubble wrap, packing paper, tape</li>
                          <li>• Specialty boxes for dishes, clothes, etc.</li>
                          <li>• Most economical option</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-green-50 p-3 rounded-lg">
                      <strong>Pro Tip:</strong> Even if you pack yourself, we always professionally wrap and protect
                      your furniture at no extra charge. It's included in every move!
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Tips Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Top 10 Tips for a Stress-Free Fernandina Beach Move
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              After 25 years and 15,000+ local moves in Fernandina Beach, we've learned what makes the difference between a
              stressful move and a smooth one. Here are our top insider tips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "1",
                title: "Start Planning Early",
                description:
                  "Give yourself time to sort, organize, and plan. Start at least 2-3 weeks in advance to avoid last-minute chaos, especially during Fernandina Beach's busy summer moving season.",
                icon: <Calendar className="h-8 w-8" />,
              },
              {
                number: "2",
                title: "Hire Local Fernandina Beach Experts",
                description:
                  "Choose a licensed and insured moving company that knows Fernandina Beach inside and out. We know every neighborhood, traffic pattern, and building restriction in the area.",
                icon: <MapPinIcon className="h-8 w-8" />,
              },
              {
                number: "3",
                title: "Declutter Before You Pack",
                description:
                  "Get rid of unwanted items to reduce your load and save money. Donate, sell, or toss what you no longer need. Less stuff = lower moving costs.",
                icon: <Package className="h-8 w-8" />,
              },
              {
                number: "4",
                title: "Label Everything Clearly",
                description:
                  "Label boxes by room and contents. This makes unpacking at your new Fernandina Beach home much easier and helps our crew place items correctly.",
                icon: <FileText className="h-8 w-8" />,
              },
              {
                number: "5",
                title: "Use Quality Materials",
                description:
                  "Cheap boxes or flimsy tape can lead to damaged items. We provide professional packing services and premium materials to protect your belongings.",
                icon: <Shield className="h-8 w-8" />,
              },
              {
                number: "6",
                title: "Protect Your Valuables",
                description:
                  "Keep important documents, jewelry, and irreplaceable items with you during the move. Don't pack them in the moving truck.",
                icon: <Lock className="h-8 w-8" />,
              },
              {
                number: "7",
                title: "Schedule Utilities Early",
                description:
                  "Arrange for utilities in Fernandina Beach to be transferred or started before moving day. You don't want to arrive at a home without power or water.",
                icon: <Zap className="h-8 w-8" />,
              },
              {
                number: "8",
                title: "Pack an Essentials Kit",
                description:
                  "Pack essentials like snacks, toiletries, phone chargers, and a change of clothes in a separate box that travels with you.",
                icon: <Heart className="h-8 w-8" />,
              },
              {
                number: "9",
                title: "Communicate with Your Movers",
                description:
                  "Let your movers know about any specialty items, access issues, or time restrictions. T&E Moving communicates clearly every step of the way.",
                icon: <Phone className="h-8 w-8" />,
              },
              {
                number: "10",
                title: "Relax and Let the Pros Handle It",
                description:
                  "Our experienced Fernandina Beach movers will take care of the packing, loading, transportation, and setup—so you don't have to lift a finger.",
                icon: <ThumbsUp className="h-8 w-8" />,
              },
            ].map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {tip.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-blue-500">{tip.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-red-500 to-blue-600 text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready for a Stress-Free Fernandina Beach Move?</h3>
                <p className="text-blue-100 mb-6">
                  Let our experienced team handle everything while you focus on the excitement of your new home. Get
                  your free quote today!
                </p>
                <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 quote-trigger">
                  Get Your Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Move in Fernandina Beach?</h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join over 15,000 satisfied Fernandina Beach families who chose T&E Movers for their local relocation. Your new
              neighborhood is waiting - let's get you there safely and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-white text-red-500 hover:bg-gray-100 px-12 py-6 text-xl font-semibold quote-trigger"
              >
                Get Your $397 Quote Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-3 text-xl">
                <Phone className="h-6 w-6" />
                <span>
                  Or call <strong>(904) 997-1884</strong>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-300" />
                </div>
                <h3 className="font-semibold mb-2">Starting at $397</h3>
                <p className="text-blue-100 text-sm">No hidden fees or fuel charges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <h3 className="font-semibold mb-2">Zero Damage Guarantee</h3>
                <p className="text-blue-100 text-sm">We fix or replace anything damaged</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="font-semibold mb-2">Same-Day Service</h3>
                <p className="text-blue-100 text-sm">Emergency moves available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-purple-300" />
                </div>
                <h3 className="font-semibold mb-2">Local Experts</h3>
                <p className="text-blue-100 text-sm">25+ years serving Fernandina Beach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/images/logo-main.png" alt="T&E Movers - Fernandina Beach Movers" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">T&E Movers</h3>
                  <p className="text-sm text-gray-400">Fernandina Beach's Local Moving Experts</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Family-owned and operated since 1998, we've been Fernandina Beach's trusted local moving company for over 25
                years. We're not just your movers - we're your neighbors.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">y</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Local Moving Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Apartment Moving</li>
                <li className="hover:text-white transition-colors">House Moving</li>
                <li className="hover:text-white transition-colors">Senior Moving</li>
                <li className="hover:text-white transition-colors">Commercial Moving</li>
                <li className="hover:text-white transition-colors">Piano Moving</li>
                <li className="hover:text-white transition-colors">Packing Services</li>
                <li className="hover:text-white transition-colors">Storage Solutions</li>
                <li className="hover:text-white transition-colors">Junk Removal</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Fernandina Beach Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Downtown Fernandina Beach</li>
                <li className="hover:text-white transition-colors">Fernandina Beach Beach</li>
                <li className="hover:text-white transition-colors">Riverside/Avondale</li>
                <li className="hover:text-white transition-colors">Mandarin</li>
                <li className="hover:text-white transition-colors">Orange Park</li>
                <li className="hover:text-white transition-colors">St. Augustine</li>
                <li className="hover:text-white transition-colors">Ponte Vedra Beach</li>
                <li className="hover:text-white transition-colors">Nocatee</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="font-semibold text-white">(904) 997-1884</div>
                    <div className="text-sm">Free quotes & same-day service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-white">t-emoving@hotmail.com</div>
                    <div className="text-sm">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-white">6556 Beach Boulevard</div>
                    <div className="text-sm">Fernandina Beach, FL 32216</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-white">Mon-Sat: 8AM-5PM</div>
                    <div className="text-sm">Emergency service available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-400">
                <p>&copy; 2025 T&E Movers. All rights reserved.</p>
                <p className="text-sm mt-2">Licensed and Insured Fernandina Beach Moving Company | FL License #IM123456</p>
              </div>
              <div className="text-right">
                <div className="flex justify-end space-x-6 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
