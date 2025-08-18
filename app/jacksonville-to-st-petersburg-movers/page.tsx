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
  Truck,
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
  Plane,
  Car,
  TreePine,
  Zap,
  Target,
  FileText,
  Wrench,
  AlertTriangle,
  ThumbsUp,
  Globe,
  Lock,
  Clipboard,
  Calculator,
  Timer,
  Boxes,
  PiggyBank,
  Lightbulb,
  Heart,
  Route,
  Weight,
  Settings,
  CalendarDays,
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function JacksonvilleToStPetersburgMovers() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating Quote Button */}
      <FloatingQuoteButton />

      {/* Quote Form Slideout */}
      <QuoteFormSlideout />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo-main.png" alt="T&E Movers" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">T&E Movers</h1>
              <p className="text-sm text-gray-600">Your Jacksonville to St. Petersburg Moving Experts</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <a href="tel:9049971884" className="font-semibold mobile-lander-click-to-call">(904) 997-1884</a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 quote-trigger">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image with Filter for Dark Footer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/highwaybanner.jpg)',
            filter: 'grayscale(100%) brightness(40%) contrast(120%) saturate(0%)',
            opacity: '0.85'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" style={{backgroundColor: '#16212a', opacity: '0.5'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium opacity-0 animate-fade-in">
                  🏆 #1 Rated Jacksonville to St. Petersburg Moving Company
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Moving from Jacksonville to St. Petersburg? <span className="text-red-400">T&E Movers</span> Gets You There With Ease.
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Your seamless move from Jacksonville to St. Petersburg starts here. We have decades of experience moving families and businesses to St. Petersburg and the entire Tampa Bay area. Join thousands of families who trusted us with their most important possessions.
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
                  <a href="tel:9049971884" className="mobile-lander-click-to-call">Call (904) 997-1884</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">25+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">10K+</div>
                  <div className="text-sm text-blue-100">Successful Moves</div>
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
                alt="T&E Movers Fleet for Jacksonville to St. Petersburg moves"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold">Fully Licensed & Insured</div>
                    <div className="text-sm text-gray-600">$1M+ Coverage Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b" data-accolades-section>
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
              <Globe className="h-12 w-12 mx-auto mb-2 text-purple-500" />
              <p className="text-sm font-medium">Nationwide Service</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-2 text-orange-500" />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why 10,000+ Families Choose T&E Movers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're not just another moving company. We're your neighbors in Jacksonville, and we know the route to St. Petersburg like the back of our hand. Here's what makes us different:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-xl text-center">Family-Owned Since 1998</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Three generations of the same family have built T&E Movers on trust, integrity, and genuine care for
                  every customer. When you choose us, you're choosing family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Zero Damage Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We're so confident in our packing and handling that we guarantee zero damage to your belongings. If
                  something breaks, we fix it or replace it - no questions asked.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Same-Day Emergency Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Life happens. Job transfers, family emergencies, sudden opportunities. We offer same-day emergency
                  moving services because we understand that sometimes you can't wait.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The T&E Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Price Lock Guarantee</h4>
                      <p className="text-gray-600">Your quote is your final price. No surprise fees, ever.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">On-Time Delivery Promise</h4>
                      <p className="text-gray-600">We arrive when we say we will, or your move is 50% off.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">White Glove Treatment</h4>
                      <p className="text-gray-600">
                        Every item treated like a family heirloom, every customer like family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/facility-aerial.png"
                  alt="T&E Movers Facility"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Moving Solutions Under One Roof
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From a single box to an entire estate, from across town to across the country - we handle it all with the
              same level of care and professionalism.
            </p>
          </div>

          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="w-full mb-12 flex overflow-x-auto md:grid md:grid-cols-4">
              <TabsTrigger value="residential" className="text-sm">
                Residential
              </TabsTrigger>
              <TabsTrigger value="commercial" className="text-sm">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="specialty" className="text-sm">
                Specialty
              </TabsTrigger>
              <TabsTrigger value="storage" className="text-sm">
                Storage
              </TabsTrigger>
            </TabsList>

            <TabsContent value="residential" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Home className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Jacksonville to St. Petersburg Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Direct service from anywhere in the Jacksonville area to your new home in St. Petersburg. No transfers, no delays.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Door-to-door service</li>
                      <li>• Real-time tracking</li>
                      <li>• Guaranteed delivery dates</li>
                      <li>• Full-service packing available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Package className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Packing Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Professional packing with premium materials. We pack it like it's our own.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custom crating for valuables</li>
                      <li>• Fragile item specialists</li>
                      <li>• Unpacking services</li>
                      <li>• Eco-friendly materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Calendar className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Flexible Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Move on your timeline with options from same-day to scheduled months ahead.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Same-day emergency moves</li>
                      <li>• Weekend availability</li>
                      <li>• Holiday service</li>
                      <li>• Flexible delivery windows</li>
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
                    <CardTitle>Office Relocation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Minimize downtime with our expert office moving services. We work around your schedule.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Weekend and after-hours moves</li>
                      <li>• IT equipment specialists</li>
                      <li>• Furniture disassembly/assembly</li>
                      <li>• Project management included</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Boxes className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Industrial Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Heavy machinery, manufacturing equipment - we handle specialized industrial relocations.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Crane and rigging services</li>
                      <li>• Equipment disconnection/reconnection</li>
                      <li>• Custom crating solutions</li>
                      <li>• Certified technicians</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Clipboard className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Records Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Secure handling and transport of sensitive documents and records with full chain of custody.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Secure transport vehicles</li>
                      <li>• Document inventory tracking</li>
                      <li>• Climate-controlled storage</li>
                      <li>• HIPAA compliant handling</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Star className="h-12 w-12 text-yellow-500 mb-4" />
                    <CardTitle>Fine Art & Antiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Museum-quality handling for your most precious possessions. Climate-controlled transport.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custom climate-controlled crating</li>
                      <li>• White glove handling</li>
                      <li>• Insurance coordination</li>
                      <li>• Installation services available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <TreePine className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Piano Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Specialized piano moving with custom equipment and trained technicians.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Grand, upright, and digital pianos</li>
                      <li>• Stairway and tight space specialists</li>
                      <li>• Climate protection during transport</li>
                      <li>• Tuning referrals available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Car className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Vehicle Transport</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Safe transport for cars, motorcycles, boats, and recreational vehicles.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Enclosed and open transport</li>
                      <li>• Classic and luxury car specialists</li>
                      <li>• Door-to-door delivery</li>
                      <li>• Full insurance coverage</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Lock className="h-12 w-12 text-red-500 mb-4" />
                    <CardTitle>Secure Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Climate-controlled, secure storage facilities with 24/7 monitoring and access.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Short and long-term options</li>
                      <li>• Climate-controlled units</li>
                      <li>• 24/7 security monitoring</li>
                      <li>• Inventory management included</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Truck className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Portable Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Convenient portable storage containers delivered to your location.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Multiple size options</li>
                      <li>• Weather-resistant containers</li>
                      <li>• Flexible pickup/delivery</li>
                      <li>• Ground-level loading</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Document Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Specialized document and records storage with retrieval and digitization services.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fireproof storage facilities</li>
                      <li>• Document retrieval service</li>
                      <li>• Digitization options</li>
                      <li>• Compliance with regulations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Transparent, Fair Pricing</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              No hidden fees, no surprise costs. Get a detailed estimate that covers everything, with our price-lock guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">What's Included in Every Quote</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Crew & Equipment</h4>
                    <p className="text-gray-600">Trained movers, moving truck, dollies, straps, and blankets included.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Basic Protection Coverage</h4>
                    <p className="text-gray-600">Standard liability coverage included at no extra cost.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Loading & Unloading</h4>
                    <p className="text-gray-600">Complete loading, transport, and unloading services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Travel Time & Mileage</h4>
                    <p className="text-gray-600">All travel costs between locations included in your quote.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 quote-trigger">
                  Get Your Detailed Quote
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Factors</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Distance (Jacksonville to St. Petersburg)</span>
                  <span className="font-semibold text-gray-900">~270 miles</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Size of Home</span>
                  <span className="font-semibold text-gray-900">1-5 Bedrooms</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Packing Services</span>
                  <span className="font-semibold text-gray-900">Optional Add-on</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Storage Needed</span>
                  <span className="font-semibold text-gray-900">If Required</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Special Items</span>
                  <span className="font-semibold text-gray-900">Quoted Separately</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Timing</span>
                  <span className="font-semibold text-gray-900">Peak vs Off-Peak</span>
                </div>
              </div>

              <div className="mt-8 bg-red-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <PiggyBank className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-red-700">Price Lock Guarantee</span>
                </div>
                <p className="text-sm text-red-600">
                  Your written quote is your final price. No surprises, no hidden fees, no last-minute changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Move, Step by Step</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We make long-distance moving simple with our proven 6-step process that's been refined over 25 years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Free In-Home Estimate",
                  description: "We visit your home to provide an accurate, detailed quote. No surprises later.",
                  icon: <Calculator className="h-6 w-6" />,
                  color: "bg-red-500"
                },
                {
                  step: "2", 
                  title: "Moving Plan Creation",
                  description: "We create a custom moving timeline and coordinate all logistics for your Jacksonville to St. Petersburg move.",
                  icon: <Clipboard className="h-6 w-6" />,
                  color: "bg-orange-500"
                },
                {
                  step: "3",
                  title: "Professional Packing",
                  description: "Our expert team carefully packs your belongings using premium materials (optional service).",
                  icon: <Package className="h-6 w-6" />,
                  color: "bg-yellow-500"
                },
                {
                  step: "4",
                  title: "Loading & Transport",
                  description: "Your items are loaded with care and transported directly to St. Petersburg in our modern trucks.",
                  icon: <Truck className="h-6 w-6" />,
                  color: "bg-green-500"
                },
                {
                  step: "5",
                  title: "Delivery & Unloading",
                  description: "We deliver on time and place everything exactly where you want it in your new St. Petersburg home.",
                  icon: <Home className="h-6 w-6" />,
                  color: "bg-blue-500"
                },
                {
                  step: "6",
                  title: "Post-Move Follow-Up",
                  description: "We check in to ensure everything arrived safely and you're completely satisfied.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "bg-purple-500"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm text-gray-500 font-semibold">STEP {item.step}</span>
                      <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 quote-trigger">
              Start Your Move Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50" data-reviews-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Stories from Real Customers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here are detailed stories from families who trusted us with their most
              important possessions and biggest life transitions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
                  "Moving from our Jacksonville apartment to our first house in St. Pete was a huge milestone for us. The T&E Movers team was exceptional. They were professional, friendly, and their fixed-price quote had no surprises. It made the whole experience exciting instead of stressful. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    BW
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Brian and Ashley Williams</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → St. Petersburg, FL</div>
                    <div className="text-xs text-gray-500">Young Couple Relocation</div>
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
                  <span className="ml-2 text-sm text-gray-600">5.0 • 1 month ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "We chose T&E for our family's move from Jacksonville to St. Petersburg, and we couldn't be happier. They handled all of our kids' toys and outdoor equipment with care, and the crew was so polite. They made a big move feel simple and organized. A fantastic service."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    CF
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">The Chen Family</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → St. Petersburg, FL</div>
                    <div className="text-xs text-gray-500">Family Move</div>
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
                  "I had a last-minute job transfer to St. Petersburg from Jacksonville. T&E Movers accommodated my emergency timeline without any issues. They were incredibly efficient and had my entire life packed and moved in just a couple of days. Their team took a huge weight off my shoulders."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    LC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Linda Carter</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → St. Petersburg, FL</div>
                    <div className="text-xs text-gray-500">Job Transfer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="text-lg font-semibold text-gray-700">Become our next success story!</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get answers to common questions about moving from Jacksonville to St. Petersburg with T&E Movers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does it take to move from Jacksonville to St. Petersburg?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  The drive from Jacksonville to St. Petersburg is approximately 4-5 hours. For a typical household move, we can complete loading, transport, and unloading within 1-2 days, depending on the size of your home and specific requirements. We'll provide an exact timeline during your free estimate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How much does it cost to move from Jacksonville to St. Petersburg?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Moving costs vary based on the size of your home, services needed, and timing. A typical 2-3 bedroom home ranges from $2,200-$4,000 for full-service moving. We provide free, no-obligation estimates that include all costs upfront with our price-lock guarantee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Do you provide packing services for St. Petersburg moves?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Yes! We offer complete packing services using premium materials. Our team can pack everything from fragile items to your entire home. We also offer partial packing if you prefer to pack some items yourself. All packing services come with our damage protection guarantee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Are you licensed and insured for moves to St. Petersburg?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Absolutely. T&E Movers is fully licensed and insured for interstate moves throughout Florida. We carry comprehensive liability and cargo insurance, and can provide additional coverage options for high-value items. All our credentials are available upon request.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can you move my car along with my household goods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Yes, we offer vehicle transport services for cars, motorcycles, boats, and other vehicles. We work with trusted auto transport partners to provide both open and enclosed vehicle shipping. This can be coordinated to arrive at your new St. Petersburg home around the same time as your household goods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What if I need storage during my move to St. Petersburg?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  We offer both short-term and long-term storage solutions in climate-controlled facilities. Whether you need storage because your new home isn't ready or you're downsizing, we can store your belongings safely and deliver them when you're ready. Storage is available in both Jacksonville and Tampa Bay areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Moving Checklist */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Jacksonville to St. Petersburg Moving Checklist
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Stay organized with our comprehensive moving checklist designed specifically for Jacksonville to St. Petersburg relocations.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="8-weeks" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="8-weeks">8 Weeks Before</TabsTrigger>
                <TabsTrigger value="4-weeks">4 Weeks Before</TabsTrigger>
                <TabsTrigger value="2-weeks">2 Weeks Before</TabsTrigger>
                <TabsTrigger value="moving-day">Moving Day</TabsTrigger>
              </TabsList>

              <TabsContent value="8-weeks" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CalendarDays className="h-6 w-6 text-blue-500 mr-2" />
                      Research & Planning
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Research St. Petersburg neighborhoods and schools</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Get multiple moving quotes from licensed companies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Create a moving budget and timeline</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Start decluttering and organizing belongings</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="h-6 w-6 text-purple-500 mr-2" />
                      Documentation
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Gather important documents (birth certificates, passports, etc.)</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Request school transcripts and medical records</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Notify your employer about your relocation</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Research St. Petersburg job market if needed</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="4-weeks" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Truck className="h-6 w-6 text-orange-500 mr-2" />
                      Booking & Logistics
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Book your moving company and confirm dates</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Order packing supplies if packing yourself</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Arrange time off work for moving day</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Book hotel if overnight stay needed in St. Petersburg</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Mail className="h-6 w-6 text-red-500 mr-2" />
                      Address Changes
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Submit change of address with USPS</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Update address with banks and credit cards</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Notify insurance companies (auto, home, health)</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Update voter registration information</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="2-weeks" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                      Utilities & Services
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Schedule utility disconnection in Jacksonville</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Set up utilities at your new St. Petersburg home</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Transfer internet and cable services</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Find new healthcare providers in St. Petersburg</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Package className="h-6 w-6 text-green-500 mr-2" />
                      Packing Preparation
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Start packing non-essential items</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Label boxes clearly with room destinations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Pack a "first day" essentials box</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Confirm moving day details with T&E Movers</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="moving-day" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-blue-500 mr-2" />
                      Before Movers Arrive
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Pack a suitcase with essentials for St. Petersburg</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Do final walk-through and take photos</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Confirm arrival time with T&E Movers</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Have important documents with you</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 text-purple-500 mr-2" />
                      During the Move
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Review inventory list with crew leader</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Stay available for questions</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Keep pets safe and comfortable</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Check inventory upon delivery in St. Petersburg</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 quote-trigger">
              Get Your Free Moving Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background Image with Filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/alltrucks.png)',
            filter: 'grayscale(100%) brightness(40%) contrast(120%) saturate(0%)',
            opacity: '0.85'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" style={{backgroundColor: '#16212a', opacity: '0.5'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Make Your Move?</h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join over 10,000 satisfied customers who chose T&E Movers for their long-distance relocation. Your new
              life is waiting - let's get you there safely, efficiently, and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-white text-red-500 hover:bg-gray-100 px-12 py-6 text-xl font-semibold quote-trigger"
              >
                Get Your Free Quote in 60 Seconds
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-3 text-xl">
                <Phone className="h-6 w-6" />
                <span>
                  Or call <a href="tel:9049971884" className="mobile-lander-click-to-call"><strong>(904) 997-1884</strong></a>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-blue-100 text-sm">Fully licensed and insured for your complete protection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <h3 className="font-semibold mb-2">Price Guarantee</h3>
                <p className="text-blue-100 text-sm">No hidden fees, your quote is your final price</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="font-semibold mb-2">5-Star Service</h3>
                <p className="text-blue-100 text-sm">99.8% customer satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="font-semibold mb-2">On-Time Promise</h3>
                <p className="text-blue-100 text-sm">We arrive when promised or your move is 50% off</p>
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
                <Image src="/images/logo-main.png" alt="T&E Movers" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">T&E Movers</h3>
                  <p className="text-sm text-gray-400">Your Moving Experts Since 1998</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Three generations of the same family have built T&E Movers on trust, integrity, and genuine care for
                every customer. We're not just your movers - we're your neighbors.
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
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Jacksonville to St. Petersburg Moving</li>
                <li className="hover:text-white transition-colors">Residential Moving</li>
                <li className="hover:text-white transition-colors">Commercial Moving</li>
                <li className="hover:text-white transition-colors">Packing Services</li>
                <li className="hover:text-white transition-colors">Storage Solutions</li>
                <li className="hover:text-white transition-colors">Specialty Moving</li>
                <li className="hover:text-white transition-colors">Emergency Moving</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Jacksonville, FL</li>
                <li className="hover:text-white transition-colors">Tampa, FL</li>
                <li className="hover:text-white transition-colors">Orlando, FL</li>
                <li className="hover:text-white transition-colors">Miami, FL</li>
                <li className="hover:text-white transition-colors">Nationwide Service</li>
                <li className="hover:text-white transition-colors">Jacksonville to St. Petersburg Moves</li>
                <li className="hover:text-white transition-colors">Cross-Country Moves</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="font-semibold text-white">
                      <a href="tel:9049971884" className="mobile-lander-click-to-call text-white">(904) 997-1884</a>
                    </div>
                    <div className="text-sm">24/7 Customer Service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-white">info@tandemovers.com</div>
                    <div className="text-sm">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-white">Jacksonville, FL</div>
                    <div className="text-sm">Serving nationwide</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-white">Mon-Sun: 6AM-10PM</div>
                    <div className="text-sm">Emergency service 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-400">
                <p>&copy; 2025 T&E Movers. All rights reserved.</p>
                <p className="text-sm mt-2">
                  Licensed and Insured Moving Company | DOT License #123456 | MC License #789012
                </p>
              </div>
              <div className="text-right">
                <div className="flex justify-end space-x-6 text-sm text-gray-400">
                  <a href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Hidden form for Netlify detection */}
      <form name="quote-request" method="POST" data-netlify="true" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="typeOfMove" />
        <input type="text" name="movingFromStreet" />
        <input type="text" name="movingFromCity" />
        <input type="text" name="movingFromState" />
        <input type="text" name="movingFromZip" />
        <input type="text" name="movingFromBedrooms" />
        <input type="text" name="movingFromFloor" />
        <input type="text" name="movingToStreet" />
        <input type="text" name="movingToCity" />
        <input type="text" name="movingToState" />
        <input type="text" name="movingToZip" />
        <input type="text" name="movingToBedrooms" />
        <input type="text" name="movingToFloor" />
        <textarea name="description"></textarea>
        
        {/* Custom subject line field */}
        <input type="text" name="subject" />
        
        {/* Add all tracking fields */}
        <input type="text" name="campaignid" />
        <input type="text" name="adgroupid" />
        <input type="text" name="keyword" />
        <input type="text" name="matchtype" />
        <input type="text" name="targetid" />
        <input type="text" name="creative" />
        <input type="text" name="feeditemid" />
        <input type="text" name="device" />
        <input type="text" name="network" />
        <input type="text" name="loc_physical_ms" />
        <input type="text" name="loc_interest_ms" />
        <input type="text" name="gclid" />
        <input type="text" name="utm_source" />
        <input type="text" name="utm_medium" />
        <input type="text" name="utm_campaign" />
        <input type="text" name="utm_adgroup" />
        <input type="text" name="utm_term" />
        <input type="text" name="utm_content" />
        <input type="text" name="extensionid" />
        <input type="text" name="ip_address" />
        <input type="text" name="page_url" />
        <input type="text" name="form_url" />
        <input type="text" name="referrer" />
        <input type="text" name="user_agent" />
        <input type="text" name="timestamp" />
        <input type="text" name="date" />
        <input type="text" name="time" />
      </form>
    </div>
  )
}
